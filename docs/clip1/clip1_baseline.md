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

### Non-intrusive

The non-instrusive (blind) baseline is based on the short term objective intelligibility (STOI) model [1] to make predictions. STOI is an metric that compares two signals.

1. A processed signal.
2. A reference signal.

In the baseline, the reference signal corresponds to the vocals estimated from the original music i.e. the unprocessed track (Audio 2). The vocals are extracted using musical source separation (HDemucs [2]) on the signal before any hearing loss simulation.

(Note, STOI is normally seen as being intrusive, but the way we have formed the reference makes it non-intrusive).

<Image img={require('../../static/img/clip1/stoi_baseline.png')} alt="STOI-based baseline" />

### Intrusive

The intrusive baseline is based on ASR transcription using Whisper [3]. In this case, we use Whisper model `base.en` and `temperature=0.0` to transcribe the signal.
Next, using the Ground Truth transcriptions, we compute the correctness score corresponding to fraction of words correct to the total number of words.
Before computing the score, the ground truth and Whisper hypothesis were text normalised, numbers transcribed to written format and contractions expanded.

Because this needs the ground truth text, it is classed as intrusive (double-ended).

<Image img={require('../../static/img/clip1/whisper_baseline.png')} alt="Whisper-based baseline" />

### Logisitic mapping for both baselines

Raw predictions from the above algorithms lie between 0 and 1. These are then passed through a fitted logistic function to improve the mapping to the intelligibility scores measured in the listening tests. For each baseline, this is done by optimising the parameters of the logistic function to minimize the RMSE between the predicted and measured intelligibility scores for the training set.  The output of the logistic function is the final intelligibility prediction.

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

[1] C. H. Taal, R. C. Hendriks, R. Heusdens, and J. Jensen, [An algorithm for intelligibility prediction of time–frequency weighted noisy speech](https://ieeexplore.ieee.org/document/5713237), in IEEE Transactions on Audio, Speech, and Language Processing.  
[2] Alexandre Defossez, [Hybrid spectrogram and wave-form source separation](https://mdx-workshop.github.io/proceedings/defossez.pdf) in Proceedings of the ISMIR 2021 Workshop on Music Source Separation, 2021.  
[3] Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., & Sutskever, I. [Robust speech recognition via large-scale weak supervision](https://proceedings.mlr.press/v202/radford23a/radford23a.pdf), in International conference on machine learning. 
