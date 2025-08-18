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

## What is Lyric Intelligibility?

Lyric intelligibility, as defined by Cadenza's sensory panel of hearing aid users, refers to "how clearly and effortlessly the words in the music can be heard". Fine et al. [1] reported that trained and amateur singers (including singing teachers) believe that the understanding of the sung message while hearing a song is very important for their enjoyment.

For the CLIP1 challenge, the intelligibility metric is the percentage of words in a sentence that a listener identified correctly. This makes it compatible with a common definition of speech intelligibility.

## How was Lyric Intelligibility measured with listeners?

We used Prolific to run lyric intelligibility tests. Listeners with normal hearing transcribed the words from song excerpts processed in various ways, e.g. as-is and passed through a hearing loss simulation.

## Previous lyric intelligibility metrics

[Singing adapted STOI](https://ieeexplore.ieee.org/document/8910414), which combines the traditional STOI (speech) metric with vocal-specific features to account for the different singing styles is a rare example of an existing metric for sung speech. But there are lots of [speech intelligibility metrics](https://www.sciencedirect.com/science/article/pii/S1877050918302187) that might also be adapted. For example, approaches using large language models are becoming more common.

## Intrusive vs non-intrusive

There are two broad classes of speech intelligibility models:

- Intrusive metrics (also known as double-ended) are most common. This is where the intelligibility is estimated by comparing the degraded or processed speech signal with the original clean speech signal.
- Non-intrusive metrics (also known as single-ended or blind) are less well developed. This is where intelligibility is estimated from the degraded or processed speech signal alone.

In the Cadenza project, both types of metrics are of interest.

## Learning Resources

We have [extensive resources](../../learning_resources/learning_intro) that provide background information on many aspects: [hearing loss](../../category/hearing-impairment), [hearing aid processing](../../category/hearing-aid-processing), [mixing/remixing](../../category/audio-mixing), and [perceptual testing](../../category/perceptual-testing).
To see current discussions of the challenge, please join the [Google group](https://groups.google.com/g/cadenza-challenge).

## I'm unclear if my approach is within the rules

Please contact the Cadenza Team via cadenzachallengecontact@gmail.com with details of what you want to do so we can advise.

## What data can I use?

You should be able to find the information on the [Rules](rules) page.

## How do I actually enter?

See the [Submission](submission) page. Please make sure you have signed up to our [Google group](https://groups.google.com/g/cadenza-challenge), as this will ensure you get updates about the challenge.

## References

[1] Fine, P. A., & Ginsborg, J. (2014). "Making myself understood: perceived factors affecting the intelligibility of sung text," Frontiers in psychology, 5, 809.