---
id: evaluation
title: Evaluation Set
sidebar_label: Evaluation
sidebar_position: 4.7
---
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Image img={require('../../static/img/cad2/34507.jpg')}/>

:::warning[Submission Information]

If you haven't registered your team, please do so [**here**](Take%20Part/cc2_registration).

Before running the evaluation, please ensure you are using PyClarity version 0.6.3.

More details about the submission, refer to the [**submission information**](Take%20Part/submission) page.

:::

## 1. Evaluation package

The evaluation packages contains all the audios and metadata necessary to run the enhancing stage. That is,
only the mixture signals are provided. You need to run your system on this data and submit the output signals
to us, we will run the evaluation. Personalised instructions on where to submit the data are send to each registered team.

To get access to the data, please download the package from the corresponding Zenodo repository.

**Lyrics Intelligibility**
* `cadenza_cad2_task1_eval.v1_1.tar.gz` **[1.5 GB]** - audio and metadata.
* [Zenodo](https://zenodo.org/records/14333454)  

**Rebalancing Classical Music**
* `cadenza_cad2_task2_eval.v1_1.tar.gz` **[94 MB]** - audio and metadata.
* [Zenodo](https://zenodo.org/records/14335552) 

## 2. Listeners Metadata

The evaluation listeners correspond to 50 real audiograms of hearing aid users recruited by the University of Leeds, plus a no-loss audiogram with 0 dB across all frequencies to evaluate systems under no-loss conditions.
The distribution of these audiograms by hearing loss category is as follows: 18 mild, 16 moderate, 16 moderately severe, and 1 with no loss.
The same listeners will be used in both the Lyrics Intelligibility and Rebalancing Classical Music tasks.

## 3. Lyrics Intelligibility

### 3.1 Music samples

The evaluation set is derived from the MUSDB18 test split and the English subset of the JamendoLyrics datasets. 
For MUSDB18, the test split contains 50 tracks, but only 39 were included in our evaluation. 
The remaining 11 tracks were excluded for the following reasons: five are not in English, three have vocals but no lyrics (vocal harmony or just repeating one word), one contains potentially offensive lyrics, and two feature styles that might disturb our listener panel.
From the JamendoLyrics dataset, 18 of the 20 English tracks were included. One track was excluded due to offensive lyrics, and the other could not be properly segmented.

The evaluation set focuses exclusively on verse sections of songs. 
Choruses were excluded because they are generally easier to understand, as they are designed to be simpler and more memorable.

To construct the evaluation set, we first employed the [all-in-one](https://github.com/mir-aidj/all-in-one) [[1]](#references) model to perform an initial verse/chorus segmentation. 
Next, we used these segments with the community edition of [Label Studio](https://labelstud.io/) to align the audio sections with their corresponding lyrics. 
The objective was to annotate the verses while keeping the segments in a range of 10-20 seconds long. 
For the MUSDB18 dataset, lyrics were available online for 16 tracks. 
For the remaining tracks, we used the [lyrics extension dataset](https://zenodo.org/records/3989267) [[2]](#references) as a starting point and manually corrected the lyrics when necessary. 
For JamendoLyrics, all 20 tracks had lyrics available online together with the [Jam-Alt dataset](https://audioshake.github.io/jam-alt/) [[3]](#references).

Finally, audio segments were manually reviewed and verified by five members of the Cadenza project team to ensure accuracy and consistency.
The final evaluation set contains 242 segments, each ranging between 10 and 20 seconds.

For the quality score (HAAQI), the reference signal was set as a remix of the original track with the vocals boosted by +2 dB. 
To achieve this, we generated a Musdb18-like version of the JamendoLyrics dataset using the 
[HDEMUCS_HIGH_MUSDB_PLUS](https://pytorch.org/audio/main/generated/torchaudio.pipelines.HDEMUCS_HIGH_MUSDB_PLUS.html) pretrained model from torchaudio.

### 3.2 Metadata

The evaluation metadata has the same structure as the training and validation sets described [here](Lyric%20Intelligibility/lyric_data).

There are 242 **scenes**, each corresponding to an audio segment paired with one of the 11 **alphas**. 
The **scene-listener** file pairs each scene with all 51 evaluation listeners, resulting in a total 12,342 processed signals to submit.


## 4. Rebalancing Classical

### 4.1 Music samples

The evaluation set is based on 8 tracks from the BACH10 and 13 tracks from the URMP datasets. 
Compositions that intersect with the training sets (EnsembleSet and CadenzaWoodwind) were excluded from the evaluation.
Note that the **Real Data for Tuning** tracks are also part of the BACH10 and URMP datasets, but they are not included in the evaluation.
For more details on the evaluation music, please refer to [here](Rebalancing%20Classical/rebalancing_data#a3-evaluation-test-set).

Each track in the evaluation set were split into consecutive 15-second segments with no overlap, resulting in 87 audio segments.
The segments were then paired with 4 randomly selected gains and each segment-gain pair will be processed for 21 (out of 51) listeners.
The 21 listeners were randomly selected keeping the same distribution of listeners with moderate, moderately severe, severe and no loss. 

### 4.2 Metadata

The metadata has the same structure as the training and validation sets described [here](http://localhost:3000/docs/cadenza2/Rebalancing%20Classical/rebalancing_data).

The 87 audio segments are pair with 4 randomly selected **gains**, resulting in 348 **scenes**. 
Each scene was paired with 21 listeners, randomly selected to maintain the same distributed by loss category: 8 mild, 6 moderately severe, 6 severe and 1 no loss, resulting in 3,708 **scene-listeners** pairs.

## 5. Submission

The submission for the challenge must include all the processed audio signals, along with a technical report summarising the approach.

The processed signals should be compressed into a single ZIP package and submitted to a repository, which will be shared with participants in due time.
If participant have issues packaging or submitting a large file, they may divide the data into
several smaller packages, each no smaller than 2GB.

The total size of the submission package for:
* Lyrics intelligibility: **16** GB.
* Rebalancing Classical Music: **7** GB

Participants are allowed to submit several systems. More information on how to submit several systems will be provided along with the Team ID.

To submit your results, please follow these steps:

1. Process the signals: 
   * Download the Evaluation Set and process the audio signals as per the challenge requirements.
2. Prepare your submission:
   * Compress the **enhanced_signals** directory into a ZIP file.
   * Name the file using the following convention, where TeamID is the Team ID sent by email:
     * Causal System: `submission_<TeamID>_causal.zip`
     * Non-Causal System: `submission_<TeamID>_noncausal.zip`
   * If applicable, include the following suffixes:
     * _aug: for data augmentation (e.g., SpecAugment, pitch shifting, channel swap).
     * _sup: for data supplementation (e.g., additional datasets).
     * _aug_sup: for both augmentation and supplementation.
   * If you use data augmentation and/or supplementation, please submit a separate system without these techniques to facilitate comparison.
   * Place all files in the same OneDrive directory provided.
   * Example, Team ID T001 developed a causal system. They used data augmentation and data suplementation. The packages they need to submit are:
     * `submission_T001_causal.zip` -> results from a system trained solely on the challenge data. 
     * `submission_T001_causal_aug.zip` -> results of a system trained using data augmentation like pitch shifting
     * `submission_T001_noncausal_sup.zip` -> results of a system trained on the challenge data plus another dataset like AAM
     * `submission_T001_noncausal_aug_sup.zip` -> results of a system trained using the challenge data, supplementary data and data augmentation.
3. Submitting multiple systems:
   * If you want to submit systems with different architectures or procedures (beyond augmentation or supplementation), please request an additional Team ID.
   * You can submit results for multiple systems provided they are significantly different.
4. Include your technical report:
   * Don't forget to include your brief technical report following the [Submission Guidelines](Take%20Part/submission).
   * Please include as much detail as possible. 

## References

**[1]** Kim, Taejun and Nam, Juhan (2023), All-In-One Metrical And Functional Structure Analysis With Neighborhood Attentions on Demixed Audio, IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)
**[2]** Schulze-Forster, K., Doire, C.S., Richard, G. and Badeau, R., 2021. Phoneme level lyrics alignment and text-informed singing voice separation. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 29, pp.2382-2395.  
**[3]** Cífka, O., Dimitriou, C., Wang, C. I., Schreiber, H., Miner, L., & Stöter, F. R. (2023). Jam-ALT: A Formatting-Aware Lyrics Transcription Benchmark. arXiv preprint arXiv:2311.13987.