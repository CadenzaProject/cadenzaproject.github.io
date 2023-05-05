---
id: cc1_additional_tools
title: Additional tools
sidebar_label: Additional tools
sidebar_position: 6.4
---

The [Clarity-Cadenza git](https://github.com/claritychallenge/clarity) include a variety of additional tools. 
These include hearing loss simulation, a range of objective measures and standard hearing aid processors.
For more details see the readme on the git.

## 1. Car noise generator

This software generates car noise, using the car speed as input. This is provided so that entrants can generate the car noise 
for the evaluation stage. You are allow to generate different noises to learn the spectrum characteristics of the noises
given the speed. However, entrants cannot use the car noise signal itself to perform noise cancellation, only the metadata (e.g. car speed).

The model is split into two parts. 

- `carnoise_parameters_generator.py` - This class generates random parameters given a car speed and return them as a dictionary.
- `carnoise_signal_generator.py` - This class takes a dictionary as input and generates the expected noise. 

For details of how to use these classes, refer to the docstrings in the classes.








