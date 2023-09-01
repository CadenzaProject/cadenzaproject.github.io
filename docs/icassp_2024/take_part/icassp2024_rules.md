---
id: ICASSP2024_rules
title: Rules
sidebar_label: Rules
sidebar_position: 2.4
---


## 1. Teams

- Teams must have [pre-registered](cc1_registration.mdx) and nominated a contact person.
- Teams can be from one or more institutions.
- The organisers may enter the challenge themselves but will not be eligible to win any prizes.

## 2. Transparency

- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- Teams are encouraged to make their code open source.
- Anonymous entries are allowed but will not be eligible for any prizes.
- Teams may reserve the right to be referred to using anonymous code names in the published rank ordering.

## 3. What information can I use?

### 3.1. Training and development

There is no limit on the amount of training data that can be generated using our tools and training data sets. Teams can also expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool. All the audio or metadata can be used during training and development.

You should **not** use the evaluation data set for training or tuning the system.

### 3.2. Evaluation

The only data that can be used to *enhance* the evaluation data are:

#### Task 1: Headphones

- The listener characterisation (e.g. audiogram).
- The stereo music input signals to the headphones.

#### Task 2: Car

- The listener characterisation (e.g. audiogram).
- The audio input signals to the car stereo.
- The metadata for the car noise generator (e.g. the speed).
- The SNR of the music and the car noise at the hearing aid's microphones.
- The angle of the listener's head rotation.

## 4. Computational restrictions

- There is no need for processing to be causal, as both scenarios are for recorded music.
- There is no limit on computational cost.
- Teams must start with the baseline, with the blocks that can be changed labelled *Enhancement* in [Figure 1](../cc1_intro#track-1-headphones) and [Figure 2](../cc1_intro#track-2-car) in the first challenge [Overview](/docs/cadenza1/cc1_intro#overview). These are:
	- Task 1: the headphone demixer/remixer. 
	- Task 2 the car stereo processer.
- While HAAQI is being used to complement the listening panel evaluation, other metrics and approaches can be used by the teams.

## 5. Submitting multiple entries

You can submit two entries, where one is optimised for HAAQI and the other for listening tests if you wish. In this case:

- You must register two teams, submitting each entry as a different team.
- In your documentation, you must make it clear, which has been optimised for listening tests and the relationship between the two entries.
- Both systems will be evaluated via HAAQI.

## 6. Evaluation of systems

### 6.1. Stage 1: Objective evaluation

Entries will be ranked according to average HAAQI score across all signals in the evaluation dataset. We will use the HAAQI implementation in the baseline system. For Task 1 headphones, the HAAQI evaluation will be on the demixed signals, for Task 2 car, the HAAQI evaluation is on the output of the hearing aid.

For anyone entering Task 1 by a different approach to demixing/remixing, their entries will not be objectively evaluated, because no suitable metric currently exists.

### 6.2. Stage 2: Listening test evaluation

- There is a limit on how many systems can be evaluated by the listener panel.
- The expectation is that only one entry can go through to the listener panel from any entrant.
- We will choose which ones will go to the listener panel based on:
   - The scores by the objective metric HAAQI.
   - The approach detailed in the technical report.
   - Informal listening by the Cadenza team.

## 7. Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions. Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to these.

The "submission" constitutes the audio files submitted to the challenge and the accompanying technical report.

The Challenge is organised by the Challenge Organiser.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
