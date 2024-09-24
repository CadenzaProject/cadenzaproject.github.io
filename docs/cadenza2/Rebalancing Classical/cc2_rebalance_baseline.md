---
id: rebalance_baseline
title: "Rebalancing Classical Baseline"
sidebar_label: Baseline
sidebar_position: 3.2
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::warning
New version of task 2 dataset released on 24 of September 2024.   
Please ensure you are using the last version.
:::

## A. Task Overview

Challenge entrants are supplied with a fully functioning baseline system, which is illustrated in Figure 1

<div style={{textAlign:'center'}}>
<Image img={require('../../../static/img/cad2/SimpleTaskDiagramCAD2.png')} alt="A diagram of the baseline as described in main text"/>
Figure 1. A simplified schematic of the baseline system.
</div>

<details>
<summary>Click here for overview of Figure 1</summary>

- A scene generator (blue box):
  - Selects the stereo music signal.
  - Gives the target gains (metadata) for the different instruments in the ensemble.
- The music enhancement stage (pink box) takes the music as inputs and attempts to make a new mix with the target gains.
- Listener characteristics (green oval) are audiograms and compressor settings to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated (orange box) for audio quality using the Hearing-Aid Audio Quality Index (HAAQI)

Your challenge is to improve what happens in the pink music enhancement box. The rest of the baseline is fixed and should not be changed.
</details>

## B. Music Enhancer

Figure 2 shows the music enhancer supplied in the baseline. Your task is to improve this.

<div style={{textAlign:'center'}}>
<Image img={require('../../../static/img/cad2/classical_music_enhancer.png')} alt="A diagram of the baseline as described in main text"/>
Figure 2. A simplified schematic of the baseline system.
</div>

The baseline approach is to demix the stereo music into the number of instruments in the ensemble.
For this, the baseline uses eight audio source separation model, each trained for a specific target instrument.
During the separation, a 10% of the residual is added back to the estimated target to reduce any distortion resulting from the separation.
Next, the specified gains are applied to each instrument before recombining the signals.
Then, an amplification is applied to ensure the downmix stereo is roughly -40 dB. 
The final stage is to apply a frequency-dependent amplification to correct for the hearing loss - see [amplification](../amplification) for more details.

The output is FLAC format 16-bit, 32 kHz.

:::note

The audio source separation models were designed to separate a target instrument, not to separate two voices of the same instrument. 
Therefore, if the mixture contains two voices of the same instrument, the baseline calculates the average gain between the two and applies this same gain to both voices.

:::

## C. Objective Evaluation

The enhanced audio is evaluating using the HAAQI implementation in pyClarity. This is an intrusive metric and requires a reference. 
The reference signal is constructed by applying the specified gains to the isolated instrument stems and summing the result. 
A gain is applied to ensure the reference mix is not amplified. 
The reference is also amplified using a simulation of a simple hearing-aid - see [amplification](../amplification) for more details.

## D. Baseline Results

The average validation set HAAQI score computed as the average of all average left and right scores

$$
 \text{HAAQI} = \frac{1}{nsamples} \sum_{i=1}^{\text{nsamples}} \frac{\text{left score}_i + \text{right score}_i}{2} 
$$

where:  
$\text{left score}_i$ = haaqi score for left ear  
$\text{right score}_i$ = haaqi score for right ear  
$\text{nsamples}$ = total number of samples to evaluate

| Baseline  | HAAQI  | 
|:----------|:------:|
| Causal    | 0.5065 |  
| NonCausal | 0.5288 |   
