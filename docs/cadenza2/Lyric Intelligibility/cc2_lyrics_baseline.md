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

## A. Overview

Challenge entrants are supplied with a fully functioning baseline system, which is illustrated in Figure 1.

<div style={{textAlign:'center'}}>
<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_overview.png')} alt="baseline for lyric intelligibility diagram.png" />
Figure 1. The Lyric Intelligibility Baseline
</div>

<details>
<summary>Click here for overview of Figure 1</summary>
- A scene generator (blue box):
  - Selects the stereo music signal.
  - Gives a value of $\alpha$ (metadata) that sets the balance between intelligibility and audio quality (see evaluation below).
- The music enhancement stage (pink box) takes the music as inputs and attempts to improve the intelligibility.
- Listener characteristics (green oval) are audiograms and compressor settings to allow personalised processing in the enhancement stage and are also used in objective evaluation.
- The enhancement outputs are evaluated using objective metrics (orange boxes):
  - For intelligibility using a metric based on Whisper (correct transcribed words ratio).
  - For audio quality via the Hearing-Aid Audio Quality Index (HAAQI) [1].
 
Your challenge is to improve what happens in the pink, music enhancement box. The rest of the baseline is fixed and should not be changed.
</details>
 
## B. Music Enhancer

Figure 2 shows the music enhancer supplied in the baseline. Your task is to improve this.

<div style={{textAlign:'center'}}>
<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_enhancer.png')} alt="baseline enhancer for lyric intelligibility diagram.png" />
Figure 2. The Baseline Music Enhancer
</div>

The baseline approach is to demix the stereo music into vocals and instrumentation. To change intelligibility we apply amplification to the vocals and accompaniment before recombining the signals. The final stage is to apply a frequency-dependent amplification to correct for the hearing loss.

**Demixing** uses [Conv-TasNet](https://arxiv.org/abs/1809.07454) [[1]](#references) as this can be used in either a causal and non-causal form. The overall architecture is Fig 1A in reference [[1]](#references), encoder-separator-decoder. The implementation is a fully convolutional system.

**Linear gains** are applied to the vocals ($V_{amp}$) and accompaniment ($A_{amp}$) using the following formulations:

$$
\begin{align}
V_{amp} &= \beta^2 + 1 \tag{1} \\
A_{amp} &= 2 - V_{amp} \tag{2}
\end{align}
$$

where $\beta$ = $\alpha$, the balance parameter given in the metadata. Eqns (1) and (2) were chosen so for $\alpha$=0 the gains are 0 dB for both the vocals and the accompaniment so the original mix is achieved, and for $\alpha$=1 only the vocals remain, which ought to be maximum intelligibility. A quadratic function was empirically chosen to reduce the gain difference between vocals and accompaniment for low $\alpha$ values.

**Remixing to stereo** This is a sum of the amplified vocals and accompaniment.

**Amplification** is a simulation of hearing-aid non-linear amplification - see [amplification](../amplification) for more details.

**Output** is FLAC format 16-bit, 44.1 kHz.

## C. Objective Evaluation

### C.1 Intelligibility
The enhanced audio is first passed through the MSBG hearing loss simulator in the pyClarity codebase [[2]](#references). 
It is then passed through the [Whisper ASR algorithm (size: base)](https://huggingface.co/openai/whisper-small) [[3]](#references) to gain a text transcription. 
The objective score will be the transcription correctness computed as the ratio of correct transcribed words compared to the correct transcript of the lyrics.

$$
\begin{align}
L_I &= \frac{\sum{\text{Correct words}}}{\sum{\text{Total words}}} \tag{3}

\end{align}
$$

### C.2 Quality
The enhanced audio is evaluating using the HAAQI implementation in pyClarity. This is an intrusive metric and requires a reference. The reference signal is the original stereo track but with the vocals amplified by 1 dB and the accompaniment attenuated by 1 dB. This is done because research shows a small amplification of lyrics is preferred by people with hearing loss [5]. The reference is also amplified using a simulation of a simple hearing-aid - see [amplification](../amplification) for more details.

$$
\begin{align}
Q &= HAAQI(\text{reference}, \text{processed})  \tag{4}
\end{align}
$$

### C.3 Overall score

To rank the teams, the intelligibility L<sub>I</sub> and quality Q ratings are combined as follows:

$$
\begin{align}
score = \alpha ~ 𝐿_𝐼 + (1 − \alpha) ~ 𝑄  \tag{5}
\end{align}
$$

## D. Baseline Results

The average validation set scores computed:

* **HAAQI**: average of all average left and right scores

$$
\text{HAAQI} = \frac{1}{\text{nsamples}}  \sum_{i=1}^{\text{nsamples}} \frac{\text{left score}_i + \text{right score}_i}{2}  
$$
where:  
$\text{left score}_i$ = haaqi score for left ear  
$\text{right score}_i$ = haaqi score for right ear  
$\text{nsamples}$ = total number of samples to evaluate  

* **Correctness**: average of correctness of each sentence computed as the sum of correct transcribed words over the total words in the sentence for the better ear.

$$
\text{Correctness} = \frac{1}{\text{nsamples}} \sum_{i=1}^{nsamples} \frac{\max(\text{Correct left}_i, \text{Correct right}_i)}{\text{TWords}_i} \\
$$
where:  
$\text{Correct left}_i$ = number of correct transcribed words in sentence $i$ for left ear  
$\text{Correct right}_i$ = number of correct transcribed words in sentence $i$ for right ear  
$\max(\text{Correct left}_i, \text{Correct right}_i)$ = correct transcribed words in sentence $i$ for the better ear    
$\text{TWords}_i$ = total number of words in sentence $i$  
$\text{nsamples}$ = total number of samples to evaluate  

* **Overall**: See section [C.3 Overall Score above](#c3-overall-score)

* **Z Normalized**: Z normalized **HAAQI** and **Correctness** scores per sample before computing the Overall score 

| Baseline  | HAAQI  | Correctness | Overall | Z Normalized |
|:----------|:------:|:-----------:|:-------:|:------------:|
| Causal    | 0.7755 |   0.3744    | 0.6549  |    0.2676    |
| NonCausal | 0.7841 |   0.3887    | 0.6737  |    0.2782    |

## References

**[1]** Luo, Y. and Mesgarani, N., 2019. Conv-tasnet: Surpassing ideal time–frequency magnitude masking for speech separation. IEEE/ACM transactions on audio, speech, and language processing, 27(8), pp.1256-1266.   
**[2]** Tu, Z., Ma, N. and Barker, J., 2021. Optimising hearing aid fittings for speech in noise with a differentiable hearing loss model. arXiv preprint arXiv:2106.04639.   
**[3]** Radford, A., Kim, J.W., Xu, T., Brockman, G., McLeavey, C. and Sutskever, I., 2023, July. Robust speech recognition via large-scale weak supervision. In International conference on machine learning (pp. 28492-28518). PMLR.   
**[4]** Kates, J. M., & Arehart, K. H. (2015). The hearing-aid audio quality index (HAAQI). IEEE/ACM transactions on audio, speech, and language processing, 24(2), 354-365.    
**[5]** Benjamin, A.J. and Siedenburg, K., 2023. Exploring level-and spectrum-based music mixing transforms for hearing-impaired listeners. The Journal of the Acoustical Society of America, 154(2), pp.1048-1061.    

