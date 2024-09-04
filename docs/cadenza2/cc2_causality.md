---
id: causality
title: Causality
sidebar_label: Causality
sidebar_position: 4.6
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In CAD2, we're looking for both causal and non-causal systems to solve the tasks. For those developing causal systems, here is some additional information.

Causality in time series and sequences are very important in real-time signal processing. Developing a causal 
DNN system means that, in a time series or sequence, the computation at time $t$ should only depend on the current and previous information.
For instance, for CAD2 causal systems, computations cannot look beyond 5 ms into the future.

When developing a causal system, especially for time series or sequence modeling, it is crucial to maintain causality throughout the network. 
If causality is broken at any layer, the system could end up using future information, which is not acceptable in real-time or sequential tasks 
where predictions must be made based on past and current data only.

One methodology for developing causal and non-causal systems could involve starting with a non-causal implementation 
that uses traditional layer implementations and then making the model causal by adapting or replacing layers one by one.
Below, you will find a comparison of causal and non-causal layers that can help you adapt your non-causal models to causal.

## A. Non-Causal Layers

* **Standard Convolutional Layers (without causal adjustments)**: In their standard form, convolutional layers apply convolutional kernels symmetrically around the current time step (or spatial location), incorporating information from future time steps or locations. This makes them non-causal for time series or sequential data.
* **Self-Attention**: In standard transformers, self-attention mechanisms calculate attention scores using the entire sequence, allowing each position to attend to all other positions, including future ones. This makes it non-causal.
* **Bidirectional LSTM / GRU**: These layers process the input sequence in both forward and backward directions, thus using future information for each time step.
* **Global Pooling**: These layers operates across the entire temporal (or spatial) dimension, incorporating future information in the process.

## B. Causal Layers

* **Causal Convolutional Layers**: They ensure that the convolution operation at time $t$ only uses data from time $t$ and earlier. This can be achieved by appropriate padding and kernel placement. Standard convolution operations use a symmetric kernel centered on the current time step, which includes future information. Causal convolutions shift the kernel to only include current and past information.
  * **Padding**: The padding is set to **(kernel_size − 1) * dilation**. This ensures that the convolution kernel is shifted such that it does not include future time steps.
  * **Padding Adjustment**: After the convolution operation, the excess padding (which corresponds to future time steps) is removed. The removal is done by slicing the output tensor, ensuring the output at each time step only depends on current and past inputs.
* **Simple RNN**: Processes input sequentially, maintaining an internal state that only depends on past and current inputs.
* **LSTM (Long Short-Term Memory)**: Maintains a cell state that helps in learning long-term dependencies while processing data in a causal manner.
* **GRU (Gated Recurrent Unit)**: Similar to LSTMs, GRUs have gating mechanisms that control the flow of information while maintaining causality.
* **Causal (Masked) Attention**: In transformers and other attention-based models, causal attention mechanisms (also known as masked attention) ensure that each position in the sequence can only attend to previous positions and the current position. This is typically implemented using masks to prevent the model from looking at future positions.

## C. Normalization

Several common normalization techniques are used in traditional DNN systems, but all are considered non-causal in their standard forms. Here are some examples:

* **Batch Normalization**: Operates across the batch dimension and is not causal since it can use information from the entire batch, which may include future time steps.
* **Layer Normalization**: Normalizes the inputs across the features for each sample and is not causal by default, as it uses the entire feature dimension at each time step.
* **Instance Normalization**: Normalizes each instance in the batch independently and is not causal because it normalizes across the entire feature dimension for each instance.
* **Group Normalization**: Divides the feature channels into groups and normalizes each group independently. It is not causal by default, similar to layer normalization.

### C.1 Causal Normalization

In general, any normalization technique can be made causal with the proper modifications:

* **Compute Statistics Incrementally**: Calculate the mean and variance (or other necessary statistics) incrementally as new data points are observed to avoid using future data.
* **Use Running Averages**: Implement running or exponentially weighted moving averages to keep track of the statistics, which depend only on past and present data.
* **Sliding Window Approach**: For some applications, a sliding window that includes only past and present data up to the current time step can be used.

A practical example of causal normalization is the causal implementation of ConvTasNet  [[1]](#references), where the system employs Cumulative Layer Normalization, a causal modification of the non-causal Global Layer Normalization.

## D. General Tips for Maintaining Causality

* **Avoid Future Information**: Ensure that no layer or operation uses information from future time steps. This includes being careful with padding and masking.
* **Layer-by-Layer Validation**: Validate causality at each layer to ensure that the output only depends on the current and past inputs.
* **Testing**: Implement rigorous testing to confirm that predictions at each step are only based on past and current data.

## References

**[1]** Luo, Y. and Mesgarani, N., 2019. Conv-tasnet: Surpassing ideal time–frequency magnitude masking for speech separation. IEEE/ACM transactions on audio, speech, and language processing, 27(8), pp.1256-1266.   

