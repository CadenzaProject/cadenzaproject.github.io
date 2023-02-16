---
id: cc1_data_overview
title: Overview
sidebar_label: Overview
sidebar_position: 3.1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Data and baseline code can be downloaded from the [download page](../Take%20part/cc1_download) following this [timeline](../Take%20part/cc1_key_dates).

## Task 1: Headphones

### Training/development

The main training database will be the train/dev parts of [MUSDB18](https://sigsep.github.io/datasets/musdb.html). There are 86 traniing songs and 14 development songs.

We leave it to you to decide how to use this as part of the training and development. For more information on augmenting and supplementing the training data, please see the [rules](../Take%20part/cc1_rules#training-and-development).

You can supplement that data from the following sources:
- [FMA](https://github.com/mdeff/fma) 
- [MedleydB](https://medleydb.weebly.com/) version 1 and version 2
- [Bach10 Sibelius](https://zenodo.org/record/321361#.Y7_Ds3b7SUk)

There is some overlap between MedleydB and MUSDB18. If you choose to use MedleydB during training, you need to ensure that none of the tracks are from the MUSDB18 evaluation set.

### Evaluation

- We will use the MUSDB18 evaluation set.
- You should process all of the entire music.
- All the music will be used for HAAQI evaluation.
- We will then select a random 10 second sample from each piece of music for listening panel evaluation.

## Task 2: Car

### Training/development

The main training database will be the train/dev split of [FMA](https://github.com/mdeff/fma). 

We leave it to you to decide how to use this as part of the training and development. For more information on augmenting and supplementing the training data, please see the [rules](../Take%20part/cc1_rules#training-and-development).

You can supplement that data from the following sources:
- [MTG-Jamendo](https://mtg.github.io/mtg-jamendo-dataset/)
- [MedleydB](https://medleydb.weebly.com/)
- [Bach10 Sibelius](https://zenodo.org/record/321361#.Y7_Ds3b7SUk)
- [MUSDB18](https://sigsep.github.io/datasets/musdb.html)

## Evaluation

- We will use the FMA evaluation set.
- You should process all of the music.
- All of the music will be used for HAAQI evaluation.
- We will then select a random 10 second sample from each piece of music for listening panel evaluation.

## Listener data

We will provide metadata characterising the hearing abilities of the listeners, so the audio signals you generate can be individualised. The same types of data are available for training/development and evaluation.

A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear.

The quantification of the listeners’ hearing is done with left and right pure tone air-conduction audiograms. These measure the threshold at which people can hear a pure-tone sound. For more information about audiograms please visit our section on [Audiograms](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).


