---
id: download
title: Download data and software
sidebar_label: Download data and software
sidebar_position: 4.2
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info[How to start]
We suggest starting with the installation of the software and then proceeding to follow the instructions for downloading and extracting the data.
:::

## A. Software

All the necessary software to run the recipes and make your own submission is available on our [Clarity-Cadenza
GitHub repository](https://github.com/claritychallenge/clarity).

The official code for the Second Cadenza Challenge was released in version `v0.6.1`.
To avoid any conflict, we highly recommend for you to work using this version and
not with the code from the `main` branch. To install this version you have three options

<details>
  <summary>1. Download the files of the release v0.6.1</summary>

* download from https://github.com/claritychallenge/clarity/releases/tag/v0.6.1
* unpacked the package

From inside the directory, run:

```bash
pip install -e .
```

</details>

<details>
  <summary>2. Clone the repository and checkout version v0.6.1</summary>

```bash
git clone https://github.com/claritychallenge/clarity.git
git checkout tags/v0.6.1

cd clarity
pip install -e .
```
</details>

<details>
  <summary>3. Install pyclarity version 0.6.1 from PyPI</summary>

```bash
pip install pyclarity==0.6.1
```

</details>

## B. Data

### B.1 Download the data for Task 1

The data is available in one packages, please complete [this form](https://forms.gle/p6qQGydbpnJ1ESjC6) to request access.

* `cadenza_cad2_task1_train.v1_0.tar.gz` **[15 GB]** - audio data and metadata.

**Unpack the packages**

After downloading the packages
Unpack the packages under the same root directory as:

```bash
tar -xvzf <PACKAGE_NAME>
```

### B.2 Download the data for Task 2

The data is available in several packages, please complete [this form](https://forms.gle/CtBJNRAmmsrXptAj7) to request access.

* `CadenzaWoodwind.zip` **[7.5 GB]** - CadenzaWoodwind audio dataset.
* `EnsembleSet_Mix_1.zip` **[5.2 GB]** - Small subset of EnsembleSet.
* `metadat.zip` **[209 kB]** - metadata for the system.
* `Stereo_Reverb_Real_Data_For_Tuning.zip` **[182 MB]** - Small subset of real recordings for tuning.

**Unpack the packages**

After downloading the packages, save them in the same directory
and run the script `process_zenodo_download.py` found with the baseline on [GitHub](https://github.com/claritychallenge/clarity).
