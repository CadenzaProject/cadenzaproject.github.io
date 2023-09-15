---
id: core_software
title: Core Software
sidebar_label: Core Software
sidebar_position: 7.2
---

import useBaseUrl from '@docusaurus/useBaseUrl';


## HAAQI Speech Intelligibility model

This is a python implementation of the Hearing Aid Audio Quality Index (HAAQI) model which is used for objective estimation.
This will be used in the stage 1 evaluation of entrants (see [Rules](/docs/cadenza1/Take%20part/cc1_rules#stage-1-objective-evaluation)).

Note that HAAQI is not a binaural metric, instead, each channel must be processed separately. We average the left and right 
scores to produce a final overall score.

## 4. References
<a name="refs"></a>

[1] Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.
