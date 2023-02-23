---
id: cc1_data_overview
title: Overview
sidebar_label: Overview
sidebar_position: 3.1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Data and baseline code can be downloaded from the [download page](../Take%20part/cc1_download) following this [timeline](../Take%20part/cc1_key_dates).

## 1. Task 1: Headphones

### 1.1 Training/development

The main training database will be the train/dev parts of [MUSDB18-HQ](https://sigsep.github.io/datasets/musdb.html). There are 86 training songs and 14 validation songs.

You can supplement the training and validation data from the following sources:
- [FMA-small](https://github.com/mdeff/fma)
- [MedleydB](https://medleydb.weebly.com/) version 1 and version 2
- [Bach10](https://labsites.rochester.edu/air/resource.html)

We leave it to you to decide how to use these as part of the training and validation sets.
Mind that some songs from MedleydB are already part of the training set in MUSDB18. 
For more information on augmenting and supplementing the training data, please see the [rules](../Take%20part/cc1_rules#training-and-development). 


### 1.2 Evaluation

- We will use the MUSDB18-HQ's evaluation set which is made up of 50 songs.
- You must process all complete songs.
- All the music will be used for HAAQI evaluation.
- We will then select a random 10-second sample from each piece of music for listening panel evaluation.

## 2. Task 2: Car

### 2.1 Training/development

The main dataset is the small split of the [FMA](https://github.com/mdeff/fma). FMA-Small is balanced dataset for 
genre classification (`electronic`, `experimental`, `folk`, `hip-hop`, `instrumental`, `international`, `pop`, `rock`).
Each genre contains 1000 30-samples divided into 800/100/100 for training/validation/evaluation. However,
research suggest that people with hearing loss prefer to listen `classical` and `orchestal` music. Therefore,  
we included samples from these two genres sourced from the [MTG-Jamendo](https://github.com/MTG/mtg-jamendo-dataset) dataset.
This is because FMA doesn't have enough music samples from these genres to keep the classes balanced.


### 2.2 Evaluation

- 1000 30-second samples 
  - 800 from the FMA-small evaluation set.
  - 200 from the additional two genres.
- You should process all of the music.
- All of the music will be used for HAAQI evaluation.
- We will then select a random 10 second sample from each piece of music for listening panel evaluation.

## 3. Listener data

We will provide metadata characterising the hearing abilities of the listeners, so the audio signals you 
generate can be individualised. The same types of data are available for training/development and evaluation.

A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral 
hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure 
tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear.

The quantification of the listeners’ hearing is done with left and right pure tone air-conduction audiograms. 
These measure the threshold at which people can hear a pure-tone sound. For more information about audiograms 
please visit our section on [Audiograms](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).


