---
id: rebalancing_overview
title: "Task 2: Rebalancing Classical Music"
sidebar_label: Rebalancing Classical Overview
sidebar_position: 3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

<Image img={require('../../static/img/cad2/classical_music.jpeg')} alt="Danish String Quartet Sebastian Manz Klarinette Heidelberger Frühling 2013" />
Image by Port(u*o)s oder Phil Ortenau from <a href="https://commons.wikimedia.org/wiki/File:Danish_String_Quartet_Sebastian_Manz_Klarinette_Heidelberger_Fr%C3%BChling_2013_Bild_15.JPG" target="_blank">Wikimedia Commons</a>

In a pilot study, we found giving listeners with hearing loss sliders to allow them to rebalance different instruments
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

Consequently the tasks is as follows. Given a piece of classical music in stereo, featuring ensembles comprising between two and five instruments, rebalance the instruments using target gains that we will specify. Signals will be scored objectively by HAAQI (Hearing Aid Audio Quality).

This task could be tackled by demixing the stereo into the separate instruments, applying the requested gains and downmixing. Compared to previous demix challenges a novelty is doing this for classical music instead of pop/rock. Additional novelty could also come from a causal algorithm, if you decide to make something that works for live music. Of course there are other approaches such as end-to-end that might be adapted for the task.

Figure 1 shows a simplified schematic of the baseline system:

- A scene generator (blue box):
-- Selects the stereo music signal.
-- Gives the target gains for the different instruments in the ensemble.
- The music enhancement stage (pink box) takes the music as inputs and attempts to make a new mix with the target gains.
- Listener characteristics (green oval) are audiograms to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated (orange box) for audio quality via the Hearing-Aid Audio Quality Index (HAAQI) [1]. Note, HAAQI is an intrusive measure that requires a reference signal.

Your challenge is to improve what happens in the pink music enhancement box. The rest of the baseline is fixed and should not be changed.

## Causality

We are interested in both causal and non-causal systems. Non-causal systems could be used for recorded music, whereas causal systems would also work for live listening. The allowed latency for causal systems will be 5 milliseconds, that is, systems cannot look beyond 5 ms into the future.
{/*
More information about causality can be found in Computational Restrictions section of the [Rules](Take%20Part/rules) page.
*/}

### References
<a name="refs"></a>

**[1]** Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.  
