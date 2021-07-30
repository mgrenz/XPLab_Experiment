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
    question: 'What did you eat with cheese?  <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many slices of bread did you eat with cheese? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you eat {at most / less than} ten slices of bread with cheese? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you eat ten slices of bread with cheese? <br /> <br /> The witness responds:',
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
    question: 'What did you see flying in the air? <br /> <br /> The witness responds:',
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
    id:8,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you see ten balloons flying in the air? <br /> <br /> The witness responds:',
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
    question: 'What did you findin the office? <br /> <br /> The witness responds:',
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
    id:9,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you find ten corpses in the office? <br /> <br /> The witness responds:',
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
    question: 'What did you do while escaping the fire? <br /> <br /> The witness responds:',
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
    id:10,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you help children to escape the fire? <br /> <br /> The witness responds:',
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
    id:11,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you hear women shouting at this event? <br /> <br /> The witness responds:',
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
    id:12,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you hear animals howling in the forest? <br /> <br /> The witness responds:',
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
    id:13,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you kiss strangers at the party? <br /> <br /> The witness responds:',
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
    id:14,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you take pictures of the assault? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you use {at most / less than} ten different types of drugs that night? <br /> <br /> The witness responds:',
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
    question: 'How many different types of drugs did you use that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you use ten different types of drugs that night? <br /> <br /> The witness responds:',
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
    question: 'What did you do up a mountain? <br /> <br /> The witness responds:',
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
    id:16,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you hike ten kilometers up a mountain? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you see {at most / less than} ten lollipops in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you see in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many lollipops did you see in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you see ten lollipops in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:18,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you feed {at most / less than} ten times an animal in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:18,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you feed in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    type: 'filler',
    id:18,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many times did you feed an animal in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
  {
    id:18,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you feed ten times an animal in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //0
];

const filler_answer = [
  {
    type: 'filler',
    id:7,
    condition: 'SUP',
    sentence: 'I | ate | at | most | ten | slices | of | bread | with | cheese.',
    option1: 'next'
  }, //
  {
    id:7,
    condition: 'COMP',
    sentence: 'I | ate | less | than | ten | slices | of | bread | with | cheese.',
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
    sentence: 'I | heard | at | most | ten | women | shouting | at | this | event. ',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:11,
    condition: 'COMP',
    sentence: 'I | heard | less| than | ten | women | shouting | at | this | event.',
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
    sentence: 'I | used | at | most | ten | different | types | of | drugs | that | night.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:15,
    condition: 'COMP',
    sentence: ' I | used | less | than | ten | different | types | of | drugs | that | night.',
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
  {
    type: 'filler',
    id:17,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | lollipops | in | the | drawer.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:17,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | lollipops | in | the | drawer.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:18,
    condition: 'SUP',
    sentence: 'I | fed | at | most | ten | times | an | animals | in | the | zoo.',
    option1: 'next'
  }, //
  {
    type: 'filler',
    id:18,
    condition: 'COMP',
    sentence: 'I | fed | less | than | times | an | animals | in | the | zoo.',
    option1: 'next'
  }, //
];

const filler_conclusion = [
  {
    type: 'filler',
    id:7,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many slices of bread they ate with cheese.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:8,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many balloons they saw flying in the air.  <br /> <br /> How justified is the judge in drawing that conclusion?',
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
    question: 'The witness doesn’t know exactly how many different types of drugs they used that night.  <br /> <br /> How justified is the judge in drawing that conclusion?',
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
  {
    type: 'filler',
    id:17,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness does know exactly how many lollipops they saw in the drawer.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
  {
    type: 'filler',
    id:18,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many animals they fed in the zoo.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //0
];

//unshuffled lists
///items
const raw_question = [
  question_text[0],
  question_text[1],
  question_text[2],
  question_text[0],
  question_text[1],
  question_text[2],
  //item1
  question_text[3],
  question_text[4],
  question_text[5],
  question_text[3],
  question_text[4],
  question_text[5],
  //item2
  question_text[6],
  question_text[7],
  question_text[8],
  question_text[6],
  question_text[7],
  question_text[8],
  //item3
  question_text[9],
  question_text[10],
  question_text[11],
  question_text[9],
  question_text[10],
  question_text[11],
  //item4
  question_text[12],
  question_text[13],
  question_text[14],
  question_text[12],
  question_text[13],
  question_text[14],
  //item5
  question_text[15],
  question_text[16],
  question_text[17],
  question_text[15],
  question_text[16],
  question_text[17],
  //item6
];

const raw_answer = [
  answer_text[0],
  answer_text[0],
  answer_text[0],
  answer_text[6],
  answer_text[6],
  answer_text[6],
  //item1
  answer_text[1],
  answer_text[1],
  answer_text[1],
  answer_text[7],
  answer_text[7],
  answer_text[7],
  //item2
  answer_text[2],
  answer_text[2],
  answer_text[2],
  answer_text[8],
  answer_text[8],
  answer_text[8],
  //item3
  answer_text[3],
  answer_text[3],
  answer_text[3],
  answer_text[9],
  answer_text[9],
  answer_text[9],
  //item4
  answer_text[4],
  answer_text[4],
  answer_text[4],
  answer_text[10],
  answer_text[10],
  answer_text[10],
  //item5
  answer_text[5],
  answer_text[5],
  answer_text[5],
  answer_text[11],
  answer_text[11],
  answer_text[11],
  //item6
];

const raw_conclusion = [
  conclusion_text[0],
  conclusion_text[0],
  conclusion_text[0],
  conclusion_text[0],
  conclusion_text[0],
  conclusion_text[0],
  //item1
  conclusion_text[1],
  conclusion_text[1],
  conclusion_text[1],
  conclusion_text[1],
  conclusion_text[1],
  conclusion_text[1],
  //item2
  conclusion_text[2],
  conclusion_text[2],
  conclusion_text[2],
  conclusion_text[2],
  conclusion_text[2],
  conclusion_text[2],
  //item3
  conclusion_text[3],
  conclusion_text[3],
  conclusion_text[3],
  conclusion_text[3],
  conclusion_text[3],
  conclusion_text[3],
  //item4
  conclusion_text[4],
  conclusion_text[4],
  conclusion_text[4],
  conclusion_text[4],
  conclusion_text[4],
  conclusion_text[4],
  //item5
  conclusion_text[5],
  conclusion_text[5],
  conclusion_text[5],
  conclusion_text[5],
  conclusion_text[5],
  conclusion_text[5],
  //item6
];
//fillers
const filler_raw_question = [
  filler_question[0],
  filler_question[1],
  filler_question[2],
  filler_question[3],
  filler_question[0],
  filler_question[1],
  filler_question[2],
  filler_question[3],
  //id7
  filler_question[4],
  filler_question[5],
  filler_question[6],
  filler_question[7],
  filler_question[4],
  filler_question[5],
  filler_question[6],
  filler_question[7],
  //id8
  filler_question[8],
  filler_question[9],
  filler_question[10],
  filler_question[11],
  filler_question[8],
  filler_question[9],
  filler_question[10],
  filler_question[11],
  //id9
  filler_question[12],
  filler_question[13],
  filler_question[14],
  filler_question[15],
  filler_question[12],
  filler_question[13],
  filler_question[14],
  filler_question[15],
  //id10
  filler_question[16],
  filler_question[17],
  filler_question[18],
  filler_question[19],
  filler_question[16],
  filler_question[17],
  filler_question[18],
  filler_question[19],
  //id11
  filler_question[20],
  filler_question[21],
  filler_question[22],
  filler_question[23],
  filler_question[24],
  filler_question[25],
  filler_question[26],
  filler_question[27],
  //id12
];

const filler_raw_answer = [
  filler_answer[0],
  filler_answer[0],
  filler_answer[0],
  filler_answer[0],
  filler_answer[1],
  filler_answer[1],
  filler_answer[1],
  filler_answer[1],
  //id7
  filler_answer[2],
  filler_answer[2],
  filler_answer[2],
  filler_answer[2],
  filler_answer[3],
  filler_answer[3],
  filler_answer[3],
  filler_answer[3],
  //id8
  filler_answer[4],
  filler_answer[4],
  filler_answer[4],
  filler_answer[4],
  filler_answer[5],
  filler_answer[5],
  filler_answer[5],
  filler_answer[5],
  //id9
  filler_answer[6],
  filler_answer[6],
  filler_answer[6],
  filler_answer[6],
  filler_answer[7],
  filler_answer[7],
  filler_answer[7],
  filler_answer[7],
  //id10
  filler_answer[8],
  filler_answer[8],
  filler_answer[8],
  filler_answer[8],
  filler_answer[9],
  filler_answer[9],
  filler_answer[9],
  filler_answer[9],
  //id11
  filler_answer[10],
  filler_answer[10],
  filler_answer[10],
  filler_answer[10],
  filler_answer[11],
  filler_answer[11],
  filler_answer[11],
  filler_answer[11],
  //id12
];

const filler_raw_conclusion = [
  filler_conclusion[0],
  filler_conclusion[0],
  filler_conclusion[0],
  filler_conclusion[0],
  filler_conclusion[0],
  filler_conclusion[0],
  filler_conclusion[0],
  filler_conclusion[0],
  //item1
  filler_conclusion[1],
  filler_conclusion[1],
  filler_conclusion[1],
  filler_conclusion[1],
  filler_conclusion[1],
  filler_conclusion[1],
  filler_conclusion[1],
  filler_conclusion[1],
  //item2
  filler_conclusion[2],
  filler_conclusion[2],
  filler_conclusion[2],
  filler_conclusion[2],
  filler_conclusion[2],
  filler_conclusion[2],
  filler_conclusion[2],
  filler_conclusion[2],
  //item3
  filler_conclusion[3],
  filler_conclusion[3],
  filler_conclusion[3],
  filler_conclusion[3],
  filler_conclusion[3],
  filler_conclusion[3],
  filler_conclusion[3],
  filler_conclusion[3],
  //item4
  filler_conclusion[4],
  filler_conclusion[4],
  filler_conclusion[4],
  filler_conclusion[4],
  filler_conclusion[4],
  filler_conclusion[4],
  filler_conclusion[4],
  filler_conclusion[4],
  //item5
  filler_conclusion[5],
  filler_conclusion[5],
  filler_conclusion[5],
  filler_conclusion[5],
  filler_conclusion[5],
  filler_conclusion[5],
  filler_conclusion[5],
  filler_conclusion[5],
  //item6
];
//6lists
const raw_question_us = _.chunk(raw_question, 6);
const raw_answer_us = _.chunk(raw_answer, 6);
const raw_conclusion_us = _.chunk(raw_conclusion, 6);

const raw_filler_question_us = _.chunk(filler_raw_question, 8);
const raw_filler_answer_us = _.chunk(filler_raw_answer, 8);
const raw_filler_conclusion_us = _.chunk(filler_raw_conclusion, 8);

// abwechselnd item und filler trials als blöcke (6 items, 12 fillers, ...)
const all_questions_raw = _.flatten(_.concat(raw_question_us[0], raw_filler_question_us[0],raw_question_us[1], raw_filler_question_us[1],raw_question_us[2], raw_filler_question_us[2],raw_question_us[3], raw_filler_question_us[3],raw_question_us[4], raw_filler_question_us[4],raw_question_us[5], raw_filler_question_us[5]));
const all_answers_raw = _.flatten(_.concat(raw_answer_us[0], raw_filler_answer_us[0],raw_answer_us[1], raw_filler_answer_us[1],raw_answer_us[2], raw_filler_answer_us[2],raw_answer_us[3], raw_filler_answer_us[3],raw_answer_us[4], raw_filler_answer_us[4],raw_answer_us[5], raw_filler_answer_us[5],));
const all_conclusions_raw = _.flatten(_.concat(raw_conclusion_us[0], raw_filler_conclusion_us[0],raw_conclusion_us[1], raw_filler_conclusion_us[1],raw_conclusion_us[2], raw_filler_conclusion_us[2],raw_conclusion_us[3], raw_filler_conclusion_us[3], raw_conclusion_us[4], raw_filler_conclusion_us[4],raw_conclusion_us[5], raw_filler_conclusion_us[5]));



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

//shuffle filler accrding to hard coded latin square design by copying latin square design of main trials and double the list entries
const filler_question_ordered = [
  filler_question[1],
  filler_question[5],
  filler_question[6],
  filler_question[11],
  filler_question[12],
  filler_question[16],
  filler_question[19],
  filler_question[5+18],
  filler_question[6+18],
  filler_question[11+18],
  filler_question[29],
  filler_question[16+18],
  //l1
  filler_question[0],
  filler_question[4],
  filler_question[6],
  filler_question[11],
  filler_question[13],
  filler_question[17],
  filler_question[18],
  filler_question[4+18],
  filler_question[6+18],
  filler_question[11+18],
  filler_question[13+18],
  filler_question[17+18],
  //l2
  filler_question[0],
  filler_question[5],
  filler_question[7],
  filler_question[9],
  filler_question[14],
  filler_question[16],
  filler_question[0+18],
  filler_question[5+18],
  filler_question[7+18],
  filler_question[9+18],
  filler_question[14+18],
  filler_question[16+18],
  //l3
  filler_question[2],
  filler_question[3],
  filler_question[7],
  filler_question[10],
  filler_question[14],
  filler_question[15],
  filler_question[2+18],
  filler_question[3+18],
  filler_question[7+18],
  filler_question[10+18],
  filler_question[14+18],
  filler_question[15+18],
  //l4
  filler_question[1],
  filler_question[3],
  filler_question[8],
  filler_question[10],
  filler_question[12],
  filler_question[17],
  filler_question[1+18],
  filler_question[3+18],
  filler_question[8+18],
  filler_question[10+18],
  filler_question[12+18],
  filler_question[17+18],
  //l5
  filler_question[2],
  filler_question[4],
  filler_question[8],
  filler_question[9],
  filler_question[13],
  filler_question[15],
  filler_question[2+18],
  filler_question[4+18],
  filler_question[8+18],
  filler_question[9+18],
  filler_question[13+18],
  filler_question[15+18],
  //l6
];

const filler_answers_ordered = [
  filler_answer[6],
  filler_answer[1],
  filler_answer[2],
  filler_answer[9],
  filler_answer[10],
  filler_answer[5+12],
  filler_answer[6+12],
  filler_answer[1+12],
  filler_answer[2+12],
  filler_answer[9+12],
  filler_answer[10+12],
  filler_answer[5+12],
  //l1
  filler_answer[0],
  filler_answer[7],
  filler_answer[8],
  filler_answer[2],
  filler_answer[4],
  filler_answer[11],
  filler_answer[0+12],
  filler_answer[7+12],
  filler_answer[8+12],
  filler_answer[2+12],
  filler_answer[4+12],
  filler_answer[11+12],
  //l2
  filler_answer[6],
  filler_answer[7],
  filler_answer[2],
  filler_answer[3],
  filler_answer[4],
  filler_answer[11],
  filler_answer[6+12],
  filler_answer[7+12],
  filler_answer[2+12],
  filler_answer[3+12],
  filler_answer[4+12],
  filler_answer[11+12],
  //l3
  filler_answer[0],
  filler_answer[1],
  filler_answer[8],
  filler_answer[3],
  filler_answer[10],
  filler_answer[11],
  filler_answer[0+12],
  filler_answer[1+12],
  filler_answer[8+12],
  filler_answer[3+12],
  filler_answer[10+12],
  filler_answer[11+12],
  //l4
  filler_answer[0],
  filler_answer[7],
  filler_answer[8],
  filler_answer[9],
  filler_answer[4],
  filler_answer[5],
  filler_answer[0+12],
  filler_answer[7+12],
  filler_answer[8+12],
  filler_answer[9+12],
  filler_answer[4+12],
  filler_answer[5+12],
  //l5
  filler_answer[6],
  filler_answer[1],
  filler_answer[2],
  filler_answer[9],
  filler_answer[10],
  filler_answer[5],
  filler_answer[6+12],
  filler_answer[1+12],
  filler_answer[2+12],
  filler_answer[9+12],
  filler_answer[10+12],
  filler_answer[5+12],
  //l6
];

const filler_conclusion_ordered = [
  filler_conclusion[0],
  filler_conclusion[1],
  filler_conclusion[2],
  filler_conclusion[3],
  filler_conclusion[4],
  filler_conclusion[5],
  filler_conclusion[0+6],
  filler_conclusion[1+6],
  filler_conclusion[2+6],
  filler_conclusion[3+6],
  filler_conclusion[4+6],
  filler_conclusion[5+6],
  //l1
  filler_conclusion[0],
  filler_conclusion[1],
  filler_conclusion[2],
  filler_conclusion[3],
  filler_conclusion[4],
  filler_conclusion[5],
  filler_conclusion[0+6],
  filler_conclusion[1+6],
  filler_conclusion[2+6],
  filler_conclusion[3+6],
  filler_conclusion[4+6],
  filler_conclusion[5+6],
  //l2
  filler_conclusion[0],
  filler_conclusion[1],
  filler_conclusion[2],
  filler_conclusion[3],
  filler_conclusion[4],
  filler_conclusion[5],
  filler_conclusion[0+6],
  filler_conclusion[1+6],
  filler_conclusion[2+6],
  filler_conclusion[3+6],
  filler_conclusion[4+6],
  filler_conclusion[5+6],
  //l3
  filler_conclusion[0],
  filler_conclusion[1],
  filler_conclusion[2],
  filler_conclusion[3],
  filler_conclusion[4],
  filler_conclusion[5],
  filler_conclusion[0+6],
  filler_conclusion[1+6],
  filler_conclusion[2+6],
  filler_conclusion[3+6],
  filler_conclusion[4+6],
  filler_conclusion[5+6],
  //l4
  filler_conclusion[0],
  filler_conclusion[1],
  filler_conclusion[2],
  filler_conclusion[3],
  filler_conclusion[4],
  filler_conclusion[5],
  filler_conclusion[0+6],
  filler_conclusion[1+6],
  filler_conclusion[2+6],
  filler_conclusion[3+6],
  filler_conclusion[4+6],
  filler_conclusion[5+6],
  //l5
  filler_conclusion[0],
  filler_conclusion[1],
  filler_conclusion[2],
  filler_conclusion[3],
  filler_conclusion[4],
  filler_conclusion[5],
  filler_conclusion[0+6],
  filler_conclusion[1+6],
  filler_conclusion[2+6],
  filler_conclusion[3+6],
  filler_conclusion[4+6],
  filler_conclusion[5+6],
  //l6
];

//chunk item trials into 6 lists
const question_lists = _.chunk(question_ordered, 6);
const answer_lists = _.chunk(answers_ordered, 6);
const conclusion_lists = _.chunk(conclusion_ordered, 6);

//chunk filler trials into 6 lists
const filler_question_lists = _.chunk(filler_question_ordered, 12);
const filler_answer_lists = _.chunk(filler_answers_ordered, 12);
const filler_conclusion_lists = _.chunk(filler_conclusion_ordered, 12);

// abwechselnd item und filler trials als blöcke (6 items, 12 fillers, ...)
const all_questions = _.flatten(_.concat(question_lists[0], filler_question_lists[0], question_lists[1], filler_question_lists[1], question_lists[2], filler_question_lists[2], question_lists[3], filler_question_lists[3], question_lists[4], filler_question_lists[4], question_lists[5], filler_question_lists[5]));
const all_answers = _.flatten(_.concat(answer_lists[0], filler_answer_lists[0], answer_lists[1], filler_answer_lists[1], answer_lists[2], filler_answer_lists[2], answer_lists[3], filler_answer_lists[3], answer_lists[4], filler_answer_lists[4], answer_lists[5], filler_answer_lists[5]));
const all_conclusions = _.flatten(_.concat(conclusion_lists[0], filler_conclusion_lists[0],conclusion_lists[1], filler_conclusion_lists[1],conclusion_lists[2], filler_conclusion_lists[2],conclusion_lists[3], filler_conclusion_lists[3],conclusion_lists[4], filler_conclusion_lists[4],conclusion_lists[5], filler_conclusion_lists[5]));
