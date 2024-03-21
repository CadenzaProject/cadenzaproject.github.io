---
id: intro
title: The 2nd Cadenza Challenge
sidebar_label: CAD2 Announcement
sidebar_position: 1
---
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The Cadenza Challenges are improving the **perceived audio quality of music for people with a hearing loss**.
According to The World Health Organization, 430 million people worldwide have a disabling hearing loss. 
Hearing loss causes various problems when listening to music such as making picking out lyrics more difficult.

The 2nd Cadenza Challenge (CAD2) starting in 2024 has two tasks:

1. Improving the intelligibility of lyrics for pop/rock music while not harming audio quality. The scenario is listening over headphones. More details
of this task can be found on the [Lyrics Intelligibility](lyrics) page.

2. Rebalancing the level of instruments within a music ensemble (e.g. string quartet) to 
match the preference of hearing aids users. A more detailed description of this can be found on the 
[Rebalancing Classical Music](rebalancing) page.

For both tasks, a demix / remix approach could be used. Gains could be applied to the demixed signals before remixing back to stereo to achieve the aims of the challenge. For lyric intelligibility, a simple amplification of the vocals could increase intelligibility, but there are other ways to achieve this that might cause less harm to audio quality. It would also be possible to use other machine learning approaches such as end-to-end transformation.

Cadenza will provide challenge entrants with music signals and targets that represented the listener's preferences for an improved music experience. 
Entrants are asked to process the music signals to achieve the expected target. The challenge is evaluated using objective metrics and with a perceptual tests with listeners who have hearing loss. We will provide software tools, metrics and baselines to aid your work.

Since listeners may be experiencing live or recorded music, CAD2 welcomes both causal and non-causal approaches.

To stay up to date please sign up for the [Cadenza Challenge's Google group](https://groups.google.com/g/cadenza-challenge).

{/*

## Audio quality metric

In the CAD1 challenge listener test, we collected several subjectives scores from a panel of more than 50 listeners with hearing loss.
This panel scored several audio signals processed/optimised to their hearing characteristics. The panel scored the signals
across several dimensions, including the general audio quality, the frequency balance, the distortion and the clarity. 
You can watch a summary of the panel study [here](../../../blog/Listener%20panel%20study%20update). Using the data we collected, we are developing an audio quality metric that we will plan to use to evaluate the systems.

*/}

