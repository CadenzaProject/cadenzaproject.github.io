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

The baseline uses the singing adapted STOI and vocal-specific features (SA-STOI) [1] to make predictions. 
SA-STOI is a self-reference metric that uses estimated vocals as reference and vocal features to account for singing styles and expressions.

<div style={{textAlign:'center'}}>
<Image 
    img={require('../../../static/img/clip1/sastoi.gif')} 
    alt="Figure 6 in [1]" 
    style={{'maxHeight':'400px','width':'auto'}}
/>
    <div>Figure 1. Framework of SA-STOI computation (Figure 6 in [1])</div> 
</div>

## References 

1. B. Sharma and Y. Wang, "Automatic Evaluation of Song Intelligibility Using Singing Adapted STOI and Vocal-Specific Features," in IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 28, pp. 319-331, 2020, doi: 10.1109/TASLP.2019.2955253