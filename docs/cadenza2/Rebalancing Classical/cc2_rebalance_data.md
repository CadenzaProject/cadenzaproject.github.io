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
  - A new data set we've created in a similar way to EnsembleSet but for five woodwind instruments (flute, clarinet, oboe, alto saxophone and bassoon). See Appendix A below.
  
We permit the use of the following non-classical music datasets in training: [MUSDB18-HQ](https://sigsep.github.io/datasets/musdb.html), [FMA](https://github.com/mdeff/fma), [MedleydB version 1 and version 2](https://medleydb.weebly.com/), [MTG-Jamendo](https://mtg.github.io/mtg-jamendo-dataset/) and [MousesDB](https://music.ai/blog/news/introducing-moisesdb-the-ultimate-multitrack-dataset-for-source-separation-beyond-4-stems/). We also permit the use of pre-trained models that might have been developed using these databases.

You should not use pre-trained models that were trained on the evaluation data (BACH10 and URMP datasets).
 
### A.2 Real data tuning set

This is a small data base of real recordings created in the same way as the evaluation set. It is intended to help you cope with any mismatch between the synthesised training+validation data and the real-recording evaluation set. It is not statistically balanced in terms of what instruments it includes. Consequently, caution is needed when using it to fine tune a machine learning model.

### A.3 Evaluation (test) set

The evaluation dataset are created using:
- BACH10 [2], and
- University of Rochester multi-modal music performance (URMP) [3].

BACH10 has 10 four-part J.S. Bach chorales performed on bassoon, clarinet, alto saxophone and violin. The URMP dataset a total of 44 duets, trios, quartets and quintets. The pieces are from 19
composers, including: Mozart, Tchaikovsky and Beethoven. The pieces are performed by a combination of 14 different instruments. Due to their low representation in the evaluation datasets we excluded pieces featuring double bass, horn, trombone, trumpet and tuba.

Both databases have mono recordings of isolated instruments in anechoic conditions. We have taken these and created stereo versions in small halls using convolution reverb based on ambisonic impulse responses from the [Openair database](https://www.openair.hosted.york.ac.uk/) [4]. See Appendix B below.

In the evaluation, each scene will be processed for a number of random test listeners.

:::note

The evaluation set should not be used for refining the system.

:::

## B. Metadata Information

### B.1 Listener characteristics

We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised. This is common for both tasks, so please see [Listener Metadata](../data_listener) for more details.

### B.2 Gains

** ** MISSING** **

---

## Appendix A: CadenzaWoodwind

The scores for the dataset came from the [OpenScore String Quartet Corpus](https://github.com/OpenScore/StringQuartets/)) [5]. 21 of these were selected at random. The dice was weighted according to the length of the pieces so that longer scores with multiple movements were more likely to be chosen. This was done because there were manual steps in the subsequent rendering process, and having many small scores would make the process much longer. A maximum of two pieces per composer were chosen. Two of the scores would not render in the music notation software and so were excluded. The 19 scores selected were:
 - Arriaga, Juan Crisostomo de; String Quartet No.3 in E-flat Major; sq7383977
 - Beethoven, Ludwig van; String Quartet No.3, Op.18 No.3; sq8907120
 - Beethoven, Ludwig van; String Quartet No.5, Op.18 No.5; sq9396439
 - Boccherini, Luigi; String Quartet in A major, G.213 (Op.39); sq8454356
 - Busoni, Ferruccio; String Quartet No.1, Op.19, BV 208; sq11154985
 - Grieg, Edvard; String Quartet No.1, Op.27; sq9631717
 - Haydn, Joseph; String Quartet in B-flat major, Hob.III67, Op.64 No.3; sq7123582
 - Haydn, Joseph; String Quartet in D major, Hob.III3, Op.1 No.3; sq8806746
 - Hensel, Fanny (Mendelssohn); String Quartet in E-flat major, Op. 277; sq7577795
 - Mayer, Emilie; String Quartet in A Major; sq8818128
 - Mayer, Emilie; String Quartet in D Major; sq7588853
 - Mendelssohn, Felix; String Quartet No.4 in E minor, Op.44 No.2; sq8623643
 - Moeran, Ernest John; String Quartet in A minor; sq9071492
 - Mozart, Wolfgang Amadeus; String Quartet No.15 in D minor, K.421417b (Op. 10, No. 2); sq7294793
 - Mozart, Wolfgang Amadeus; String Quartet No.16 in E-flat major, K.428421b (Op. 10, No. 4); sq7302710
 - Saint-Georges, Joseph Bologne; String Quartet in D major, Op.1 No.6; sq10490761
 - Schulhoff, Erwin; String Quartet No.1; sq8630159
 - Schumann, Robert; String Quartet No.3, Op.41 No.3; sq9529900
 - Smyth, Ethel; String Quartet in E minor; sq7555331

These were interpretted using [Dorico music notation software](https://www.steinberg.net/dorico/). The four string parts were allocated to flute, oboe, clarinet and bassoon and a professional sample library used to create the audio. Reverberation was added using a convolution reverb, using an impulse response from the Royal Tropical Institute, Amsterdam in [Avid's Space Impulse Response IR Library](https://www.avid.com/plugins/space-impulse-response-library).

## Appendix B: Adding reverberation to URMP and BACH10

The b-format ambisonic impulse responses came from the [Openair database](https://www.openair.hosted.york.ac.uk/). Five small to medium sized venues were chosen as follows:
- Arthur Sykes Rymer Auditorium, University of York.
- Central Hall, University of York
- The Dixon Studio Theatre, University of York
- York Guildhall Council Chamber

Only impulse responses measured with a source-receiver distance greater than 5m were included.

The following procesure was used to convert the b-format to stereo. For each instrument:
- The b-format representation was rotated in azimuth to face the instrument. The instruments were spaced at 10&deg; apart.
- The b-format was convered to mid-side stereo using Eqn 1.7 from reference [6]. $\alpha$=0.5 was used.
- The stereo impulse responses were convolved with the anechoic mono music recordings.
- The mix was normalised so the peak absolute sample value was 1. The scaling factor used to do this, was applied to all the instruments in the mix.

## References

[1] Sarkar, S., Benetos, E. and Sandler, M., 2022. Ensembleset: A new high-quality synthesised dataset for chamber ensemble separation.  
[2] Duan, Z. and Pardo, B., 2011. Soundprism: An online system for score-informed source separation of music audio. IEEE Journal of Selected Topics in Signal Processing, 5(6), pp.1205-1215.  
[3] Li, B., Liu, X., Dinesh, K., Duan, Z. and Sharma, G., 2018. Creating a multitrack classical music performance dataset for multimodal music analysis: Challenges, insights, and applications. IEEE Transactions on Multimedia, 21(2), pp.522-535.  
[4] Murphy, D.T. and Shelley, S., 2010, November. Openair: An interactive auralization web resource and database. In Audio Engineering Society Convention 129. Audio Engineering Society.  
[5] Gotham, M., Redbond, M., Bower, B. and Jonas, P., 2023, November. The “OpenScore String Quartet” Corpus. In Proceedings of the 10th International Conference on Digital Libraries for Musicology (pp. 49-57).  
[6] Zotter, F. and Frank, M., 2019. Ambisonics: A practical 3D audio theory for recording, studio production, sound reinforcement, and virtual reality (p. 5). Springer Nature.


