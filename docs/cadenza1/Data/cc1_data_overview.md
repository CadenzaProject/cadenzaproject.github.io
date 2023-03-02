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

The main training/development database is the MUSDB18-HQ. MUSDB18-HQ has 86 training songs and 14 validation songs.

You can supplement the training and validation data from the following sources:

- Bach10
- FMA-small
- MedleydB version 1 and version 2

We leave it to you to decide how to use these as part of the training and validation sets.
Note, some of the songs from MedleydB are already part of the training set in MUSDB18-HQ. 
For more information on augmenting and supplementing the training data, please see the [rules](../Take%20part/cc1_rules#training-and-development). 


### 1.2 Evaluation

- We will use the MUSDB18-HQ's evaluation set which is made up of 50 songs.
- You must process all of these for the complete songs.
- All the music will be used for HAAQI evaluation.
- We will then select a random 10-second sample from each piece of music for listening panel evaluation.

## 2. Task 2: Car

### 2.1 Training/development

The main dataset is the small split of the FMA. FMA-Small is balanced dataset for 
genre classification (`electronic`, `experimental`, `folk`, `hip-hop`, `instrumental`, `international`, `pop`, `rock`).
Each genre contains 1000 30-samples divided into 800/100/100 for training/validation/evaluation. However,
research suggest that people with hearing loss prefer to listen `classical` and `orchestal` music. Therefore,  
we included samples from these two genres sourced from the MTG-Jamendo dataset.
This is because FMA doesn't have enough music samples from these genres to keep the classes balanced.


### 2.2 Evaluation

- 1000 30-second samples 
  - 800 from the FMA-small evaluation set.
  - 200 from the additional two genres.
- You should process all of the music.
- All of the music will be used for HAAQI evaluation.
- We will then select a random 10 second sample from each piece of music for listening panel evaluation.

## 3. Listener data

We have provided metadata characterising the hearing abilities of the listeners, so the audio signals you 
generate can be individualised. The same types of data are available for training/development and evaluation.

For training, we will use the same 83 audiograms from the Clarity project.

We constructed a new set of listeners to separate the training with the validation sets. The validation audiograms are 
a filtered, pseudo-random selection from the
von Gablenz and Holube (2019) dataset (https://zenodo.org/record/4995261#.Y_3O1HbP2Hu).
We first filtered the audiograms to better-ear 4-frequency hearing loss between 25 and 60 dB.
We then divided the data into BEA bands of 20-29, 30-39, 40-49 and 50-59 dB, and randomly chose from each
band the necessary number of audiograms to give the same distribution per band as in
the original Clarity dataset (namely 11, 37, 34 and 18). This gave an unequal male:female distribution
(63 to 37), so 13 males were then randomly selected and replaced by females with the same BEA.
Of the 100 audiograms, only 50 (25 per gender) were randomly selected to be part of the validation set.

A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral 
hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure 
tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear.


The quantification of the listeners’ hearing is done with left and right pure tone air-conduction audiograms. 
These measure the threshold at which people can hear a pure-tone sound. For more information about audiograms 
please visit our section on [audiograms](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).

## 4. Data file formats and naming conventions

### 4.1 Enhanced signals

The signals that are output by the baseline enhancement algorithm.

* Eight enhanced output signal corresponding to the left or right channel of each stem (i.e., as submitted by the challenge entrants)

<Listener ID>/<Song Name>/<Listener ID>_<Song Name>_<Channel>_<Stem>.wav

* One enhanced output signal corresponding to the final remix

<Listener ID>/<Song Name>/<Listener ID>_<Song Name>_remix.wav

Where:
Listener ID – ID of the listener panel member, e.g., L001 to L100 for initial ‘pseudo-listeners’, etc.
Song Name - Track name from MUSDB18, e.g, One Minute Smile.
Channel - left or right channel
Stem - Vocal, Bass, Drums or Others


For example, for validation ID `L5011` and Validation track `One Minute Smile_left`
```text
L5011
└───One Minute Smile
    ├───L5011_Actions - One Minute Smile_left_bass.wav
    ├───L5011_Actions - One Minute Smile_right_bass.wav
    ├───L5011_Actions - One Minute Smile_left_drums.wav
    ├───L5011_Actions - One Minute Smile_right_drums.wav
    ├───5011_Actions - One Minute Smile_left_other.wav
    ├───L5011_Actions - One Minute Smile_right_other.wav
    ├───L5011_Actions - One Minute Smile_left_vocals.wav
    ├───L5011_Actions - One Minute Smile_right_vocals.wav
    └───L5011_Actions - One Minute Smile_remix.wav
```



### 4.2 Listener metadata

Audiogram data is stored in a JSON file per dataset with the following format.

```json
{
    "L0001": {
        "name": "L0001",
        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],
        "audiogram_levels_r": [ … ],
    },
    "L0002": {
        ...
    },
    ...
}
```

### 4.3 Music metadata

Music data is store in a single JSON per file dataset with the following format.

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




