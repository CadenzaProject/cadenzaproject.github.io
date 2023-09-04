---
id: data_listener
title: Listener metadata
sidebar_label: Listener Metadata
sidebar_position: 4.3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The same listener data is used for Task 1 and 2. We have provided metadata characterising the hearing abilities of the listeners, so the audio signals you 
generate can be individualised. The same types of data are available for training and development. More on [hearing loss](../../learning_resources/Hearing_impairment/edu_HI_general) and [how it is measured](../../learning_resources/Hearing_impairment/edu_measuring_HI).

For training, we will use the same 83 [audiograms](../../learning_resources/Hearing_impairment/edu_measuring_HI) from the [Clarity project](https://claritychallenge.org/).

We constructed a new set of listeners to separate the training from the development listeners. 
The development [audiograms](../../learning_resources/Hearing_impairment/edu_measuring_HI) are a filtered, pseudo-random, selection from the
von Gablenz and Holube (2019) dataset (https://zenodo.org/record/4995261#.Y_3O1HbP2Hu).
We first filtered the audiograms to better-ear 4-frequency hearing loss between 25 and 60 dB.
Then, we divided the data into BEA bands of 20-29, 30-39, 40-49 and 50-59 dB, and randomly chose from each
band the necessary number of audiograms to give the same distribution per band as in
the original Clarity dataset (namely 11, 37, 34 and 18). This gave an unequal male:female distribution
(63 to 37), so 13 males were then randomly selected and replaced by females with the same BEA.
Of the 100 audiograms, only 50 (25 per gender) were randomly selected to be part of the development set.

A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral 
hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure 
tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear.

The quantification of the listeners' hearing is done with left and right pure tone air-conduction audiograms. 
These measure the threshold at which people can hear a pure-tone sound. [More information](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).

## Data file formats and naming conventions

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







