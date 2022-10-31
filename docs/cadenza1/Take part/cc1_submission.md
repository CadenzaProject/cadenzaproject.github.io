---
id: cc1_submission
title: Submission
sidebar_label: Submission
sidebar_position: 8
---

:::info
All teams are required to register LINK HERE prior to submission and before the registration deadline August 28th.
:::
 <!-- [required to register](Take_part/cc1_registration) -->
We will be operating a two-stage submission process:

- **Stage 1**: Evaluation using HASPI
- **Stage 2**: Evaluation using listening panel

Key dates.

- **July 25th**: Evaluation data release for HASPI evaluation for all entrants.
- **Aug 28th**: Registration deadline.
- **Sept 1st**: All entrants submit (i) audio for HASPI evaluation and (ii) a draft of their technical report.
- **Sept 8th**: Deadline by which all entrants must submit two page technical reports to Clarity-2022 workshop.
- **Sept 8th**: Entrants informed which systems are going forward to the listening test evaluation stage. Evaluation data for listening tests released to those entrants.
- **Sept 15th**: Entrants submit audio for listening tests.


## What evaluation data is provided?

The evaluation data consists of 1500 scenes. For each scene, you are provided with the signals received at each of the three microphones on the left and right hearing aid device. You will also be provided with JSON or csv formatted metadata consisting of

  1. the audiograms and DTT results for a set of listeners and
  2. a mapping of which listeners will listen to which scenes.

There will also be some clean audio examples for the target talker, that are not the same as the target utterance.

For the stage 1 HASPI evaluation, there will be one listener per scene and the scene-listener mapping will be the same for all teams.

For the stage 2 listening test evaluation, there will be five listeners per scene and each team will have a separate scene-listener mapping. The file formats will be the same as used for the development data; for details see the LINK HERE page.
<!-- [CEC2 Data](/Data/id: cc1_data_overview) -->

## What audio do I need to submit?

You must submit the audio signals produced at the output of your simulated hearing aid for the evaluation datasets. You will be asked to provide two sets of signals: the first for the HASPI evaluation and the second for the listening tests (see submission dates above).

Signals should be submitted as 16-bit WAV files with a 32 kHz sampling rate, and 0 dB FS corresponds to 100 dB SPL, given the capabilities of the listening test reproduction equipment. The format of signals submitted for HASPI evaluation and for the listening tests is the same.

We also encourage you to submit your simulated hearing aid code.
<!-- [listening tests](docs/Take part/cc1_listening_tests) -->
See the page on LINK HERE for more information about the levels that can be reproduced by the listening test equipment. When playing signals to listeners we will then play them as is. The responsibility for the final signal level is therefore yours. It’s worth bearing in mind that should your signals overall seem too loud to be comfortable to a participant, they may well turn down the volume themselves.

## Naming and packaging signals
<!-- [data page](/Data/cc1_data_overview) -->
Your processed signals should be named using the conventions used by the baseline system, i.e., `<Scene ID>_<Listener ID>_HA-output.wav` and explained on the LINK HERE.
These should be placed in a directory whose name is the unique team ID that you will be sent, e.g., `E001` and  then packaged using `zip` or `tar` or any standard packaging tool.
The resulting file should be about 2 GB for the first round.

## Technical report

- The two page technical report must be submitted as a paper to the Clarity-2022 Workshop. Deadline - see date above. An author kit and submission instructions will be made available.
- A draft of the report needs to be uploaded to the Google Drive along with your HASPI signals - see above for deadline. The draft needs to be sufficiently complete for us to judge whether your system is compliant with the challenge rules.
- Your report should include an abstract and introduction and sections on experimental setup/methodology including system information and model/network architecture, evaluation/results, discussion, conclusion and references. Please provide an estimation of the computational resources needed. You must describe any external data and pre-existing tools, software and models used.

## How will intellectual property be handled?

See LINK HERE under Intellectual Property.
<!-- [here](\docs\cadenza1\Take_part\cc1_rules.md) -->
## Where do I submit the signals?

When you have registered you will receive a link to a Google Drive to which you will be able to securely upload your signals. You will be able to use the same link to upload materials for both the 1st submission and the 2nd submission if you are selected for the 2nd round. We also encourage you to submit your simulated hearing aid code via this link.

Materials uploaded will be visible to the Clarity Team but not to other entrants.

:::warning
Note, in order to use the Google Drive you will need to have a Google account. If you anticipate problems using Google then please make arrangements to send us the materials by other means, e.g., via a service such as WeTransfer or similar.
:::
