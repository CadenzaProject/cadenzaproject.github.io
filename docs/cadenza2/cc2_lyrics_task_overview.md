---
id: lyric_overview
title: "Lyric Intelligibility: Overview"
sidebar_label: "Lyrics: Overview"
sidebar_position: 2.1
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

## Task overview

You will process part of a pop/rock track to increase the intelligibility with least loss of audio quality. Audio will be evaluated for their intelligibility and audio quality.

Figure 1 shows a simplified schematic of the baseline system:

- A scene generator (blue box):
-- Selects the stereo music signal.
-- Gives a value of 𝛼 that sets the balance between improved intelligibility and audio quality (see evaluation below).
- The music enhancement stage (pink box) takes the music as inputs and attempts to improve the intelligibility.
- Listener characteristics (green oval) are audiograms to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated (orange box):
-- For intelligibility using a metric based on Whisper
-- For audio quality via the Hearing-Aid Audio Quality Index (HAAQI) [1]. Note, HAAQI is an intrusive measure that requires a reference signal.
-- By our listening panel.

Your challenge is to improve what happens in the pink music enhancement box. The rest of the baseline is fixed and should not be changed.

## Causality

We are interested in both causal and non-causal systems. Non-causal systems could be used for recorded music, whereas causal systems would also work for live listening. The allowed latency for causal systems will be 5 milliseconds, that is, systems cannot look beyond 5 ms into the future.
{/*
More information about causality can be found in Computational Restrictions section of the [Rules](Take%20Part/rules) page.
*/}

## Evaluation

### Listening panel

The listener panel will score the music for both audio quality and intelligibility. To rank the teams, the intelligibility L_I and quality Q ratings from the listening tests will be combined in a weighted average to get an overall score:

𝑠𝑐𝑜𝑟𝑒 = 𝛼 𝑧 (𝑄) + (1 − 𝛼) 𝑧 (𝐿_𝐼)

Where the weighting 𝛼 will allow the balance between intelligibility and quality to be varied, and z() indicates a z-normalisation to make the two metrics compatible for the weighted average.

### Objective metrics

Our quality and intelligibility metrics are provided to aid optimisation. They are somewhat experimental, however, and entrants are encouraged to optimise using whatever metrics and approaches they think will give the best ratings by the listener panel. Audio quality can be evaluated using HAAQI [[3]](#refs). Intelligibility is scored using Word Error Rate (WER) using a lyric transcription or other metrics such as Singing Adapted STOI [[5]](#refs). 

For intrusive metrics the reference will be the original signal with a corresponding amplification applied to the vocal signal to achieve the target intelligibility.

### References
<a name="refs"></a>

**[1]** Fine, P. A., & Ginsborg, J. (2014). "Making myself understood: perceived factors affecting the intelligibility of sung text," Frontiers in psychology, 5, 809.  
**[2]** A. Greasley, H. Crook, and R. Fulford, "Music listening and hearing aids: perspectives from audiologists and their patients," International Journal of Audiology, vol. 59, no. 9, pp. 694–706, 2020.  
**[3]** Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.  
**[4]** Wisnu, D. A., Pratiwi, E., Rini, S., Zezario, R. E., Wang, H. M., & Tsao, Y. (2024). HAAQI-Net: A non-intrusive neural music quality assessment model for hearing aids. arXiv preprint arXiv:2401.01145.   
**[5]** Sharma, B., & Wang, Y. (2019). Automatic evaluation of song intelligibility using singing adapted STOI and vocal-specific features. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 28, 319-331.  
**[6]** Schulze-Forster, K., Doire, C. S., Richard, G., & Badeau, R. (2021). Phoneme level lyrics alignment and text-informed singing voice separation. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 29, 2382-2395.  