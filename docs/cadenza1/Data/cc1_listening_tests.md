---
id: cc1_listening_tests
title: Listening tests
sidebar_label: Listening tests
sidebar_position: 3.3
---

Depending on the number of submissions, most of the evaluation will be via subjective evaluation of a panel of hearing impaired listeners.

## Overview

The listeners will be provided with a USB stereo headset to complete the listening experiment. The experiment will be run by online-experiment software using a HTML/PHP audio player. The software will play a piece of music, then the participant will respond with their grading of it on the scales developed by our earlier panels. We will ask that the participant uses a quiet room for the experiment.
 
Our plan is that each listener will undertake a few hours of listening and evaluate signals from every entrant. We will use a combinatorial design to equate this as far as possible. Should a listener drop out from the panel, we will endeavour to replace them with someone with a similar hearing loss, but should that prove impractical we will reduce the size of the panel, and inform entrants which listener has withdrawn.


## Hardware

We will be using Sennheiser PC-8 USB headsets to play the sounds to our participants. For safety reasons we have to allow participants to set the overall audio volume so that the sounds are not so loud as to be uncomfortable to them. This means that we cannot be sure at what dB SPL the signals will be presented (and as we don’t have any individual measures of loudness recruitment, we don’t know how loud they will seem to the participants either). It’s worth bearing in mind that should your signals overall seem too loud to be comfortable to a participant, they may well turn down the volume themselves.
 
Our measurements of PC-8 headsets: 
* A 1-kHz pure tone set to unity gain (RMS 0.707) with soundcard volume at 100% produces a level of 99 dB SPL using an artificial ear with 2 cc coupler (IEC 60318–1).
* A steady-amplitude “ICRA speech-shaped noise” ([1] track 1), scaled to 0.3 RMS, with soundcard volume at 100% produces an A-weighted level of 90 dB SPL at the same volume level. With this RMS, the noise had 0.1% of its samples clipped.
Accordingly in the submitted signals, 0 dB FS should correspond to 99 dB SPL (at 1 kHz).


## Music samples

A small number of music tracks (probably ~30) will be processed by the entrants for the listening test evaluation.
One 10-second sample will be extracted from each music track at a random time point across tracks with a short fade-in and fade-out.

The code for extracting samples will be provided to entrants, please see [Additional Tools](/docs/cadenza1/Software/cc1_additional_tools)


## Listening test design

The listening test will have a combinatorial design so that each listener hears entries from each team, and evaluates them using a series of 4-5 perceptual sliders. 

There will be approximately 50 members on the panel, and each listener will provide scores for every system, using a subset of the total music samples.

The number of samples listened to will depend on the total number of systems, but the maximum listening time will be approximately 5 hours per panel member.

Listeners will hear samples that have been processed for their audiogram only, or if we do not have audiograms for all listeners, then they will hear samples processed for an audiogram of the same ‘type’.

## References

<a name="refs"></a>

1. ICRA standard noises, [https://icra-audiology.org/Repository/icra-noise](https://icra-audiology.org/Repository/icra-noise). We used track #1.
