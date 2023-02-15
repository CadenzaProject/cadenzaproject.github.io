---
id: cc1_data_overview
title: Overview
sidebar_label: Overview
sidebar_position: 3.1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Data and baseline code can be downloaded from the [download page](../Take%20part/cc1_download) following this [timeline](../Take%20part/cc1_key_dates).

## Task 1: Headphones

### Training/development

The main training database will be the train/dev parts of [MUSDB18](https://sigsep.github.io/datasets/musdb.html). There are 86 traniing songs and 14 development songs.

We leave it to you to decide how to use this as part of the training and development. For more information on augmenting and supplementing the training data, please see the [rules](../Take%20part/cc1_rules#training-and-development).

You can supplement that data from the following sources:
- [FMA](https://github.com/mdeff/fma) 
- [MedleydB] version 1 and version 2(https://medleydb.weebly.com/)
- [Bach10 Sibelius](https://zenodo.org/record/321361#.Y7_Ds3b7SUk)

There is some overlap between MedleydB and MUSDB18. If you choose to use MedleydB during training, you need to ensure that none of the tracks are from the MUSDB18 evaluation set.

### Evaluation

- We will use the MUSDB18 evaluation set.
- You should process all of the entire music.
- All the music will be used for HAAQI evaluation.
- We will then select a random 10 second sample from each piece of music for listening panel evaluation.

## Task 2: Car

### Training/development

The main training database will be the train/dev split of [FMA](https://github.com/mdeff/fma). 

We leave it to you to decide how to use this as part of the training and development. For more information on augmenting and supplementing the training data, please see the [rules](../Take%20part/cc1_rules#training-and-development).

You can supplement that data from the following sources:
- [MTG-Jamendo](https://mtg.github.io/mtg-jamendo-dataset/)
- [MedleydB](https://medleydb.weebly.com/)
- [Bach10 Sibelius](https://zenodo.org/record/321361#.Y7_Ds3b7SUk)
- [MUSDB18](https://sigsep.github.io/datasets/musdb.html)

## Evaluation

- We will use the FMA evaluation set.
- You should process all of the music.
- All of the music will be used for HAAQI evaluation.
- We will then select a random 10 second sample from each piece of music for listening panel evaluation.

## Listener data

We will provide metadata characterising the hearing abilities of the listeners, so the audio signals you generate can be individualised. The same types of data are available for training/development and evaluation.

A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral hearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure tone air-conduction hearing loss will be between 25 and about 60 dB in the better ear.

The quantification of the listeners’ hearing is done with left and right pure tone air-conduction audiograms. These measure the threshold at which people can hear a pure-tone sound. For more information about audiograms please visit our section on [Audiograms](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).

<!-- 

## B The scene dataset
The complete dataset is composed split into the following sets:

- Training (6000 scenes, 24 speakers);
- Development (2500 scenes, 10 speakers);
- Evaluation (1500 scenes, 6 speakers).

Each scene corresponds to a unique target utterance and unique segment(s) of noise from the interferers. The training, development and evaluation sets are disjoint with respect to the target speakers. The three sets are balanced for the gender of the target talker.

High-Order Ambisonic Impulse Responses (HOA-IRs) and Head-Related Impulse Response (HRIRs) are used to model how the sound is altered as it propagates through the room and interacts with the head. See the page on [scene generation](/docs/Software/cc1_scene_generator) for more details.

Time-domain acoustic signals are generated for:

- A hearing aid with 3 microphone inputs (front, mid, rear). The hearing aid has a Behind-The-Ear (BTE) form factor; see [Figure 1](#fig1). The distance between microphones is approx. 7.6 mm. The properties of the tube and ear mould are not considered.
- Close to the eardrum.
- The anechoic target reference (front microphone).

<figure id="fig1">
<img width="300" src={useBaseUrl('/img/CEC2/bte_device.png')} />
<figcaption>Figure 1. Front (Fr), Middle (Mid) and Rear microphones on a BTE hearing aid form.</figcaption>
</figure>


Head Related Impulse Responses (HRIRs) are used to model how sound is altered as it propagates in a free-field and interacts with the head (i.e., no room is included). These are taken from the [OlHeadHRTF database](https://uol.de/mediphysik/downloads/hearingdevicehrtfs) with permission. These include HRIRs for human heads and for three types of head-and-torso simulator/mannekin. The eardrum HRIRs (labelled `ED`) are for a position close to the eardrum of the open ear.

`rpf` files and `ac` files are specification files for the geometric room acoustic model that include a complete description of the room, both in terms of geometry and room materials.  -->

<!-- ### B.1 Training data
 
For each scene in the training data the following signals and metadata are available:

- The target and interferer HOA-IRs (4 pairs: front, mid, rear and eardrum for left and right ears).
- The mono target and interferer signals (pre-convolution).
- For each hearing aid microphone (channels 1-3 where channel 1 is front, channel 2 is mid and channel 3 is rear) and a position close to the eardrum (channel 0):
   - The target convolved with the appropriate HOA-IRs and downmixed;
   - The interferers convolved with the appropriate HOA-IRs and downmixed;
   - The sum of the target and interferer convolved with the appropriate HOA-IRs and downmixed; (i.e. the noisy signals that would be received by the hearing aid)
- The target convolved with the anechoic HOA-IRs and downmixed for channel 1 for each ear (‘target_anechoic’). For use as a reference when computing HASPI scores.
- Metadata describing the scene: a JSON file containing, e.g., the filenames of the sources, the location of the sources, the viewvector of the target source, the location and viewvector of the receiver, the room dimensions (see specification below), and the room number, which corresponds to the RAVEN BRIR, rpf and ac files.
- A signal describing the head rotation (i.e. azimuthal angle at each sample) -->

<!-- ### B.2 Development data

This is made available to allow you to fully examine the performance of your system. Ground truth data (i.e., the premixed target and interferers are available in the development set)

Development data also contains target speaker adaptation sentences, i.e., four utterances from each of the target speakers. These will also be available in the evaluation data. i.e., systems can use these utterances in conjunction with the known target ID to inform their system of the which speaker in the scene should be attended. 

Note, that the data available for the evaluation will be much more limited, e.g. it will not contain premixed ground truth signals or scene metadata, (see Section [B.3](#b3-evaluation-data)).

When using the development data for evaluation, your hearing aid enhancement model should only be using the types of data available in the evaluation data set (see below).  -->

<!--  ### B.3 Evaluation data

The following data will only be available:

- Audio: the sum of the target and interferers for each hearing aid microphone.
- The ID of the listener who will be auditioning the processed scene.
- The listener characterisation data for these listeners.
- ID of target talker and a few examples of clean audio that are not the same as the target utterance.
- The head rotation signal, i.e. as might be recovered from hearing aid motion sensors. (Systems can use this signal but should also be evaluated without using it.)
- Speaker adaptation sentence - 4 clean utterances for each target speaker.

One challenge will be identifying the target talker from the hearing aid microphone signals. There are two possibilities:

- The ID of the target talker is given with examples of clean audio. This would allow an algorithm to learn characteristics of the target talker to then help it identify the voice in the mixture.
- The azimuth of the target and the starting time of the utterance are both roughly known from the scene generation metadata statistics.

These two approaches mimic what is available to human listeners. They might focus on a known voice or they might use visual cues to know roughly where and when someone is talking.


## D Data file formats and naming conventions

### D.1 Abbreviations used in filenames

The following abbreviations are used consistently throughout the filenames and references in the metadata.

- `R` – “room”: e.g., “R02678” # Room ID linking to RAVEN rpf file
- `S` – “scene”: e.g., S00121 # Scene ID for a particular setup in a room I.e., room + choice of target and interferer signals
- `BNC` – BNC sentence identifier e.g. `BNC_A06_01702`
- `CH` –
   - `CH0` – eardrum signal
   - `CH1` – front signal, hearing aid channel
   - `CH2` – middle signal, hearing aid channel
   - `CH3` – rear signal, hearing aid channel
- `I`/`i1` – Interferer, i.e., noise or sentence ID for the interferer/masker
- `T` – talker who produced the target speech sentences
- `L` – listener
- `E` – entrant (identifying a team participating in the challenge)
- `t` – target (used in BRIRs and RAVEN project ‘rpf’ files) -->

<!-- ### D.2 General

- Audio and HOA-IRs will be 44.1 kHz 32-bit wav files in either mono or stereo as appropriate.
- Where stereo signals are provided the two channels represent the left (0) and right (1) signals of the ear or hearing aid microphones.
- 0 dB FS in the audio signals corresponds to 100 dB SPL.
- Metadata will be stored in JSON or csv format as appropriate with the exception of
   - Room descriptions are stored as RAVEN project ‘rpf’ configuration files and ‘ac’ files. (However, key details are reflected in the scene.json files)
- Signals are saved within the Python code as 32-bit floating point by default.
- Output signals for the listening tests will be required to be in 16-bit format. -->

<!-- ### D.3 Source audio files

Wav files containing the original source materials.
Original target sentence recordings:

`<Talker ID>_<BNC sentence identifier>.wav` -->

<!-- ### D.4 Preprocessed scene signals

Audio files storing the signals picked up by the hearing aid microphone that are ready for processing. Separate signals are generated for each hearing aid microphone pair or ‘channel’.

- `<Scene ID>_target_<Channel ID>.wav`
- `<Scene ID>_interferer_<Channel ID>.wav`
- `<Scene ID>_mixed_<Channel ID>.wav`
- `<Scene ID>_target_anechoic.wav` - at hearing device front microphone
- `<Scene ID>_hr.wav` - head rotation signal

Scene ID – S00001 to S10000

- S followed by 5 digit integer with 0 pre-padding

Channel ID

- CH0 – Eardrum signal
- CH1 – Hearing aid front microphone
- CH2 – Hearing aid middle microphone
- CH3 – Hearing aid rear microphone

The **anechoic signal** is the signal that will be used as the referernce in the HASPI evaluation.

The **head rotation** signal indicates the precise azimuthal angle of the head at each sample. It is stored as a floating point wav file with values between -1 and +1 where the range maps linearly from -180 degrees to +180 degrees. Teams are free to use this signal in their hearing aid algorithms, but if you do so we will ask you to also submit a version of your system that does not use it, so that the benefit of known head motion can be measured. -->

<!-- ### D.5 Enhanced signals

The signals that are output by the baseline enhancement (hearing aid) model.

- `<Scene ID>_<Listener ID>_HA-output.wav` #HA output signal (i.e., as submitted by the challenge entrants)

Listener ID – ID of the listener panel member, e.g., L001 to L100 for initial ‘pseudo-listeners’, etc. We are no longer providing the script for post-processing signals in preparation for the listener panel. -->

<!-- ### D.6 Room metadata
JSON file containing the description of a room. This is the data from which the ambisonic room impulse response are generated. It stores the fixed room, listener, target and interferer geometry but does not specify the dynamic factors (e.g. signals, SNRs, head movements etc) that are needed to fully define a scene.

 ```json
[
  {
    "name": "R00001", # ID of room linking to RAVEN rpf and ac files
    "dimensions": "6.9933x3x3" # Room dimensions in metres,
    "target": { # target positions (x,y,z) and view vectors (look directions, x,y,z)
      "position": [-0.3, 2.4, 1.2],
      "view_vector": [0.071, 0.997, 0.0],
    },
    "listener": {
      "position": [-0.1, 5.2, 1.2],
      "view_vector": [0.071, 0.997, 0.0],
    },
    "interferers": [
      {
        "position": [0.4, 4.0, 1.2],
      },
      { # etc, up to three interferers
      }
    ],
  },
  ...
]
``` -->

<!-- ### D.7 Scene metadata

JSON file containing a description of the scene. It is a list of dictionaries with each entry representing a unique scene. A scene can be considered to be a room (see Section [D.7](#d7-room-metadata))  plus the full set of listener, target and interferer details. Note, many scenes can be generated from a single room, i.e. each using different listener, target and interferer settings. 

```json
[
  {
    "scene": "S00001",  # the unique scene ID
    "room":: "R00001", # ID of room linking to rooms.json
    "target": { 
      "name": "T005_JYD_04274", # target speaker code and BNCid
      "time_start": 107210, # start time of target in samples
      "time_end": 217019 # end time of target in samples
    },
    "listener": {
      "rotation": [ # Defines the head motion - list of time, direction pairs
        {
          "sample": 88200,
          "angle": 30  # Azimuth angle in degrees
        },
        {
          "sample": 176400,
          "angle”: 50 
        }
      ],
      "hrir_filename":  ["VP_N4-ED",
        "VP_N4-BTE_fr",
        "VP_N4-BTE_mid",
        "VP_N4-BTE_rear"] # HRIR filename for each channel to generate
    },
    "interferers": [
      {
        "position": 1,  # Index of interferer position (See rooms.json)
        "time_start": 0, # time of interferer onset in samples
        "time_end": 261119, # time of interferer offset in samples
        "name": "track_1353255", # interferer name
        "type": "music", # interferer type: speech, noise or music
        "offset": 4076256 # index into interferer file at which to extract sample
      },
      { # etc, up to three interferers
      }
    ],
    "dataset": "train", # the dataset to which the scene belongs: train, dev or eval
    "duration": 261119,  # total duration of scene in samples
    "SNR": 6.89  # targe SNR for the scene
  },
  ...
]
```

There are JSON files containing the scene specifications per dataset, e.g., scenes.train.json.- Note, that the scene ID and room ID might have a one-to-one mapping in the challenge, but are not necessarily the same. Multiple scenes can be made by changing the target and masker choices for a given room. E.g., participants wanting to expand the training data could remix multiple scenes from the same room.

The listener ID is not stored in the scene metadata; this information is stored separately in a scenes_listeners.json file which maps scenes to listeners, ie. telling you which listener (or listeners) will be listening to which scenes in the evaluation (see Section [D.9](#d9-listener-metadata)).

Noise interferers are labelled with a type “music”, “noise” or “speech” and then have a unique name identifying the file.

- For **speech**: `<ACCENT_CODE>_<SPEAKER_ID>` where `ACCENT_CODE` is a three letter code identify the accent region and gender of the speaker and `SPEAKER_ID` is a 5-digit ID specific to an individual speaker. E.g. "mif_02484" is a UK **mi**dlands accented **f**emale, speaker 02484. The speech comes from Demirshan et al. \[[1](#references)\] which provides more details.
- For **noise**: `CIN_<NOISE_TYPE>_<NOISE_ID>` where `NOISE_TYPE` is one of `dishwasher`, `fan`, `hairdryer`, `kettle`, `microwave`, `vacuum` (vacuum cleaner) or `washing` (washing machine) and `NOISE_ID` is  a unique 3-digit code for the sample.
- For **music**: `track_<TRACK_ID>` where `TRACK_ID` is unique 7-digit track identifier taken from the MTG Jamendo database. \[[2](#references)\]

Given the type and name, further interferer metadata can be found in the files `masker_speech_list.json`, `masker_noise_list.json` and `masker_music_list.json` which are distributed with the challenge. -->

<!-- ### D.8 Listener metadata

Audiogram data is stored in a single JSON file with the following format.

```json
{
    "L0001": {
        "name": "L0001",
        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],
        "audiogram_levels_r": [ … ],
    },
    "L0002": {
        ...
    },
    ...
}
```

Additional metadata (e.g. digit triple test results) are stored in a csv file. DETAILS -->

<!-- ### D.9 Scene-Listener map

JSON file named scenes_listeners.json dictates which scenes are to be processed by which listeners.

```json
{
    "S00001": ["L0001", "L0002", "L0003"],
    "S00002": ["L0003", "L0005", "L0007"],
    ... 
}
``` 
1. Demirsahin, Isin and Kjartansson, Oddur and Gutkin, Alexander and Rivera, Clara, "Open-source Multi-speaker Corpora of the English Accents in the British Isles", Proceedings of The 12th Language Resources and Evaluation Conference (LREC), 6532--6541, 2020, [Avialable Online](https://openslr.org/83/)
2. Bogdanov, Dmitry and Won, Minz and Tovstogan, Philip and Porter, Alastair and Serra, Xavier, "The MTG-Jamendo Dataset for Automatic Music Tagging", In Proc. Machine Learning for Music Discovery Workshop, International Conference on Machine Learning (ICML 2019), 2019, Long Beach, CA, United States", [Available Online](https://mtg.github.io/mtg-jamendo-dataset/) -->
