// In this file you can specify the trial data for your experiment

// item information

const conclusion_text = [
    {
      type: 'main',
      id:1,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many coins she had in her hand.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      id:2,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many pills she took.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //1
    {
      id:3,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many shots they heard.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //2
    {
      id:4,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many thieves there were in the bank.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //3
    {
      id:5,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many shots they drank.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //4
    {
      id:6,
      QUD: 'Based on this, the judge concludes:',
      question: 'The witness doesn’t know exactly how many cars he crashed with during the accident.  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    } //5
  ];

const answer_text = [
    {
      id: 1,
      condition: 'COMP',
      sentence: 'I | had | less | than | ten | coins | in | my | hand.',
      option1: 'next'
    }, //0
    {
      id: 2,
      condition: 'COMP',
      sentence: 'I | had | taken | less | than | ten | pills.',
      option1: 'next'
    }, //1
    {
      id: 3,
      condition: 'COMP',
      sentence: ' I | heard | less | than | ten | shots.',
      option1: 'next'
    }, //2
    {
      id: 4,
      condition: 'COMP',
      sentence: 'I | saw | less | than | ten | thieves | in | the | bank',
      option1: 'next'
    }, //3
    {
      id: 5,
      condition: 'COMP',
      sentence: 'I | had | less | than | ten | shots.',
      option1: 'next'
    }, //4
    {
      id: 6,
      condition: 'COMP',
      sentence: 'I | crashed | with | less | than | ten | cars | during | the | accident.',
      option1: 'next'
    }, //5
    {
      id: 1,
      condition: 'SUP',
      sentence: 'I | had | at | most | ten | coins | in | my | hand.',
      option1: 'next'
    }, //6
    {
      id:2,
      condition: 'SUP',
      sentence: 'I | had | taken | at | most | ten | pills.',
      option1: 'next'
    }, //7
    {
      id:3,
      condition: 'SUP',
      sentence: 'I | heard | at | most | ten | shots.',
      option1: 'next'
    }, //8
    {
      id:4,
      condition: 'SUP',
      sentence: 'I | saw | at | most | ten | thieves | in | the | bank.',
      option1: 'next'
    }, //9
    {
      id:5,
      condition: 'SUP',
      sentence: 'I | had | at | most | ten | shots.',
      option1: 'next'
    }, //10
    {
      id:6,
      condition: 'SUP',
      sentence: 'I | crashed | with | at | most | ten | cars | during | the | accident.',
      option1: 'next'
    } //11
  ];

const question_text = [
    {
      id:1,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Were there {at most / less than} ten coins in your hand? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //0
    {
      id:1,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What was in your hand?<br /> <br /> The witness responds:',
      option1: 'Next',
    }, //1
    {
      id:1,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many coins did you have in your hand?<br /> <br /> The witness responds:',
      option1: 'Next',
    }, //2
    {
      id:2,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you take {at most / less than} ten pills?<br /> <br /> The witness responds:',
      option1: 'Next',
    }, //3
    {
      id:2,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you do?<br /> <br /> The witness responds:',
      option1: 'Next',
    }, //4
    {
      id:2,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many pills did you take?<br /> <br /> The witness responds:',
      option1: 'Next',
    }, //5
    {
      id:3,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you hear {at most / less than} ten shots? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //6
    {
      id:3,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you hear? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //7
    {
      id:3,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many shots did you hear? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //8
    {
      id:4,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you count {at most / less than} ten thieves in the bank? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //9
    {
      id:4,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you count? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //10
    {
      id:4,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many thieves did you count in the bank? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //11
    {
      id:5,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you drink {at most / less than} ten shots that night? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //12
    {
      id:5,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you drink? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //13
    {
      id:5,
      QUD: 'The judge asks:',
      condition: 'HOWMANY',
      question: 'How many shots did you drink that night? <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //14
    {
      id:6,
      QUD: 'The judge asks:',
      condition: 'POLAR',
      question: 'Did you crash with {at most / less than} ten cars during the accident?  <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //15
    {
      id:6,
      QUD: 'The judge asks:',
      condition: 'WHAT',
      question: 'What did you crash with?  <br /> <br /> The witness responds:',
      option1: 'Next',
    }, //16
    {
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
    condition: 'POLAR',
    question: 'Did you eat {at most / less than} ten slices of bread?  <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:2 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:3 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:4 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:5 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:6 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:7 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:8 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:9 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:10 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:11 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:12 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0

  {
    id:13 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:14 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:15 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:16 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:17 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:18 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:19 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:20 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:21 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:22 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:23 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:24 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:25 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:26 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:27 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:28 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:29 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  },
  {
    id:30 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:31 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:32 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:33 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:34 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:35 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:36 ,
    QUD: 'The judge asks:',
    condition: 'filler',
    question: 'filler <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
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
    id:2,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:3,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:4,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:5,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:6,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:7,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:8,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:9,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:10,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:11,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:12,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:13,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:14,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:15,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:16,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:17,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:18,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:19,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:20,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:21,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:22,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:23,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:24,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:25,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:26,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:27,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:28,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:29,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:30,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:31,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:32,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:33,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:34,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:35,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:36,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:37,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:38,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:39,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:40,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:41,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:42,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:43,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:44,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:45,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:46,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:47,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:48,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:49,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:40,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:41,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:42,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:43,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:44,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:45,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:46,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:47,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:48,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:49,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:50,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:51,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:52,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:53,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:54,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:55,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:56,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:57,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:58,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:59,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:60,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:61,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }, //
  {
    id:62,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:63,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:64,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:65,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:66,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:67,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:68,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:69,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:70,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:71,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  },
  {
    id:72,
    condition: 'filler',
    sentence: 'filler | sentence .',
    option1: 'next'
  }
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
    id:2,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:3,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:4,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:5,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //4
  {
    id:6,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:7,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:8,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:9,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //8
  {
    id:10,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:11,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:12,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:13,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:14,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:15,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:16,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:17,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:18,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:19,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:20,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:21,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:22,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:23,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:24,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:25,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:26,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:27,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:28,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:29,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:30,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:31,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:32,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:33,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:34,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:35,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:36,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:37,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:38,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:39,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:40,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:41,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:42,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:43,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:44,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:45,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:46,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:47,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:48,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:49,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:50,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:51,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:52,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:53,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:54,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:55,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:56,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:57,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:58,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:59,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:60,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:61,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:62,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:63,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:64,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:65,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:66,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:67,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:68,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:69,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:70,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:71,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    id:72,
    condition: 'filler',
    QUD: 'Based on this, the judge concludes:',
    question: 'filler conclusion  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  } //0
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
