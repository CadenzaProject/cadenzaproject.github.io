---
id: intro
title: The 2nd Cadenza Challenge
sidebar_label: Introduction
sidebar_position: 1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::tip[Last news!!]

* Challenge submission window is now closed. Thank you to all participants.
* [**ASA/ICA 2025**](https://acousticalsociety.org/new-orleans-2025/)
  * Cadenza special session: **"Cadenza Machine Learning Challenge (CAD2): Improving Music for People with Hearing Loss."**
:::

The Cadenza Challenges are improving music for people with a hearing loss. Hearing loss causes various problems such as quieter music passages being inaudible, poor and anomalous pitch perception, difficulties identifying and picking out instruments, and problems hearing out lyrics.

<div style={{textAlign:'center'}}>
<img src={useBaseUrl('/img/cad2/SPS_Logo_Color_RGB.png')} alt="IEEE SPS logo" style={{width: 400}} />
</div>

The 2nd Cadenza Challenge (CAD2) is part of the [IEEE SPS Challenge Program](https://signalprocessingsociety.org/publications-resources/challenges-and-data-collections). Open from July 2024 it has two tasks:

1. Improving the intelligibility of lyrics for pop/rock music while not harming audio quality. The scenario is listening over headphones. [More on Task1: Lyrics Intelligibility](Lyric%20Intelligibility/lyrics).

2. Rebalancing the level of instruments within a small classical music ensemble (e.g. string quartet) to 
allow personal remixing for hearing aids users. [More on Task2: Rebalancing Classical Music](Rebalancing%20Classical/rebalancing_overview).

For both tasks, a demix / remix approach could be used. Gains could be applied to the demixed signals before remixing back to stereo to achieve the aims of the challenge. For lyric intelligibility, a simple amplification of the vocals could increase intelligibility, but there are other ways to achieve this that might cause less harm to audio quality. It would also be possible to use other machine learning approaches such as end-to-end transformation for either task.

We provide music signals, software tools, objective metrics and baselines. The two tasks are evaluated using objective metrics. For lyric intelligibility, there will also be perceptual tests with listeners who have hearing loss.

Since listeners may be experiencing live or recorded music, we welcome both causal and non-causal approaches.

To stay up to date please sign up for the [Cadenza Challenge's Google group](https://groups.google.com/g/cadenza-challenge).

:memo: **CAD2 now has cash prizes.**

