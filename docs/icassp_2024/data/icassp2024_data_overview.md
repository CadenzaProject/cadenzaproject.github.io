---
id: data_overview
title: ICASSP 2024 Data
sidebar_label: Data specification
sidebar_position: 4.2
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

To obtain the data and baseline code, please see the [download page](../take_part/download).

## A. Training, validation and evaluation data

The music dataset is based on MUSDB18-HQ [[1](#refs)] and a subset of the OlHeaD-HRTF [[2](#refs)].

### A.1 Training data

The training data needs to be generated by the entrants (to reduce download size). We provide:

* A mirror of the MUSDB18-HQ training split. (22 GB)
  * 100 songs.
  * 44,100 Hz sample rate.
  * 16-bit.
* A set of 96 HRTFs. (300 KB)
  * 16 subjects heads
  * 6 different loudspeaker angle positions ($\pm$ 22.5$\degree$, $\pm$ 30.0$\degree$, and $\pm$ 37.5$\degree$)
* 400 scenes descriptions:
  * The MUSDB18-HQ track for each scene.
  * 4 different left/right loudspeaker angle position
* A script (part of the software) to generate the training set.

To generate the training set please do:

1. Download and install PyClarity as described in [Download data and software](../take_part/download#a-software).
2. Download and extract the **core** and **train** data packages as described in [Download data and software](../take_part/download#b-data). 
3. Go to `recipes/cad_icassp_2024/generate_dataset` directory
4. Run `generate_at_mic_musdb18.py` setting the `path.root` parameter to the directory where you saved the **core** data.

```bash
python3 generate_at_mic_musdb18.py \
  path.root=/Volumes/cadenza_data/icassp_2024/
```

The script will iterate through the scenes, generating the at the microphone (at-mic) music samples.
This process will create:

* The directory `.../icassp_2024/audio/at_mic_music`, where the at-the-microphone signals will be saved (88 GB). This location can be changed by setting the `path.output_music_dir` parameter.
* The file `.../icassp_2024/metadata/at_mic_music.train.json` with the scenes metadata necessary to run the baseline. This location can be changed by setting the `path.output_music_file` parameter.

### A.2 Validation data

An independent validation set was constructed based on the new MoisesDB dataset [[2](#refs)].
Songs from MoisesDB were randomly selected to match the number of tracks per genre in the MUSDB18-HQ test set.

:::info[Genres]
Note that MUSDB18-HQ and MoisesDB don't share the same genres for all classes. 
While MUSDB18-HQ includes a compound genre, _Pop/Rock_, MoisesDB distinguishes between _Pop_ and _Rock_ genres more explicitly. 
Additionally, unlike MUSDB18-HQ, MoiseDB does not feature a _Heavy Metal_ class.
:::

| Genre       | Validation Set | MUSDB18 Test |
|-------------|:--------------:|:------------:|
| Reggae      |       2        |      2       |
| Rap         |       3        |      3       |
| Pop         |       20       |      -       |
| Rock        |       21       |      -       |
| Pop/Rock    |       -        |      37      |
| Heavy Metal |       -        |      4       |        
| Electronic  |       4        |      4       |
| Total       |       50       |      50      |

The validation dataset is available as a downloadable package in the [download data and software](../take_part/download) section.
No data generation is required.

Each track was divided into several consecutive 10-second excerpts, ensuring that no silent segments were selected. 
Then, a random Head-Related Transfer Function (HRTF) was applied to each excerpt. 
This means that two excerpts from the same track will have different pairs of HRTFs applied,
thus requiring separation models to be robust under varying HRTF conditions and for different songs

* 967 samples
* 10-second duration
* 44,100 Hz
* 16-bit

Note that for the validation dataset, only two listeners were assigned per scene in the scene_listeners.json file. 
For more details about the scene_listener metadata file, please refer to section [C.5 Scene-listeners](#C.5 Scene-listeners) below. 

### A.3 Evaluation (test) set

The evaluation set is based in the MUSDB18-HQ test set (50 tracks).  

The MUSDB18-HQ has the following genre distribution:

| Genre       | Tracks |
|-------------|:------:|
| Reggae      |   2    |
| Rap         |   3    |
| Pop/Rock    |   37   |
| Heavy Metal |   4    |
| Electronic  |   4    |
| Total       |   50   |

Following the same procedure as the validation set, each track is divided into several consecutive 10-second excerpts, 
ensuring that no silent segments are selected. Then, a randomly selected HRTF is applied to each excerpt. 

* 960 samples
* 10-second duration
* 44,100 Hz
* 16-bit

In the evaluation, each scene will be processed for 20 random test listeners.

:::note

The evaluation set only contains the mixture signal. This is to ensure it is not use for refining the systems.

:::

## B. Training augmentation data

### B.1 New Scenes

You can augment the training data by generating more random training scenes.
For this, we provide the `generate_dataset/generate_train_scenes.py` script. This script shares the `config.yaml` with 
`generate_dataset/generate_at_mic_musdb18.py` script.

To generate more scenes, you need:

* Set the parameter `scene.number_scenes_per_song` to the number of the different scenes to generate for each track. 
* The default value of scenes per song is `4`.
* This script uses the track name to seed the random generation. This ensures:
  * a reproducible scenes' generation.
  * increasing the number of scenes per song will always result in the 4 scenes provided in the **core** package plus new scenes.
* Run the script as:

```bash
python3 generate_train_scenes.py \
  path.root=/Volumes/cadenza_data/icassp_2024/ \
  scene.number_scenes_per_song=<number greater than 4>
```

Additionally, you can change the `scene_listener.number_listeners_per_scene` parameter to set how many listeners pair with the same scene.
By default, this parameter is set to `2`.

```bash
python3 generate_train_scenes.py \
  path.root=/Volumes/cadenza_data/icassp_2024/ \
  scene_listener.number_listeners_per_scene=<number greater than 2>
```


:::warning[Consider that ...]
Generating new scenes will not preserve the scene_id from the **core** package. This is because the id is assigned incrementally.
However, this does not have any significance in the process as these scenes are used exclusively for training separation models.
:::

### B.2 Augmenting tracks

Teams can supplement the training data using the following resources:

- Bach10
- FMA-small
- MedleydB version 1 and version 2

We leave the teams to decide how to use these as part of the training of their systems. The supplemental data will need HRTFs applied to them as we did for MUSDB18-HQ.
Note, 46 songs from MedleydB version 1 are already part of the training set in MUSDB18-HQ.

<details>
<summary>MUSDB18-HQ already contains 46 tracks from the MedleyDB version 1</summary>

* A Classic Education - NightOwl
* Aimee Norwich - Child
* Alexander Ross - Goodbye Bolero
* Alexander Ross - Velvet Curtain
* Auctioneer - Our Future Faces
* AvaLuna - Waterduct
* BigTroubles - Phantom
* Celestial Shore - Die For Us
* Clara Berry And Wooldog - Air Traffic
* Clara Berry And Wooldog - Stella
* Clara Berry And Wooldog - Waltz For My Victims
* Creepoid - OldTree
* Dreamers Of The Ghetto - Heavy Love
* Faces On Film - Waiting For Ga
* Grants - PunchDrunk
* Helado Negro - Mitad Del Mundo
* Hezekiah Jones - Borrowed Heart
* Hop Along - Sister Cities
* Invisible Familiars - Disturbing Wildlife
* Lushlife - Toynbee Suite
* Matthew Entwistle - Dont You Ever
* Meaxic - Take A Step
* Meaxic - You Listen
* Music Delta - 80s Rock
* Music Delta - Beatles
* Music Delta - Britpop
* Music Delta - Country1
* Music Delta - Country2
* Music Delta - Disco
* Music Delta - Gospel
* Music Delta - Grunge
* Music Delta - Hendrix
* Music Delta - Punk
* Music Delta - Reggae
* Music Delta - Rock
* Music Delta - Rockabilly
* Night Panther - Fire
* Port St Willow - Stay Even
* Secret Mountains - High Horse
* Snowmine - Curfews
* Steven Clark - Bounty
* Strand Of Oaks - Spacestation
* Sweet Lights - You Let Me Down
* The Districts - Vermont
* The Scarlet Brand - Les Fleurs Du Mal
* The So So Glos - Emergency

</details>

For more information on augmenting and supplementing the music training data, please see the [rules](../take_part/rules).

## C. Metadata Information

### C.1 Listener characteristics

We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised. 
The quantification of the listeners' hearing is done with left and right audiograms. These measure the threshold at which people can hear a pure-tone sound. 
[More information on what audiograms are and how they're measured](/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms).

- For training, we provide 83 listener audiograms that were collected for the [Clarity project](https://claritychallenge.org/).
- For validation, we constructed a new set of 50 listener audiograms from the [_von Gablenz and Holube (2019)_
dataset](https://zenodo.org/record/4995261#.Y_3O1HbP2Hu).
- For evaluation, we will use a set of 52 listener audiograms use in [first Cadenza Challenges](../../cadenza1/cc1_intro)

Visit [Listener Metadata](data_listener) for more details.

### C.2 Gains

We provide metadata giving the gains to use for rebalancing the mixture. There are 1105 possible combinations created by:

* Choosing how many VDBO tracks have their gain altered: 1, 2, or 3.
* Choosing the gain for those tracks: [-10, -6, -3, 3, 6, 10] dB.

In the metadata, this is then reported as the gain for each of the VDBO track. The same set of gains are used for training, validation and evaluation.

```json
{   
    ...
    "gain_0007": {    
        "vocals":  10, # Amplify vocals in 10 dB
        "drums" :   0,
        "bass"  :   0,
        "other" :   0
    },
    ...
    "gain_0138": {
        "vocals":   0,
        "drums" : -10, # Attenuate drums in 10 dB
        "bass"  :   6, # Amplify bass in 6 dB
        "other" :   0
    },
    ...
    "gain_0381": {
        "vocals":   3, # Amplify vocals in 3 dB
        "drums" :  10, # Amplify drums in 10 dB
        "bass"  :  -6, # Attenuate bass in 6 dB
        "other" :   0
    },
    ...
}
```

### C.3 Head and loudspeaker positions

We provide metadata indicating the subject head and loudspeaker positions.
This set corresponds to a subset of the OlHeaD-HRTF [[2](#refs)] dataset.
There are 16 subjects and 9 possible angles combinations.

<details>
  <summary>Left and right HRTFs angles combination</summary>

| Angle Left | Angle Right |
|------------|-------------|
| -22.5      | 22.5        |
| -22.5      | 30.0        |
| -22.5      | 37.5        |
| -30.0      | 22.5        |
| -30.0      | 30.0        |
| -30.0      | 37.5        |
| -37.5      | 22.5        |
| -37.5      | 30.0        |
| -37.5      | 37.5        |
</details>

The data is provided in a JSON file:

```json
{
    "hlp_0001": {
        "subject"    : "VP_E1",
        "left_angle" : -37.5,
        "right_angle": 22.5,
        "mic"        : "BTE_fr"
    },
    ...
}
```

### C.4 Scenes

The scene metadata is provided in a JSON file with the following structure:

```json
{
    "scene_10001": {
        "music" : "A Classic Education - NightOwl",
        "gain"  : "gain_0639",
        "head_loudspeaker_positions": "hlp_0056"
    },
    ...
}
```

### C.5 Scene-listeners

The scene-listener metadata is provided in a JSON file with the following structure:

```json
{
    "scene_10001": [
        "L0066",
        "L0057"
    ],
    ...
}
```

### C.6 MUSDB18-HQ

The MUSDB18-HQ metadata is provided in a single JSON file per dataset.

```json
[
    {
        "Track Name" : "A Classic Education - NightOwl",
        "Genre"      : "Singer/Songwriter",
        "Source"     : "MedleyDB",
        "License"    : "CC BY-NC-SA",
        "Split"      : "train"
    },
    ...
]
```

### C.7 Signals at hearing aid microphones

The at_the_mic metadata is provided in a JSON file with the following structure.:

```json
{
    "A Classic Education - NightOwl-hlp_0056": {
        "Track Name" : "A Classic Education - NightOwl-hlp_0056",
        "Split"      : "valid",
        "Path"       : "valid/A Classic Education - NightOwl-hlp_0056"
    },
    ...
}
```

## References
<a name="refs"></a>

**[1]** Rafii, Z., Liutkus, A., Stöter, F.-R., Mimilakis, S. I., and Bittner, R. (2019). MUSDB18-HQ - an Uncompressed Version of MUSDB18. [Dataset]. doi:10.5281/zenodo.3338373  
**[2]** F. Denk, S.M.A. Ernst, S.D. Ewert and B. Kollmeier, (2018): Adapting hearing devices to the individual ear acoustics: Database and target response correction functions for various device styles. Trends in Hearing, vol 22, p. 1-19. DOI:10.1177/2331216518779313  
**[3]** Pereira, I., Araújo, F., Korzeniowski, F., & Vogl, R. (2023). Moisesdb: A dataset for source separation beyond 4-stems. arXiv preprint arXiv:2307.15913