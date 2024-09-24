---
id: rebalancing_data
title: "Rebalancing Classical Music Data"
sidebar_label: Data
sidebar_position: 3.3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::warning
New version of task 2 dataset released on 24 of September 2024.   
Please ensure you are using the last version.
:::

- To obtain the data and baseline code, please see the [download page](../Take%20Part/download).
- For instructions on what data and pretrained models can be used in the challenges, please see [rules](../Take%20Part/rules).

## A. Training, validation and evaluation data

The training and validation data are provided at challenge launch. The evaluation data is provided closer to the submission deadline.

### A.1 Training and validation data

Training requires a large amount of audio data and there is not enough recordings of classical music ensembles with isolated instruments. Consequently, for training we are providing music ensembles synthesised from scores.

- EnsembleSet [[1]](#references)
  - This contains 80 pieces from classical 17 composers. EnsembleSet has renders for 11 different instruments. We're using the string parts.
- CadenzaWoodwind  
  - A new data set we've created in a similar way to EnsembleSet but for five woodwind instruments (flute, clarinet, oboe, alto saxophone and bassoon). There are two quartet orchestrations: (a) flute, clarinet, oboe, and bassoon and (b) flute, alto saxophone, oboe and bassoon. The stems for each solo instrument are presented along with the two mixtures. See our [Zenodo archive for the dataset](https://zenodo.org/records/12664932) for more details.
  
We permit the use of the following non-classical music datasets in training: [MUSDB18-HQ](https://sigsep.github.io/datasets/musdb.html), [FMA](https://github.com/mdeff/fma), [MedleydB version 1 and version 2](https://medleydb.weebly.com/), [MTG-Jamendo](https://mtg.github.io/mtg-jamendo-dataset/) and [MousesDB](https://music.ai/blog/news/introducing-moisesdb-the-ultimate-multitrack-dataset-for-source-separation-beyond-4-stems/). We also permit the use of pre-trained models that might have been developed using these databases.

You should not use pre-trained models that were trained on the evaluation data (BACH10 and URMP datasets).
 
**Validation** We provide a split of the training set for validation. The audio tracks are divided into consecutive 15-second segments to match how the 
evaluation set will be provided. The validation samples are a collection of correct mixtures (strings quartets from EnsembleSet and woodwind quartets from CadenzaWoodwind) and
random mixtures to account for mixtures that contains strings and woodwind instruments. 

### A.2 Real data tuning set

This is a small dataset of real recordings created in the same way as the evaluation set - see below. It is intended to help you cope with any mismatch between the synthesised training+validation data and the real-recording evaluation set. It is not statistically balanced in terms of what instruments it includes. Consequently, caution is needed when using it to fine tune a machine learning model.

### A.3 Evaluation (test) set

The evaluation dataset are created using:
- BACH10 [[2]](#references), and
- University of Rochester multi-modal music performance (URMP) [[3]](#references).

BACH10 has 10 four-part J.S. Bach chorales performed on bassoon, clarinet, alto saxophone and violin. The URMP dataset a total of 44 duets, trios, quartets and quintets. The pieces are from 19 composers, including: Mozart, Tchaikovsky and Beethoven. The pieces are performed by a combination of 14 different instruments. Due to their low representation in the evaluation datasets we excluded pieces featuring double bass, horn, trombone, trumpet and tuba.

Both databases have mono recordings of isolated instruments in anechoic conditions. We have taken these and created stereo versions in small halls using convolution reverb based on ambisonic impulse responses from the [Openair database](https://www.openair.hosted.york.ac.uk/) [4]. See our [Zenodo archive for the dataset](https://zenodo.org/records/12664932) for more details.

In the evaluation, each scene will be processed for a number of random test listeners.

:::danger

The evaluation set should not be used for refining the system.

:::

## B. Metadata Information

### B.1 Listener characteristics

We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised. This is common for both tasks, so please see [Listener Metadata](../data_listener) for more details.

```json
{
  "L0001": {
    "name": "L0001",
    "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
    "audiogram_levels_l": [45, 45, 35, 45, 60, 65, 70, 65],
    "audiogram_levels_r": [40, 40, 45, 45, 60, 65, 80, 80]
  },
  "L0002": {
    "name": "L0002",
    ...
  }
```

### B.2 Gains

We provide metadata giving the gains to use for rebalancing the mixture. There are 4 gains per music sample, but we also provide code to create more. The gains applied to each instrument are chosen as follows:

* Choosing how many sources instruments have their gain altered: 1 ... N-1 (when N is the number of instrument). So for quartet 1, 2, or 3.
* Choosing the gain for those tracks: [-10, -6, -3, 3, 6, 10] dB.
* The other sources instruments have gains of 0 dB.

We also apply an additional gain to all tracks to ensure the above process does not result in large amplification or attenuation of the mix. This gain is:

$$
\begin{align}
G = -10  log_{10} (\frac{1}{N} * (10^{\frac{dbi}{10}}))  \tag{1}
\end{align}
$$

{/*
G  = -10*log10( (1/N)(10<sup>(dbi/10)</sup>) ) (dB) <div align="right">(1)</div>
*/}

Where there are N tracks and the gain for the i<sup>th</sup> track is dBi.

In the metadata, this is then reported as the gain for each source instrument. An example for a duet would be:

```json
{
"gain_0001": {
    "source_1": -10,
    "source_2": 0
},
"gain_0002": {
    "source_1": -6,
    "source_2": 0
},
"gain_0003": {
    "source_1": -3,
    "source_2": 0
},
}
```

### B.3 Music
This provide information of details of the composition

```json
{
"anitrasdance_001": {
    "source_1": {
        "source_dataset": "EnsembleSet",
        "instrument": "Cello",
        "track": "anitrasdance/Mix_1/Cello.flac",
        "start": 46,
        "duration": 15
    },
    "source_2": {
        "source_dataset": "EnsembleSet",
        "instrument": "Viola",
        "track": "anitrasdance/Mix_1/Viola.flac",
        "start": 46,
        "duration": 15
    },
    "source_3": {
        "source_dataset": "EnsembleSet",
        "instrument": "Violin_1",
        "track": "anitrasdance/Mix_1/Violin_1.flac",
        "start": 46,
        "duration": 15
    },
    "source_4": {
        "source_dataset": "EnsembleSet",
        "instrument": "Violin_2",
        "track": "anitrasdance/Mix_1/Violin_2.flac",
        "start": 46,
        "duration": 15
    },
    "mixture": {
        "source_dataset": "EnsembleSet",
        "instrument": "Mixture",
        "track": "anitrasdance/Mix_1/mix_anitrasdance.flac",
        "start": 46,
        "duration": 15
    }
}
```

### B.4 Scene

The scenes are then:
```json
{
"S50001": {
    "music": "anitrasdance_000",
    "gain": "gain_0645"
},
"S50002": {
    "music": "anitrasdance_000",
    "gain": "gain_0713"
},
}
```

### B.5 Scene-listener

```json
{
  "S10001": [
    "L0051",
    "L0001"
  ],
  "S10002": [
    "L0028",
    "L0012"
  ]
}
```

## References

[1] Sarkar, S., Benetos, E. and Sandler, M., 2022. Ensembleset: A new high-quality synthesised dataset for chamber ensemble separation.  
[2] Duan, Z. and Pardo, B., 2011. Soundprism: An online system for score-informed source separation of music audio. IEEE Journal of Selected Topics in Signal Processing, 5(6), pp.1205-1215.  
[3] Li, B., Liu, X., Dinesh, K., Duan, Z. and Sharma, G., 2018. Creating a multitrack classical music performance dataset for multimodal music analysis: Challenges, insights, and applications. IEEE Transactions on Multimedia, 21(2), pp.522-535.  
[4] Murphy, D.T. and Shelley, S., 2010, November. Openair: An interactive auralization web resource and database. In Audio Engineering Society Convention 129. Audio Engineering Society.  


