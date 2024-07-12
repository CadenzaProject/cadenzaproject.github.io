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
During the separation, a percentage of the residual is added back to the estimated target to reduce any distortion resulting from the separation.
Next, the specified gains are applied to each instrument before recombining the signals. 
Then, an amplification is applied to ensure the downmix stereo is roughly the same level as the original. 
The final stage is to apply a frequency-dependent amplification to correct for the hearing loss - see [amplification](../amplification) for more details.

The output is FLAC format 16-bit, 44.1 kHz.

## C. Objective Evaluation

The enhanced audio is evaluating using the HAAQI implementation in pyClarity. This is an intrusive metric and requires a reference. The reference signal is constructed by applying the specified gains to the isolated instrument stems and summing the result. A gain is applied to ensure the reference mix is not amplified. The reference is also amplified using a simulation of a simple hearing-aid - see [amplification](../amplification) for more details.

## D. Baseline Results

| Baseline  | HAAQI  | 
|:----------|:------:|
| Causal    |   -    |  
| NonCausal | 0.4594 |   
