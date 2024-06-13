---
id: lyric_overview
title: "Lyric Intelligibility Task Overview"
sidebar_label: Task Overview
sidebar_position: 2.1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

## Task overview

Entrants will process pop/rock music to increase the intelligibility with least loss of audio quality. Audio will be evaluated for their intelligibility and audio quality.

<b> *** FIGURE 1 NEEDED***</b>

Figure 1 shows a simplified schematic of the baseline system:

- A scene generator (blue box):
  - Selects the stereo music signal.
  - Gives a value of 𝛼 that sets the balance between improved intelligibility and audio quality (see evaluation below).
- The music enhancement stage (pink box) takes the music as inputs and attempts to improve the intelligibility.
- Listener characteristics (green oval) are audiograms to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated (orange box):
  - For intelligibility using a metric based on Whisper
  - For audio quality via the Hearing-Aid Audio Quality Index (HAAQI) [1]. Note, HAAQI is an intrusive measure that requires a reference signal.
  - By our listening panel.

Your challenge is to improve what happens in the pink music enhancement box. The rest of the baseline is fixed and should not be changed.

## Causality

We will accept causal and non-causal systems. Non-causal systems could be used for recorded music, whereas causal systems would also work for live listening. A baseline will be provided for each case. The allowed latency for causal systems will be 5 milliseconds, that is, systems cannot look beyond 5 ms into the future.
{/*
More information about causality can be found in Computational Restrictions section of the [Rules](Take%20Part/rules) page.
*/}

## Evaluation

### Listening tests

The listener panel will score the music for both audio quality and intelligibility. To rank the teams, the intelligibility L<sub>I</sub> and quality Q ratings from the listening tests will be combined in a weighted average to get an overall score:

𝑠𝑐𝑜𝑟𝑒 = 𝛼 𝑧 (𝑄) + (1 − 𝛼) 𝑧 (𝐿<sub>𝐼</sub>)

Where the weighting 𝛼 will allow the balance between intelligibility and quality to be varied, and z() indicates a z-normalisation to make the two metrics compatible for the weighted average.

### Objective metrics

Our quality and intelligibility metrics are provided to aid optimisation. They are somewhat experimental, however, and entrants are encouraged to optimise using whatever metrics and approaches they think will give the best ratings by the listener panel. Audio quality can be evaluated using HAAQI [[1]](#refs). Intelligibility is scored using Word Error Rate (WER) using a lyric transcription or other metrics such as Singing Adapted STOI [[2]](#refs). 

For intrusive metrics the reference will be the original signal with a corresponding amplification applied to the vocal signal to achieve the target intelligibility.

{/*

## Evaluation

Participants will be asked to submit two signals per song-listener pair: a segment of 15-20 seconds corresponding to a verse or chorus of a song,
and a smaller segment corresponding a lyric phrase for transcription. Both segments may not correspond to the same part of the
song. That is, the small segment may be a phrase from the first verse and the 15-20 second segment may correspond to a chorus or verse 2. 

The first segment will be scored for quality and intelligibility. For intrusive metrics the reference will be the 
original signal with the corresponding amplification applied. The second segment will be score for transcription using 
the original text lyrics as reference. 

The system will be evaluated for quality and intelligibility using a series of objective metrics. 
Audio quality will be scored using HAAQI [[1]](#refs), HAAQI-Net [[4]](#refs), and an audio quality metric we are developing. 
Intelligibility will be scored using Word Error Rate (WER) and other metrics such as Singing Adapted STOI [[5]](#refs). 
Note that this is not an exhaustive list of the metrics we will use, and we may not use some of the metrics mentioned above. 
The definitive list will be published in July with the launch of the challenge. As most of these metrics have never been
tested under challenge conditions, systems will be scored but not ranked. 
Therefore, the systems included in the listener test will be selected using criteria, which can include the originality 
of the system or selection by a pilot listener test.

### Listener Test

In the listener test, listeners will be presented with the same both segments and perform the same three evaluations:
1. Score the Audio Quality of the 15-20 second segment.
2. Score the Intelligibility of the 15-20 second segment.
3. Transcribe the lyrics of the smaller segment.

The audio quality and intelligibility scores will be weighted using the same &alpha; used in the processing.
However, the listener panel will not know what was the expected &alpha; for that sample. 

*/}


### References
<a name="refs"></a>

**[1]** Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.  
**[2]** Sharma, B., & Wang, Y. (2019). Automatic evaluation of song intelligibility using singing adapted STOI and vocal-specific features. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 28, 319-331.  
