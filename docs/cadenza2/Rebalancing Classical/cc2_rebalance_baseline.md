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
