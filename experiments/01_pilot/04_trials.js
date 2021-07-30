// In this file you can specify the trial data for your experiment

// item information

const conclusion_text = [
    {
      type: 'main',
      id:1,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many coins there were in the purse.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'main',
      id:2,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many pills she took out of the bag.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //1
    {
      type: 'main',
      id:3,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many shots they heard in the distance.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //2
    {
      type: 'main',
      id:4,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many thieves they saw in the bank.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //3
    {
      type: 'main',
      id:5,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many shots they drank that night.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //4
    {
      type: 'main',
      id:6,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many cars he crashed with during the accident.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    } //5
  ];

const answer_text = [
    {
      type: 'main',
      id: 1,
      condition: 'COMP',
      sentence: 'There | were | less | than | ten | coins | in | the | purse.',
      option1: 'next'
    }, //0
    {
      type: 'main',
      id: 2,
      condition: 'COMP',
      sentence: 'I | had | taken | less | than | ten | pills | out | of | the | bag.',
      option1: 'next'
    }, //1
    {
      type: 'main',
      id: 3,
      condition: 'COMP',
      sentence: ' I | heard | less | than | ten | shots | in | the | distance.',
      option1: 'next'
    }, //2
    {
      type: 'main',
      id: 4,
      condition: 'COMP',
      sentence: 'I | saw | less | than | ten | thieves | in | the | bank',
      option1: 'next'
    }, //3
    {
      type: 'main',
      id: 5,
      condition: 'COMP',
      sentence: 'I | drank | less | than | ten | shots | that | night.',
      option1: 'next'
    }, //4
    {
      type: 'main',
      id: 6,
      condition: 'COMP',
      sentence: 'I | crashed | with | less | than | ten | cars | during | the | accident.',
      option1: 'next'
    }, //5
    {
      type: 'main',
      id: 1,
      condition: 'SUP',
      sentence: 'There | were | at | most | ten | coins | in | the | purse.',
      option1: 'next'
    }, //6
    {
      type: 'main',
      id:2,
      condition: 'SUP',
      sentence: 'I | had | taken | at | most | ten | pills | out | of | the | bag.',
      option1: 'next'
    }, //7
    {
      type: 'main',
      id:3,
      condition: 'SUP',
      sentence: 'I | heard | at | most | ten | shots | in | the | distance.',
      option1: 'next'
    }, //8
    {
      type: 'main',
      id:4,
      condition: 'SUP',
      sentence: 'I | saw | at | most | ten | thieves | in | the | bank.',
      option1: 'next'
    }, //9
    {
      type: 'main',
      id:5,
      condition: 'SUP',
      sentence: 'I | drank | less | than | ten | shots | that | night.',
      option1: 'next'
    }, //10
    {
      type: 'main',
      id:6,
      condition: 'SUP',
      sentence: 'I | crashed | with | at | most | ten | cars | during | the | accident.',
      option1: 'next'
    } //11
  ];

const question_text = [
    {
      type: 'main',
      id:1,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Were there {at most / less than} ten coins in the purse? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //0
    {
      type: 'main',
      id:1,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What was in the purse? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //1
    {
      type: 'main',
      id:1,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many coins were there  in the purse? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //2
    {
      type: 'main',
      id:2,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you take {at most / less than} ten pills? out of the bag? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //3
    {
      type: 'main',
      id:2,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you take out of the bag? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //4
    {
      type: 'main',
      id:2,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many pills did you take out of the bag? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //5
    {
      type: 'main',
      id:3,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you hear {at most / less than} ten shots in the distance? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //6
    {
      type: 'main',
      id:3,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you hear? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //7
    {
      type: 'main',
      id:3,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many shots did you hear in the distance? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //8
    {
      type: 'main',
      id:4,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you see {at most / less than} ten thieves in the bank? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //9
    {
      type: 'main',
      id:4,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you see in the bank? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //10
    {
      type: 'main',
      id:4,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many thieves did you see in the bank? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //11
    {
      type: 'main',
      id:5,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you drink {at most / less than} ten shots that night? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //12
    {
      type: 'main',
      id:5,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you drink that night? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //13
    {
      type: 'main',
      id:5,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many shots did you drink that night? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //14
    {
      type: 'main',
      id:6,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you crash with {at most / less than} ten cars during the accident?  <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //15
    {
      type: 'main',
      id:6,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you crash with during the accident?  <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //16
    {
      type: 'main',
      id:6,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many cars did you crash with during the accident?  <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //17
  ];

//filler information

const filler_question = [
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you eat?  <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many slices of bread did you eat? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you eat {at most / less than} ten slices of bread? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you see {at most / less than} ten balloons flying in the air? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you see? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many balloons did you see flying in the air? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you find {at most / less than} ten corpses in the office? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you find? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many corpses did you find in the office? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: ' Did you help {at most / less than} ten children to escape the fire? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many children did you help to escape the fire? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0

  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you hear {at most / less than} ten women shouting at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you hear at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many women did you hear shouting at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you hear {at most / less than} ten animals howling in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you hear in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many animals did you hear howling in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you kiss {at most / less than} ten strangers at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many strangers did you kiss at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you take {at most / less than} ten pictures of the assault? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do during the assault? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many pictures of the assault did you take? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you use {at most / less than} ten kinds of drugs that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you use that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many kinds of drugs did you use that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you hike {at most / less than} ten kilometers up a mountain? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do? <br /> <br /> The witness responds:',
    option1: 'Next',
  },
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many kilometers did you hike? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:31 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:32 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:33 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:34 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:35 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:36 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:37 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:38 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:39 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  },
  {
    id:40 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:41 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:42 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:43 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:44 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:45 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:46 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:47 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:48 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:49 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  },
  {
    id:50 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:51 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:52 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:53 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:54 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:55 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:56 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:57 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:58 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:59 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //5x
  {
    id:60 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:61 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:62 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:63 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:64 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:65 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:66 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:67 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:68 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:69 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //6x
  {
    id:70 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:71 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:72 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
];

const filler_answer = [
  {
    type: 'filler',
    id:7,
    condition: 'SUP',
    sentence: 'I | ate | at | most | ten | slices | of | bread.',
    option1: 'next'
  }, //
  {
    id:7,
    condition: 'COMP',
    sentence: 'I | ate | less | than | ten | slices | of | bread.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:8,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | balloons | flying | in | the | air.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:8,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | balloons | flying | in | the | air.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:9,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | corpses | in | the | office.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:9,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | corpses | in | the | office.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:10,
    condition: 'SUP',
    sentence: 'I | helped | at | most | ten | children | to | escape | the | fire.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:10,
    condition: 'COMP',
    sentence: 'I | helped | less | than | ten | children | to | escape | the | fire.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:11,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | women | shouting | this | event. ',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:11,
    condition: 'COMP',
    sentence: 'I | heard | less| than | ten | women | shouting | this | event.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:12,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | animals | howling | in | the | forest.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:12,
    condition: 'COMP',
    sentence: 'I | heard | less | than | ten | animals | howling | in | the | forest.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:13,
    condition: 'SUP',
    sentence: 'I | kissed | at | most | ten | strangers | at | the | party.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:13,
    condition: 'COMP',
    sentence: 'I | kissed | less | than | ten | strangers | at | the | party.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:14,
    condition: 'SUP',
    sentence: 'I | took | at | most | ten | pictures | of | the | assault.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:14,
    condition: 'COMP',
    sentence: 'I | took | less | than | ten | pictures | of the | assault. ',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:15,
    condition: 'SUP',
    sentence: 'I | used | at | most | ten | kinds | of | drugs | that | night.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:15,
    condition: 'COMP',
    sentence: ' I | used | less | than | ten | kinds | of | drugs | that | night.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:16,
    condition: 'SUP',
    sentence: ' I | hiked | at | most | ten | kilometers | up | a | mountain.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:16,
    condition: 'COMP',
    sentence: 'I | hiked | less | than | ten | kilometers | up | a | mountain.',
    option1: 'next'
  }, //
];

const filler_conclusion = [
  {
    type: 'filler',
    id:7,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many slices of bread they ate.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:8,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many balloons they saw flying in the air .  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:9,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many corpses they saw in the office.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:10,

    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many children they helped to escape the fire.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:11,

    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many women they heard shouting at this event.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //4
  {
    type: 'filler',
    id:12,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many animals they heard howling in the forest.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:13,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many strangers they kissed at the party.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:14,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many pictures they took of the assault.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:15,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many types of drugs they used that night.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //8
  {
    type: 'filler',
    id:16,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many kilometers they hiked up a mountain.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
];

//use latin square design to create 6 trial lists
// 2 answer cond: sup , comp
// 3 question cond: polar, howmany, what
// 6 lists

// latin square:
// C E D B A F
// D C A E F B
// A B F D E C
// E D C F B A
// F A B C D E
// B F E A C D

// A = sup, polar
// B = sup, howmany
// C = sup, what
// D = comp, polar
// E = comp, howmany
// F = comp, what

const question_ordered = [
  question_text[1],
  question_text[5],
  question_text[6],
  question_text[11],
  question_text[12],
  question_text[16],
  //l1
  question_text[0],
  question_text[4],
  question_text[6],
  question_text[11],
  question_text[13],
  question_text[17],
  //l2
  question_text[0],
  question_text[5],
  question_text[7],
  question_text[9],
  question_text[14],
  question_text[16],
  //l3
  question_text[2],
  question_text[3],
  question_text[7],
  question_text[10],
  question_text[14],
  question_text[15],
  //l4
  question_text[1],
  question_text[3],
  question_text[8],
  question_text[10],
  question_text[12],
  question_text[17],
  //l5
  question_text[2],
  question_text[4],
  question_text[8],
  question_text[9],
  question_text[13],
  question_text[15],
  //l6
];

const answers_ordered = [
  answer_text[6],
  answer_text[1],
  answer_text[2],
  answer_text[9],
  answer_text[10],
  answer_text[5],
  //l1
  answer_text[0],
  answer_text[7],
  answer_text[8],
  answer_text[2],
  answer_text[4],
  answer_text[11],
  //l2
  answer_text[6],
  answer_text[7],
  answer_text[2],
  answer_text[3],
  answer_text[4],
  answer_text[11],
  //l3
  answer_text[0],
  answer_text[1],
  answer_text[8],
  answer_text[3],
  answer_text[10],
  answer_text[11],
  //l4
  answer_text[0],
  answer_text[7],
  answer_text[8],
  answer_text[9],
  answer_text[4],
  answer_text[5],
  //l5
  answer_text[6],
  answer_text[1],
  answer_text[2],
  answer_text[9],
  answer_text[10],
  answer_text[5],
  //l6
];

const conclusion_ordered = [
  conclusion_text[0],
  conclusion_text[1],
  conclusion_text[2],
  conclusion_text[3],
  conclusion_text[4],
  conclusion_text[5],
  //l1
  conclusion_text[0],
  conclusion_text[1],
  conclusion_text[2],
  conclusion_text[3],
  conclusion_text[4],
  conclusion_text[5],
  //l2
  conclusion_text[0],
  conclusion_text[1],
  conclusion_text[2],
  conclusion_text[3],
  conclusion_text[4],
  conclusion_text[5],
  //l3
  conclusion_text[0],
  conclusion_text[1],
  conclusion_text[2],
  conclusion_text[3],
  conclusion_text[4],
  conclusion_text[5],
  //l4
  conclusion_text[0],
  conclusion_text[1],
  conclusion_text[2],
  conclusion_text[3],
  conclusion_text[4],
  conclusion_text[5],
  //l5
  conclusion_text[0],
  conclusion_text[1],
  conclusion_text[2],
  conclusion_text[3],
  conclusion_text[4],
  conclusion_text[5],
  //l6
];

//chunk item trials into 6 lists
const question_lists = _.chunk(question_ordered, 6);
const answer_lists = _.chunk(answers_ordered, 6);
const conclusion_lists = _.chunk(conclusion_ordered, 6);

//chunk filler trials into 6 lists
const filler_question_lists = _.chunk(filler_question, 12);
const filler_answer_lists = _.chunk(filler_answer, 12);
const filler_conclusion_lists = _.chunk(filler_conclusion, 12);

// abwechselnd item und filler trials als blöcke (6 items, 12 fillers, ...)
const all_questions = _.flatten(_.concat(question_lists[0], filler_question_lists[0], question_lists[1], filler_question_lists[1], question_lists[2], filler_question_lists[2], question_lists[3], filler_question_lists[3], question_lists[4], filler_question_lists[4], question_lists[5], filler_question_lists[5]));
const all_answers = _.flatten(_.concat(answer_lists[0], filler_answer_lists[0], answer_lists[1], filler_answer_lists[1], answer_lists[2], filler_answer_lists[2], answer_lists[3], filler_answer_lists[3], answer_lists[4], filler_answer_lists[4], answer_lists[5], filler_answer_lists[5]));
const all_conclusions = _.flatten(_.concat(conclusion_lists[0], filler_conclusion_lists[0],conclusion_lists[1], filler_conclusion_lists[1],conclusion_lists[2], filler_conclusion_lists[2],conclusion_lists[3], filler_conclusion_lists[3],conclusion_lists[4], filler_conclusion_lists[4],conclusion_lists[5], filler_conclusion_lists[5]));
