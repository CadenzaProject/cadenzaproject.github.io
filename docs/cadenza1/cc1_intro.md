---
id: cc1_intro
title: The 1st Cadenza Challenge
sidebar_label: Cadenza 1 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The first Cadenza challenge is about improving the **perceived audio quality** of recorded music for people with a hearing loss.

>What do we mean by audio quality? Imagine listening to a music track in two different ways. First listening via a low quality mp3 played on a cheap cell phone, and then via a high quality wav heard over studio-grade loudspeaker monitors. The underlying music is the same in both cases, but the *audio quality* is very different.

# Overview of the challenge

There will be two common listening scenarios:
- Task 1: headphones.
- Task 2. in the car.

You can enter one or both tasks.

## Task 1: Headphones

Someone is listening via headphones, and not using their hearing aids. As Figure 1 shows, the machine learning challenge here is to demix stereo tracks into a VDBO (vocal, drums, bass and other) representation, to allow a personalised remixing for the listener that has better audio quality. For example, for some tracks you might amplify the demixed vocal to improve the ability of the listener to hear the lyrics.

To evaluate the quality of the demixing, the objective measure HAAQI (Hearing aid audio quality index) is used. The evaluation of the remixed version will be via our listening panel.

The block that can be changed by you is labelled *Enhancement* in Figure 1.

While the main focus is on demixing/remixing, we'll accept entries using alternative signal processing approaches that can improve music for people with a hearing loss. Your entry would replace the whole box labelled enhancement.


<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple_v2.png')} />
<figcaption>Figure 1, The baseline for the headphone listening scenario (Task 1). For simplicity, not all signal paths are shown.</figcaption>
</figure>

## Task 2: Car

The listener is wearing their hearing aids, sitting in a car and listening to recorded music played over the car stereo. Your task is to process the music played from the stereo to improve the audio quality allowing for the presence of the car noise. You have access to the car speed, which only gives an estimation of the power spectrum of the noise, so this is not a noise cancellation task. The block that can be changed is labelled *Enhancement.*

<figure id="fig2">
<img width="800" src={useBaseUrl('/img/car_simple_v2.png')} />
<figcaption>Figure 2, The baseline for the car listening scenario (Task 2  ). For simplicity, not all signal paths are shown.</figcaption>
</figure>