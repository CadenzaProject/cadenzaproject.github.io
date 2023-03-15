---
id: cc1_core_software
title: Core Software
sidebar_label: Core Software
sidebar_position: 4.2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The code is provided as a [Clarity_Cadenza GitHub repository](https://github.com/claritychallenge/clarity) containing individual Python tools and a complete baseline system. 

## 1. Task 1: Headphones

The key elements of the task1 baseline system are the:

- Baseline demixer
- HAAQI music quality model.

### 1.1 Baseline Demixer

The demixing stage simply takes the out-of-the-box Hybrid [Demucs](https://arxiv.org/abs/2111.03600) music source 
separation model to obtain stereo VDBO stems. This model is publicly available in the 
[TorchAudio library](https://pytorch.org/audio/main/generated/torchaudio.pipelines.HDEMUCS_HIGH_MUSDB.html#torchaudio.pipelines.HDEMUCS_HIGH_MUSDB). 
Then, it applies a NAL-R [1] and compression procedure to each stem to personalize the output.

    Inputs: Stereo songs and Listeners characteristics. 
    Output: 8 stems (left and right VDBO stems) for each song-listener. 
            And 1 remixed signal for listener panel. 
	
## 2. Task 2: Car stereo

The key elements of the task2 baseline system are:

- Car acoustics model
- HAAQI music quality model

### 2.1 Car acoustics model

<figure id="fig10">
<img width="800" src={useBaseUrl('/img/car_acoustics.png')} />
<figcaption>Figure 1, The Car Acoustics Model.</figcaption>
</figure>

The scene metadata contains several parameters that is used by the car scene metadata. 

1. Using the car parameters, a car noise signal is generated. For details in the Car Noise generator, see 
[additional tools](/docs/cadenza1/Software/cc1_additional_tools). This signal is added with anechoic HRTFs
at the front microphone of the HA.
2. Using the head rotation angle, the model adds car HRTFs at the front microphone of the HA to the enhanced music.
3. These two signal are then added together at a given SNR at the front microphone of the HA.
4. The resulting signal is pass through a fixed HA composed of a simple NAL-R amplification.
5. The HA output is the signal use for evaluation.


## 3. HAAQI Speech Intelligibility model

Python implementation of the Hearing Aid Audio Quality Index (HAAQI) model which is used for objective estimation.
This will be used in the stage 1 evaluation of entrants (see [Rules](/docs/cadenza1/Take%20part/cc1_rules#stage-1-objective-evaluation)).

Note that HAAQI is not a binaural metric, instead, each channel must be processed separately. We average the independent 
scores to produce a final overall score.

## 4. References

<a name="refs"></a>

[1] Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.
