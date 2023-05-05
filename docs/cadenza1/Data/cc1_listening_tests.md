---
id: cc1_listening_tests
title: Listening tests
sidebar_label: Listening tests
sidebar_position: 5.4
---

## 1. Overview

The listeners will be provided with Sennheiser PC-8 USB headsets to complete the listening experiment. The experiment will be run via a browser-based audio player. We will instruct participants to use a quiet room. The software will play a piece of music, then the participant will respond with their grading of audio quality on a set of scales.

***

## 2. Levels

For safety reasons, we allow participants to set the overall audio volume so that the sounds are not so loud as to be uncomfortable. This means that we cannot be sure at what dB SPL the signals will be presented (and as we don’t have any individual measures of loudness recruitment, we don’t know how loud they will seem to the participants either). It’s worth bearing in mind that should your signals overall seem too loud to be comfortable to a participant, they may well turn down the volume themselves.
 
Our measurements of PC-8 headsets: 

* A 1-kHz pure tone set to unity gain (RMS 0.707) with soundcard volume at 100% produces a level of 99 dB SPL using an artificial ear with 2 cc coupler (IEC 60318–1).
* A steady-amplitude “ICRA speech-shaped noise” ([1] track 1), scaled to 0.3 RMS, with soundcard volume at 100% produces an A-weighted level of 90 dB SPL at the same volume level. With this RMS, the noise had 0.1% of its samples clipped.

Accordingly, in the submitted signals, 0 dB FS should correspond to 99 dB SPL (at 1 kHz).

***

## 3. Music samples

- A subset of music tracks (probably ~30) will be used from the evaluation dataset.
- A 10-second sample will be extracted from each music track at a random time point and a short fade-in and fade-out applied.
- The code for extracting samples will be provided, please see [Additional Tools](../Software/cc1_additional_tools)

***

## 4. Listening test design

The listening test will probably have a combinatorial design so that each listener hears entries from each team. Subjects will evaluate the samples on 4-5 perceptual sliders: 

- One of these scales will be for perceived overall basic audio quality. This will be used to rank the entrants. Perceived audio quality is about well the music meets a person’s expectations of how the music should ideally sound.
- The other scales will be used to rate aspects of the audio quality. We have been working with a sensory panel to develop these, and the current short-list for the scales as of March 2023 is: Clarity, Harshness, Distortion, Frequency Balance and Spaciousness. This data will be used to produce an improved objective measure for audio quality for future challenges. 

There will be approximately 50 members on the panel, and each listener will provide scores for every system, using a subset of the total music samples. Should a listener drop out from the panel, we will endeavour to replace them with someone with a similar hearing loss, but should that prove impractical we will reduce the size of the panel.

The number of samples listened to will depend on the total number of systems, but the maximum listening time will be approximately 5 hours per panel member.

Listeners will hear samples that have been processed for their audiogram only, or if we do not have audiograms for all listeners, then they will hear samples processed for an audiogram of the same type.

***

## 5. References

<a name="refs"></a>

1. ICRA standard noises, [https://icra-audiology.org/Repository/icra-noise](https://icra-audiology.org/Repository/icra-noise). We used track #1.
