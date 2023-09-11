---
id: data_overview
title: ICASSP 2024 Data
sidebar_label: Data specification
sidebar_position: 4.1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

Data and baseline code can be [downloaded from here](../take_part/download) following this [timeline](../take_part/key_dates).

## 1 Training/development datasets

### Music

The main training database is the MUSDB18-HQ, which has 100 training songs.
We recommend using the MUSDB18 standard which divides the data into 86 songs for training and [14 songs for validation](./icassp2024_tracks_details#1-recommended-validation-set).

Teams can supplement the training and validation data using the following resources:

- Bach10
- FMA-small
- MedleydB version 1 and version 2

We leave the teams to decide how to use these as part of the training and development of their systems.
Note, 46 songs from MedleydB version 1 are already part of the training set in MUSDB18-HQ.
The list of these tracks can be found [here](./icassp2024_tracks_details#tracks-from-medleydb-contained-in-musdb18-hq)

For more information on augmenting and supplementing the music training data, please see the [rules](../take_part/rules).

### Listener characteristics

We provide metadata characterising the hearing abilities of listeners, so the audio signals can be individualised. The quantification of the listeners' hearing is done with left and right pure tone air-conduction audiograms.
These measure the threshold at which people can hear a pure-tone sound. [More information on what audiograms are and how they're measured](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).

- For training, we provide 83 listener audiograms that were collected for the [Clarity project](https://claritychallenge.org/).
- For validation, we constructed a new set of 50 listener audiograms from the [_von Gablenz and Holube (2019)_
dataset](https://zenodo.org/record/4995261#.Y_3O1HbP2Hu).

You can enter the challenges without using the audiograms. Improving the demixing of the signals, and using the default baseline NAL-R amplifications, is a reasonable approach.

***

## 2 Evaluation

- The evaluation set will be based on the MUSDB18-HQ's evaluation set which is made up of 50 songs.
- Tracks will be split into several segments.
- Teams will need to process all segments.
- Segments will be evaluated using [HAAQI](../../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech).

***

## 3. Data file formats and naming conventions

### 3.1 Listener metadata

Audiograms data is stored in a JSON file per dataset with the following format.

```json
{
    "L0001": {
        "name": "L0001",
        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],
        "audiogram_levels_r": [ ... ],
    },
    "L0002": {
        ...
    },
    ...
}
```

### 3.2 Music metadata

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
