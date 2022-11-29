---
id: cc1_data_rules
title: Rules
sidebar_label: Rules
sidebar_position: 3.3
---

<!-- copied to submission>rules, to be deleted -->
## What information can I use?

### Training and development

There is no limit on the amount of training data that can be generated using our tools and training data sets. Teams can also expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool. All the audio or metadata can be used during training and development.

### Evaluation

The only data that can be used to process the evaluation dataset for each track are:

### Track 1: Headphones

- The listener characterisation (e.g. pure tone air-conduction audiograms).
- The reference audio mix.
- The audio input signals to the headphones.
- The metadata and raw music from the databases (e.g. Jamendo, MedleyDB, etc)

### Track 2: Car

- The listener characterisation (e.g. pure tone air-conduction audiograms).
- The reference audio mix.
- The audio input signals to the Car Infotainment System.
- The metadata and raw music from the databases (e.g. Jamendo, MedleyDB, etc).
- The car noise metadata (e.g. car speed).

## Computational restrictions

- Teams must start with the baseline, but the following parts may be altered:
-- The mixer/processing that takes the raw music and metadata and creates input signals for the heaphones/car infotainment system.
-- The headphone processor (track 1)
-- The car infotainment processor (track 2)
-- HAAQI does not have to be used during development, but we will use this for evaluation.
- There is no need for processing to be causal (the scenario is reproducing recorded music).
- There is no limit on computational cost.

## Submitting multiple entries

You can submit two entries, where one is optimised for HAAQI and the other for listening tests if you wish. In this case:

- Both systems must be submitted for HAAQI evaluation.
- You must register two teams, submitting each entry as a different team.
- In your documentation, you must make it clear which has been optimised for listening tests and the relationship between the two entries.

We will assume that if only one of these systems is to go forward to listening tests, your preference is to use the one optimised for listening tests.

## Evaluation of systems

### Stage 1: Objective evaluation

- Entries will be ranked according to average HAAQI score across all signals in the evaluation dataset. We will use the HAAQI implementation in the baseline system.

### Stage 2: Listening test evaluation

- There is a limit on how many systems can be evaluated by the listener panel.
- The expectation is that only one entry can go through to the listener panel from any entrant.
- We will choose which will go to the listener panel based on
   - The ones that score best using the objective metric HAAQI.
   - A sample of others that use contrasting and promising approaches.