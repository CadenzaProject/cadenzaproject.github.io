---
id: cc1_core_software
title: Core Software
sidebar_label: Core Software
sidebar_position: 4.2
---

The code is provided as a [GitHub repository](https://github.com/cadenzachallenge/cadenza) containing individual Python tools and a complete baseline system. The tools will allow the processing of individual scenes or the bulk processing of the complete Cadenza dataset.
The key elements of the baseline system are the:

- Scene generator.
- Hearing aid processor baseline.
- HAAQI speech intelligibility model.

<!-- [Additional tools](./cc1_additional_tools) are available to use as you see fit. These include a hearing loss model, differentiable source separation and hearing aid amplification modules and an alternative intelligibility model. -->

## A. Scene generator

Details coming soon!

<!-- 
Fully open-source python code for generating hearing aid inputs for each scene

- **Inputs**: target and interferer signals, HOA-IRs, RAVEN project (rpf) files, scene description JSON files
- **Outputs**: Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated. -->

## B. Baseline hearing aid processor

Details coming soon!

<!-- The baseline hearing aid consists of a NAL-R  fitting amplification stage \[[1](#refs)\] followed by a simple automatic gain compressor. It produces output signals in 16-bit wav format ready for HASPI or listening test evaluation.

- **Inputs**: Inputs for each hearing aid channel and audiograms to characterise the listeners.
- **Outputs**: Stereo hearing aid (HA) outputs signals. -->

## C. HAAQI Speech Intelligibility model

Python implementation of the Hearing Aid Audio Quality Index (HAAQI) model which is used for objective audio quality estimation. This will be used in the stage 1 evaluation of entrants (see [Rules](/docs/cadenza1/Data/cc1_data_rules)).

- **Inputs**: reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections “turned off”, specified as ‘target_anechoic’), HA output signals, audiogram, level reference (level in dB SPL which corresponds to 0 dB FS)
- **Outputs**: predicted intelligibility score
It is important to remember that both reference target and HA output signals have to be calibrated to the same dB SPL level before calculating HASPI.


## References

<a name="refs"></a>

[1] Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.
