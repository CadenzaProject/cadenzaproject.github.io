---
id: intro
title: The ICASSP 2024 Cadenza Grand Challenge
sidebar_label: ICASSP 2024 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

# Overview
Someone with a hearing loss is listening to music via their hearing aids or headphones. The challenge is to develop a signal processing system that allows a personalised rebalancing of the music to improve the listening experience, for example by amplifying the vocals relative to the sound of the band. One approach to this would be to a demix the music and then apply gains to the separated tracks to change the balance of the remixed music.

## Why this challenge?
There is a global challenge of an ageing population, which will contribute to 1 in 10 people having disabling hearing loss by 2050. Hearing loss causes problems when listening to music. It can make picking out lyrics more difficult, with music becoming duller as high frequencies disappear. This reduces the enjoyment of music and can lead to disengagement from listening and music-making, reducing the health and well-being effects people otherwise get from music. We want to get more of the ICASSP community to consider diverse hearing and so allow those with a hearing loss to benefit from the latest signal processing advances.

## The Task 
As Figure 1 shows, the baseline first demixes stereo tracks into a VDBO (vocal, drums, bass and other) representation. This then allows a personalised remixing for the listener by changing the level of the different elements of the music. We provide the desired gains for the remixing. The "NAL-R" amplification is a standard way of compensating for the hearing loss of listeners. To evaluate the quality of the remixing, we will use the objective metric 
[HAAQI (Hearing aid audio quality index)](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech#haaqi-hearing-aid-audio-quality-index).

<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple_v3.png')} />
<figcaption>Figure 1, The baseline system.</figcaption>
</figure>

The block that can be changed by you is labelled *Enhancement* in Figure 1. While the baseline frames the problem as demixing/remixing, alternative approaches are very welcome. We are interested in systems that are either: (i) causal and low latency for live music, and (ii) non-causal for recorded music.

## Data

In the enhancement stage, you have access to:

1. Full length songs from MUSDB18-HQ dataset.
2. Music data for augmentation, if needed. 
3. Listeners characteristics (audiograms). [Listener Data](data/data_listener)
4. Target gains for the VDBO stems used to mix the target stereo

Please refer to [data page](data/data_overview) and the [baseline readme](https://github.com/claritychallenge/clarity/tree/main/recipes/cad1/task1/baseline) for details.

To download the datasets, please visit [download data and software](take_part/download).

## Output

1. One stereo remixed signal
    - Sample rate = 32000 Hz
    - Precision: 16bit integer
    - Compressed using FLAC

For more details about the format of the submission, please refer to the [submission](take_part/ICASSP2024_submission) webpage.

:::caution Note
The responsibility for the final remixed signal level is yours. 
It’s worth bearing in mind there may be clipping in the evaluation block in some tasks
if the processed signals are too large.
:::

## Evaluation Stage

:::danger Warning
You are not allowed to change the **evaluation** script provided in the baseline.
Your output signals with be scored using this script.
:::

The evaluation stage computes HAAQI scores for the remixed stereo. To learn more about HAAQI, please refer to our [Learning Resources](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech)
and to our Python [HAAQI implementation](https://github.com/claritychallenge/clarity/blob/cad1task1-baseline2/clarity/evaluator/haaqi/haaqi.py). 

The output of the evaluation stage is a CSV file with all the HAAQI scores. 

## 3. Software

All the necessary software to run the recipes and make your own submission is available on our [Clarity-Cadenza 
GitHub repository](https://github.com/claritychallenge/clarity).

The official code for the first challenge was released in version `v0.3.4`. 
To avoid any conflict, we highly recommend for you to work using version v0.3.4 and 
not with the code from the `main` branch. To install this version:

1. Download the files of the release v0.3.4 from:
https://github.com/claritychallenge/clarity/releases/tag/v0.3.4

2. Clone the repository and checkout version v0.3.4

```bash
git clone https://github.com/claritychallenge/clarity.git
git checkout tags/v0.3.4
```

3. Install pyclarity from PyPI as:

```bash
pip install pyclarity==0.3.4
```

## 4. Baselines

In the [Clarity/Cadenza GitHub repository](https://github.com/claritychallenge/clarity), we provide two baselines.
Both baseline systems work in a similar way. Using a music source separation model, the systems
decompose the music into the target eight stems. Both models were trained exclusively on MUSDB18-HQ training set and no
extra data was used for augmentation.

1. `Demucs`: This baseline system uses the `Hybrid Demucs` model. This is a time-domain-based model.
2. `Open-UnMix`: This baseline system uses the `umxhq` model from Open-UnMix. This is a spectrogram-based model.

Please, visit the [baseline on the GitHub webpage](https://github.com/claritychallenge/clarity/tree/cad1task1-baseline2/recipes/cad1/task1/baseline)
and [Baseline](Software/cc1_baseline#1-task-1-headphones) links to read more about the baselines and learn how to run them.