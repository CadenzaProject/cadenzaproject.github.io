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

## A. Software

All the necessary software to run the recipes and make your own submission is available on our [Clarity-Cadenza
GitHub repository](https://github.com/claritychallenge/clarity).

The official code for the ICASSP 2024 Cadenza Challenge was released in version `v0.4.0`.
To avoid any conflict, we highly recommend for you to work using this version and
not with the code from the `main` branch. To install this version you have three options

<details>
  <summary>1. Download the files of the release v0.4.0</summary>

* download from https://github.com/claritychallenge/clarity/releases/tag/v0.4.0
* unpacked the package

From inside the directory, run:

```bash
pip install -e .
```

</details>

<details>
  <summary>2. Clone the repository and checkout version v0.4.0</summary>

```bash
git clone https://github.com/claritychallenge/clarity.git
git checkout tags/v0.4.0

cd clarity
pip install -e .
```
</details>

<details>
  <summary>3. Install pyclarity version 0.4.0 from PyPI</summary>

```bash
pip install pyclarity==0.4.0
```

</details>

## B. Data

### B.1 Download the packages

The data is available in five packages, please complete [this form](https://forms.gle/WGdiFGYhVE4XRfQv6) to request access.

All participants will require the **core** data packages.

Participants wanting to extend the training data can use either of the **augmentation** data packages.

* **Core packages**
  * `cadenza_cad1_task1_core_musdb18hq.v1.0.tgz` **[21.1 GB]** - core audio data for training, validation.
  * `cadenza_cad1_task1_core_metadata.v1.0.tgz` **[7 KB]** - core metadata for training and validation.

* **Augmentation Packages**
  * `cadenza_cad1_task1_augmentation_medleydb.v1.0.tgz` **[38.1 GB]** - optional augmentation audio data for training.
  * `cadenza_cad1_task1_augmentation_bach10.v1.0.tgz` **[125 MB]** - optional augmentation audio data for training.
  * `cadenza_cad1_task1_augmentation_fma_small.v1.0.tgz` **[7.1 GB]** - optional augmentation audio data for training.

### B.2 Unpack the packages

After downloading the packages
Unpack the packages under the same root directory as:

```bash
tar -xvzf <PACKAGE_NAME>
```