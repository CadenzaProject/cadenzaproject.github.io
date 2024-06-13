---
id: lyrics
title: "Task 1: Lyric Intelligibility"
sidebar_label: Why Lyric Intelligibility?
sidebar_position: 2
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

<Image img={require('../../../static/img/cad2/pop_rock_band.jpg')} alt="hostile band rock guitar show" />
Image by <a href="https://pixabay.com/users/marcisio-1043956/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=886041" target="_blank">Marcísio Coelho Mac Hostile</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=886041" target="_blank">Pixabay</a>

## Introduction

Studies show that not being able to understand lyrics is an important problem to tackle for those with hearing loss [2]. Consequently, this task is about improving the intelligibility of lyrics when
listening to pop/rock over headphones. But this needs to be done without losing too much audio quality - you can't improve intelligibility just by turning off the rest of the band! For this reason, we will be evaluating both intelligibility and audio quality, and giving you different targets to explore the balance between these attributes.

This task could be tackled in many different ways using machine learning. A few examples:
- Within speech technology, there are many different approaches to improving speech intelligibility that have been developed. Can these methods be adapted to improve listening to vocals?
- Within demixing, technologies allow the separation of music into different components including a vocal track. This then allow processing of the vocals and remixing to improve intelligibility.
- End-to-end approaches allow the transformation of audio from one style to another. How can this be adapted for this task?

But we'd welcome other approaches as well.

### What is lyric intelligibility?

Lyrics intelligibility can be defined as to "_the extent to which a listener understands a singer's message_" [[1]](#refs).
According to [Fine et al.](#refs), there are four groups of factors that can lead to lyric misunderstanding:

1. Performer: includes _articulation_, _voice quality_ and _diction_.
2. Music-to-singer balance: includes _music genre_, _song speed_ and _composition style_.
3. Listener [[2]](#refs): includes _listener attention_ and _hearing ability_.
4. Environmental: includes _room acoustics_, _proximity to performer_ and _use or abuse of amplification_.

As listeners are using headphones in our scenario, environmental factors are not included.


From the first three factors, (1) and (2) are addressed in the task by including samples with different singing styles and background accompaniment. For example, in the challenge datasets, one can find samples of music tracks where the background is not prominent and the singing style is more easily understandable. This is illustrated by the following example extracted from the training set from MUSDB18-HQ dataset:

<ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/pop_slow.mp3' />  

<details>
<summary>Did you pick up the lyrics?</summary>

**Track Name:** Actions - South Of The Water  
**Lyrics:**  
&nbsp;&nbsp;my skin's falling off i'm breaking at the seeps  
&nbsp;&nbsp;he's holding me under and i can't breath


Transcriptions made by [[Schulze-Forster et al.]](#refs)

</details>

The datasets also include tracks where the singing can be more difficult to understand, either because the background level is higher than the singing level and/or the singing is difficult to understand. The next example, also drawn from MUSDB18-HQ dataset, illustrates how the background accompaniment can mask the singing line, affecting the intelligibility.

<ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/rock_loud.mp3' />

<details>
<summary>Did you pick up the lyrics?</summary>

**Track Name:** Dark Ride - Burning Bridges  
**Lyrics:**  
&nbsp;&nbsp;burning bridges fire in my soul burning bridges forget about control  
&nbsp;&nbsp;burn those witches i am the only one  
&nbsp;&nbsp;burn the bridges i relied upon

Transcriptions made by [[Schulze-Forster et al.]](#refs)

</details>

Listener issues (factor 3) will be covered by us providing listeners' hearing characteristics
as [Audiograms](../learning_resources/Hearing_impairment/edu_measuring_HI).

Challenge entrants will be provided with appropriate music datasets and sets of audiograms for training, development and evaluation.

### References
<a name="refs"></a>

**[1]** Fine, P. A., & Ginsborg, J. (2014). "Making myself understood: perceived factors affecting the intelligibility of sung text," Frontiers in psychology, 5, 809.  
**[2]** A. Greasley, H. Crook, and R. Fulford, "Music listening and hearing aids: perspectives from audiologists and their patients," International Journal of Audiology, vol. 59, no. 9, pp. 694–706, 2020.  