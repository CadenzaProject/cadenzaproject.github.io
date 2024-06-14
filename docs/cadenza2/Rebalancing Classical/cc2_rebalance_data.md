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

To obtain the data and baseline code, please see the [download page](../Take%20Part/download).

## A. Training, validation and evaluation data

The training and validation data are provided at challenge launch. The evaluation data is provided closer to the submission deadline.

### A.1 Training and validation data

Training requires a large amount of audio data and there is not enough recordings of classical music ensembles with isolated instruments. Consequently, for training we are providing music ensembles synthesised from scores. For string ensembles, we are using part of the EnsembleSet dataset [3], which contains 80 pieces from classical 17 composers. EnsembleSet has renders for 11 different instruments.

**OUR DATASET**

### A.2 Evaluation (test) set

The evaluation dataset are extracted from:
- BACH10 [1], and
- University of Rochester multi-modal music performance (URMP) [2].

BACH10 has 10 four-part J.S. Bach chorales performed on bassoon, clarinet, alto saxophone and violin. The URMP dataset a total of 44 duets, trios, quartets and quintets. The pieces are from 19
composers, including: Mozart, Tchaikovsky and Beethoven. The pieces are performed by a combination of 14 different instruments. Due to their low representation in the evaluation datasets we excluded pieces featuring double bass, horn, trombone, trumpet and tuba.

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
<a name="refs"></a>

**[1]** Duan, Z. and Pardo, B., 2011. Soundprism: An online system for score-informed source separation of music audio. IEEE Journal of Selected Topics in Signal Processing, 5(6), pp.1205-1215.  
**[2]** Li, B., Liu, X., Dinesh, K., Duan, Z. and Sharma, G., 2018. Creating a multitrack classical music performance dataset for multimodal music analysis: Challenges, insights, and applications. IEEE Transactions on Multimedia, 21(2), pp.522-535.  
**[3]** Sarkar, S., Benetos, E. and Sandler, M., 2022. Ensembleset: A new high-quality synthesised dataset for chamber ensemble separation.  

