---
id: cc1_intro
title: The 1st Cadenza Challenge
sidebar_label: Cadenza 1 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The first Cadenza challenge is about improving the **perceived audio quality of recorded music for people with a hearing loss**.

>What do we mean by audio quality? Imagine listening to a music track in two different ways. First listening via a low quality mp3 played on a cheap cell phone, and then via a high quality wav heard over studio-grade loudspeaker monitors. The underlying music is the same in both cases, but the *audio quality* is very different.

:::caution
Website under construction
:::
# Overview

The two tasks are based on two common listening scenarios:
- Task 1: headphones.
- Task 2: in the car.

You can enter one or both tasks.

## Task 1: Headphones

<iframe width="560" height="315" src="https://www.youtube.com/embed/suGTTolF1e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Someone with a hearing loss is listening via headphones, not using their hearing aids. As Figure 1 shows, the machine learning challenge here is to first demix stereo tracks into a VDBO (vocal, drums, bass and other) representation. This then allows a personalised remixing for the listener that has better audio quality. For example, for some music you might amplify the vocals to improve the audibility of the lyrics.

To evaluate the quality of the demixing, the objective measure HAAQI (Hearing aid audio quality index) is used. The evaluation of the remixed version will be via our listening panel.

The block that can be changed by you is labelled *Enhancement* in Figure 1.

While the main focus is on demixing/remixing, we'll accept entries using alternative signal processing approaches that can improve music for people with a hearing loss. Your entry would replace the whole box labelled enhancement.

<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple_v2.png')} />
<figcaption>Figure 1, The baseline for the headphone listening scenario (Task 1). For simplicity, not all signal paths are shown.</figcaption>
</figure>

## Task 2: Car

<iframe width="560" height="315" src="https://www.youtube.com/embed/lgMNux9A3q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The listener is wearing their hearing aids, sitting in a car and listening to recorded music played over the car stereo. Your task is to process the music played from the stereo to improve the audio quality allowing for the presence of the car noise. You have access to the car speed, which gives an estimation of the power spectrum of the noise but not the noise signal itself, so this is not a noise cancellation task. The block that can be changed is labelled *Enhancement.*

<figure id="fig2">
<img width="800" src={useBaseUrl('/img/car_simple_v2.png')} />
<figcaption>Figure 2, The baseline for the car listening scenario (Task 2  ). For simplicity, not all signal paths are shown.</figcaption>
</figure>