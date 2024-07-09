---
id: lyric_baseline
title: "Lyric Intelligibility Baseline"
sidebar_label: Baseline
sidebar_position: 2.2
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

## Overview

Challenge entrants are supplied with a fully functioning baseline system, which is illustrated in Figure 1.

<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_overview.png')} alt="baseline for lyric intelligibility diagram.png" />
Figure 1. The Lyric Intelligibility Baseline

<details>
<summary>Click here for overview of Figure 1</summary>
- A scene generator (blue box):
  - Selects the stereo music signal.
  - Gives a value of 𝛼 (metadata) that sets the balance between intelligibility and audio quality (see evaluation below).
- The music enhancement stage (pink box) takes the music as inputs and attempts to improve the intelligibility.
- Listener characteristics (green oval) are audiograms to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated using objective metrics (orange boxes):
  - For intelligibility using a metric based on Whisper.
  - For audio quality via the Hearing-Aid Audio Quality Index (HAAQI) [1].
 
Your challenge is to improve what happens in the pink, music enhancement box. The rest of the baseline is fixed and should not be changed.
</details>
 
## Music Enhancer

Figure 2 shows the music enhancer supplied in the baseline. Your task is to improve this.

<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_enhancer.png')} alt="baseline enhancer for lyric intelligibility diagram.png" />
Figure 2. The Baseline Music Enhancer

The baseline approach is to demix the stereo music into vocals and instrumentation. To change intelligibility we apply amplification to the vocals and accompaniment before recombining the signals. The final stage is to apply an frequency-dependent amplification to correct for the hearing loss.

<strong>Demixing</strong> uses [Conv-TasNet](https://arxiv.org/abs/1809.07454) [1] as this can be used in either a causal and non-causal form. The overal architecture is Fig 1A in reference [1], encoder-separator-decorer. The implementation is a fully convolutional system.

<strong>Linear gains</strong> are applied to the vocals (V<sub>amp</sub>) and accompaniment (A<sub>amp</sub>) using the following formulations:

V<sub>amp</sub> = $\beta$<sup>2</sup> + 1 <div align="right">(1)</div>
A<sub>amp</sub> = 2- V<sub>amp</sub> <div align="right">(2)</div>

where $\beta$ = $\alpha$, the balance parameter given in the metadata. Eqns (1) and (2) were chosen so for $\alpha$=0 the gains are 0 dB for both the vocals and the accompaniment so the original mix is achieved, and for $\alpha$=1 only the vocals remain, which ought to be maximum intelligibility. A quadratic function was empirically chosen to reduce the gain difference between vocals and accompaniment for low $\alpha$ values.

<strong>Remixing to stereo</strong>
This is a sum of the amplified vocals and accompaniment.

<strong>Amplification</strong> is a simulation of hearing-aid non-linear amplification - see [amplification](../amplification) for more details.

<strong>Output</strong> is FLAC format 16-bit, 32kHz.

## Objective Evaluation

### Intelligibility
The enhanced audio is first passed through the MSBG hearing loss simulator in the pyClarity codebase [2]. It is then passed through the [Whisper ASR algorithm (size: base)](https://huggingface.co/openai/whisper-small) [3] to gain a text transcription. The objective score is the fraction of words correct compared to the correct transcript of the lyrics.

### Quality
The enhanced audio is evaluating using the HAAQI implementation in pyClarity. This is an intrusive metric and requires a reference. The reference signal is the original stereo track but with the vocals amplified by 1 dB and the accompaniment attenuated by 1 dB. This is done because research shows a small amplification of lyrics is preferred by people with hearing loss [5]. The reference is also amplified using a simulation of a simple hearing-aid - see [amplification](../amplification) for more details.

### Overall score

To rank the teams, the intelligibility L<sub>I</sub> and quality Q ratings are combined as follows:

𝑠𝑐𝑜𝑟𝑒 = 𝛼 𝑄 + (1 − 𝛼) 𝐿<sub>𝐼</sub><div align="right">(3)</div>


## References

[1] Luo, Y. and Mesgarani, N., 2019. Conv-tasnet: Surpassing ideal time–frequency magnitude masking for speech separation. IEEE/ACM transactions on audio, speech, and language processing, 27(8), pp.1256-1266. 
[2] Tu, Z., Ma, N. and Barker, J., 2021. Optimising hearing aid fittings for speech in noise with a differentiable hearing loss model. arXiv preprint arXiv:2106.04639. 
[3] Radford, A., Kim, J.W., Xu, T., Brockman, G., McLeavey, C. and Sutskever, I., 2023, July. Robust speech recognition via large-scale weak supervision. In International conference on machine learning (pp. 28492-28518). PMLR. 
[4] Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.  
[5] Benjamin, A.J. and Siedenburg, K., 2023. Exploring level-and spectrum-based music mixing transforms for hearing-impaired listeners. The Journal of the Acoustical Society of America, 154(2), pp.1048-1061. 

