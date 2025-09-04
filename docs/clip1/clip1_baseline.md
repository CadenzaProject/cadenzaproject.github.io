---
id: baseline
title: Baseline System
sidebar_label: Baseline
sidebar_position: 3.2
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

Two baselines, one intrusive and one non-intrusive, have been provided to help you get started.

## Overview

**Non-intrusive**

The non-instrusive baseline is based on the short term objective intelligibility (STOI) model [1] to make predictions. STOI is an intrusive measure that takes two inputs.

1. A processed signal.
2. A reference signal.

However, in the baseline, the reference signal corresponds to the vocals estimated from the unprocessed signals.
I.e. estimated from the signal before applying hearing loss simulation.

**Intrusive**

The intrusive baseline is based on ASR transcription using Whisper. In this case, we use Whisper model `base.en` and `temperature=0.0` to transcribe the signal.
And, using the Ground Truth transcriptions, we compute the correctness score corresponding to `hit / total words`

In both baselines, predictions are intelligibility scores between 0 and 1. 
These scores are then passed through a logistic function, whose parameters have been optimized on the training data to minimize the RMSE between the predicted and measured intelligibility scores. 
The output of the logistic function is the final sentence intelligibility prediction.

## How to use the baseline

The baseline system is included in the `pyclarity` Python package (version pyclarity >= 0.8), which is available on GitHub. 
The relevant scripts are located in the `recipes/cad_icassp_2026/baseline` directory. To use the baseline system:

1. Download the Code: Clone or download the repository from GitHub.
2. Follow the Instructions: Refer to the README file in the `recipes/cad_icassp_2026/baseline` directory for detailed steps to run the baseline on the Cadenza ICASSP 2026 dataset.

## Baseline Performance

The baseline systems achieve the following performance on the validation set:

| System  | RMSE  |  NCC  |
|:--------|:-----:|:-----:| 
| STOI    | 0.361 | 0.141 |
| Whisper | 0.292 | 0.598 |

## References 

[1] C. H. Taal, R. C. Hendriks, R. Heusdens, and J. Jensen, [An algorithm for intelligibility prediction of time–frequency weighted noisy speech](https://ieeexplore.ieee.org/document/5713237), in IEEE Transactions on Audio, Speech, and Language Processing
