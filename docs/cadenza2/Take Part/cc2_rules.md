---
id: rules
title: Rules
sidebar_label: Rules
sidebar_position: 4.3
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

## 1. Teams

- Teams must [pre-register](registration) and nominate a contact person.
- Teams can be from one or more institution.

## 2. Transparency

- Anonymous entries are allowed.
- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- Teams are encouraged to make their code open source.
- Teams may reserve the right to be referred to using anonymous code names in the published rank ordering.

## 3. What information can I use?

The list of the datasets to participants can use are listed on [List Datasets](list_dataset) page.

1. Datasets that we are reserving for evaluation (marked as _No (Eval)_ in the Table) **CANNOT** be used for training.
2. Datasets in bold corresponds to the challenge **_Official Datasets_** (see below) for training or evaluation.
3. Datasets that are marked as suitable for training (marked as _Yes_ in the Table) and are not part of the **_Official Datasets_**
   are considered as **_Supplementary Data_**.
4. There are three categories of datasets:
   - `Official data`: refers to the official training/evaluation datasets for each arm.
   - `Data augmentation`: refers to traditional data augmentation techniques, such as, flipping right and left channels, applying SpecAugmentation, pitch shifting, etc.
   - `Supplememented data`: refers to the use of additional music samples during training. The datasets that can be used for supplementing are specified on [List Datasets](list_dataset) page.

### 3.1. Training and development

- There is no limit on the amount of training data that can be generated using data augmentation techniques and the allowed supplementation data.
- You may <b>not</b> use other datasets.
- You can only use pretrained models that have been developed using the allowed datasets listed on [List Datasets](list_dataset) page. You must <b>not</b> start with models pretrained on private datasets.
- All the audio or metadata can be used during training and development.
- You must **not** use the evaluation data set for training or tuning your system.
- Teams that decide to use data augmentation and/or supplemented data must:
  - Using data augmentation: submit 2 systems, one without the augmentations and one with the augmentations.
  - Using supplemented data: submit 2 systems, one without the supplemented data and one with the supplemented data.
  - Using both augmentation and supplemented data: submit four systems, one only with the official data, one with the supplemented data, one with the data augmentation and one with both supplemented and data augmentation.
- Systems trained using any other source for data supplementation not explicitly mentioned here may be scored but will **not** enter the challenge.

### 3.2. Evaluation

The only data that can be used during evaluation are:

**Arm 1: Lyrics Intelligibility**

- The listener characterisation (e.g. audiogram).
- The stereo music signals.

**Arm 2: Rebalancing Classical Music**

- The listener characterisation (e.g. audiogram).
- The target gains.
- The stereo music signals.

## 4. Computational restrictions

* Systems must either be:
  *  <b>causal and low latency</b> to allow them to work with live music, or
  *  <b>non-causal</b>, for use with recorded music.
* The latency restrictions for <b>causal entries</b> are that the output from the hearing aid at time <i>t</i> must not use any information from input samples more than 5 ms into the future i.e., no information from input samples <i>>t+5 ms</i>. See this [blog post](https://claritychallenge.org/blog/Latency,%20computation%20time%20and%20real-time%20operation) from our sister Clarity project for more.
* There is no limit on computational cost, but entrants must report model size.
* Teams must start with the baseline, with the blocks that can be changed labelled *Enhancement*
* While HAAQI is being used for evaluation, other metrics and approaches can be used by the teams during training.


## 5. Submitting multiple entries

This will be allowed if different approaches are used.

## 6. Evaluation of systems

### 6.1 Objective Evaluation

**Arm 1: Lyrics Intelligibility**

Systems will be scored, but not ranked, using a series of metrics for music quality and for intelligibility. 
As the majority of the metrics are not binaural, each score will be computed independently for the left and right side of the stereo signal.

Metrics:
   - HAAQI: Music Quality.
   - Word Error Rate (WER): Lyrics Intelligibility.
   - Singing Adapted STOI: Lyrics Intelligibility.

**Arm 2: Rebalancing Music**

Entries will be ranked according to average HAAQI score across all signals in the evaluation dataset.
The HAAQI evaluation will be on the remixed signals.

### Listener test evaluation

- There is a limit on how many systems can be evaluated by the listener panel.
- The expectation is that only one entry per entrant can go through to the listener panel.
- We will choose which systems will go to the listener panel based on:
  - The scores by the objective metrics.
  - The approach detailed in the technical report.
  - Informal listening by the Cadenza team and/or pilot test.

## 7. Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). 
Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions. 
Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to these.

The "submission" constitutes the audio files submitted to the challenge and the accompanying technical report.

The Challenge is organised by the Challenge Organiser.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, 
a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, 
distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
