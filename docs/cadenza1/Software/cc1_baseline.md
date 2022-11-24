---
id: cc1_baseline
title: Baseline
sidebar_label: Baseline
sidebar_position: 14
---

## Track 1

### Diagram

Below, a schematic diagram is shown for the baseline system for the headphone listening scenario:

![Schematic diagram of the baseline system for the headphone listening scenario](/img/Baseline_1.png)

### Description

Music samples are taken from the [Jamendo](https://www.jamendo.com/) and [MedleyDB](https://medleydb.weebly.com/) databases. These are either already separated into "vocal", "drums", "bass, and "other" channels, or optionally (for the Jamendo samples) are given as stereo/mono signals which can later be separated.

The evaluation stage compares the processed audio and a reference (unprocessed) signal to calculate the HAAQI score.

## Track 2

### Diagram

Below, a schematic diagram is shown for the baseline system for the car listening scenario:

![Schematic diagram of the baseline system for the car listening scenario](/img/Baseline_2.png)

### Description

As in Track 1, the music samples are taken from the [Jamendo](https://www.jamendo.com/) and [MedleyDB](https://medleydb.weebly.com/) databases, and are either already separated into "vocal", "drums", "bass, and "other" channels, or optionally (for the Jamendo samples) are given as stereo/mono signals which can later be separated. 

The music samples are then fed into the Music Processor block of the car entertainment system. A level limiter is added afterwards to restrict levels to a sensible value.
The signals are then passed through the BRIR of the car (taken from the [eBrIRD](https://www.phon.ucl.ac.uk/resource/ebrird/) database), and finally through a hearing aid simulator, into which the car noise is also passed.

The evaluation stage compares the processed audio and a reference (unprocessed) signal to calculate the HAAQI score.