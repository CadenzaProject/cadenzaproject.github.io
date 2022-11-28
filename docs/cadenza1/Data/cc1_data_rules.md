---
id: cc1_data_rules
title: Rules
sidebar_label: Rules
sidebar_position: 3.3
---

## What information can I use?

### Training and development

There is no limit on the amount of training data that can be generated using our tools and training data sets. Teams can also use their own data for training or expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool. Any audio or metadata can be used during training and development, but during evaluation, the proposed simulated hearing aid or Enhancement Processor will not have access to all of the data (see next section).

### Evaluation

**The only data that can be used by the Enhancement Processor during evaluation are

- The audio input signals (the sum of the target and interferers for each hearing aid microphone).
- The listener characterisation (pure tone air-conduction audiograms and/or digit triple test results).
- The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)
- The head-rotation signal (but if used, a version of the system that does not use it should also be prepared for comparison.)**


## Computational restrictions

- Teams may choose to use all, some or none of the parts of the baseline model.
- Systems must be causal; the output from the hearing aid at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms).
- There is no limit on computational cost.

## Submitting multiple entries

You can submit two entries, where one is optimised for HAAQI and the other for listening tests if you wish. In this case:

- Both systems must be submitted for HAAQI evaluation.
- You must register two teams, submitting each entry as a different team.
- In your documentation, you must make it clear which has been optimised for listening tests and the relationship between the two entries.
- **head-rotation**: if the head-rotation signal is used then a second entry must be submitted that does not use it and allows the benefit to be measured.

We will assume that if only one of these systems is to go forward to listening tests, your preference is to use the one optimised for listening tests.

## Evaluation of systems

### Stage 1: Objective evaluation

- Entries will be ranked according to average HAAQI score across all signals in the evaluation dataset. We will use the HAAQI implementation in the baseline system.

### Stage 2: Listening test evaluation

- There is a limit on how many systems can be evaluated by the listener panel.
- A maximum of two entries can go through to the listener panel from any individual entrant. Furthermore, a second will only be allowed if it is judged by us to use significantly different signal processing approaches.
- We will choose which will go to the listener panel based on
   - The top N scored using the objective metric HAAQI.
   - A sample of M others that use contrasting and promising approaches.