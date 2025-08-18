---
id: data
title: Data Specification
sidebar_label: Dataset
sidebar_position: 3.3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::warning[Release of the data]
The training and validation data are provided at challenge launch. 
The evaluation data is provided closer to the submission deadline.
:::

## Overview

The main CLIP1 dataset consists of thousands of audio extracts of unfamiliar Western popular music, each paired with (i) lyric intelligibility scores from listening tests, and (ii) ground truth transcriptions.

## Construction of the CLIP1 Dataset

The Cadenza Lyrics Intelligibility Prediction (CLIP) dataset is based on the FMA dataset [1].
FMA is very rich, containing thousands of songs from various artists, genres and styles.
However, FMA dataset cannot be used for lyrics intelligibility out-of-the-box: (i) It does not include ground-truth transcription. (ii) Some songs don't allowing derivatives of their works. (iii) The labelled genres are assigned by the artist at submission time and are inconsistent. (iv) They are no intelligibility scores. 
CLIP1 was developed to overcome these issues.

### Selecting the tracks from FMA

We began with the FMA-full, which includes all complete (untrimmed) songs. We filtered out any tracks whose license did not allow derivative works. Next, we excluded songs labeled as Classical, Instrumental, Experimental, or International to get just English songs. 
Using the [HTDemucs](https://github.com/facebookresearch/demucs?tab=readme-ov-file) audio source separation model [2] combined with the [Silero VAD](https://github.com/snakers4/silero-vad) voice activity detector and RMS analysis, we removed all tracks without vocals. 
The remaining songs were segmented into choruses and verses using the [All-in-one](https://github.com/mir-aidj/all-in-one) model [3], and we kept only one chorus or verse per song. 
This process resulted in a little more than 17,000 segments.

### Generating ground truth lyric transcriptions

For this, we used a structured annotation process. We recruited native English-speaking PhD students from the Universities of Salford and Sheffield to be annotators. 
Using the academic version of [Label Studio](https://labelstud.io), each annotator was assigned 500 random segments (choruses and verses) with no overlap between assignments. 
For each segment, three versions were presented: the original audio, the separated vocals, and a version with low-frequency bass removed. 
Annotators were tasked with transcribing all lyric phrases they could identify in each segment. They were allowed to listen to the tracks as many times as needed to complete their transcriptions. We also searched for published lyrics on sites such as bandcamp and genius to clarify ambiguous cases.

The resulting phrases were then post-processed to ensure data consistency and quality. 
We removed any repeated phrases from the same song and retained only those containing between five and ten words. 
Phrase boundaries were carefully adjusted so that no words within a phrase were cut off, and no words outside the intended phrase were included in the audio segment.
This post-processing step resulted in a final set of 3,700 audio excerpts.

### Listening tests to get intelligibility scores

We first divided the 3,700 audio excerpts into training, validation, and evaluation sets with an 80/10/10 split, ensuring no artist overlap between sets. 
Each excerpt was then processed using a hearing loss simulation for mild and moderate hearing loss, with different audiograms for each set. This produced three versions of every excerpt.

The resultant 11,100 excerpts were distributed into 111 groups of 100 segments, ensuring that no two versions of the same excerpt appeared in the same group. 
Using [Prolific](https://www.prolific.com/), we recruited 111 native English speakers with normal hearing to transcribe the excerpts. 
Each excerpt was presented twice, with the first serving to help participants adapt to changes in genre and style. Listeners were asked to type what they heard. Intelligibility scores were calculated as the percentage of correctly transcribed words.

### Generating Intelligibility Scores

Both, ground truth and responses transcriptions were text normalised before computing the intelligibility scores.
We started by expanding contractions (e.g. I'm to I am). 
Next, we corrected any misspellings (e.g. correct remeber to remember)
For the responses, we also looked for alternative transcriptions of homophones (e.g. t and tea or, your and you're)
This process resulted in one alternative for the ground truth and several for the responses.

All alternative transcriptions were then transcribed using the BEEP pronunciation dictionary. 
This accounted for when transcribers used a different transcription of a homophone.

Intelligibility scores were computed as the ratio of correctly transcribed words to the total number of words in the ground-truth text.
For responses with multiple alternatives, the final score corresponds to the maximum score across alternatives.

**Examples**

| Original Phrase                               | Alternative Phrase                                 | 
|-----------------------------------------------|----------------------------------------------------|
| i'm thinking about you now                    | i am thinking about you now                        |
| when were lost we know where to find it       | when we are lost we know where to find it          |
| were gonna tell you our names so you remember | we are going to tell you our names so you remember |


:::note[Highly Unintelligible Words Case]
In the ground truth, there are a small number of phrases containing highly unintelligible words where the annotator was unable to pick up the word. These words were marked as **?**.
We accepted this because they represent very unintelligible phrases that occur with sung language. In these cases, the intelligibility can never be 1.
:::

## B. Training, validation and evaluation data

:::warning[🚧 Under Construction 🚧]
:::


## References

1. Defferrard, Michaël, Kirell Benzi, Pierre Vandergheynst, and Xavier Bresson., 2017, [FMA: A DATASET FOR MUSIC ANALYSIS](https://archives.ismir.net/ismir2017/paper/000075.pdf), International Society for Music Information Retrieval.
2. S. Rouard, F. Massa and A. Défossez, 2023, [Hybrid Transformers for Music Source Separation](https://ieeexplore.ieee.org/document/10096956) ICASSP.
3. T. Kim and J. Nam, 2023, [All-in-One Metrical and Functional Structure Analysis with Neighborhood Attentions on Demixed Audio](https://ieeexplore.ieee.org/document/10248148) WASPAA.
