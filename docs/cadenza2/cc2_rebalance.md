---
id: rebalancing
title: "Task 2: Rebalancing Classical Music"
sidebar_label: Rebalancing Classical Music
sidebar_position: 3
---
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

Hearing aid users report several issues when listening to music, including distortion in the bass, difficulties in 
perceiving the full range of the music, especially high-frequency pitches, and a tendency to miss the impact of quieter 
parts of compositions [[1]](#refs).

In a pilot study conducted by the Cadenza Team, we found giving listeners sliders to allow them to rebalance different instruments
in a classical music ensemble was desirable.

The following example illustrates how changing the level of one instrument can alter the listening experience. 
The piece consists of an ensemble of five instruments: Bass, Cello, Viola, Violin 1, and Violin 2, drawn from the EnsembleSet dataset. 
The first sample corresponds to the original mixture. The second sample is the original track with the Violin 1 levels increased 
by 6 dB while keeping the rest unchanged. The last sample demonstrates the original track with the Viola levels increased 
by 10 dB while keeping the rest unchanged.

|          |                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------|
| Original | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_original.mp3' />  |
| Violin 1 | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_violin.mp3' />    |
| Viola    | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_viola.mp3'/>      |

This task could be tackled by demixing the stereo into the separate instruments, applying the requested gains and downmixing. Compared to previous demix challenges a novelty is doing this for classical music instead of pop/rock. Additional novelty could also come from a causal algorithm, if you decide to make something that works for live music. Of course there are other approaches such as end-to-end that might be adapted for the task.

## Overview

Entrants will be given a piece of classical music in stereo, featuring ensembles comprising between two and five instruments. They will be asked to rebalance the instruments using target gains that we will specify. Signals will be scored objectively by HAAQI and subjectively by a listener test.

## Causality

We will accept causal and non-causal systems. Non-causal systems could be used for recorded music, whereas causal systems would also work for live listening. A baseline will be provided for each case. The allowed latency for causal systems will be 5 milliseconds, that is, systems cannot look beyond 5 ms into the future. 
{/*
More information about causality can be found in Computational Restrictions section of the [Rules](Take%20Part/rules) page.
*/}
## Evaluation

### Objective metrics

Entrants will be asked to submit musical extracts for evaluation by HAAQI or an audio quality metric we are developing. For intrusive metrics, the reference will be formed by remixing the original stems with the target gains applied to each instrument. Note, we are currently working on the metrics, and a definitive list will be published when we launch the challenge. Entrants are free to use any metric they may find useful during training as well.

### Listener Test

Listeners will be presented with the rebalanced signal and asked to score its audio quality. The exact form of the test is currently being designed.

{/*

At the challenge launch, entrants will be given random gains for development. 
However, using random gains can lead to a rebalance that listeners may not prefer 
(e.g., if the cello level is increased by 10 dB but the listener prefers the violin 1 increased by 10 dB), 
potentially resulting in a good system being scored poorly.

To address this issue, we will conduct a study with our listener panel to determine their preferred gains. 
This study will inform the gains used in a second development test, which will be released halfway through the challenge, 
and the evaluation set.

*/}

### References
<a name="refs"></a>

**[1]** A. Greasley, H. Crook, and R. Fulford, "Music listening and hearing aids: perspectives from audiologists and their patients," International Journal of Audiology, vol. 59, no. 9, pp. 694–706, 2020.  
