---
id: lyric_data
title: "Lyric Intelligibility Data"
sidebar_label: Data
sidebar_position: 2.3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

- To obtain the data and baseline code, please see the [download page](../Take%20Part/download).
- For instructions on what data and pretrained models can be used in the challenges, please see [rules](../Take%20Part/rules).

## A. Training, validation and evaluation data

The training and validation data are provided at challenge launch. The evaluation data is provided closer to the submission deadline.

### A.1 Training and validation data

The dataset uses the transcription extension [[1]](#refs) of the training split of MUSDB18-HQ [[2]](#refs). This extension comprises 96 manual transcriptions of English songs by
non-native English speakers, totalling 366 minutes of audio.

We permit the use of the following additional datasets in training: [FMA](https://github.com/mdeff/fma), [MedleydB version 1 and version 2](https://medleydb.weebly.com/), and [MousesDB](https://music.ai/blog/news/introducing-moisesdb-the-ultimate-multitrack-dataset-for-source-separation-beyond-4-stems/). We also permit the use of pre-trained models that might have been developed using these databases.

You should not use pre-trained models that were trained on our evaluation data.

### A.2 Evaluation (test) set

The evaluation dataset combines the English subset of the JamendoLyrics dataset (20 songs) [[3]](#refs) with the 46 transcribed songs from the evaluation split of the
MUSDB18-HQ dataset. We will tell you what part of the songs are required, the required value of $\alpha$ and the audiograms of the listeners.

:::danger

The evaluation set should not be used for refining the system.

:::

## B. Metadata Information

### B.1 Listener characteristics

We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised. This is common for both tasks, so please see [Listener Metadata](../data_listener) for more details.
```json
{
  "L0001": {
    "name": "L0001",
    "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
    "audiogram_levels_l": [45, 45, 35, 45, 60, 65, 70, 65],
    "audiogram_levels_r": [40, 40, 45, 45, 60, 65, 80, 80]
  },
  "L0002": {
    "name": "L0002",
    ...
  }
```

### B.2 Alpha

This gives the balanced between intelligibility and quality. It will range from 0 to 1 in 0.1 steps.

```json
{
  "alpha_0": 0.0,
  "alpha_1": 0.1,
  ...
}
```

### B.3 Music

This provides the information of the audio segments with its transcriptions.

```json
{
  "A_Classic_Education_-_NightOwl_1": {
    "track_name": "A Classic Education - NightOwl",
    "path": "musdb18_hq/train/audios/A Classic Education - NightOwl",
    "segment_id": 1,
    "start_time": 0,
    "end_time": 8.2,
    "confidence": "a",
    "text": "i think you're right i do"
  },
  "A_Classic_Education_-_NightOwl_2": {
    ...

```

### B.4. Scenes

This files provide the combination of segment ids and alpha to use for that segment.
This is a randomly generated combinations.

```json
{
  "S10001": {
    "segment_id": "A_Classic_Education_-_NightOwl_1",
    "alpha": "alpha_10"
  },
  "S10002": {
    "segment_id": "A_Classic_Education_-_NightOwl_2",
    "alpha": "alpha_5"
  },
  "S10003": {
    ...
```

### B.5 Scene-Listeners

This provides the list of listeners for each scene.

```json
{
  "S10001": ["L0067", "L0044"],
  "S10002": ["L0073", "L0054"],
  ...

```


## References
<a name="refs"></a>

**[1]** Schulze-Forster, K., Doire, C.S., Richard, G. and Badeau, R., 2021. Phoneme level lyrics alignment and text-informed singing voice separation. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 29, pp.2382-2395.     
**[2]** Rafii, Z., Liutkus, A., Stöter, F.-R., Mimilakis, S. I., and Bittner, R. (2019). MUSDB18-HQ - an Uncompressed Version of MUSDB18. [Dataset]. doi:10.5281/zenodo.3338373  
**[3]** Durand, S., Stoller, D. and Ewert, S., 2023, June. Contrastive learning-based audio to lyrics alignment for multiple languages. In ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) (pp. 1-5). IEEE.