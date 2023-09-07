---
id: intro
title: The ICASSP 2024 Cadenza Grand Challenge
sidebar_label: ICASSP 2024 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info

This website is Under Construction!!   
Please, refer to the challenge [timeline](take_part/key_dates) to know when the datasets and software will be available.

:::


# Overview
Someone with a hearing loss is listening to music via their hearing aids or headphones. 
The challenge is to develop a signal processing system that allows a personalised rebalancing of the music to 
improve the listening experience, for example by amplifying the vocals relative to the sound of the band.
One approach to this would be to a demix the music and then apply gains to the separated tracks to change the balance when the music is downmixed to stereo.

## What makes the demix more difficult than previous demix challenges?
The left and right signals you are working with are those picked up by a microphone at each ear when the person is listening to a pair of stereo loudspeakers. This means the signals at the ear that you have for demix, is a combination of both the right and left stereo signals because of cross-talk (see Figure 1). This cross-talk will be strongest at low frequency, when the wavelength is largest. This means that the spatial distribution of an instrument will be different in the microphone signals at the ear, compared to the original left-right music signals. Stereo demix algorithms will need to be revised to allow for this frequency-dependent change. We will model the cross-talk using HRTFs (Head Related Transfer Functions).

<figure id="fig1">
<img width="300" src={useBaseUrl('/img/icassp_2024/cross-talk-hrtf.png')} />
<figcaption>Figure 1, The scenario.</figcaption>
</figure>

In the long term, any demix approaches will need to be causal and low latency. For ICASSP 2024, we are allowing causal <u>and</u> non-causal approaches. For those attempting to make a low latency solution, this is much more challenging!


## Why this challenge?
There is a global challenge of an ageing population, which will contribute to 1 in 10 people having disabling hearing loss by 2050. Hearing loss causes problems when listening to music. It can make picking out lyrics more difficult, with music becoming duller as high frequencies disappear. This reduces the enjoyment of music and can lead to disengagement from listening and music-making, reducing the health and well-being effects people otherwise get from music. We want to get more of the ICASSP community to consider diverse hearing and so allow those with a hearing loss to benefit from the latest signal processing advances.

## Do I need to know about hearing loss and hearing aids?
No. We provide code for a standard amplification that is done by simple hearing aids. The challenge is mostly about rebalancing the music. We use a metric developed for hearing aids, but you could use another quality metric like SDR to develop your systems. You also don't need to demix, if you prefer to take another approach.


