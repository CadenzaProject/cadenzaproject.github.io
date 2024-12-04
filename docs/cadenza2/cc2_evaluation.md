---
id: evaluation
title: Evaluation Set
sidebar_label: Evaluation
sidebar_position: 4.7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 1. Task 1 - Lyric Intelligibility

The evaluation package contains all the audios and metadata necessary to run process the signals.

* `cadenza_cad2_task1_evaluation.v1_0.tar.gz` **[1.7 GB]** - audio and metadata evaluation.

### 1.1 Evaluation Music

The evaluation set is derived from the MUSDB18 test split and the English subset of the JamendoLyrics datasets. 
For MUSDB18, the test split contains 50 tracks, but only 39 were included in our evaluation. 
The remaining 11 tracks were excluded for specific reasons: five are not in English, three have vocals but no lyrics, one contains potentially offensive lyrics, and two feature styles that might disturb our listener panel.
From the JamendoLyrics dataset, 18 of the 20 English tracks were included. One track was excluded due to offensive lyrics, and another could not be properly segmented.

The evaluation set focuses exclusively on verse sections of songs. 
Choruses were excluded because they exhibit distinct statistical characteristics, which complicate comparisons with verses. 
Additionally, choruses are generally easier to understand, as they are designed to be simpler and more memorable.

To construct the evaluation set, we first employed the [all-in-one](https://github.com/mir-aidj/all-in-one) [[1]](#references)] model to perform an initial verse/chorus split. 
Next, the community edition of [Label Studio](https://labelstud.io/) was used to align the audio sections with their corresponding lyrics. 
For the MUSDB18 dataset, lyrics were available online for 16 tracks. For the remaining tracks, we used the [lyrics extension](https://zenodo.org/records/3989267) [[2]](#references) as a starting point and manually corrected the lyrics when necessary. 
For JamendoLyrics, all 20 tracks had lyrics available online.

Finally, audio segments were manually reviewed and verified by five members of the Cadenza project team to ensure accuracy and consistency.
The final evaluation set contains 242 segments, each ranging between 10 and 20 seconds.

### 1.2 Submission

Each audio segment is paired with one alpha, resulting in 242 scenes. 
The scene needs to be processed for all listeners (51), which will result in 12,342 total processed signals to submit.
The evaluation processed signals need to be compressed in a single package and submitted into a repository that will be available to participants in due time.
We expect that submission package will size about **XX GB**.


## 2. Task 2 - Rebalancing Classical Music

The evaluation package contains all the audios and metadata necessary to run process the signals.

* `cadenza_cad2_task2_evaluation.v1_0.tar.gz` **[X GB]** - audio and metadata evaluation.

### 2.1 Evaluation Music

The evaluation set is based on 8 tracks from the BACH10 and 13 tracks from the URMP datasets. 
Compositions that intersect with the training sets (EnsembleSet and CadenzaWoodwind) were excluded from the evaluation.
Note that the **Real Data for Tuning** tracks are also part of the BACH10 and URMP datasets, but they are not included in the evaluation.

Each track in the evaluation set were split into consecutive 15-second segments with no overlap, resulting in 87 audio segments.
The segments were then paired with 4 randomly selected gains and each segment-gain pair will be processed for 21 (out of 51) listeners.
The 21 listeners were randomly selected keeping the same distribution of listeners with moderate, moderately severe, severe and no loss. 



## References

**[1]** Kim, Taejun and Nam, Juhan (2023), All-In-One Metrical And Functional Structure Analysis With Neighborhood Attentions on Demixed Audio, IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)
**[2]** Schulze-Forster, K., Doire, C.S., Richard, G. and Badeau, R., 2021. Phoneme level lyrics alignment and text-informed singing voice separation. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 29, pp.2382-2395.