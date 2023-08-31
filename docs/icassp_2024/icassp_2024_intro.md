---
id: intro
title: The ICASSP 2024 Grand Challenge
sidebar_label: ICASSP 2024 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";


This ICASSP SP Cadenza Challenge is about improving the **perceived audio quality of recorded and/or live music for people with a hearing loss**.
Hearing loss is a growing global problem. The WHO estimate that 430 million have moderate or severe impairment, 
with this forecast to grow to 1 billion by 2050. 
Only 17% of people with a disabling loss are receiving treatment such as hearing aids.

:::tip What do we mean by audio quality?
Imagine listening to the same music track in two different ways.
First listening via a low quality mp3 played on a cheap cell phone, and then via a high quality wav heard over
studio-grade loudspeaker monitors. The underlying music is the same in both cases, but the *audio quality* is very
different - this is what we are interested in.
:::

# Organizers

* Professor Trevor Cox, Dr Simone Graetzer, Dr Gerardo Roa, Dr Rebecca Vos, Dr Bruno Fazenda  
  **Acoustic Engineering, University of Salford**
* Professor Jon Barker  
  **Computer Science, University of Sheffield**
* Professor Michael Akeroyd, Dr Bill Whitmer, Dr Jenny Firth  
  **School of Medicine, University of Nottingham**
* Professor Alinka Greasley, Dr Scott Bannister  
  **School of Music, University of Leeds**

# Overview

Consider someone with a hearing loss listening to music via headphones without their hearing aids.
The challenge is to develop a system that can allow a personalised remixing of the music to
improve the audio quality for someone with a hearing loss.

Signal processing of music generates hundreds of papers each year, yet only 0.4% of papers in this area over the 
last 5 years have considered hearing loss, hearing aids or cochlear implants. 
There are critical barriers preventing signal processing researchers considering hearing loss:
* Insufficient awareness of the growing importance of hearing loss. 
* Lack of relevant open-source databases, software and benchmarking cases.
* Lack of free-to-enter challenges to drive innovation.
* Researchers not having the knowledge to work with hearing impairment.
* Insufficient conference sessions considering aural diversity.

In this ICASSP SP Cadenza Challenge will help lower these barriers. Consequently, this challenge is designed to:
* Get the latest advancements in music signal processing applied to the situation where a listeners have a hearing loss.
* Increase the number of music signal processing researchers in academia and industry who engaging with hearing difference.

## The Task 

Someone with a hearing loss is listening via headphones, not using their hearing aids. 
As Figure 1 shows, the machine learning challenge here is to first demix stereo tracks into a 
VDBO (vocal, drums, bass and other) representation. 
This then allows a personalised remixing for the listener that has better audio quality. 
For example, for some music you might amplify the vocals to improve the audibility of the lyrics.

To evaluate the quality of the remixing, we will use the objective metric 
[HAAQI (Hearing aid audio quality index)](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech#haaqi-hearing-aid-audio-quality-index).

The block that can be changed by you is labelled *Enhancement* in Figure 1.
While the main focus is on demixing/remixing, we'll accept entries using alternative signal processing approaches
that can improve music for people with a hearing loss. Your entry would replace the whole box labelled enhancement.

<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple_v3.png')} />
<figcaption>Figure 1, The baseline system. For simplicity, not all signal paths are shown.</figcaption>
</figure>

# What is to be provided

* Music dataset (MUSDB18-HQ) for training and evaluation.
* Listener characteristics, including audiograms.
* Software including tools for augmenting training data, a baseline system, a fixed hearing aid implementation and code for scoring signals using the HAAQI hearing aid metrics.
