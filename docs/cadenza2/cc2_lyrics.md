---
id: lyrics
title: "Arm 1: Lyrics Intelligibility"
sidebar_label: Lyrics Intelligibility
sidebar_position: 2
---
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The first arm of the CAD2 challenge aim to improve the intelligibility of lyrics for people with hearing loss when
listening to music over headphones, without affecting the quality of the music.

Lyrics intelligibility can be defined as to "_the extent to which a listener understands a singer's message_" [[1]](#refs).
According to [Fine et al.](#refs), exist four groups of factors that can lead to lyrics misunderstanding:

1. Performer-related factors: includes _articulation_, _voice quality_ and _diction_.
2. Music-to-singer balance: includes _music genre_, _song speed_ and _composition style_.
3. Listener-related factors [[2]](#refs): includes _listener attention_ and _hearing ability_ of the listener.
4. Environmental-related factors: includes _acoustics of the location_, _proximity to performer_ and _use or abuse of amplification_.

As listeners are using headphones in this scenario, environmental-related factors are not explicitly include.
From the first three factors, factors (1), (2) are addressed by including several samples with different singing and
background accompaniment characteristics from open Pop/Rock datasets.
In these datasets, one can find samples of music tracks where the background is not prominent and
the singing style is more easily understandable. This is illustrated by the following example extracted from the training set
from MUSDB18-HQ dataset:

<ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/pop_slow.mp3' />

These datasets include tracks where the singing can be more difficult to understand, either because the background level
is higher than the singing level and/or the singing is difficult to understand. The next example, also drawn from MUSDB18-HQ dataset,
illustrates how the background accompaniment can mask the singing line, affecting the intelligibility.

<ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/rock_loud.mp3' />

The third group of factors, listener-related factors, will be covered by providing listeners' hearing characteristics
or [Audiograms](../learning_resources/Hearing_impairment/edu_measuring_HI). Participant will be provided with
appropriate music datasets and sets of audiograms for training, development and evaluation.

## Overview

Entrants will be given a small segment of a song (e.g.: the chorus of a Pop/Rock) and asked to process the segment 
to increase the intelligibility of the segment while keeping the music quality. The balance between the intelligibility 
and audio quality will be given by a randomly selected &alpha; (alpha) value between 0 (prioritise intelligibility) and 1 (prioritise audio quality).

This &alpha; value will impact on the overall score
System that only focused on audio quality will perform poorly on intelligibility for low &alpha;
<figure id="fig1">
<img width="350" src={useBaseUrl('/img/cad2/lowI_highQ.png')} />
<figcaption>Figure 1, Simulation of a system focused only on Audio Quality.</figcaption>
</figure>

System that only focused on lyrics intelligibility will perform poorly on quality for high &alpha;
<figure id="fig2">
<img width="350" src={useBaseUrl('/img/cad2/highI_lowQ.png')} />
<figcaption>Figure 2, Simulation of a system focused only on Audio Quality.</figcaption>
</figure>

System that balance a qgodd music quality with enhanced intelligibility will perform good for all &alpha;
<figure id="fig3">
<img width="350" src={useBaseUrl('/img/cad2/highI_highQ.png')} />
<figcaption>Figure 3, Simulation of a system performing good for quality and intelligibility.</figcaption>
</figure>

## Causality

We will accept causal and non-causal systems. A baseline will be provided for each case.
The allowed latency for causal systems will be 5 milliseconds, that is, systems cannot look beyond 5 ms into the future.
More information about causality can be found on Computational Restrictions section of the [Rules](Take%20Part/rules) page.

## Evaluation

Participants will be asked to submit two signals per song-listener pair: a segment of 15-20 seconds corresponding to a verse or chorus of a song,
and a smaller segment corresponding a lyric phrase for transcription. Both segments may not correspond to the same part of the
song. That is, the small segment may be a phrase from the first verse and the 15-20 second segment may correspond to a chorus or verse 2. 

The first segment will be scored for quality and intelligibility. For intrusive metrics the reference will be the 
original signal with the corresponding amplification applied. The second segment will be score for transcription using 
the original text lyrics as reference. 

The system will be evaluated for quality and intelligibility using a series of objective metrics. 
Audio quality will be scored using HAAQI [[3]](#refs), HAAQI-Net [[4]](#refs). and an audio quality metric we are developing. 
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

### References
<a name="refs"></a>

**[1]** Fine, P. A., & Ginsborg, J. (2014). "Making myself understood: perceived factors affecting the intelligibility of sung text," Frontiers in psychology, 5, 809.  
**[2]** A. Greasley, H. Crook, and R. Fulford, "Music listening and hearing aids: perspectives from audiologists and their patients," International Journal of Audiology, vol. 59, no. 9, pp. 694–706, 2020.  
**[3]** Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.  
**[4]** Wisnu, D. A., Pratiwi, E., Rini, S., Zezario, R. E., Wang, H. M., & Tsao, Y. (2024). HAAQI-Net: A non-intrusive neural music quality assessment model for hearing aids. arXiv preprint arXiv:2401.01145.   
**[5]** Sharma, B., & Wang, Y. (2019). Automatic evaluation of song intelligibility using singing adapted STOI and vocal-specific features. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 28, 319-331.  