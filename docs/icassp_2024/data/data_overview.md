---
id: data_overview
title: ICASSP 2024 Data
sidebar_label: Data specification
sidebar_position: 4.1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Data and baseline code can be downloaded from the [download](../take_part/download) page following this [timeline](../key_dates).


## 1 Training/validation datasets

### Music

The main training database is the MUSDB18-HQ, which has 100 training songs.
Teams can split the training dataset into train and validation sets as better suits them.
However, we recommend using the MUSDB18 proposed split which split the data into 86 songs for training and 14 songs for validation.
The list of the 14 recommended validation tracks can be found [here](./tracks_details#1-recommended-validation-set) 

Teams can supplement the training and validation data using the following resources:

- Bach10
- FMA-small
- MedleydB version 1 and version 2

We leave the teams to decide how to use these as part of the training and development of their systems. 
Note, 46 songs from MedleydB version 1 are already part of the training set in MUSDB18-HQ.
The list of these tracks can be found [here](./tracks_details#tracks-from-medleydb-contained-in-musdb18-hq)

For more information on augmenting and supplementing the music training data, please see the rules.

### Listener characteristics

We provide metadata characterising the hearing abilities of listeners, 
so the audio signals teams generate can be individualised. The same types of data is available for training and validation.

For training, we provide 83 listener audiograms that were collected for the Clarity project (https://claritychallenge.org/).

For validation, we constructed a new set of 50 listener audiograms from the _von Gablenz and Holube (2019)_
dataset (https://zenodo.org/record/4995261#.Y_3O1HbP2Hu). This set follows the same distribution as the training audiograms.

***

## 2 Evaluation

- The evaluation set will be based on the MUSDB18-HQ's evaluation set which is made up of 50 songs.
- Tracks will be split into several segments.
- Teams will need to process all segments.
- Segments will be evaluated using [HAAQI](../../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech).

***

## 3. Data file formats and naming conventions

### 3.1 Music metadata

The MUSDB18-HQ metadata is provided in a single JSON file per dataset.


```json
[
  {
    "Track Name":"A Classic Education - NightOwl",
    "Genre":"Singer/Songwriter",
    "Source":"MedleyDB",
    "License":"CC BY-NC-SA",
    "Split":"train"
  },
  ...
]
```
