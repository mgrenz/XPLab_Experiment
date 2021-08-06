
# Ignorance in context: The interaction of modified numerals and QUDs - A replication study

Westera, M. & Brasoveanu, A.(2014). Ignorance in context: The interaction of modified numerals and QUDs. *Proceedings of SALT, 24*, https://doi.org/10.3765/salt.v24i0.2436.


## The Experiment

The study of Westera & Brasoveanu aims to explore new evidence accounting for the context-sensitivity of ignorance inferences as well as context dependent processing costs for superlative modifiers by conducting two experiments with the same design but slightly different conditions.

This experiment published here is a replication of the first experiment of a study reported by Westera & Brasoveanu in a paper appeared in *Proceedings of SALT* in 2014 under the title "Ignorance in context: The interaction of modified numerals and QUDs".


## The Repository

All necessary information concerning the replication of the first experiment can be found in the respective subfolders of this repository:
- analyses: Analyses scripts, divided into pilot and main study
- data: Collected data, divided into pilot and main study
- experiments: [_magpie](https://magpie-ea.github.io/magpie-site/) implementation of the first experiment, divided into pilot and main study
- notes: All notes relevant for the study and the related processes
- writing: Preregestration report and final report


## The Implementation

The experiment was built using [_magpie](https://magpie-ea.github.io/magpie-site/).

A hard coded double Latin square design was used to randomize and balance the 6 conditions across the 36 items and to create 6 lists. The lists were assigned to the participants using a version of the Fisher-Yates shuffle. The same randomization method was used to randomize the order of the 72 fillers. Finally, each participant was presented with alternating item and filler trials (6 items were followed by 12 fillers) leading to a total amount of 108 trials.

### Running the experiment

1. Online: [Click here](https://xplab2021-group04-finalproject.netlify.app/)
2. Offline: Clone the repository, run `npm install` and open `index.html`.
