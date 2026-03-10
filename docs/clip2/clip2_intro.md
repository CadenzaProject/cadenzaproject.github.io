---
id: intro
title: The 2nd Cadenza Lyric Intelligibility Prediction Challenge 
sidebar_label: Introduction
sidebar_position: 1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

<Image img={require('../../static/img/clip2/clip2_landing.jpg')} alt="CLIP1 Challenge" />
Image by <a href="https://pixabay.com/users/cjsinnott0-780578/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=639110">Christopher Sinnott</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=639110">Pixabay</a>

:::info
CLIP2 will be submitted as a proposal for an ICASSP 2027 Grand Challenge;
however, the challenge will run regardless of its acceptance as an official ICASSP Grand Challenge.
:::

To advance in the development of better music processing through machine learning, whether is human performed or AI generated music,
we need reliable ways to evaluate the audio quality. For music with lyrics, this includes metric that assess the intelligibility of the sung words.
There are several factors that can affect intelligibility, including:

* Vocal style and articulation
* Song genre
* Mixing and production techniques
* Listener hearing ability

In 2025, we launched the first lyrics intelligibility challenge, [ICASSP 2026 Challenge (CLIP1)](../clip1/intro),
where we introduced the first dataset constructed to assess lyrics intelligibility (the [CLIP1 dataset](../clip1/data/data)).
The CLIP1 dataset is derived from the FMA dataset, a collection of thousands of master recordings created by different singers and musicians,
covering a wide range of music genres and singing styles. However, the inherent variability in music makes it difficult to comprehensively
capture all possible conditions.

We are now excited to announce the launch of the second lyric intelligibility challenge, which builds on CLIP1
by presenting a new dataset that extends CLIP1 dataset by incorporating new music genres and new listening conditions.

## CLIP2 Dataset

The CLIP2 dataset is a collection of thousands of music excerpts extracted from AI-generated songs created using ElevenLabs. 
Generating music in this way allows us to include pieces from genres that would normally be difficult to 
distribute due to derivative and copyright restrictions.

CLIP2 includes samples from several music genres, ranging from Pop/Rock to Musical Theater and choral music. 
The excerpts will be processed with head-related transfer functions (HRTFs) to represent different listening scenarios and spatial locations. 
Additionally, excerpts will be provided both in their original form and processed through a hearing-loss simulator to 
mimic listeners with hearing loss who are not wearing hearing aids.

ElevenLabs is an AI research and product company that offers music generation services. 
Their models are trained on properly licensed music through agreements with organizations such as Merlin and Kobalt, 
ensuring fair use of artists' work. 

## Challenge Overview

Participants will build models to predict lyrics intelligibility from audio recordings.
The intelligibility metric would be derived from a predictive model that takes audio as input and
estimates the score a listener would likely achieve in a listening test.

## What will be provided?

* A dataset of song excerpts.
* All samples will include lyrics intelligibility scores from listening tests.
* Software and baseline system.
