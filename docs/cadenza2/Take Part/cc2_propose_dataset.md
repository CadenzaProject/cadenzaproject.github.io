---
id: list_dataset
title: List of Datasets
sidebar_label: List of Datasets
sidebar_position: 4.2
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";


If participants wish to use a specific dataset not included in the list of official datasets for the challenge,
they can propose its inclusion by filling out the following form. Before submitting a proposal for a new dataset,
please ensure that it is not already included in the current list and that it complies with the following rules.

Please take into consideration that some datasets won't be allowed to use for training if we are planning to use it for evaluation.

### Datasets

The next table shows the complete list of evaluated datasets. 

Description of the columns:

- **Dataset**: indicates the name of the dataset.
- **Lyrics Intelligibility**: indicates if the dataset can be used for training in this arm.
- **Rebalancing Music**: indicates if the dataset can be used for training in this arm.
- **Comments**: Extra comments.

1. Dataset names in bold corresponds to the _Official Data_.
2. Dataset names that are not in bold but are marked as _Yes_ for "Lyrics Intelligibility" and/or "Rebalancing Music" arms correspond to
the datasets that can be used as _Supplementary Data_.

| Dataset                    | Lyrics Intelligibility | Rebalancing Music | Comments                     |
|----------------------------|:----------------------:|:-----------------:|------------------------------|
| **MUSDB18-HQ train split** |          Yes           |        Yes        | We will mirror it            |
| MUSDB18-HQ test split      |           No           |        Yes        | We will mirror it            |
| DALI                       |          Yes           |        Yes        | Check if you can download it |
| **JamendoLyrics**          |       No (Eval)        |         -         | We will mirror it            |
| **CCMixter**               |       No (Eval)        |        Yes        | We will mirror it            |
| **EnsembleSet**            |           -            |        Yes        |                              |
| AAM                        |           -            |        Yes        |                              |
| **URMP**                   |           -            |     No (Eval)     | We will mirror it            |
| BACH10                     |           -            |     No (Eval)     | We will mirror it            |
| TRIOS dataset              |           -            |        Yes        |                              |



### Dataset proposal

#### Rules for Dataset Proposal

1. The dataset cannot be a private.
2. The dataset must be freely available to all participants.
3. The dataset must be easily accessible to all participants.
4. The dataset must not contain copyright restrictions that prevent its use.

#### Form

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYyrhxsbmx9C4hLCWOfnnHC9hdOKAvVVLrzgPHR8wjjcpFyQ/viewform?embedded=true" width="640" height="1072" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

