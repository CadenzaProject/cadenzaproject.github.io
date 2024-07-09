---
id: rebalancing
title: "Task 2: Rebalancing Classical Music"
sidebar_label: Why Rebalancing?
sidebar_position: 3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

<Image img={require('../../../static/img/cad2/classical_music.jpeg')} alt="Danish String Quartet Sebastian Manz Klarinette Heidelberger Frühling 2013" />
Image by Port(u*o)s oder Phil Ortenau from <a href="https://commons.wikimedia.org/wiki/File:Danish_String_Quartet_Sebastian_Manz_Klarinette_Heidelberger_Fr%C3%BChling_2013_Bild_15.JPG" target="_blank">Wikimedia Commons</a>

In a pilot study, we found listeners with hearing loss liked the ability to rebalance the different instruments in an ensemble. Consequently, your task is to develop a system that can take a stereo recording of a small classical ensemble and change the levels of the instruments in the mix by applying specified gains. Ensembles will have between two and five instruments. Signals will be scored objectively by HAAQI (Hearing Aid Audio Quality Index) [1].

This task could be tackled by demixing the stereo into the separate instruments, applying the requested gains and downmixing back to stereo. Compared to previous demix challenges a novelty is doing this for classical music instead of pop/rock. Additional novelty could also come from a causal algorithm, if you decide to make something that works for live music. Of course there are other approaches such as end-to-end transformation that might be adapted for the task.

The following example illustrates how changing the level of one instrument can alter the listening experience. The piece consists of an ensemble of five instruments: Bass, Cello, Viola, Violin 1, and Violin 2, drawn from the EnsembleSet dataset. 
The first sample corresponds to the original mixture. The second sample is the original track with the Violin 1 levels increased by 6 dB while keeping the rest unchanged. The last sample demonstrates the original track with the Viola levels increased by 10 dB while keeping the rest unchanged.

|          |                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------|
| Original | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_original.mp3' />  |
| Violin 1 | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_violin.mp3' />    |
| Viola    | <ReactPlayer pip controls volume="0.25" width="300px" height="50px" url='/audios/cad2/classical_viola.mp3'/>      |
