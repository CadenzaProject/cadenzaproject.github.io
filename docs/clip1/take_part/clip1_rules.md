---
id: rules
title: Rules
sidebar_label: Rules
sidebar_position: 4.5
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info
The following rules are provisional.
:::

## 1. Teams

- Teams must [pre-register](./registration) and nominate a contact person.
- Teams can be from one or more institution.
- Anonymous entries are allowed.
- You must provide a technical document of up to 2 pages describing the system/model, what data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- You are encouraged to make your code open source so others can build on your work.

## 2. What information can I use?

### 2.1. Training and development

- There is no limit on the amount of training data that can be generated using our tools.
- You can use standard augmentation techniques such as: randomizing the stems, flipping right and left channels, applying SpecAugmentation [[1]](#references), pitch shifting, etc.
  - If you are unclear whether an augmentation technique is acceptable, please contact the Cadenza team.
- You may <b>not</b> use other datasets without prior approval by the Cadenza team.
  - If you think there is a public dataset that would be a good addition to the challenge then please propose it to the Cadenza team. If we agree, we will then make it available to all teams.
- Pretrained models
  - These can only have been developed with public databases.
  - You must <b>not</b> use pretrained models developed on private datasets.
- All the audio or metadata can be used during training and development.
- You must **not** use the evaluation data set for training or tuning the system.

### 2.2. Evaluation

The only data that can be used during evaluation are:

- The stereo music input signals.

## 3. Ranking

If a system has broken the rules they will not appear in the official rankings.

- Objective: entries will be ranked according to average score across all signals in the evaluation dataset.

## 4. Computational restrictions

* There is no limit on computational cost, but entrants must report model size.

## 6. Submitting multiple entries for a task

This will be allowed if very different approaches are used.

## 7. Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions. Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to these.

The **submission** constitutes the audio files submitted to the challenge and the accompanying technical report.

The Challenge Organiser is the Cadenza Project team.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the **submission**.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.

## References

[1] Park, D.S., Zhang, Y., Chiu, C.C., Chen, Y., Li, B., Chan, W., Le, Q.V. and Wu, Y., 2020, May. Specaugment on large scale datasets. In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) (pp. 6879-6883). IEEE.