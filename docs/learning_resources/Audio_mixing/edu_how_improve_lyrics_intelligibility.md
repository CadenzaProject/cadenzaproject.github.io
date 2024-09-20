---
id: edu_how_improve_lyrics_intelligibility
title: Ideas for how you might improve lyric intelligibility learning from music production
sidebar_label: How Improve Lyric Intelligibility
sidebar_position: 3.3
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

**Dr Bruno Fazenda, Cadenza Team**

Music production techniques try to mix the vocal track onto an instrumental mix (henceforth referred to as ‘backing track’) to achieve a 
blend of the musical instruments and the vocals according to music quality criteria. Within the baseline music enhancer,
these techniques could be applied after the demix algorithm that separates the vocals from the backing (accompaniment).  
Any modifications to enhance the intelligibility of the lyrics in the vocals, should try and not affect the overall mix quality too much.

<div style={{textAlign:'center'}}>
<Image img={require('../../../static/img/cad2/baseline_lyric_intelligibility_enhancer.png')} alt="baseline enhancer for lyric intelligibility diagram.png" />
**The CAD2 Task1 Baseline Music Enhancer**
</div>

The baseline enhancer in the Second Cadenza Task 1 challenge simply applies different gains to the vocals and backing. 
Here are a number of possible techniques that could lead to better lyric intelligibility:

## Side chain compressor on vocals to duck the background 

The idea is to use the level of the vocal track to trigger a compressor that is applied to the backing track. With judicious threshold settings, the compressor will be activated when the vocal is active, reducing the level of the backing tracks, allowing the vocals to “come through the mix” as the backing tracks have less of a masking effect on the vocals. Careful attack and release settings are necessary to avoid a ‘pumping’ effect from the compressor due to the very transient nature of vocals. A further enhancement on this idea is to have the compressor set as multiband so that only the frequencies important for speech intelligibility on the backing tracks are ducked during vocal activity. 

## De-reverb or change the vocals/backing track reverb ratio 

Reverb is often used to increase blend between instruments in a mix. Pop mixing techniques sometimes use a different or even no reverb on the vocal track, to make it stand out from the backing tracks. One potential way of enhancing lyric intelligibility is to modify this vocal to backing track reverb ratio. In particular, a process of dereverberation applied solely to the vocal track might have an intelligibility enhancing effect as the vocal track becomes more ‘spatially displaced’ from the backing tracks. It is known that early reflections (within around 20ms) are useful in enhancing speech intelligibility, so a process that will either keep or even enhance these on the vocals might work well. Another interesting aspect to try is to add a little more reverb to the backing tracks to check whether the enhancing effect also works that way. 

## Apply the opposite of a de-esser to enhance consonants

"A de-esser is a type of audio compressor that applies gain reduction to sibilance and other high frequency issues in a vocal track." (izotope.com) Whilst de-essers are used in music mixing to remove annoying artefacts in the vocal tracks, it is well known in speech technology that much of the intelligibility relies on the presence of consonants. In this case, a process which inverts what a de-esser does might lead to beneficial improvements in lyric intelligibility in the mix. There are various degrees of application of such a technique. The goal would be to enhance the sibilants by applying an expander to the frequency range of interest (typically 1kHz to 4kHz) on the vocal track to bring out the consonant sounds when the vocals are active.

## EQ vocal tract to boost consonant spectrum

Similar to the expander technique above, but perhaps easier to implement and a more steady state approach, would be to apply particular spectral shaping (using equalisation tools) in order to enhance the intelligibility parts of the vocal spectrum (1kHz – 4kHz). This could also extend to reducing the energy at low frequencies which, particularly for male vocals, might interact with resonances in the replay system and mask intelligibility of the higher spectral range.

## Widening stereo mix/Panning backing tracks away from vocals

This is a simple technique where the panning of instruments away from the vocal track will provide more spatial separation between these mix elements and interact with binaural unmasking capabilities of the hearing system. Vocals are usually panned centrally so such a technique might enhance them by panning other instruments more extremely to the right and left of the stereo image. An alternative would be to pan the vocals to the ‘better ear’ side of a listener and the remaining tracks towards the other ear, a bit like George Martin used to do when mixing for _The Beatles_.  

