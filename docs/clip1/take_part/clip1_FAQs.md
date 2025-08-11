---
id: FAQs
title: FAQ for CLIP1
sidebar_label: FAQs/Resources
sidebar_position: 4.7
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info
This page contains some background information on the topics of lyric intelligibility, hearing loss and objective measures. 
We will also be updating it with answers to any challenge-specific questions that we receive.
:::

## 1. Lyric Intelligibility

### 1.1 What is Lyric Intelligibility?

For spoken language, [speech intelligibility](https://en.wikipedia.org/wiki/Intelligibility_(communication)) is generally used in two different ways.
It can refer to how much speech is understood by a listener, or to the number of words correctly identified by a listener as a proportion or percentage of the total number of words.
The same two views apply to lyric intelligibility. For the Cadenza project, we are using the latter definition, i.e.
the percentage of words in a sentence that a listener identified correctly. This percentage is the target for your prediction models.

Lyric intelligibility, as defined by Cadenza's sensory panel of hearing aid users, refers to "how clearly and effortlessly the words in the music can be heard".
Fine et al. [1] reported that trained and amateur singers (including singing teachers) believe that the understanding of the sung message while hearing a song is very important for their enjoyment.

### 1.2 How is Lyric Intelligibility measured with listeners?

In the Cadenza project, using Prolific, various listeners with normal hearing transcribed the words from song excerpts processed in various ways,
e.g. as-is and passed through a hearing loss simulation. In this project, lyric intelligibility is measured as the number of words identified correctly as a percentage of the total number of words in a sentence.

You might consider looking at [speech intelligibility metrics](https://www.sciencedirect.com/science/article/pii/S1877050918302187), 
such as Word Error Rate (WER), which picks up on, e.g. where listeners insert words not in the original sentence. 
You might also consider looking lyric intelligibility like the [singing adapted STOI](https://ieeexplore.ieee.org/document/8910414),
which combines the traditional STOI metric with vocal-specific features to account for the different singing styles.
You might do this if you think that an estimate of WER or other metrics would help your system to estimate lyric intelligibility, as defined in the Cadenza project.

### 1.3 How is Speech Intelligibility objectively measured by a computer?

Objective measures - or metrics - of lyric intelligibility are used to allow a computer to estimate the likely performance of humans in listening tests. 
The main goal of entries to the prediction challenge is to produce one of these measures that performs well for listeners with hearing loss. 
There are two broad classes of speech intelligibility models:

* Intrusive metrics (also known as double-ended) are most common. 
This is where the intelligibility is estimated by comparing the degraded or processed speech signal with the original clean speech signal.
* Non-intrusive metrics (also known as single-ended or blind) are less well developed. 
This is where intelligibility is estimated from the degraded or processed speech signal alone.

In the Cadenza project, both types of metrics are of interest. Intrusive metrics will be more accurate in many cases. 
However, there are hearing aid processes where the speech content is shifted in frequency, 
which will defeat most current intrusive lyric intelligibility metrics.

### 1.4 What lyric intelligibility models already exist and what are they used for?

Currently, there aren't many lyrics intelligibility metrics. And non of the existing metrics considers hearing loss.
However, there are some speech intelligibility metrics that do consider hearing loss, e.g. [HASPI by kates and Arehart](https://www.sciencedirect.com/science/article/pii/S0167639320300431) . 
Details of HASPI can be found on our [Learning Resources](../../learning_resources/learning_intro) page about [objective measures for hearing-aid audio](../../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech)

## 2. Learning Resources

We have [extensive resources](../../learning_resources/learning_intro) that provide background information on many aspects: [hearing loss](../../category/hearing-impairment), [hearing aid processing](../../category/hearing-aid-processing), [mixing/remixing](../../category/audio-mixing), and [perceptual testing](../../category/perceptual-testing).
To see current discussions of the challenge, please join the [Google group](https://groups.google.com/g/cadenza-challenge).

## 3. I'm unclear if my approach is within the rules

Please contact the Cadenza Team via cadenzachallengecontact@gmail.com with details of what you want to do so we can advise.

## 4. What data can I use?

You should be able to find the information on the [Rules](rules) page.

## 5. How do I actually enter?

See the [Submission](submission) page. Please make sure you have signed up to our [Google group](https://groups.google.com/g/cadenza-challenge), as this will ensure you get updates about the challenge.


## References

[1] Fine, P. A., & Ginsborg, J. (2014). "Making myself understood: perceived factors affecting the intelligibility of sung text," Frontiers in psychology, 5, 809.