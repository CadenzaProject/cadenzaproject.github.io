---
id: leaderboard
title: Leaderboard
sidebar_label: Leaderboard
sidebar_position: 3.2
---
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

Use the validation set. This has been published without the listener responses. To test your predictions, you must submit them to oue Eval.AI leaderboard.
Upon submission, you will have the option to make your submission private or public. We encourage you to make them public to help others in the challenge.

## How to submit

To submit your predictions, follow these steps:

1. **Prepare your CSV file**: Create a CSV file with the following structure:

```bash
<signal_id>,<intelligibility_score>
...
```

* `signal_id` is the unique signal identifier, matching the FLAC signal. Same if as the `signal` field in the metadata.
* `intelligibility_score` is your intelligibility prediction in percentage of words correctly recognized for the signal (a value between 0 and 100, inclusive)

Do not include the CSV headers. the first row should be the predictions for the first `signal_id`.
Make sure that there is no extra spaces between commas

2. **Submit to EvalAI**:

* Create an account on [EvalAI](https://eval.ai/) if you don't have one already.
* Log in and navigate to [ICASSP 2026 Cadenza Challenge](https://eval.ai/web/challenges/challenge-page/2634/leaderboard/6866).
* In the submission section, upload your CSV file. Here you will have the option to make your results private or public.
