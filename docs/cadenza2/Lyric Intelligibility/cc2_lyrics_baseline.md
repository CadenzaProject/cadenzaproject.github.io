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

Challenge entrants are supplied with a fully functioning baseline system, which is illustrated in Figure 1, as described in more detail on the [Task Overview](lyric_overview) page.

<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_overview.png')} alt="baseline for lyric intelligibility diagram.png" />
Figure 1. The Lyric Intelligibility Baseline
 
## Music Enhancer

Figure 2 shows the music enhancer supplied in the baseline. Your task is to improve this.

<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_enhancer.png')} alt="baseline enhancer for lyric intelligibility diagram.png" />
Figure 2. The Baseline Music Enhancer

The baseline approach is to demix the stereo music into vocals and instrumentation. To change intelligibility we apply amplification to the vocals and accompaniment before recombining the signals. The final stage is to apply an frequency-dependent amplification to correct for the hearing loss.




