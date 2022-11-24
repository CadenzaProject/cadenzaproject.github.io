---
id: cc1_intro
title: The 1st Cadenza Challenge
sidebar_label: CC1 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

The first Cadenza challenge is about improving the perceived audio quality of recorded music for hearing-aid users.

# Overview of the challenge

Overview with a video?

There will be two different scenarios in this challenge, referred to as "Track 1" and "Track 2". Participants can submit solutions for both or just one of these.


## Track 1

This will focus on a simple and common listening setup: listening to recorded music over headphones. A hearing impaired user wearing headphones (but not their hearing aids) listens to a piece of recorded music. Your task is to process the audio to improve the perceived quality.

### Diagram

Below, a schematic diagram is shown for the baseline system for the headphone listening scenario:

![Schematic diagram of the baseline system for the headphone listening scenario](/img/Baseline_1.png)

### Description

Music samples are taken from the [Jamendo](https://www.jamendo.com/) and [MedleyDB](https://medleydb.weebly.com/) databases. These are either already separated into "vocal", "drums", "bass, and "other" channels, or optionally (for the Jamendo samples) are given as stereo/mono signals which can later be separated.

The evaluation stage compares the processed audio and a reference (unprocessed) signal to calculate the HAAQI score.


## Track 2

This will focus on another common, but more complex, listening setup: listening to music on a car stereo. A hearing impaired user wearing their hearing aids, sitting in a car, listens to recorded music played over the car stereo. Your task is to process the music played from the stereo to improve the perceived audio quality and reduce the effects of the car noise.

### Diagram

Below, a schematic diagram is shown for the baseline system for the car listening scenario:

![Schematic diagram of the baseline system for the car listening scenario](/img/Baseline_2.png)

### Description

As in Track 1, the music samples are taken from the [Jamendo](https://www.jamendo.com/) and [MedleyDB](https://medleydb.weebly.com/) databases, and are either already separated into "vocal", "drums", "bass, and "other" channels, or optionally (for the Jamendo samples) are given as stereo/mono signals which can later be separated. 

The music samples are then fed into the Music Processor block of the car entertainment system. A level limiter is added afterwards to restrict levels to a sensible value.
The signals are then passed through the BRIR of the car (taken from the [eBrIRD](https://www.phon.ucl.ac.uk/resource/ebrird/) database), and finally through a hearing aid simulator, into which the car noise is also passed.

The evaluation stage compares the processed audio and a reference (unprocessed) signal to calculate the HAAQI score.
