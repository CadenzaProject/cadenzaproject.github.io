---
id: amplification
title: Amplification
sidebar_label: Amplification
sidebar_position: 4.5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The baselines for both tasks use a common amplification process. This compensates for frequency-dependent hearing loss our listeners have using a set of dynamic range compressors. The same amplification is also applied to the reference used in the objective metric HAAQI.

The amplification is a simulation of hearing-aid non-linear amplification. It is applied separately to the left and right signals. Each extract is split into octave-spaced bands with centre frequencies of 0.25-8 kHz using cross-over filters. Frequency-dependent gains are applied to the filtered bands. Gains are based on an A-weighted 65 dB presentation level using [an implementation of] the CAMFIT nonlinear prescription [1]. Compression ratios were determined by the difference in prescribed outputs at 55 and 85 dB input (cf. IEC 60118, 2022) with an upper ratio limit of 6:1 imposed to avoid extreme values. Compression attack and release times (11-14 and 80-100 ms, respectively, across centre frequencies) were based on average values measured using IEC 60118 procedures in hearing aid devices [2]. The filtered, amplified and compressed stimuli were then summed.

The amplification in the baselines is part of the enhancement block, so you are free to replace it with a different approach. This will decrease HAAQI scores, however, because the reference signal for HAAQI uses this default amplification. A better amplification stage might score higher in listening tests, however. And we are allowing teams to submit a system optimised for listening tests and another optimised for objective evaluation.

## Normalisation and clipping

As the amplification is 


## References

[1] Moore, B.C.J., Glasberg, B.R. and Stone, M.A., 1999. Use of a loudness model for hearing aid fitting: III. A general method for deriving initial fittings for hearing aids with multi-channel compression. British Journal of Audiology, 33(4), pp.241-258.  
[2] Whitmer, W.M. and Akeroyd, M.A., 2011. Level discrimination of speech sounds by hearing-impaired individuals with and without hearing amplification. Ear and hearing, 32(3), pp.391-398. 


