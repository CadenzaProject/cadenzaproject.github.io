---
id: data_listener
title: Listener metadata
sidebar_label: Listener Metadata
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The same listener metadata is used for both tasks. These characterise the hearing abilities of the listeners, so the audio signals you 
generate can be individualised. The same types of data are available for training, validation and evaluation. 
More on [hearing loss](../learning_resources/Hearing_impairment/edu_HI_general) and 
[how it is measured](../learning_resources/Hearing_impairment/edu_measuring_HI).

* **Training**
For training, we will use the same 83 [audiograms](../learning_resources/Hearing_impairment/edu_measuring_HI) 
from the [Clarity project](https://claritychallenge.org/).

* **Validation**
We constructed a new set of listeners to separate the training from the validation listeners. 
The validation audiograms are a filtered, pseudo-random, selection from the
[von Gablenz and Holube (2019) dataset](https://zenodo.org/record/4995261#.Y_3O1HbP2Hu). Additionally, we include a _"normal hearing"_ audiogram (`L5999`). Results using this 
audiogram can be used to evaluate the performance of systems when no amplification prescription is applied.

[//]: # (* **Evaluation**)

[//]: # (We use a set of 52 listeners audiograms collected for the listener panel in the first Cadenza challenge. )

[//]: # (They all have two hearing aids but the hearing loss may be asymmetrical. )

[//]: # (The average hearing loss was between 25 and about 60 dB in the better ear.)

## Data file formats and naming conventions

Audiogram data is stored in a JSON file per dataset with the following format.

```json
{
    "L0001": {
        "name"               : "L0001",
        "audiogram_cfs"      : [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
        "audiogram_levels_l" : [10, 10, 20, 30, 40, 55, 55, 60],
        "audiogram_levels_r" : [ ... ],
    },
    ...
}
```


**Compressor params** are provided for the final signal amplification.
This file contains individualised compression ratios and gains per band.

```json
 "L0001": {
        "frequencies": [250, 500, 1000, 2000, 4000, 8000],
        "cr_l": [2.1, 1.5, 1.3, 1.5, 2.4, 3.7],
        "gain_l": [9.6, 11.9, 12.9, 16.4, 19.0, 28.0],
        "cr_r": [...]
        "gain_r": [...]
    },
```






