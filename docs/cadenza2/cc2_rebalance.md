---
id: rebalancing
title: "Arm 2: Rebalancing Classical Music"
sidebar_label: Rebalancing Classical Music
sidebar_position: 3
---
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

In a survey conducted by [Alinka et al.](#refs), users of hearing aids reported several issues when listening to music,
including distortion in the bass, difficulties in perceiving the full range of the music, especially high-frequency pitches,
and a tendency to miss the impact of quieter parts of compositions.

In a pilot study conducted by the Cadenza Team,we found that tools enabling users to rebalance different instruments
in a classical music ensemble are highly desirable for those with hearing aids. Therefore, in this second arm,
we present a classical music rebalancing challenge.

Participants will be provided with classical music datasets featuring ensembles comprising two to five instruments,
as well as listeners' hearing characteristics or [Audiograms](../learning_resources/Hearing_impairment/edu_measuring_HI).
Additionally, participants will receive information regarding the expected gains for each instrument in the ensemble.
They will then be tasked with producing a rebalanced track from the original mixture.

The following example illustrates how changing the level of one instrument can change the listening experience.
The piece corresponds to an ensemble of 5 instruments of Bass, Cello, Viola, Violin 1 and Violin 2 drawn from the
EnsembleSet dataset. The first sample corresponds to the original mixture. The second sample is the original track
with the Violin 1 levels increased in 6 dB and keeping the rest unchanged. The last sample shows the original track
with the Viola levels increased in 10 dB keeping the rest unchanged.

|          |                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------|
| Original | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_original.mp3' />  |
| Violin 1 | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_violin.mp3' />    |
| Viola    | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_viola.mp3'/>      |