---
id: data_specification
title: Dataset Specification
sidebar_label: Specification
sidebar_position: 3.3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";


## Data Distribution and Installation

The data is distributed as two gzipped tar archives:

* `cadenza_clip1_data.train.v1.0.tar.gz` [4.5GB]: labelled training data.
* `cadenza_clip1_data.valid.v1.0.tar.gz` [576MB]: unlabelled validation data.

:::tip[Demo data]
If you need to have a quick view of the data structure, we also provide a demo package:
* `cadenza_clip1_data.demo.v1.0.tar.gz` [4MB]

This package contains 5 samples from the training and 5 from the validation data.
:::

**- Installation Instructions**

1. Download the `.ta.gz` files.
2. unpack each archive using the following commands:
```shell showLineNumbers=1
tar -xvzf cadenza_clip1_data.train.v1.0.tar.gz  # For training data
tar -xvzf cadenza_clip1_data.valid.v1.0.tar.gz # For validation data
```

**- Directory Structure after unpacking**

<pre>
cadenza_data/
├── metadata/
├── train/
│   ├── signals/      # Audio to predict intelligibility
│   └── unprocessed/  # Audio without hearing loss
├── valid/
│   ├── signals/
│   └── unprocessed/
└── Manifest/
</pre>

## Audio signals

* Stored as 16-bit stereo FLAC files at 44100 Hz.
* Filenames:
    * train/signals/`<HASH_NUMBER>`.flac: audio (1) signal to predict intelligibility.
    * train/unprocessed/`<HASH_NUMBER>`_unproc.flac: the unprocessed (without hearing loss) audio (2) signal.
* Notes:
  * Audios and unprocessed audios have matching `<HASH_NUMBER>`.   
  * Slight misalignment and variations in the number of frames may occur between the signals audio and the unprocessed audio due to the hearing loss simulation.



## Training Metadata

The train metadata is saved in `metadata/train_metadata.json`. 
The metadata contains list of dictionaries, each representing the listener's response.

Fields:
* `signal`: audio filename.
* `prompt`: original target sentence (ground truth).
* `response`: text transcription from Prolific listening tests ('#' indicates no words entered).
* `n_words`: number of words in prompts after expanding contractions (see [data generation](data) page).
* `words_correct`: number of correctly identified words.
* `correctness`: Intelligibility score i.e. rate of correctly identified words (the target variable).
* `hearing_loss`: Indicating if the signal audio was: not processed (**No Loss**); has **Mild** simulated hearing loss; or **Moderate** simulated hearing loss 

```json title="metadata/train_metadata.json"
[
  {
    "signal": "b2486a8e181f84acd2db4d61",
    "prompt": "in my mind I can see is fine",
    "response": "#",
    "n_words": 8,
    "words_correct": 0,
    "correctness": 0.0,
    "hearing_loss": "Moderate"
  }
]
```

## Validation Metadata

The validation metadata is saved in `metadata/valid_metadata.json`.
The metadata contains list of dictionaries, each representing the listener's response.

Fields:
* `signal`: name of signal to predict intelligibility from.
* `prompt`: original target sentence (ground truth). 
* `n_words`: number of words in prompts after expanding contractions.
* `hearing_loss`: Indicating if the signal audio was: not processed (**No Loss**); has **Mild** simulated hearing loss; or **Moderate** simulated hearing loss

```json title="cadenza_data/metadata/valid_metadata.json"
[
  {
    "signal": "c657dc0bd1f822f8ff7104a1",
    "prompt": "do you know i am truly alone",
    "n_words": 7,
    "hearing_loss": "Moderate"
  }
]
```



  