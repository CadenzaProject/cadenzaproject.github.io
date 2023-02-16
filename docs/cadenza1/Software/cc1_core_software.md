---
id: cc1_core_software
title: Core Software
sidebar_label: Core Software
sidebar_position: 4.2
---

<!-- :::info
More details of the software will follow in Jan/Feb 2023
::: -->


The code is provided as a [GitHub repository](https://github.com/cadenzachallenge/cadenza) containing individual Python tools and a complete baseline system. 

The key elements of the baseline system are the:

- Baseline demixer
- HAAQI speech intelligibility model.
<!-- - Hearing aid processor baseline. -->

<!-- [Additional tools](./cc1_additional_tools) are available to use as you see fit. These include a hearing loss model, differentiable source separation and hearing aid amplification modules and an alternative intelligibility model. -->

## A. Baseline Demixer

The demixing stage simply takes the out-of-the-box Hybrid [Demucs](https://arxiv.org/abs/2111.03600) music source separation model to obtain stereo VDBO stems. This model is publicly available in the [TorchAudio library](https://pytorch.org/audio/main/generated/torchaudio.pipelines.HDEMUCS_HIGH_MUSDB.html#torchaudio.pipelines.HDEMUCS_HIGH_MUSDB). Then, it applies a Nal-R [1] and compression procedure to each stem to personalize the output.

    Inputs: Stereo songs and Listeners characteristics. 
    Output: 8 stems (left and right VDBO stems) for each song-listener. 


## B. HAAQI Speech Intelligibility model
Python implementation of the Hearing Aid Audio Quality Index (HAAQI) model which is used for objective  estimation. This will be used in the stage 1 evaluation of entrants (see [Rules](/docs/cadenza1/Take%20part/cc1_rules#stage-1-objective-evaluation)).

    Inputs: Reference target stem (I.e., the corresponding left or right channel of the VDBO stem to evaluate), the enhanced output stem, listener audiogram.
    Output: predicted audio quality score. 


## References

<a name="refs"></a>

[1] Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.


<!-- ## A. Baseline hearing aid processor

Details coming soon! -->

<!-- The baseline hearing aid consists of a NAL-R  fitting amplification stage \[[1](#refs)\] followed by a simple automatic gain compressor. It produces output signals in 16-bit wav format ready for HASPI or listening test evaluation.

- **Inputs**: Inputs for each hearing aid channel and audiograms to characterise the listeners.
- **Outputs**: Stereo hearing aid (HA) outputs signals. -->
