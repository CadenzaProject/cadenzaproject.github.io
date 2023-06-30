---
id: cc1_evaluation
title: Evaluation 
sidebar_label: Evaluation
sidebar_position: 4
---
:::info
If you haven't received your **TEAM ID** and you already registered, please contact the team [here](https://groups.google.com/u/1/g/cadenza-challenge).
If you still don't register your team, please go [here](Take%20Part/cc1_registration).

Please, to run the evaluation, first ensure you updated your code to pyclarity version 0.3.4
and downloaded the data for,
* task 1 [download here](https://forms.gle/UQkuCxqQVxZtGggPA)  
* task 2 [download here](https://forms.gle/2Y7KLZY23i7bH3Lo9)

:::

## 1. Task 1 - Headphone

The evaluation package contains all audio tracks and metadata files necessary for run the evaluation.

* `cadenza_cad1_task1_evaluation.v1_0.tar.gz` **[1.9 GB]** - audio and metadata evaluation data.

For processing the test data, run:
```bash
python3 test.py path.root=/path/to/cadenza_data/dir \
        path.exp=/path/to/experiment/ \
        team_id=<Your_Team_ID>
```

The script will produce a file we request you to submit called `submission_<Your_Team_ID>.zip` **[4 GB]**.

### 1.1 Evaluation Music Dataset

The evaluation stage uses 49 from the 50 track in the evaluation set from the MUSDB18-HQ dataset.
The track `Punkdisco - Oral Hygiene` was filtered out from the evaluation because it content can be offensive
to members of the listener panel.

To keep the entrants' submission size in manageable ranges, the objective evaluation (HAAQI) will be performed only 
using 30-second segments per song-listener. Therefore, we will only require for entrants to submit the 
30-second segment from the eight VDBO. These segments were selected randomly, ensuring that all stems were active 
at some point in the segment. This because HAAQI cannot be computed over an empty signal.
In the case of an instrument was not active in the segment, we rerun the process until find a suitable segment.

In the subjective evaluation (listener panel), listeners will be presented with segments of 15-second of duration.
Therefore, for the remixed signal, we just require for entrants to submit the pre-defined segments.
These segments were selected randomly. However, as some of the song contain searing words, we ensure that the
no swearing words were present in the segment by checking the lyrics. In the case of a swearing word was found in the 
segment, we rerun the process and select a new segment.

The start and en point of the segments for objective and subjective evaluation were selected separately. Therefore,
there is no dependency between them. Also, the start and end point of the segments are fixed and are the same for all entrants.

### 1.2 Segments Metadata

The start and end point of the segments for objective and subjective evaluation are contained in the 
`metadata/musdb18.segments.test.json` file.

For example, below is showing the start and end point for the segments from the song `AM Contra - Heart Peripheral`.
The `objective_evaluation` item is showing the start and end point for the 30-second segment for objective evaluation (HAAQI).
And, `subjective_evaluation` item is showing the start and end point for the 15-second segment for subjective evaluation (listener panel).
```json
{
  "AM Contra - Heart Peripheral": {
    "subjective_evaluation": {
      "start": 51.77,
      "end": 66.77,
      "duration": 15.0
    },
    "objective_evaluation": {
      "start": 129.64,
      "end": 159.64,
      "duration": 30.0
    }
  },
  ...
}
```

### 1.3 Test Script

Together with the dataset, we released the `PyCLarity` version `0.3.4`.
This version includes small changes in the recipes that allow to process the signal and generates
the entrant's submission package.

1. we added four new parameters in the `config.yaml`:

* `music_test_file`: path to the file with the list of test tracks
* `music_segments_test_file`: path to the file with the details of the start and end point for each segment
* `path.listeners_test_file`: path to the test listeners audiograms
* `team_id`: this is the ID of your team.  

```yaml
path: 
   music_test_file: ${path.metadata_dir}/musdb18.test.json
   music_segments_test_file: ${path.metadata_dir}/musdb18.segments.test.json
   listeners_test_file: ${path.metadata_dir}/listeners.test.json

team_id: ???
```

2. We included the file `test.py` that process the signal using the `test` songs and `test` audiograms. And, generates the 
segments from the processed signals.
After the processing, this script archives the files in a `ZIP` file with the name `submission_<TEAM_ID>.zip`. This is the file
you need to submit.


## 2. Task 2 - Car

The evaluation package contains all audio tracks and metadata files necessary for run the evaluation.

* `cadenza_cad1_task2_evaluation.v1_0.tar.gz` **[375 MB]** - audio and metadata evaluation data.

For processing the test data, run:

```bash
python3 test.py path.root=/path/to/cadenza_data/dir \
        path.exp=/path/to/experiment/ 
        path.scenes_file=/path/to/scenes.test.json \
        path.scenes_listeners_file=/path/to/scenes_listeners.test.json \
        evaluate.split=test \
        team_id=<Your_Team_ID>
```

The script will produce a file we request you to submit called `submission_<Your_Team_ID>.zip` **[4 GB]**.

### 2.1 Evaluation Music Dataset

Like the training and validation sets, the evaluation set is based on the small split of the FMA dataset and the MTG Jamendo dataset.
The tracks were selected following the same procedure as the training and validation sets (see [here](Data/cc1_data_overview_car#11-music-data)).
However, to keep the entrants' submission in manageable sizes, we reduced the test set to 10 tracks per genre. 

### 2.2 Test Script

Together with the dataset, we released the `PyCLarity` version `0.3.4`.
This version includes small changes in the recipes that allow to process the signal and generates
the entrant's submission package.

1. First, we added two new parameters in the `config.yaml`:

* `path.listeners_test_file`: path to the test listeners audiograms.
* `team_id`: this is the ID of your team.  

```yaml
path:
  listeners_test_file: ${path.metadata_dir}/listeners.test.json

team_id: ???
```

2. The function `load_listeners_and_scenes` in the file `baseline_utils.py` was modified to take into account the 
test set files.
```python
...
    elif config.evaluate.split == "test":
        with open(config.path.listeners_test_file, encoding="utf-8") as fp:
            listener_audiograms = json.load(fp)
        scenes = df_scenes[df_scenes["split"] == "test"].to_dict("index")
...
```

3. We included the file `test.py` that process the signal using the `test` songs and `test` audiograms.
After the processing, this script archives the files in a `ZIP` file with the name `submission_<TEAM_ID>.zip`. This is the file
you need to submit.

