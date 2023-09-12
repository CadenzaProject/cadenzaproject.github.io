---
id: intro
title: The ICASSP 2024 Cadenza Grand Challenge
sidebar_label: ICASSP 2024 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info

Please, refer to the challenge [timeline](take_part/key_dates) to know when the datasets and software will be available.
Meanwhile, go through the website to familiarise with the challenge.

:::

# Overview
Someone with a hearing loss is listening to music via their hearing aids. The challenge is to develop a signal processing system that allows a personalised rebalancing of the music to 
improve the listening experience, for example by amplifying the vocals relative to the sound of the band.
One approach to this would be to a demix the music and then apply gains to the separated tracks to change the balance when the music is downmixed to stereo.

## What makes the demix different to previous demix challenges?
The left and right signals you are working with are those picked up by a microphone at each ear when the person is listening to a pair of stereo loudspeakers. This means the signals at the ear that you have for demix, is a combination of both the right and left stereo signals because of cross-talk (see Figure 1). This cross-talk will be strongest at low frequency, when the wavelength is largest. This means that the spatial distribution of an instrument will be different in the microphone signals at the ear, compared to the original left-right music signals. Stereo demix algorithms will need to be revised to allow for this frequency-dependent change. We will model the cross-talk using HRTFs (Head Related Transfer Functions), assuming the music comes from a pair of stereo loudspeakers in a dead room.

<div style={{textAlign:'center'}}>
    <figure id="fig1">
        <img width="500" src={useBaseUrl('/img/icassp_2024/cross-talk-hrtf.png')} />
        <figcaption>Figure 1, The scenario.</figcaption>
    </figure>
</div>

In the long term, any demix approaches will need to be causal and low latency. For ICASSP 2024, we are allowing causal <u>and</u> non-causal approaches. Attempting a low latency solution for demix is novel. There are increasing number of DNN approaches for causal signal processing that could be adapted for this.

## Do I have to demix and then downmix to stereo?
Our baseline does demixing, but you don't have to. You could create an end-to-end system without an explicit demixing stage if you want.

## Why this challenge?
There is a global challenge of an ageing population, which will contribute to 1 in 10 people having disabling hearing loss by 2050. Hearing loss causes problems when listening to music. It can make picking out lyrics more difficult, with music becoming duller as high frequencies disappear. This reduces the enjoyment of music and can lead to disengagement from listening and music-making, reducing the health and well-being effects people otherwise get from music. We want to get more of the ICASSP community to consider diverse hearing and so allow those with a hearing loss to benefit from the latest signal processing advances.

## Do I need to know about hearing loss and hearing aids?
No. We provide code for a standard amplification that is done by simple hearing aids. The challenge is mostly about rebalancing the music. We use a metric developed for hearing aids, but you could use another quality metric like Signal to Distortion Ratio (SDR) to develop your systems if you prefer.

## The Task 

Figure 2 shows the baseline system process. The system starts by applying HRTFs to the original tracks
of the MUSDB18-HQ dataset. This is illustrated by the **Pre-Process Enhancement** and 
**Pre-Process Evaluation** blocks. 

The **Enhancement** block, which first demixes stereo tracks ("mixture at the hearing aid mics") 
into a VDBO (vocal, drums, bass and other) representation. 
This then allows a personalised remix/downmix for the listener by changing the level of the different elements of the music. 
We provide the target <i>gains</i> for the downmix. The <i>NAL-R</i> is an amplification block, 
and is a standard way of compensating for the hearing loss of listeners.

The **Evaluation** block generates the _reference_ signal using the HRTF-ed VDBO signals. 
It applies the same gains used in the Enhancement.
The reference signal simulates a _listener preferred music_ rebalance.

In the Enhancement and Evaluation blocks, we apply a loudness normalisation (in [LUFS](https://www.izotope.com/en/learn/what-are-lufs.html)) after applying the gains. This is to keep the loudness of the new mixture
the same as the mixture ath the hearing aid mics.

To evaluate the quality of the remixing, we will use the objective metric
[HAAQI (Hearing aid audio quality index)](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech#haaqi-hearing-aid-audio-quality-index). This compares the downmixed music to the reference, focussing on changes to time-frequency envelope modulation, temporal fine structure and long-term spectrum.

<div style={{textAlign:'center'}}>
    <figure id="fig1">
        <img width="900" src={useBaseUrl('/img/icassp_2024/task_diagram_hrtf.png')} />
        <figcaption>Figure 2, The baseline system.</figcaption>
    </figure>
</div>

The block that can be changed by you is labelled *Enhancement* in Figure 2. 

We are interested in systems that are either: (i) causal and low latency for live music, and (ii) non-causal for recorded music.

## Data

You will have access to:

1. Full length songs from MUSDB18-HQ dataset.
2. HRTFs to model the propagation of sound from the loudspeakers to the hearing aid microphones.
3. Script to pre-process the music and construct the HRTF-ed music signals.
4. Music data for augmentation, if needed. 
5. Listeners characteristics (audiograms) - see [Listener Data](data/data_listener)
6. Target gains for the VDBO stems used to mix the target stereo


Please refer to [data page](data/icassp2024_data_overview) and the [baseline readme](.) in GitHub for details.
To download the datasets, please visit [download data and software](take_part/download)

## Output

Stereo downmixed signal
- Sample rate: 32,000 Hz
- Precision: 16 bit integer
- Compression: FLAC

For more details about the format of the submission, please refer to the [submission](take_part/submission) webpage.

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

The evaluation stage computes [HAAQI](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech) 
scores for the remixed stereo - see [Python HAAQI implementation](https://github.com/claritychallenge/clarity/blob/main/clarity/evaluator/haaqi/haaqi.py). 

The output of the evaluation stage is a CSV file with all the HAAQI scores. 

## Software

All the necessary software to run the recipes and make your own submission is available on our [Clarity-Cadenza
GitHub repository](https://github.com/claritychallenge/clarity).

The official code for the ICASSP 2024 Cadenza Challenge was released in version `v0.4.0`.
To avoid any conflict, we highly recommend for you to work using version v0.4.0 and
not with the code from the `main` branch. To install this version:

1. Download the files of the release v0.4.0 from:

https://github.com/claritychallenge/clarity/releases/tag/v0.4.0

2. Clone the repository and checkout version v0.4.0

```bash
git clone https://github.com/claritychallenge/clarity.git
git checkout tags/v0.4.0
```

3. Install pyclarity from PyPI as:

```bash
pip install pyclarity==0.4.0
```

## 4. Baselines

In the [Clarity/Cadenza GitHub repository](https://github.com/claritychallenge/clarity), we provide a baseline that
uses a pre-trained music source separation model to estimate the VDBO components before rebalance and downmix. 
The baseline allows to select what separation model to use:

1. `Demucs`: This baseline system uses the `Hybrid Demucs` model. This is a time-domain-based model.
2. `Open-UnMix`: This baseline system uses the `umxhq` model from Open-UnMix. This is a spectrogram-based model.

Please, visit the [baseline on the GitHub webpage](https://github.com/claritychallenge/clarity/tree/cad1task1-baseline2/recipes/cad1/task1/baseline)
and [Baseline](Software/cc1_baseline#1-task-1-headphones) links to read more about the baselines and learn how to run them.
