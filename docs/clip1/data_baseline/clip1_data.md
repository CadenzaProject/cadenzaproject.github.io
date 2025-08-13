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
The FMA dataset is a very rich dataset containing thousands of songs from various artists and genres.
However, it does not include ground truth transcription, it contains various copyright levels with several song not allowing derivatives of the data, 
the labelled genres correspond to inconsistent genres assigned by the artist at submission time, and it does not include separated stems for each component.  

### A.1 Selecting the tracks to use

For the construction of the CLIP dataset, we pass the dataset to several steps to select the most suitable songs for the challenge.

1. We used the FMA-full version which includes all the complete songs (untrimmed).
2. We filter out all songs not allowing derivatives. 
3. We excluded all songs labelled as Classical, Instrumental, Experimental and International. This results in a list of English songs.
4. Using an audio source separation model, we excluded songs all songs that didn't have vocals. This, using a voice activity detection and RMS analysis.
5. The resulting songs were then segmented by choruses and verses. We kept just one chorus or verse per song.

These steps resulted in a little more than 17000 segments (choruses and verses). 

### A.2 Generating Ground Truth Transcriptions

As the FMA dataset does not include ground truth transcriptions, we had to generate these by:

1. Recruited annotators that are native English speakers PhD students from University of Salford and University of Sheffield.
2. Each annotator were assigned to 500 random segments. No overlap between annotators.
3. Each segment was presented in 3 versions; as-is, the separated vocals, and without the low frequency components to remove the bass.
4. Annotators were task to transcribe all the lyrics phrases they were able to from each segment.
5. Phrases with offensive vocabulary were excluded.
6. Annotators were able to listen the tracks as many times they needed.

The resulted phrases were then post-processed to ensure that:

7. There are no repeated phrases from the same song. 
8. All phrases have between 5 and 10 words. 
9. The phrases boundaries are set so:
   * No words within the lyrics phrase are cut out 
   * The audio segment is not included words outside the lyrics phrase. 

This process resulted in 3700 audio excerpts.

### A.3 Generating Intelligibility Scores

To generate the intelligibility scores, we:

1. We distributed the 3700 segments into Train, Validation and Evaluation sets as 80% / 10% / 10%
2. Processed all excerpt with a hearing loss simulation for mild and moderate hearing loss, resulting in three versions of the same excerpt.
3. The 11100 resulting excerpts were then distributed into 111 groups of 100 segments, ensuring that no 2 versions of the same excerpt are in the same group.
4. Using crowdsourcing, we:
   * Recruited 110 native English speakers with normal hearing
   * Participants transcribe each excerpt
   * Excerpt were presented in two-shots. First shot aimed for participants to adapt to changes in genres and styles.
5. Intelligibility scores correspond to the rate of correctly transcribed words.

:::note
Ground truth and responses transcriptions were text normalised and transcribe using a pronunciation dictionary.
We also included alternative transcriptions (Because and Cause) and expanded contractions (I'm to I Am)
The final score was the maximum obtained after computing the correctness for all transcription alternatives.
:::

## B. Training, validation and evaluation data

:::warning[🚧 Under Construction 🚧]
:::


## References

1. Defferrard, Michaël, Kirell Benzi, Pierre Vandergheynst, and Xavier Bresson., 2017, [FMA: A DATASET FOR MUSIC ANALYSIS](https://archives.ismir.net/ismir2017/paper/000075.pdf), International Society for Music Information Retrieval


