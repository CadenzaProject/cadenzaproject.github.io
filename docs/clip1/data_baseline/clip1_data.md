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

## A. Construction of the Dataset

The Cadenza Lyrics Intelligibility Prediction (CLIP) dataset is based on the FMA dataset [1].
The FMA dataset is a very rich dataset containing thousands of songs from various artists and genres and styles.
However, FMA dataset cannot be used for lyrics intelligibility out-of-the-box; it does not include ground truth transcription, it contains various copyright levels with several song not allowing derivatives of the data, 
the labelled genres correspond to inconsistent genres assigned by the artist at submission time, and it does not include separated stems for each component.  

The FMA dataset was processed to extract song that allows us to obtain human intelligibility scores. 
Efforts were made to obtain a dataset that were rich in singing styles, genres and intelligibility levels. 

### A.1 Selecting the tracks to use

For the construction of the CLIP dataset, we applied several steps to select the most suitable songs for the challenge. 
We began with the FMA-full version, which includes all complete (untrimmed) songs, and filtered out any tracks that did not allow derivative works. 
Next, we excluded songs labeled as Classical, Instrumental, Experimental, or International, resulting in a list of English songs. 
Using the [HTDemucs](https://github.com/facebookresearch/demucs?tab=readme-ov-file) audio source separation model [2] combined with the [Silero VAD](https://github.com/snakers4/silero-vad) voice activity detector and RMS analysis, we removed all tracks without vocals. 
The remaining songs were segmented into choruses and verses using the [All-in-one](https://github.com/mir-aidj/all-in-one) model [3], and we kept only one chorus or verse per song. 
This process resulted in a little more than 17,000 segments.

### A.2 Generating Ground Truth Transcriptions

As the FMA dataset does not include ground truth transcriptions, we generated these through a structured annotation process. 
We recruited native English-speaking PhD students from the University of Salford and the University of Sheffield as annotators. 
Using the academic version of [Label Studio](https://labelstud.io), each annotator was assigned 500 random segments (choruses and verses) with no overlap between assignments. 
For each segment, three versions were presented: the original audio, the separated vocals, and a version with low-frequency components removed to eliminate the bass. 
Annotators were tasked with transcribing all lyric phrases they could identify in each segment. 
They were allowed to listen to the tracks as many times as needed to complete their transcriptions.

The resulting phrases were then post-processed to ensure data consistency and quality. 
We removed any repeated phrases from the same song and retained only those containing between five and ten words. 
Phrase boundaries were carefully adjusted so that no words within a phrase were cut off, and no words outside the intended phrase were included in the audio segment.
This post-processing step resulted in a final set of 3,700 audio excerpts.

### A.3 Generating Human Responses

To generate the intelligibility scores, we first divided the 3,700 audio excerpts into training, validation, and evaluation sets with an 80/10/10 split, ensuring no artist overlap between sets. 
Each excerpt was then processed using a hearing loss simulation for mild and moderate hearing loss, different audiograms for each set, producing three versions of every excerpt. 
This resulted in 11,100 excerpts that were distributed into 111 groups of 100 segments, ensuring that no two versions of the same excerpt appeared in the same group. 
Using [Prolific](https://www.prolific.com/), we recruited 111 native English speakers with normal hearing to transcribe the excerpts. 
Each excerpt was presented in two shots, with the first serving to help participants adapt to changes in genre and style. 
Intelligibility scores were calculated as the percentage of correctly transcribed words.

### A.4 Generating Intelligibility Scores

Both, ground truth and responses transcriptions were text normalised before computing the intelligibility scores.
We started by expanding contractions (e.g. I'm to I am). 
Next, we corrected any misspellings (e.g. correct remeber with remember)
Then, and only for the responses, we looked for alternative transcriptions of homophones (e.g. t and tea or, your and you're)
This process resulted in one alternative for the ground truth and several for the responses.

All alternative transcriptions were then transcribed using the BEEP pronunciation dictionary. 
This account for when transcribers choose for a different transcription of homophone word.

Intelligibility scores were computed as the ratio of correctly transcribed words.
For responses with multiple alternatives, the final score corresponds to the maximum score across al alternatives.

## B. Training, validation and evaluation data

:::warning[🚧 Under Construction 🚧]
:::


## References

1. Defferrard, Michaël, Kirell Benzi, Pierre Vandergheynst, and Xavier Bresson., 2017, [FMA: A DATASET FOR MUSIC ANALYSIS](https://archives.ismir.net/ismir2017/paper/000075.pdf), International Society for Music Information Retrieval.
2. S. Rouard, F. Massa and A. Défossez, 2023, [Hybrid Transformers for Music Source Separation](https://ieeexplore.ieee.org/document/10096956) ICASSP.
3. T. Kim and J. Nam, 2023, [All-in-One Metrical and Functional Structure Analysis with Neighborhood Attentions on Demixed Audio](https://ieeexplore.ieee.org/document/10248148) WASPAA.
