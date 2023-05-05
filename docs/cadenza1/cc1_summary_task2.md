---
id: cc1_summary_task2
title: Summary Task 2
sidebar_label: Summary Task 2
sidebar_position: 3
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

::::::tip Participate
If you have an interesting idea of how you can improve music for people with hearing loss listening music in a car, 
we invite you to make a copy of the baseline, adapt the enhancement script and experiment with your ideas. 
Then, you can run the whole system to obtain the HAAQI scores.

:::danger Remember
After the objective evaluation we will run subjective evaluation using a listeners panel of 50 listeners.
We will share the results of your system with you so you can use them in a paper. 
:::
::::::

# 1. Description of the Problem

A listener with hearing loss wearing their hearing aids is sitting in a car and listening to recorded music played 
over the car stereo (see Figure [[1](#fig1)])

<figure id="fig1">
<img width="250" src={useBaseUrl('/img/Car_scenario.png')} />
<figcaption>Figure 1, The arrangement of the listener and speakers for the car listening scenario.</figcaption>
</figure>


Your task is to process the music played from the stereo to improve the audio quality allowing 
for the presence of the car noise.

As shown in Figure [[2](#fig2)], the system is split into two stages; the _enhancement_ and _evaluation_.

<figure id="fig2">
<img width="800" src={useBaseUrl('/img/car_simple_v2.png')} />
<figcaption>Figure 2, The baseline for the car listening scenario. For simplicity, not all signal paths are shown.</figcaption>
</figure>

## 1.1 Enhancement Stage
:::info
You can adapt and modify the baseline **enhancement** script or make your script.
:::

Your task is to process the music in such a way that improves the music quality.
For this, you have access to the car speed, which gives an estimation of the power spectrum of the noise
but not the noise signal itself, so this is not a noise cancellation task.

### 1.1.1 Dataset

In the enhancement stage, you have access to:

1. A music dataset containing 5600 30-second excepts of samples from 8 music genres. 
2. Metadata of:
    - Listener Characteristics (audiograms). [Listener Data](Data/cc1_data_listener)
    - Car speed. This is very important as it provides some information about the car noise.
    - SNR at the hearing aids. This tells you how loud is the noise in relation to the music.

:::caution
The SNR at the hearing aids microphone information is an SNR relative to the music.
This means that simply increasing the music level will result in an increment of the noise level.
:::

Please refer to [task 2 data page](Data/cc1_data_overview_car) and
the [baseline readme](https://github.com/claritychallenge/clarity/tree/main/recipes/cad1/task2/baseline) for details.

To download the datasets, please visit [Download data and software](Take%20part/cc1_download#21-task-2---car).

### 1.1.2 Output

The output of this stage is one stereo signal:
- Sample rate = 32000 Hz
- Precision: 16bit integer
- Compressed using FLAC

For more details about the format of the submission, please refer to [Submission](Take%20part/cc1_submission) webpage.

## 1.2 Evaluation Stage

:::danger
You are not allowed to change the **evaluation** script provided in the baseline.
Your output signals with be scored using this script.
:::

The evaluation stage is a common for all submissions.
As shown in Figure [[2](#fig2)], the evaluation takes the reference music signal. Note that, in this figure, the
`Music` and the `Clean Music` are the same signal but are show in separate lines for illustration purposes.

In this stage, both the enhanced and the reference signal are processed before the HAAQI evaluation. 
See [Core Software](Software/cc1_core_software#21-car-acoustics-model).

### 1.2.1 Process on the enhanced signal.

1. Generate car noise based on the parameters from the metadata.
2. Apply anechoic HRTFs to the noise.
3. Apply car HRTFs to the enhanced signal.
4. Scale the noise to match the SNR ar hearing aids
5. Add both signal

### 1.2.2 Process on the reference signal.

1. Add anechoic room impulses.

To learn more about HAAQI, please refer to our [Learning Resources](../learning_resources/Hearing_aid_processing/edu_HAP_HA_processed_speech)
and to our Python [HAAQI implementation](https://github.com/claritychallenge/clarity/blob/cad1task1-baseline2/clarity/evaluator/haaqi/haaqi.py).

The output of the evaluation stage is a CSV file with all the HAAQI scores.

# 2. Baselines

In the [Clarity/Cadenza GitHub repository](https://github.com/claritychallenge/clarity), we provide a baseline system.
Please, visit the [baseline on the GitHub webpage](https://github.com/claritychallenge/clarity/tree/cad1task1-baseline2/recipes/cad1/task2/baseline)
and [Baseline](Software/cc1_baseline#2-task-2-car) link to read more about the baseline and learn how to run it.

# 3. Liderboard

:::tip Participate in our Liderboard
If you have scores using the validation set, send us the `score.csv` file, and we will include you.
:::

The score used for the ranking is the total average.

| Ranking | Team                    | Average score | 
|:-------:|:------------------------|:-------------:|
|    1    | Baseline                |    0.1146     |

