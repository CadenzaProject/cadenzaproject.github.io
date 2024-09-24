---
id: rebalancing_overview
title: "Rebalancing Classical Music Task Overview"
sidebar_label: Task Overview
sidebar_position: 3.1
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

<div style={{textAlign:'center'}}>
<Image img={require('../../../static/img/cad2/SimpleTaskDiagramCAD2.png')} alt="A diagram of the baseline as described in main text"/>
Figure 1. A simplified schematic of the baseline system.
</div>

- A scene generator (blue box):
  - Selects the stereo music signal.
  - Gives the target gains (metadata) for the different instruments in the ensemble.
- The music enhancement stage (pink box) takes the music as inputs and attempts to make a new mix with the target gains.
- Listener characteristics (green oval) are audiograms and compressor settings to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated (orange box) for audio quality using the Hearing-Aid Audio Quality Index (HAAQI)

Your challenge is to improve what happens in the pink music enhancement box. The rest of the baseline is fixed and should not be changed.

### B.1 Original Mixture

- The original mixture is an ensemble of 2 to 5 instruments.

|         |       |          |        |
|---------|-------|----------|--------|
| Bassoon | Cello | Clarinet | Flute  |
| Oboe    | Sax   | Viola    | Violin |

- Four instruments can have a second voice in the same mixture.

|       |      |       |        |
|-------|------|-------|--------|
| Flute | Sax  | Viola | Violin |


## B. Causality

We are interested in both causal and non-causal systems. Non-causal systems could be used for recorded music, whereas causal systems would also work for live listening. The allowed latency for causal systems will be 5 milliseconds, that is, systems cannot look beyond 5 ms into the future.
For details about causality, refer to the [Causality](../causality) webpage.
{/*
More information about causality can be found in Computational Restrictions section of the [Rules](Take%20Part/rules) page.
*/}

## C. Evaluation

Systems will be evaluated using HAAQI [[1]](#references) objective metric. HAAQI is an intrusive metrics and the reference 
will be the mixture of the original isolated sources rebalanced using the target gains. 

## References

**[1]** Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.  
