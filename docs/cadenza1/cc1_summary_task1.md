---
id: cc1_summary_task1
title: Summary Task 1
sidebar_label: Summary Task 1
sidebar_position: 2
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

::::::tip Participate
If you have a pretrained music source separation trained only using the allowed datasets, you can easily enter our challenge.

We invite you to make a copy of the baseline, adapt the enhancement script to use your separation model and
run the whole system to obtain HAAQI scores. You might need to amplify your separated signals to match the amplification of the reference done by HAAQI.

Then, you can explore ways to improve the remix stage to generate better and personalised signals for listeners.

:::danger Remember
After the objective evaluation we will run subjective evaluation using a listeners panel of 50 listeners.
We will share the results of your system with you so you can use them in a paper.
:::
::::::

## 1. Description of the Problem

A person with a hearing loss is listening to music via headphones. They're not using their hearing aids. 

The machine learning task is to decompose a stereo song into a VDBO (vocal, drums, bass and other) representation.
This then allows a personalised remixing for the listener that has better audio quality. 
For example, for some music you might amplify the vocals to improve the audibility of the lyrics.

As shown in Figure [[1](#fig1)], the system is split into two stages; the _enhancement_ and _evaluation_.

<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple_v3.png')} />
<figcaption>Figure 1, The baseline for the headphone listening scenario. For simplicity, not all signal paths are shown.</figcaption>
</figure>


### 1.1 Enhancement Stage
:::info
You can adapt and modify the baseline **enhancement** script or make your own script.
:::

Your task is to decompose a stereo music signal and produce 8 mono signals or stems corresponding to the 
right and left `vocal`, `drums`, `bass` and `other` (VDBO), and produce one stereo signal corresponding to a 
remix signal optimised for a target listener. 
For this, you will have access to relevant datasets that will allow you to explore different approaches to separate the music and/or to remix the signals.  

#### 1.1.1 Dataset

In the enhancement stage, you have access to:

1. Full length songs from MUSDB18-HQ dataset.
2. Music data for augmentation, if needed. 
3. Listeners characteristics (audiograms). [Listener Data](Data/cc1_data_listener)

Please refer to [task 1 data page](Data/cc1_data_overview) and 
the [baseline readme](https://github.com/claritychallenge/clarity/tree/main/recipes/cad1/task1/baseline) for details.

To download the datasets, please visit [download data and software](Take%20part/cc1_download#21-task-1---headphones).

#### 1.1.2 Output

The output of this stage are:

1. Eight stems corresponding to the left and right vocal, bass, drums and other stems.
    - Sample rate = 24000 Hz
    - Precision: 16bit integer
    - Compressed using FLAC
2. One stereo remixed signal
    - Sample rate = 32000 Hz
    - Precision: 16bit integer
    - Compressed using FLAC

For more details about the format of the submission, please refer to the [submission](Take%20part/cc1_submission) webpage.

:::caution Note
The responsibility for the final remixed signal level is yours. 
It’s worth bearing in mind that should your signals overall seem too loud to be comfortable to a participant, 
they may well turn down the volume themselves. Also, there may be clipping in the evaluation block in some tasks
if the processed signals are too large.
:::

### 1.2 Evaluation Stage

:::danger Warning
You are not allowed to change the **evaluation** script provided in the baseline.
Your output signals with be scored using this script.
:::

The evaluation stage is a common stage for all submissions.
As shown in Figure [[1](#fig1)], the evaluation takes the reference stem signals, i.e., the eight reference stems,
and the eight processed stems and computes the eight HAAQI scores.

To learn more about HAAQI, please refer to our [Learning Resources](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech)
and to our Python [HAAQI implementation](https://github.com/claritychallenge/clarity/blob/cad1task1-baseline2/clarity/evaluator/haaqi/haaqi.py). 

The output of the evaluation stage is a CSV file with all the HAAQI scores. 

## 2. Software

All the necessary software to run the recipes and make your own submission is available on our [Clarity-Cadenza 
GitHub repository](https://github.com/claritychallenge/clarity).

The official code for the first challenge was released in version `v0.3.2`. 
To avoid any conflict, we highly recommend for you to work using version v0.3.2 and 
not with the code from the `main` branch. To install this version:

1. Download the files of the release v0.3.2 from:
https://github.com/claritychallenge/clarity/releases/tag/v0.3.2

2. Clone the repository and checkout version v0.3.2

```bash
git clone https://github.com/claritychallenge/clarity.git
git checkout tags/v0.3.2
```

3. Install pyclarity from PyPI as:

```bash
pip install pyclarity==0.3.2
```

## 3. Baselines

In the [Clarity/Cadenza GitHub repository](https://github.com/claritychallenge/clarity), we provide two baselines.
Both baseline systems work in a similar way. Using a music source separation model, the systems
decompose the music into the target eight stems. Both models were trained exclusively on MUSDB18-HQ training set and no
extra data was used for augmentation.

1. `Demucs`: This baseline system uses the `Hybrid Demucs` model. This is a time-domain-based model.
2. `Open-UnMix`: This baseline system uses the `umxhq` model from Open-UnMix. This is a spectrogram-based model.

Please, visit the [baseline on the GitHub webpage](https://github.com/claritychallenge/clarity/tree/cad1task1-baseline2/recipes/cad1/task1/baseline)
and [Baseline](Software/cc1_baseline#1-task-1-headphones) links to read more about the baselines and learn how to run them.

## 4. Leaderboard

:::tip Participate in our Leaderboard
If you have scores using the validation set, send us the `score.csv` file, and we will include you.
:::

The score used for the ranking is the average over all examples.

| Ranking | Team                     | Average score | 
|:-------:|:-------------------------|:-------------:|
|    1    | Baseline Demucs          |    0.2592     |
|    2    | Baseline OpenUnMix       |    0.2273     |
