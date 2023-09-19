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

The data is available in five packages, please complete [this form](https://forms.gle/cQwCZeeCX7cm6PoH6) to request access.

All participants will require the **core** data packages.

Participants wanting to extend the training data can use either of the **augmentation** data packages.

* `cad_icassp_2024_core.v1.1.tgz` **[230 KB]** - metadata and hrtf signals.
* `cad_icassp_2024_train.v1.0.tgz` **[14.8 GB]** - audio data for training systems.
* `cad_icassp_2024_medleydb.v1.0.tgz` **[38.1 GB]** - optional audio data for training augmentation.
* [`bach10.zip`](https://labsites.rochester.edu/air/resource.html) **[125 MB]** - optional audio data for training augmentation.
* [`fma_small.zip`](https://os.unil.cloud.switch.ch/fma/fma_small.zip) **[7.2 GB]** - optional audio data for training augmentation.

### B.2 Unpack the packages

After downloading the packages
Unpack the packages under the same root directory as:

```bash
tar -xvzf <PACKAGE_NAME>
```