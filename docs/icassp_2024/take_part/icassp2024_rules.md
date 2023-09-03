---
id: rules
title: Rules
sidebar_label: Rules
sidebar_position: 2.5
---

## 1. Teams

- Teams must have [pre-registered](registration) and nominated a contact person.
- Teams can be from one or more institutions.

## 2. Transparency

- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- Teams are encouraged to make their code open source.
- Anonymous entries are allowed.

## 3. What information can I use?

### 3.1. Training and development

- There is no limit on the amount of training data that can be generated using our tools and the provided training data sets.
- You may not use other datasets or start with models pretrained on private datasets.
- Teams can also expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool.
- All the audio or metadata can be used during training and development.
- You must **not** use the evaluation data set for training or tuning the system.

### 3.2. Evaluation

The only data that can be used to *enhance* the evaluation data are:

- The listener characterisation (e.g. audiogram) to allow personalisation.
- The target gains.
- The stereo music input signals to the headphones or hearing aid.

## 4. Computational restrictions

* Systems must either be:
  *  causal and low latency to allow them to work with live music, or
  *  non-causal, for use with recorded music.
* There is no limit on computational cost, but entrants must report model size.
- Teams must start with the baseline, with the blocks that can be changed labelled *Enhancement*
- While HAAQI is being used for evaluation, other metrics and approaches can be used by the teams during training.

## 5. Submitting multiple entries

This will be allowed if very different approaches are used.

## 6. Evaluation of systems

* Music: we will use the MUSDB18-HQ's evaluation set which is made up of 50 songs. We will ask teams to submit defined 15-30 second segments from the remixed stereo for each track.
* Gains: We will provide metadata giving the target mix for the VDBO tracks for the evaluation.
* Listener audiograms: we will use 50 real measured audiograms that have been collected as part of the Cadenza project.

Entries will be ranked according to average HAAQI score across all signals in the evaluation dataset. We will also report whether the systems are causal or non-causal in the rank order table and model size.

## 7. Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions. Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to these.

The "submission" constitutes the audio files submitted to the challenge and the accompanying technical report.

The Challenge is organised by the Challenge Organiser.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
