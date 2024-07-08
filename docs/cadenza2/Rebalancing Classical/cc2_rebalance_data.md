---
id: rebalancing_data
title: "Rebalancing Classical Music Data"
sidebar_label: Rebalancing Data
sidebar_position: 3.1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

- To obtain the data and baseline code, please see the [download page](../Take%20Part/download).
- For instructions on what data and pretrained models can be used in the challenges, please see [rules](../Take%20Part/rules).

## A. Training, validation and evaluation data

The training and validation data are provided at challenge launch. The evaluation data is provided closer to the submission deadline.

### A.1 Training and validation data

Training requires a large amount of audio data and there is not enough recordings of classical music ensembles with isolated instruments. Consequently, for training we are providing music ensembles synthesised from scores.

- EnsembleSet [1]
  - This contains 80 pieces from classical 17 composers. EnsembleSet has renders for 11 different instruments. We're using the string parts.
- CadenzaWoodwind  
  - A new data set we've created in a similar way to EnsembleSet but for five woodwind instruments (flute, clarinet, oboe, alto saxophone and bassoon). There are two quartet orchestrations: (a) flute, clarinet, oboe, and bassoon and (b) flute, alto saxophone, oboe and bassoon. The stems for each solo instrument are presented along with the two mixtures. See our [Zenodo archive for the dataset](https://zenodo.org/records/12664932) for more details.
  
We permit the use of the following non-classical music datasets in training: [MUSDB18-HQ](https://sigsep.github.io/datasets/musdb.html), [FMA](https://github.com/mdeff/fma), [MedleydB version 1 and version 2](https://medleydb.weebly.com/), [MTG-Jamendo](https://mtg.github.io/mtg-jamendo-dataset/) and [MousesDB](https://music.ai/blog/news/introducing-moisesdb-the-ultimate-multitrack-dataset-for-source-separation-beyond-4-stems/). We also permit the use of pre-trained models that might have been developed using these databases.

You should not use pre-trained models that were trained on the evaluation data (BACH10 and URMP datasets).
 
### A.2 Real data tuning set

This is a small data base of real recordings created in the same way as the evaluation set - see below. It is intended to help you cope with any mismatch between the synthesised training+validation data and the real-recording evaluation set. It is not statistically balanced in terms of what instruments it includes. Consequently, caution is needed when using it to fine tune a machine learning model.

### A.3 Evaluation (test) set

The evaluation dataset are created using:
- BACH10 [2], and
- University of Rochester multi-modal music performance (URMP) [3].

BACH10 has 10 four-part J.S. Bach chorales performed on bassoon, clarinet, alto saxophone and violin. The URMP dataset a total of 44 duets, trios, quartets and quintets. The pieces are from 19 composers, including: Mozart, Tchaikovsky and Beethoven. The pieces are performed by a combination of 14 different instruments. Due to their low representation in the evaluation datasets we excluded pieces featuring double bass, horn, trombone, trumpet and tuba.

Both databases have mono recordings of isolated instruments in anechoic conditions. We have taken these and created stereo versions in small halls using convolution reverb based on ambisonic impulse responses from the [Openair database](https://www.openair.hosted.york.ac.uk/) [4]. See our [Zenodo archive for the dataset](https://zenodo.org/records/12664932) for more details.

In the evaluation, each scene will be processed for a number of random test listeners.

:::note

The evaluation set should not be used for refining the system.

:::

## B. Metadata Information

### B.1 Listener characteristics

We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised. This is common for both tasks, so please see [Listener Metadata](../data_listener) for more details.

### B.2 Gains

** ** MISSING** **

## References

[1] Sarkar, S., Benetos, E. and Sandler, M., 2022. Ensembleset: A new high-quality synthesised dataset for chamber ensemble separation.  
[2] Duan, Z. and Pardo, B., 2011. Soundprism: An online system for score-informed source separation of music audio. IEEE Journal of Selected Topics in Signal Processing, 5(6), pp.1205-1215.  
[3] Li, B., Liu, X., Dinesh, K., Duan, Z. and Sharma, G., 2018. Creating a multitrack classical music performance dataset for multimodal music analysis: Challenges, insights, and applications. IEEE Transactions on Multimedia, 21(2), pp.522-535.  
[4] Murphy, D.T. and Shelley, S., 2010, November. Openair: An interactive auralization web resource and database. In Audio Engineering Society Convention 129. Audio Engineering Society.  


