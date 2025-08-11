---
id: intro
title: The 1st Cadenza Lyric Intelligibility Prediction Challenge 
sidebar_label: Introduction
sidebar_position: 1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Admonition from '@theme/Admonition';


<Image img={require('../../static/img/clip1/clip1_landing.jpg')} alt="A lead singer of a band singing into a microphone" />
Image by <a href="https://pixabay.com/users/sabena206-20184104/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5989931">Sabena Costa</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5989931">Pixabay</a>

<Admonition type="tip" icon="🎯" title="ICASSP 2026 - Grand Challenge Proposal">
  CLIP1 has been accepted as an ICASSP 2026 SP Grand Challenge.
</Admonition>

To develop better music processing through machine learning, we need a reliable way to automatically evaluate audio quality.
For music with lyrics, this includes a metric to assess the intelligibility of the sung words.
Some songs are intrinsically less intelligible than others. Factors that can affect intelligibility include:

* Vocal style and articulation
* Song genre
* Mixing and production techniques
* Listener hearing ability

For speech technologies, intelligibility metrics have played a vital role in improving signal processing and machine learning, we hope the same can be achieved for music.

## Challenge Overview

Participants will build models to predict lyrics intelligibility from audio recordings.
The intelligibility prediction model will take audio as input and 
then estimate the score a listener would likely achieve in a listening test.

## What will be provided?

* A dataset of song excerpts, some excerpts will be provided as-is and others will be passed through a hearing loss 
simulator to mimic listeners with hearing loss but not wearing hearing aids.
* All samples will include lyrics intelligibility scores from listening tests. 
* Software and baseline system.

## Expressing interest

If you are interested in this challenge and intend to participate, please express your interest by filling out the form on the [registration page](take_part/registration).
By doing so, you will help us better plan for a successful challenge.

You can also sign up to our [Google group](https://groups.google.com/g/cadenza-challenge) for alerts and discussions about our challenges.

