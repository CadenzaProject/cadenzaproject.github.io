---
id: lyric_data
title: "Lyric Intelligibility Data"
sidebar_label: Lyrics Data
sidebar_position: 2.2
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

To obtain the data and baseline code, please see the [download page](../download).

## A. Training, validation and evaluation data

The training and validation data are provided at challenge launch. The evaluation data is provided closer to the submission deadline.

### A.1 Training and validation data

The dataset uses the transcription extension [1] of the training split of MUSDB18-HQ [2]. This extension comprises 96 manual transcriptions of English songs by
non-native English speakers, totalling 366 minutes of audio.

### A.2 Evaluation (test) set

The music dataset combines the English subset of the JamendoLyrics dataset (20 songs) [3] with the 46 transcribed songs from the evaluation split of the
MUSDB18-HQ dataset, resulting in 260 minutes of audio.

In the evaluation, each scene will be processed for a number of random test listeners.

:::note

The evaluation set should not be used for refining the system.

:::

## B. Metadata Information

### B.1 Listener characteristics

We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised. 
The quantification of the listeners' hearing is done with left and right audiograms. These measure the threshold at which people can hear a pure-tone sound. 
[More information on what audiograms are and how they're measured](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).

- For training, we provide 83 listener audiograms that were collected for the [Clarity project](https://claritychallenge.org/).
- For validation, we constructed a new set of 50 listener audiograms from the [_von Gablenz and Holube (2019)_
dataset](https://zenodo.org/record/4995261#.Y_3O1HbP2Hu).
- For evaluation, we will use a set of 52 listener audiograms use in [first Cadenza Challenges](../../cadenza1/cc1_intro)

Visit [Listener Metadata](data_listener) for more details. The listener data will be the same for both tasks.

### B.2 Alpha

This gives the balanced between intelligibility and quality. It will range from 0 to 1 in 0.1 steps.

## References
<a name="refs"></a>

**[1]** Schulze-Forster, K., Doire, C.S., Richard, G. and Badeau, R., 2021. Phoneme level lyrics alignment and text-informed singing voice separation. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 29, pp.2382-2395.

**[2]** Rafii, Z., Liutkus, A., Stöter, F.-R., Mimilakis, S. I., and Bittner, R. (2019). MUSDB18-HQ - an Uncompressed Version of MUSDB18. [Dataset]. doi:10.5281/zenodo.3338373  

**[3]** Durand, S., Stoller, D. and Ewert, S., 2023, June. Contrastive learning-based audio to lyrics alignment for multiple languages. In ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) (pp. 1-5). IEEE.