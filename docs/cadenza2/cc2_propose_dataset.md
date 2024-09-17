---
id: list_dataset
title: Datasets and Pretrained models
sidebar_label: Datasets & Models
sidebar_position: 1.3
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";


If participants want to use a specific dataset not included in the list of the official datasets for the challenge,
or want to use a pretrained model, they can submit a request by filling out the form at the end of this page. 
Before submitting the request, please ensure that it is not already included in the current lists and that it complies with the following rules.

1. Cannot be private.
2. Must be freely available to all participants.
3. Must be easily accessible to all participants.
4. Must not contain copyright restrictions that prevent its use.
5. Datasets must not derive from the evaluation datasets.
6. Pretrained models must not include the evaluation dataset in any form.

### Datasets

The next table shows a list with the datasets that are or aren't allowed for the specific tasks. 

Description of the columns:

- **Dataset**: indicates the name of the dataset.
- **Task 1**: indicates if the dataset can be used for training in Task 1 - Lyrics Intelligibility task.
- **Task 2**: indicates if the dataset can be used for training in Task 2 - Rebalancing levels of instruments in a Classical Music.
- **Comments**: Extra comments.

_Yes_ : Dataset can be used for the task.  
_No_ : Dataset cannot be used for the task.  
_-_ : Dataset may not be suitable for the task.  

| Dataset                | Task 1 | Task 2 | Comments                                     |
|------------------------|:------:|:------:|----------------------------------------------|
| MUSDB18-HQ train split |  Yes   |  Yes   |                                              |
| MUSDB18-HQ test split  |   No   |  Yes   |                                              |
| DALI                   |  Yes   |  Yes   |                                              |
| JamendoLyrics          |   No   |  Yes   | Including any dataset derived from it        |
| CCMixter               |   No   |  Yes   |                                              |
| EnsembleSet            |   -    |  Yes   | We mirror one remix but the rest are allowed |
| CadenzaWoodwind        |   -    |  Yes   |                                              |
| AAM                    |   -    |  Yes   |                                              |
| URMP                   |   -    |   No   | Including any dataset derived from it        |
| BACH10                 |   -    |   No   | Including any dataset derived from it        |
| TRIOS dataset          |   -    |  Yes   |                                              |
| FMA                    |  Yes   |  Yes   |                                              |

### Pretrained models

The next table shows a list with the pretrained models that are or aren't allowed for the specific tasks.

Description of the columns:

- **Models**: indicates the name of the pretrained models.
- **Task 1**: indicates if the dataset can be used for training in Task 1 - Lyrics Intelligibility task.
- **Task 2**: indicates if the dataset can be used for training in Task 2 - Rebalancing levels of instruments in a Classical Music.
- **Comments**: Extra comments.


| Dataset                     | Task 1 | Task 2 | Comments                                                                                                |
|-----------------------------|:------:|:------:|---------------------------------------------------------------------------------------------------------|
| Whisper                     |   No   |   No   | There is no clarity of what datasets were used for training                                             |
| OWSM                        |  Yes   |  Yes   | https://www.wavlab.org/activities/2024/owsm/                                                            |
| Models from DNS-Challenge-4 |  Yes   |  Yes   | https://www.microsoft.com/en-us/research/academic-program/deep-noise-suppression-challenge-icassp-2022/ |

:::info
Note that although we do not allow the use of Whisper as a pretrained model for building your system, it is used 
during the evaluation stage of the challenge.
:::

### Request a Dataset or Pretrained model

If you intend to use a dataset not listed above or want to work with a pretrained model, 
you can submit a request in the form below, and we will inform you about the decision.

<iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSfYyrhxsbmx9C4hLCWOfnnHC9hdOKAvVVLrzgPHR8wjjcpFyQ/viewform?embedded=true" 
    width="640" 
    height="1500" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
Loading…
</iframe>

