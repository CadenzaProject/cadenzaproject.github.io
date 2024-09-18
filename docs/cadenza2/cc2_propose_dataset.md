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

| Dataset                | Task 1 | Task 2 | Comments                                                                             |
|------------------------|:------:|:------:|--------------------------------------------------------------------------------------|
| MUSDB18-HQ train split |  Yes   |  Yes   |                                                                                      |
| MUSDB18-HQ test split  |   No   |  Yes   |                                                                                      |
| DALI                   |  Yes   |  Yes   | https://github.com/gabolsgabs/DALI                                                   |
| JamendoLyrics          |   No   |  Yes   | In Task 1, this includes all datasets that are derived from it, such as **Jam-ALT**. |
| CCMixter               |  Yes   |  Yes   | https://members.loria.fr/ALiutkus/kam/                                               |
| EnsembleSet            |   -    |  Yes   | We mirror one remix but the rest are allowed https://zenodo.org/records/6519024      |
| CadenzaWoodwind        |   -    |  Yes   |                                                                                      |
| AAM                    |   -    |  Yes   | https://zenodo.org/records/5794629                                                   |
| URMP                   |   -    |   No   | Including any dataset derived from it, such as **Sub-URMP**.                         |
| BACH10                 |   -    |   No   | Including any dataset derived from it, such as **BACH10 Sibelius**.                  |
| TRIOS dataset          |   -    |  Yes   | https://zenodo.org/records/6797837                                                   |
| FMA                    |  Yes   |  Yes   | https://github.com/mdeff/fma                                                         |

### Pretrained models

The next table shows a list with the pretrained models that are or aren't allowed for the specific tasks.

Description of the columns:

- **Models**: indicates the name of the pretrained models.
- **Task 1**: indicates if the dataset can be used for training in Task 1 - Lyrics Intelligibility task.
- **Task 2**: indicates if the dataset can be used for training in Task 2 - Rebalancing levels of instruments in a Classical Music.
- **Comments**: Extra comments.


| Dataset                     | Task 1 | Task 2 | Comments                                                                                                |
|-----------------------------|:------:|:------:|---------------------------------------------------------------------------------------------------------|
| Whisper                     |   No   |   No   | Because there is no clarity of what datasets were used for training Whisper                             |
| OWSM                        |  Yes   |  Yes   | https://www.wavlab.org/activities/2024/owsm/                                                            |
| Models from DNS-Challenge-4 |  Yes   |  Yes   | https://www.microsoft.com/en-us/research/academic-program/deep-noise-suppression-challenge-icassp-2022/ |

:::info
Note that although we do not allow the use of Whisper as a pretrained model in your system’s Music Enhancer, it is used during the evaluation stage of the challenge.
:::

### Request a Dataset or Pretrained model

If you want to use a dataset not listed above or want to work with a pretrained model, please submit a request in the form below so we can check it is OK. 
We want to make sure all teams have access to the same data/pre-trained models for a fair challenge.
<iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSfYyrhxsbmx9C4hLCWOfnnHC9hdOKAvVVLrzgPHR8wjjcpFyQ/viewform?embedded=true" 
    width="640" 
    height="1500" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
Loading…
</iframe>

