---
id: cc1_listening_tests
title: Listening tests
sidebar_label: Listening tests
sidebar_position: 4
---

## Overview

The listeners will be provided with a USB stereo headset to complete the listening experiment. The experiment will be run by our “Listen@Home” web software running on either the participant’s own computer or a tablet we supply. The software plays each sentence once, then the participant speaks aloud what they think was said by the target talker. Their response is recorded by the headset’s microphone for offline scoring. We ask that the participant uses a quiet room for the experiment.

Intelligibility will be evaluated as the number of words identified correctly in the sentence.

Our plan is that each listener will undertake a few hours of listening and evaluate sentences from every entrant. We will use a combinatorial design to equate this as far as possible.

Should a listener drop out from the panel, we will endeavour to replace them with someone with a similar hearing loss, but should that prove impractical we will reduce the size of the panel, and inform entrants which listener has withdrawn.

## Listen@Home hardware

We will be using Sennheiser PC-8 headsets to play the sounds to our participants. We will allow participants to set the volume so that the sounds are not so loud to be uncomfortable. Without loudness-recruitment measures for our listeners, we cannot be sure just what loudnesses every participant will hear, so we need to allow them to make the choice here.

We have measurements of the output capability of a system in the laboratory:

- A 1 kHz pure tone set to be the most powerful it can be (i.e., an amplitude range of +/-1 = RMS amplitude of 0.707, and the volume controls at 100%) gave 99 dB(A) SPL on the PC-8 headphones.
- An ICRA speech-shaped noise \[[1](#refs)\], unmodulated in time, and scaled to an RMS of 0.3, gave 90 dB(A) at the same volume level. With this RMS, the noise had 0.1% of its samples clipped at +/- 1.

Due to the above capabilities of the reproduction equipment, in the submitted signals, 0 dB FS should correspond to 100 dB SPL. We will also require the signals to be provided as 16-bit WAV files with a 32 kHz sampling rate.

We will play the signals as is using an HTML/PHP audio player coded on a webpage. The responsibility for the final signal level is therefore yours. It’s worth bearing in mind that should your signals overall seem too loud to be comfortable to a participant, they may well turn down the volume themselves.

## References

<a name="refs"></a>

1. ICRA standard noises, [https://icra-audiology.org/Repository/icra-noise](https://icra-audiology.org/Repository/icra-noise). We used track #1.
