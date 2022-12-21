---
id: cc1_intro
title: The 1st Cadenza Challenge
sidebar_label: Cadenza 1 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The first Cadenza challenge is about improving the perceived audio quality of recorded music for hearing-aid users.

# Overview of the challenge

There will be two common listening scenarios: Track 1 and Track 2. You can enter one or both tracks.

## Track 1: Headphones

Someone listening to recorded music over headphones (but not their hearing aids). Your task is to process the audio to improve the perceived audio quality.

<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple.png')} />
<figcaption>Figure 1, The baseline for the headphone listening scenario (Track 1). For simplicity, not all signal paths are shown.</figcaption>
</figure>

## Track 2: Car

The listener is wearing their hearing aids, sitting in a car and listening to recorded music played over the car stereo. Your task is to process the music played from the stereo to improve the perceived audio quality allowing for the presence of the car noise.

<figure id="fig2">
<img width="800" src={useBaseUrl('/img/car_simple.png')} />
<figcaption>Figure 2, The baseline for the car listening scenario (Track 2). For simplicity, not all signal paths are shown.</figcaption>
</figure>