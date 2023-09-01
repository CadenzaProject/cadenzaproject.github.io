---
id: intro
title: The ICASSP 2024 Cadenza Grand Challenge
sidebar_label: ICASSP 2024 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

# Overview
Someone with a hearing loss is listening to music via their hearing aids or headphones. The challenge is to develop a signal processing system that allows a personalised rebalancing of the music to improve the listening experience, for example by amplifying the vocals relative to the sound of the band. One approach to this would be to a demix the music and then apply gains to the separated tracks to change the balance of the remixed music.

## Why this challenge?
There is a global challenge of an ageing population, which will contribute to 1 in 10 people having disabling hearing loss by 2050. Hearing loss causes problems when listening to music. It can make picking out lyrics more difficult, with music becoming duller as high frequencies disappear. This reduces the enjoyment of music and can lead to disengagement from listening and music-making, reducing the health and well-being effects people otherwise get from music. We want to get more of the ICASSP community to consider diverse hearing and so allow those with a hearing loss to benefit from the latest signal processing advances.

## The Task 
As Figure 1 shows, the baseline first demixes stereo tracks into a VDBO (vocal, drums, bass and other) representation. This then allows a personalised remixing for the listener by changing the level of the different elements of the music. We provide the desired gains for the remixing. The "NAL-R" amplification is a standard way of compensating for the hearing loss of listeners. To evaluate the quality of the remixing, we will use the objective metric 
[HAAQI (Hearing aid audio quality index)](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech#haaqi-hearing-aid-audio-quality-index).

<figure id="fig1">
<img width="800" src={useBaseUrl('/img/headphone_simple_v3.png')} />
<figcaption>Figure 1, The baseline system.</figcaption>
</figure>

The block that can be changed by you is labelled *Enhancement* in Figure 1. While the baseline frames the problem as demixing/remixing, alternative approaches are very welcome. We are interested in systems that are either: (i) causal and low latency for live music, and (ii) non-causal for recorded music.

# What is provided

* Music datasets for training and evaluation.
* Listener characteristics, including audiograms.
* Target gains for the remix.
* Software including tools for augmenting training data, a baseline system, and code for scoring signals using the HAAQI metric.

# Organizers

* Professor Trevor Cox, Dr Simone Graetzer, Dr Gerardo Roa, Dr Rebecca Vos, Dr Bruno Fazenda  
  **Acoustic Engineering, University of Salford**
* Professor Jon Barker  
  **Computer Science, University of Sheffield**
* Professor Michael Akeroyd, Dr Bill Whitmer, Dr Jenny Firth  
  **School of Medicine, University of Nottingham**
* Professor Alinka Greasley, Dr Scott Bannister  
  **School of Music, University of Leeds** 