---
id: edu_intelligent_mixing
title: Intelligent Sound Mixing
sidebar_label: Intelligent Sound Mixing
sidebar_position: 3.2
---

Can previous work in intelligent sound mixing help inform approaches to the Cadenza challenges? In this Q&A, Dr Bruno Fazenda from the Cadenza team discusses what we might learn from previous work on automatic sound mixing.

### What is Intelligent Sound Mixing?
 
Intelligent Sound Mixing is any automatic audio signal processing where you apply techniques towards a given goal. A crude summary of what happens in commercial music production, is to create a mix where all instruments are balanced in terms of level, their frequency ranges are sculpted (with EQ) so that each instrument occupies a portion of the audio range, and their locations in the stereo image create a pleasant and discernible audio scene for the listener. Vocals usually “ride” on top of this mix, with slightly louder levels so the lyrics are intelligible. There is often the use of artificial reverberation to create intimacy and spaciousness. A sound engineer will carry out these tasks manually using her own experience. Automatic and “intelligent” systems need to implement these principles based solely on signal parameters and some “mixing” targets set a priori [1].
 
### What have you and others done on this in the past?
My work with colleagues has been mainly on trying to understand what constitutes a “good” mix. We try to identify the underlying perceptual dimensions that characterise high quality audio mixes and how these correlate to signal parameters. Through experimentation with listening tests and signal feature analysis, the same 3 or 4 dimensions kept coming up as important – these are Loudness, Frequency Balance, Bass and Stereo Width [2]. We used databases containing 100s of songs and, in some cases, multiple mixes of the same song. That allowed us to understand the “normal” distribution of signal parameters [3] which may be used to guide intelligent systems in the task of mixing multitrack audio[4]. 

There’s been numerous efforts in creating machines that can automatically mix audio tracks [5]. For this to work, a link between signal parameters and audio mixing processes needs to be established, and that’s not trivial.
 
### In track 1 headphones, the stereo track is being split into vocals, drums, bass and other. How might you approach doing an intelligent remix for someone with a hearing loss?

Given that the underlying stems can be separated, the obvious approach would be to edit and remix these in some way that makes sense for the listener allowing for the hearing loss. We know that, in music productions, vocals are usually mixed about 4 to 6dB louder than the average level of the mix, with guitars as the next louder instruments. A mix targeting for someone with hearing loss might attempt to make the melody and lyrics more salient in the mix. The levels of rhythm back tracks such as drums and bass may be reduced relative to vocals and guitars, possibly with relative level differences going beyond the “standard” 6dB. Another approach might be to remix in a way to reduce perceptual masking from bass-heavy stems on other stems. This can be achieved by reducing the level of the former or applying some form of clever dynamic equalisation such as a multiband compressor. The position of each stem on the stereo image is also a factor affecting the listening experience. Positioning “important” stems away from other “masking” stems using panning in the stereo image will allow perceptual unmasking which will, potentially, help distinguish between the stems and create a more “spacious” stereo experience. This can be achieved if the underlying stems can be easily accessed through demixing.
 
One of the problems is that, at the moment, we don’t yet know whether this will be acceptable to someone with a hearing loss or whether the nature of the mix, as intended by a producer, will be too severely altered.
 
### Does the mix has to be personalised to the hearing ability of the listener or can "one-size-fit-all"?

This is where the “intelligent” part of the remixing can lead to great gains. If the system has access to the hearing loss profile, it can target a personalised mix which will be optimised for the individual. Level and frequency modifications can take into account the frequency regions where the listener has better preserved hearing. For example, if someone has severe impairment in the high frequency range, it makes sense to reshape the audio so that most relevant information (eg: vocals and melody) is presented in the mid-frequencies. For listeners with mild to moderate hearing loss, a simple balancing of levels of instruments to appear more prominent in the best hearing frequencies would make sense. For someone with severe hearing loss a complete remix where some of the stems are reduced more drastically will remove competing audio streams and present audio which is “easier” to listen to, whilst maintaining the fundamental aspects of rhythm, melody and vocals.
 
### In track 2, the stereo track has to be processed so it works best in the presence of car noise. What simple mixing rules could producers apply to improve music in this case?

You are making the processing done by the car stereo, so the strategy should be to adapt that signal to the car noise, as well as the profile of the hearing loss. Here, an adaptive increase of those frequencies potentially masked by the car noise, as its profile changes through speed, will ensure musical components are less masked by the noise. Moreover, as the available source signal is in stereo, another solution would be to use a “mid-side” technique (obtained by summing both left and right channels to obtain a mid channel and subtracting them to obtain a side channel). Mid and side channels can then be edited separately with various tools such as EQ, multiband compression or even just simple level adjustment, before converting them back to the stereo left and right channels. A simple increase of the mid-channel allows all the instruments which have been panned centrally in the stereo mix, e.g.: vocals, bass, snare, to be raised in terms of their relative level. A mix that may sound too spacious and lacking detail for a hearing impaired user can be made more defined and focused on vocals by reducing the level of the side channel before converting back to a left/right mix.

### References

1.	[P. Pestana and J. D Reiss, “Intelligent Audio Production Strategies Informed by Best Practices,” presented at the AES 53rd International Conference: Semantic Audio (2014 Jan.), conference paper S2-2.](https://qmro.qmul.ac.uk/xmlui/bitstream/handle/123456789/11599/Reiss%20Intelligent%20Audio%20Production%20Strategies%202014%20Published.pdf)
2.	[Wilson, AD   and Fazenda, BM   2016, 'Perception of audio quality in productions of popular music' , Journal of the Audio Engineering Society, 64 (1/2) , pp. 23-34.](https://usir.salford.ac.uk/id/eprint/37599/7/Perception%20of%20Audio%20Quality%20in%20Productions%20of.pdf)
3.	[Wilson, AD   and Fazenda, BM   2016, 'Variation in multitrack mixes : analysis of low-level audio signal features' , Journal of the Audio Engineering Society, 64 (7/8) , pp. 466-473.](https://usir.salford.ac.uk/id/eprint/39254/7/18332.pdf)
4.	[Wilson, AD   and Fazenda, BM   2017, 'Populating the mix space : parametric methods for generating multitrack audio mixtures' , Applied Sciences, 7 (12) , p. 1329.](https://www.mdpi.com/2076-3417/7/12/1329)
5.	[De Man, B., Reiss, J., & Stables, R. (2017). Ten years of automatic mixing. Proceedings of the 3rd Workshop on Intelligent Music Production, Salford, UK, 15 September 2017](https://www.open-access.bcu.ac.uk/4968/1/WIMP2017_DeManEtAl.pdf)




