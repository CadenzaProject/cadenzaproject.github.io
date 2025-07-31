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

A baseline non-intrusive lyrics intelligibility system has been provided to help you get started.

## A. Overview

The baseline is based on the singing adapted STOI and vocal-specific features (SA-STOI) system [1] to make predictions. 
SA-STOI is a self-reference metric (the reference is generated from the processed signal) that uses estimated vocals as 
reference and 12 vocal features computed from the processed signal and the estimated vocals to 
account for singing styles and expressions. The final computation is obtained by using a SVM-based regression model trained 
using a 13 feature vector (the STOI score combined with the 12 vocal features) and, using human intelligibility scores as reference.

<div style={{textAlign:'center'}}>
<Image 
    img={require('../../../static/img/clip1/sastoi.gif')} 
    alt="Figure 6 in [1]" 
    style={{'maxHeight':'400px','width':'auto'}}
/>
    <div>Figure 1. Framework of SA-STOI computation (Figure 6 in [1])</div> 
</div>

### A1. Differences Baseline inplemenattion v/s original SA-STOI
1. The original SA-STOI model is based on a U-NET music source separation model (MSS) and MATLAB functions to compute the vocal features.
For our baseline, we replaced the U-NET MSS for the HDemucs model which reported higher performance in MUSDB-18 benchmark.
The model was ported to Python using the functions available to compute the same features as the original SA-STOI.

2. The original SA-STOI model was trained 140 audio segments, each scored by 17 participants. 
The final intelligibility score corresponds to the average across all 17 scores. Our ported model was trained on more 
than 8000 audio segments, each scored by a single participant. For details of the dataset, please refer to the [dataset description](data)

3. For the SVM model, the original SA-STOI system employ the `libsvm-3.24` library. In our baseline system, we used the
SVM model from the Python `scipy` module.

## B. How to use the baseline

The baseline system is included in the `pyclarity` Python package (version pyclarity >= 0.8), which is available on GitHub. 
The relevant scripts are located in the `recipes/clip1/baseline` directory. To use the baseline system:

1. Download the Code: Clone or download the repository from GitHub.
2. Follow the Instructions: Refer to the README file in the `recipes/clip1/baseline` directory for detailed steps to run the baseline on the CLIP1 dataset.


## C. Baseline Performance

The baseline system achieve the following performance on the validation set:

| Metric      | Value | 
|:------------|------:| 
| RMSE        |  xxxx | 
| Correlation |   xxx |


## References 

1. B. Sharma and Y. Wang, "Automatic Evaluation of Song Intelligibility Using Singing Adapted STOI and Vocal-Specific Features," in IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 28, pp. 319-331, 2020, doi: 10.1109/TASLP.2019.2955253