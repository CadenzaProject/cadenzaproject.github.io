---
id: intro
title: The 1st Cadenza Lyric Intelligibility Prediction Challenge (CLIP1)
sidebar_label: Introduction
sidebar_position: 1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Admonition from '@theme/Admonition';

# ICASSP 2026 Cadenza Challenge: Predicting Lyric Intelligibility

:::info[🎉 ICASSP 2026 Challenge Launch]
We're live! 🚀  
Stay tuned, the **Baseline** and **Leaderboard** to follow this week.  
**Last updated: 2025-09-01**
:::

<Image img={require('../../static/img/clip1/clip1_landing.jpg')} alt="Lead singing in a band singing into a microphone" />
Image by <a href="https://pixabay.com/users/sabena206-20184104/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5989931">Sabena Costa</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5989931">Pixabay</a>

## Overview

<iframe width="100%" height="560" src="https://www.youtube.com/embed/6nzDaEzSMww?si=zuwjl3zDViQqq7_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Understanding the lyrics in music is key for music enjoyment [1]. 
People with hearing loss can have difficulties clearly and effortlessly hearing lyrics [2], however. 
In speech technology, having metrics to automatically evaluate intelligibility has driven improvements in speech enhancement. 
We want to do the same for music with lyrics.

Challenge entrants will be given thousands of audio segments of accompanied singing, and their task is to predict the word correct rate from perceptual experiments, where normal hearing listeners were asked to write down the lyrics they heard. 
All audios will be presented as-is and processed by a hearing loss simulator for a mild and moderate hearing loss, so diverse hearing characteristics are incorporated into the challenge.

This challenge will:
* Develop intelligibility metrics that better reflect human perception of sung lyrics in popular Western music.
* Develop new knowledge about the intelligibility differences between spoken and sung language and intonation.
* Catalyse future work into enhancing lyric intelligibility to: (i) improve accessibility of music for listeners with hearing loss, and (ii) improve health and well-being.

## What is Lyric Intelligibility?

Our sensory panel of hearing aids users with hearing loss, refers to Lyric Intelligibility as "how clearly and effortlessly the words in the music can be heard." 
Some songs are intrinsically less intelligible than others. Factors that can affect intelligibility include [1]:

* Vocal style and articulation.
* Song genre.
* Mixing and production techniques.
* Listener hearing ability.

Our dataset considers all these factors by:

1. It includes different singing styles from rap to rock.
2. It includes songs from a large range of genres.
3. Songs have various mixing levels with some having the vocals more prominent and others where the vocals are masked by the background accompaniment.
4. All samples are presented as-is and processed by a hearing loss simulator, to model different listener ability.  

| No Loss                                                                                  | Mild                                                                                   | Moderate                                                                                   |
|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/noloss1.wav' /> | <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/mild1.wav' /> | <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/moderate1.wav' /> |           
| <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/noloss2.wav' /> | <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/mild2.wav' /> | <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/moderate2.wav' /> |           
| <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/noloss3.wav' /> | <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/mild3.wav' /> | <ReactPlayer pip controls width="250px" height="50px" url='/audios/clip1/moderate3.wav' /> |

## Previous work

Speech Intelligibility prediction is an established area of research and many different algorithms have been developed. 
In contrast, metrics for lyrics are very rare (e.g. singing adapted STOI [3]). 
Consequently, there are many techniques from speech that could be adapted to music to create novel research.
For instance, foundation models have made blind (non-intrusive) speech intelligibility metrics much more accurate, can they be adapted for music? Would an automatic lyric transcription system be a good starting point?

Current speech metrics are unreliable for music, because spoken and sung language, rhythm and intonation are different. In popular western music most vocals will have sound engineering techniques applied, such as reverb, double tracking and dynamic range compression. Also, sung speech is typically embedded in a music accompaniment which has different characteristics than the independent noise background that spoken speech metrics try to account for, e.g. there might be harmonizing backing singers. 
These will pose interesting problems for challenge entrants to overcome.

## What will be provided?

* A novel dataset of song excerpts paired with lyric intelligibility scores from listening tests.
* Software and baseline system.
* A leaderboard via Eval.AI to allow entrants to track progress.

Some song excerpts will be passed through a hearing loss simulator.  But entrants can accepted the audio as-is, and no knowledge of hearing loss modelling is needed to take part in the challenge.

## ICASSP

The top teams will be invited to submit papers to present during [ICASSP 2026, 4-8th May 2026, Barcelona, Spain](https://2026.ieeeicassp.org/event/about-conference/).

## Expressing interest

To register please fill out the [registration](take_part/registration) form. And also sign up to our [Google group](https://groups.google.com/g/cadenza-challenge) for alerts and discussions about the challenges.

## Challenge advisory board

The Cadenza team would like to thank the following for their help with this challenge:
* Fei Chen - Southern University of Science and Tech., China
* Gao Xiaoxue – A*STAR, Singapore
* Ye Wang – National University of Singapore, Singapore
* Emmanouil Benetos – Queen Mary University of London, UK
* Bidisha Sharma - Uniphore Systems, India & USA
* Axel Roebel – IRCAM, France 


## References

1. Fine, P. A. and Ginsborg, J., 2014. [Making myself understood: perceived factors affecting the intelligibility of sung text](https://pmc.ncbi.nlm.nih.gov/articles/PMC4155173/). Frontiers in psychology, 5, 809.
2. Greasley, A., Crook, H. and Fulford, R., 2020. [Music listening and hearing aids: perspectives from audiologists and their patients](https://www.tandfonline.com/doi/full/10.1080/14992027.2020.1762126). International Journal of Audiology, 59(9), pp.694-706.
3. Sharma, B. and Wang, Y., 2019. [Automatic evaluation of song intelligibility using singing adapted STOI and vocal-specific features](https://ieeexplore.ieee.org/document/8910414). IEEE/ACM Transactions on Audio, Speech, and Language Processing, 28, pp.319-331.

