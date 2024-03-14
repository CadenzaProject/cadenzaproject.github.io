---
id: intro
title: The 2nd Cadenza Challenge
sidebar_label: CAD2 Announcement
sidebar_position: 1
---
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The Cadenza Challenges are about improving the **perceived audio quality of recorded music for people with a hearing loss**.
According to The World Health Organization (WHO), 430 million people worldwide have a disabling hearing loss, 
with this number increasing as the population ages. WHO projects that this number will increase to 1 in 10 by 2050. 
Hearing loss causes various problems when listening to music. 
It can make picking out lyrics more difficult, with music becoming duller as high frequencies disappear. 
This reduces the enjoyment of music and can lead to disengagement from listening and music-making, 
reducing the health and well-being effects people otherwise get from music. 

The 2nd Cadenza Challenge (CAD2) presents two arms: improving lyrics intelligibility while preserving the music quality, and
improving classical music listening by rebalancing the instruments according to the listener's preferences.  

## Overview of the challenge

The challenge provides participants with music signals and targets that represented the listener's preferences for an improved music experience. 
Participants are asked to process the music signals to achieve the expected target.
The challenge is evaluated using objective metrics and with a listener tests with hearing-impaired listeners.

This challenge extend from the [Task 1 of the 1st Cadenza Challenge](../cadenza1/cc1_intro) and focused on two 
music-listening issues for people with hearing loss. The first arm focus on improving the lyrics intelligibility of Pop/Rock music
when listening to music over headphones while preserving or enhancing the music quality. 
The second arm focus on rebalancing the level of the instruments from a music ensembles of up to five instruments to 
match the balance preference of hearing aids users. 
Further details of the tracks are presented below.

### Arm 1: Lyrics Intelligibility

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


### Arm 2: Rebalancing Classical Music

In a survey conducted by [Alinka et al.](#refs), users of hearing aids reported several issues when listening to music,
including distortion in the bass, difficulties in perceiving the full range of the music, especially high-frequency pitches, 
and a tendency to miss the impact of quieter parts of compositions.

In a pilot study conducted by the Cadenza Team,we found that tools enabling users to rebalance different instruments 
in a classical music ensemble are highly desirable for those with hearing aids. Therefore, in this second arm, 
we present a classical music rebalancing challenge.

Participants will be provided with classical music datasets featuring ensembles comprising two to five instruments, 
as well as listeners' hearing characteristics or [Audiograms](../learning_resources/Hearing_impairment/edu_measuring_HI).
Additionally, participants will receive information regarding the expected gains for each instrument in the ensemble. 
They will then be tasked with producing a rebalanced track from the original mixture.

The following example illustrates how changing the level of one instrument can change the listening experience.
The piece corresponds to an ensemble of 5 instruments of Bass, Cello, Viola, Violin 1 and Violin 2 drawn from the
EnsembleSet dataset. The first sample corresponds to the original mixture. The second sample is the original track 
with the Violin 1 levels increased in 6 dB and keeping the rest unchanged. The last sample shows the original track 
with the Viola levels increased in 10 dB keeping the rest unchanged.

|          |                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------|
| Original | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_original.mp3' />  |
| Violin 1 | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_violin.mp3' />    |
| Viola    | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_viola.mp3'/>      |

### References
<a name="refs"></a>

**[1]** Fine, P. A., & Ginsborg, J. (2014). "Making myself understood: perceived factors affecting the intelligibility of sung text," Frontiers in psychology, 5, 809.  
**[2]** A. Greasley, H. Crook, and R. Fulford, "Music listening and hearing aids: perspectives from audiologists and their patients," International Journal of Audiology, vol. 59, no. 9, pp. 694–706, 2020.
