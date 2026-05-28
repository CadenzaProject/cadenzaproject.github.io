---
id: rules
title: Rules
sidebar_label: Rules
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

## What information can I use?

See [Dataset](../data/data) for more details on how the dataset was generated.

### Training and development

We provide teams with signals and listener responses for training and development. This includes:

1. **Audio1**: The stereo audio for which participants must predict lyric intelligibility. This is the audio presented to listeners during the intelligibility tests and includes:
   - Reverberation (high-order ambisonics (HOA) combined with head-related transfer functions (HRTF)).
   - Background noise.
   - Simulated no, mild or moderate hearing loss (HL).
2. **Audio2**: Audio1 without the hearing loss simulation. This corresponds to the signal at the entrance of the listener’s ear canal.
3. **Severity**: The listener's hearing impairment severity category used in the HL simulation.
4. **Lyrics**: The ground-truth lyric text.
5. **Transcription**:  The transcriptions produced by listeners during the intelligibility tests.
6. **Intelligibility**: The intelligibility scores obtained from the listening tests, computed by comparing the ground-truth lyrics with the listeners’ transcriptions.

Teams are free to split this data into training and development sets as they see fit.

In addition, teams can use:
- The training and validation set from the CLIP1 dataset.
    - Note, CLIP1 test set must not be used for training or model validation.
- Their own data for training
- Expanded versions of the CLIP1 and CLIP2 training data through simple automated modifications.
- Additional pre-training data generated using existing speech intelligibility, lyric intelligibility, and hearing loss models.

### Validation

The validation set includes only the following fields:

1. **Audio1**: The stereo audio for which participants must predict lyric intelligibility. This is the audio presented to listeners during the intelligibility tests and includes:
    - Reverberation (high-order ambisonics (HOA) combined with head-related transfer functions (HRTF)).
    - Background noise.
    - Simulated no, mild or moderate hearing loss (HL).
2. **Audio2**: Audio1 without the hearing loss simulation. This corresponds to the signal at the entrance of the listener’s ear canal.
3. **Severity**: The listener's hearing impairment severity category used in the HL simulation.
4. **Lyrics**: The ground-truth lyric text.

To obtain scores on the validation set, please submit your predictions to the [leaderboard](leaderboard).

### Evaluation

The evaluation sets must not be used for training or model development. Audio samples must be processed independently of one another.

The only data that may be used by the prediction model during evaluation are:

1. **Audio1**: The stereo audio for which participants must predict lyric intelligibility. This is the audio presented to listeners during the intelligibility tests and includes:
    - Reverberation (high-order ambisonics (HOA) combined with head-related transfer functions (HRTF)).
    - Background noise.
    - Simulated no, mild or moderate hearing loss (HL).
2. **Audio2**: Audio1 without the hearing loss simulation. This corresponds to the signal at the entrance of the listener’s ear canal.
3. **Severity**: The listener's hearing impairment severity category used in the HL simulation.
4. **Lyrics**: The ground-truth lyric text.

Please follow the instructions in [Submission](submission) to submit your predictions on the evaluation set.

## Baseline models and computational restrictions

* The use of pre-trained foundational models is allowed but must be fully declared.
* Teams may choose to use all or some of the components of the provided baseline.
* There is no limit on computational cost, but we expect entrants to report model size.
* Models can be non-causal.

## What sort of model do I create?

All models must use **Audio1** to estimate intelligibility as it is the target signal. 
However, models may use one or more of the following sources of information to predict the intelligibility of the music signals:

1. **Audio2**, which corresponds to Audio1 without the hearing loss simulation applied.
2. **Lyrics**, which are the ground-truth lyric text.
3. **Severity**, which indicates the listener’s hearing impairment level used in the HL simulation.

Any combination of Audio2, Lyrics, and Severity may be used together with Audio1.

Your model must output a single lyric intelligibility score per each Audio1 signal. 
This score should represent the estimated proportion of words correctly recognised in the sentence.

The model architecture is unrestricted. For example, you may design a system that first recognises individual
words and aggregates them into an intelligibility estimate, or you may directly predict an intelligibility score from the audio input.

## Submitting multiple entries for a task

If you wish to submit multiple entries,

* Your systems must have significant differences in their approach.
* You must contact the organisers to discuss your plans.
* If accepted, you will be issued with multiple Team IDs to distinguish your entries.
* In your documentation, you must make it clear how the submissions differ.

### Ablation

Systems that use **Audio2 and/or Lyrics and/or Severity** must, whenever possible, also submit results **with and without these components**. This is to enable a more detailed assessment of how each type of information impacts system performance.

Participants are encouraged to include additional ablation studies that they consider informative.

Further details on how to submit these results will be provided on the [Submission page](submission) following the release of the evaluation set.

## Evaluation of systems

* Entries will be ranked according to their performance in predicting measured intelligibility scores.
* The system score will be computed as the RMSE between the predicted and measured intelligibility scores across the full test set.
* Systems will only be considered if a technical report has been submitted and the system is deemed compliant with the challenge rules.

## Teams

* Teams must [pre-register](./registration) and nominate a contact person.
* Teams can be from one or more institutions.
* FYI: The organisers and their PhD students are not permitted to enter under ICASSP rules

## Transparency

* Teams must provide a technical document of up to 2 pages plus a third for references describing the system/model and any external data and pre-existing tools, software and models used.
* We will publish all technical documents on the challenge website (anonymous or otherwise).
* Teams are encouraged – but not required – to provide us with access to the system(s)/model(s) and to make their code open source.
* Anonymous entries are allowed.
* All teams will be referred to using anonymous codenames if the rank ordering is published before the final results are announced.

## Intellectual property

The entrants' **Submission** will consist of a set of intelligibility predictions and an accompanying technical report. 
Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions. 
As a condition of submission, entrants grant the Challenge Organisers, its subsidiaries, agents and partner companies, a perpetual, 
irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, adapt, modify, publish, distribute, publicly perform, 
create a derivative work from, and publicly display the Submission. 
Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, 
including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.