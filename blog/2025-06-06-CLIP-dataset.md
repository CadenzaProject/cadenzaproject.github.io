---
slug: CLIP Dataset
title: CLIP Challenge Dataset
authors: 
  - gerardo
  - trevorcox

tags: [cadenza, dataset, CLIP]
---

People with hearing loss face several issues with music like not hearing the quieter passages, poor pitch perception and
difficulties to pick up the lyrics.
Cadenza Lyrics Intelligibility Prediction Challenge (CLIP) focuses on the latter, and we have been working very hard to bring it to live.

Lyrics intelligibility prediction is an understudied topic with only a couple of researches available. 
One of the reasons for this is the difficulties in constructing a suitable dataset with the following characteristics:

* The music must be unknown to listeners, so intelligibility scores are not overestimated due to previous knowledge of the words.
* The music must have the proper license for processing, change and sharing.
* The music must have ground truth transcriptions. This is challenging for unknown or non-commercial songs.

### CLIP Dataset Construction

#### The Audio Samples
In Cadenza, we are constructing a novel dataset for lyrics intelligibility predictions based on the FMA-Full corpus. 
The process of constructing this dataset is undergo and consists of:

1. From the FMA-Full dataset, we filter out all songs with NonDerivative license, and with top genre Classical, Instrumental, Experimental and International.
2. Then, we discarded all songs where the RMS of the separated vocals (using HTDemucs) were < 0.01 or no segments were detected with SileroVAD.
3. Next, we split the remaining songs into choruses and verses using the All-in-one model and randomly selected one verse or chorus per song.
 
Currently, and using LabelStudio, human annotators are segmenting and transcribing coherence lyrics phrases within each verse or chorus.
The goal is to get up to 5000 transcribed lyrics phrases that, after a cleaning process, will result in 3500 audio segments.
These 3500 segments will be augmented by processing them using a hearing loss simulator, generating three versions: as-is and two processed signals, resulting in about 10,000 audio segments.

#### The Intelligibility Scores

To score the audio samples by their intelligibility, we will use Prolific and ask people with normal hearing to transcribe the audio segments
after one or two listenings. This data will be then split into train and evaluation data for our challenge.



