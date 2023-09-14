---
id: download
title: Download data and software
sidebar_label: Download data and software
sidebar_position: 2.2
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info How to start
We suggest starting with the installation of the software and then proceeding to follow the instructions for downloading and extracting the data.
:::

## 1. Software

All the necessary software to run the recipes and make your own submission is available on our [Clarity-Cadenza
GitHub repository](https://github.com/claritychallenge/clarity).

The official code for the ICASSP 2024 Cadenza Challenge was released in version `v0.4.0`.
To avoid any conflict, we highly recommend for you to work using this version and
not with the code from the `main` branch. To install this version:

1. Download the files of the release v0.4.0

* download from https://github.com/claritychallenge/clarity/releases/tag/v0.4.0
* unpacked the package

From inside the directory, run:

```bash
pip install -e .
```

2. Clone the repository and checkout version v0.4.0

```bash
git clone https://github.com/claritychallenge/clarity.git
git checkout tags/v0.4.0

cd clarity
pip install -e .
```

3. Install pyclarity from PyPI as:

```bash
pip install pyclarity==0.4.0
```

***

## 2. Data

To unpack the data we recommend you to follow the instructions in the [Clarity-Cadenza Challenge GitHub repository](https://github.com/claritychallenge/clarity).

All participants will require the **core** data packages.

Participants wishing to extend the training set can use either of the **augmentation** data packages.

:::caution Core  Data

If you already have a copy of the MUSDB18-HQ, you won't need to download it from our mirror.
However, you still need to request access to the dataset to download the metadata package.
This package contains the listeners' audiograms.
:::

The data is available in five packages [from here](https://forms.gle/WGdiFGYhVE4XRfQv6).


* `cadenza_cad1_task1_core_musdb18hq.v1.0.tar.gz` **[21.1 GB]** - core audio data for training, validation.
* `cadenza_cad1_task1_core_metadata.v1.0.tar.gz` **[7 KB]** - core metadata for training and validation.
* `cadenza_cad1_task1_augmentation_medleydb.v1.0.tar.gz` **[38.1 GB]** - optional augmentation audio data for training.
* `cadenza_cad1_task1_augmentation_bach10.v1.0.tar.gz` **[125 MB]** - optional augmentation audio data for training.
* `cadenza_cad1_task1_augmentation_fma_small.v1.0.tar.gz` **[7.1 GB]** - optional augmentation audio data for training.