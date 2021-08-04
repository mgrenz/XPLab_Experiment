// In this file you can specify the trial data for your experiment
//useful for group : https://github.com/magpie-ea/magpie-indicative-conditionals/blob/master/experiments-1-2-3_combined/02_custom_functions.js


// item information
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
  }, //1
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you eat {at most / less than} ten slices of bread with cheese? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //2
  {
    type: 'filler',
    id:7,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you eat ten slices of bread with cheese? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //3
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you see {at most / less than} ten balloons flying in the air? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //4
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you see flying in the air? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //5
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many balloons did you see flying in the air? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //6
  {
    type: 'filler',
    id:8,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you see ten balloons flying in the air? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //7
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you find {at most / less than} ten corpses in the office? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //8
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you findin the office? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //9
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many corpses did you find in the office? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //10
  {
    type: 'filler',
    id:9,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you find ten corpses in the office? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //11
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: ' Did you help {at most / less than} ten children to escape the fire? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //12
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do while escaping the fire? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //13
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many children did you help to escape the fire? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //14
  {
    type: 'filler',
    id:10,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you help children to escape the fire? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //15
  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you hear {at most / less than} ten women shouting at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //16
  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you hear at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //17
  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many women did you hear shouting at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //18
  {
    type: 'filler',
    id:11,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you hear women shouting at this event? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //19
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you hear {at most / less than} ten animals howling in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //20
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you hear in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //21
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many animals did you hear howling in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //22
  {
    type: 'filler',
    id:12,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you hear animals howling in the forest? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //23
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you kiss {at most / less than} ten strangers at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //24
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //25
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many strangers did you kiss at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //26
  {
    type: 'filler',
    id:13,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you kiss strangers at the party? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //27
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you take {at most / less than} ten pictures of the assault? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //28
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do during the assault? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //29
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many pictures of the assault did you take? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //30
  {
    type: 'filler',
    id:14,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you take pictures of the assault? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //31
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you use {at most / less than} ten different types of drugs that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //32
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you use that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //33
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many different types of drugs did you use that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //34
  {
    type: 'filler',
    id:15,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you use ten different types of drugs that night? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //35
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you hike {at most / less than} ten kilometers up a mountain? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //36
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you do up a mountain? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //37
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many kilometers did you hike? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //38
  {
    type: 'filler',
    id:16,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you hike ten kilometers up a mountain? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //39
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you see {at most / less than} ten lollipops in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //40
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you see in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //41
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many lollipops did you see in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //42
  {
    type: 'filler',
    id:17,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you see ten lollipops in the drawer? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //43
  {
    type: 'filler',
    id:18,
    QUD: 'The judge asks:',
    condition: 'POLAR',
    question: 'Did you feed {at most / less than} ten times an animal in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //44
  {
    type: 'filler',
    id:18,
    QUD: 'The judge asks:',
    condition: 'WHAT',
    question: 'What did you feed in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //45
  {
    type: 'filler',
    id:18,
    QUD: 'The judge asks:',
    condition: 'HOWMANY',
    question: 'How many times did you feed an animal in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //46
  {
    id:18,
    QUD: 'The judge asks:',
    condition: 'DID',
    question: 'Did you feed ten times an animal in the zoo? <br /> <br /> The witness responds:',
    option1: 'Next',
  }, //47
];
const filler_answer = [
  {
    type: 'filler',
    id:7,
    condition: 'SUP',
    sentence: 'I | ate | at | most | ten | slices | of | bread | with | cheese.',
    option1: 'next'
  }, //0
  {
    id:7,
    condition: 'COMP',
    sentence: 'I | ate | less | than | ten | slices | of | bread | with | cheese.',
    option1: 'next'
  }, //1
  {
    type: 'filler',
    id:8,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | balloons | flying | in | the | air.',
    option1: 'next'
  }, //2
  {
    type: 'filler',
    id:8,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | balloons | flying | in | the | air.',
    option1: 'next'
  }, //3
  {
    type: 'filler',
    id:9,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | corpses | in | the | office.',
    option1: 'next'
  }, //4
  {
    type: 'filler',
    id:9,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | corpses | in | the | office.',
    option1: 'next'
  }, //5
  {
    type: 'filler',
    id:10,
    condition: 'SUP',
    sentence: 'I | helped | at | most | ten | children | to | escape | the | fire.',
    option1: 'next'
  }, //6
  {
    type: 'filler',
    id:10,
    condition: 'COMP',
    sentence: 'I | helped | less | than | ten | children | to | escape | the | fire.',
    option1: 'next'
  }, //7
  {
    type: 'filler',
    id:11,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | women | shouting | at | this | event. ',
    option1: 'next'
  }, //8
  {
    type: 'filler',
    id:11,
    condition: 'COMP',
    sentence: 'I | heard | less| than | ten | women | shouting | at | this | event.',
    option1: 'next'
  }, //9
  {
    type: 'filler',
    id:12,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | animals | howling | in | the | forest.',
    option1: 'next'
  }, //10
  {
    type: 'filler',
    id:12,
    condition: 'COMP',
    sentence: 'I | heard | less | than | ten | animals | howling | in | the | forest.',
    option1: 'next'
  }, //11
  {
    type: 'filler',
    id:13,
    condition: 'SUP',
    sentence: 'I | kissed | at | most | ten | strangers | at | the | party.',
    option1: 'next'
  }, //12
  {
    type: 'filler',
    id:13,
    condition: 'COMP',
    sentence: 'I | kissed | less | than | ten | strangers | at | the | party.',
    option1: 'next'
  }, //13
  {
    type: 'filler',
    id:14,
    condition: 'SUP',
    sentence: 'I | took | at | most | ten | pictures | of | the | assault.',
    option1: 'next'
  }, //14
  {
    type: 'filler',
    id:14,
    condition: 'COMP',
    sentence: 'I | took | less | than | ten | pictures | of the | assault. ',
    option1: 'next'
  }, //15
  {
    type: 'filler',
    id:15,
    condition: 'SUP',
    sentence: 'I | used | at | most | ten | different | types | of | drugs | that | night.',
    option1: 'next'
  }, //16
  {
    type: 'filler',
    id:15,
    condition: 'COMP',
    sentence: ' I | used | less | than | ten | different | types | of | drugs | that | night.',
    option1: 'next'
  }, //17
  {
    type: 'filler',
    id:16,
    condition: 'SUP',
    sentence: ' I | hiked | at | most | ten | kilometers | up | a | mountain.',
    option1: 'next'
  }, //18
  {
    type: 'filler',
    id:16,
    condition: 'COMP',
    sentence: 'I | hiked | less | than | ten | kilometers | up | a | mountain.',
    option1: 'next'
  }, //19
  {
    type: 'filler',
    id:17,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | lollipops | in | the | drawer.',
    option1: 'next'
  }, //20
  {
    type: 'filler',
    id:17,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | lollipops | in | the | drawer.',
    option1: 'next'
  }, //21
  {
    type: 'filler',
    id:18,
    condition: 'SUP',
    sentence: 'I | fed | at | most | ten | times | an | animals | in | the | zoo.',
    option1: 'next'
  }, //22
  {
    type: 'filler',
    id:18,
    condition: 'COMP',
    sentence: 'I | fed | less | than | times | an | animals | in | the | zoo.',
    option1: 'next'
  }, //23
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
  }, //1
  {
    type: 'filler',
    id:9,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many corpses they saw in the office.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //2
  {
    type: 'filler',
    id:10,

    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many children they helped to escape the fire.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //3
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
  }, //5
  {
    type: 'filler',
    id:13,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many strangers they kissed at the party.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //6
  {
    type: 'filler',
    id:14,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many pictures they took of the assault.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //7
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
  }, //9
  {
    type: 'filler',
    id:17,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness does know exactly how many lollipops they saw in the drawer.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //10
  {
    type: 'filler',
    id:18,
    QUD: 'Based on this, the judge concludes:',
    question: 'The witness doesn’t know exactly how many animals they fed in the zoo.  <br /> <br /> How justified is the judge in drawing that conclusion?',
    optionLeft: 'not justifiable at all',
    optionRight: 'strongly justifiable',
  }, //11
];

//###############################################
//unshuffled approach
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

//##################################################################

//latin square design approach
//use double latin square design to create 6 lists

// latin square:
// C E D B A F
// D C A E F B
// A B F D E C
// E D C F B A
// F A B C D E
// B F E A C D

//conditions | items
// A = sup, polar | 1
// B = sup, howmany | 2
// C = sup, what | 3
// D = comp, polar | 4
// E = comp, howmany | 5
// F = comp, what | 6

//listen ausgeschrieben: (6 cond. a 6 items pro liste)
//L1: C(3,5,4,2,1,6); E(4,3,1,5,6,2), D(1,2,6,4,5,3), B(1,2,6,4,5,3), A(6,1,2,3,4,5), F(2,6,5,1,3,4)
//L2: D(3,5,4,2,1,6), C(4,3,1,5,6,2) A(1,2,6,4,5,3) E(1,2,6,4,5,3) F(6,1,2,3,4,5) B(2,6,5,1,3,4)
//L3: A(3,5,4,2,1,6), B(4,3,1,5,6,2) F(1,2,6,4,5,3) D(1,2,6,4,5,3) E(6,1,2,3,4,5) C(2,6,5,1,3,4)
//L4: E(3,5,4,2,1,6), D(4,3,1,5,6,2) C(1,2,6,4,5,3) F(1,2,6,4,5,3) B(6,1,2,3,4,5) A(2,6,5,1,3,4)
//L5: F(3,5,4,2,1,6), A(4,3,1,5,6,2) B(1,2,6,4,5,3) C(1,2,6,4,5,3) D(6,1,2,3,4,5) E(2,6,5,1,3,4)
//L6: B(3,5,4,2,1,6), F(4,3,1,5,6,2) E(1,2,6,4,5,3) A(1,2,6,4,5,3) C(6,1,2,3,4,5) D(2,6,5,1,3,4)


//L1 items
const question_ordered_1 = [
  [
    question_text[7],
    question_text[13],
    question_text[10],
    question_text[4],
    question_text[1],
    question_text[16],
  ], //C
  [
    question_text[11],
    question_text[8],
    question_text[2],
    question_text[14],
    question_text[17],
    question_text[5],
  ], //E
  [
    question_text[0],
    question_text[3],
    question_text[15],
    question_text[9],
    question_text[12],
    question_text[6],
  ], //D
  [
    question_text[14],
    question_text[11],
    question_text[8],
    question_text[17],
    question_text[5],
    question_text[2],
  ], //B
  [
    question_text[15],
    question_text[0],
    question_text[3],
    question_text[6],
    question_text[9],
    question_text[12],
  ], //A
  [
    question_text[4],
    question_text[16],
    question_text[13],
    question_text[1],
    question_text[7],
    question_text[10],
  ], //F
];
const answers_ordered_1 = [
  [
    answer_text[8],
    answer_text[10],
    answer_text[9],
    answer_text[7],
    answer_text[6],
    answer_text[11],
  ],
  [
    answer_text[3],
    answer_text[2],
    answer_text[0],
    answer_text[4],
    answer_text[5],
    answer_text[1],
  ],
  [
    answer_text[0],
    answer_text[1],
    answer_text[5],
    answer_text[3],
    answer_text[4],
    answer_text[2],
  ],
  [
    answer_text[10],
    answer_text[9],
    answer_text[8],
    answer_text[11],
    answer_text[7],
    answer_text[6],
  ],
  [
    answer_text[11],
    answer_text[6],
    answer_text[7],
    answer_text[8],
    answer_text[9],
    answer_text[10],
  ],
  [
    answer_text[1],
    answer_text[5],
    answer_text[4],
    answer_text[0],
    answer_text[2],
    answer_text[3],
  ],
];
const conclusion_ordered_1 = [
  [
    conclusion_text[2],
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[1],
    conclusion_text[0],
    conclusion_text[5],
  ],
  [
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[0],
    conclusion_text[4],
    conclusion_text[5],
    conclusion_text[1],
  ],
  [
    conclusion_text[0],
    conclusion_text[1],
    conclusion_text[5],
    conclusion_text[3],
    conclusion_text[4],
    conclusion_text[2],
  ],
  [
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[5],
    conclusion_text[1],
    conclusion_text[0],
  ],
  [
    conclusion_text[5],
    conclusion_text[0],
    conclusion_text[1],
    conclusion_text[2],
    conclusion_text[3],
    conclusion_text[4],
  ],
  [
    conclusion_text[1],
    conclusion_text[5],
    conclusion_text[4],
    conclusion_text[0],
    conclusion_text[2],
    conclusion_text[3],
  ],
];
//flatten lists
let flat_question_1 = _.flatten(question_ordered_1);
const flat_answer_1 = _.flatten(answers_ordered_1);
const flat_conclusion_1 = _.flatten(conclusion_ordered_1);

//L2 items
const question_ordered_2 = [
  [
    question_text[6],
    question_text[12],
    question_text[9],
    question_text[3],
    question_text[0],
    question_text[15],
  ], //C
  [
    question_text[10],
    question_text[7],
    question_text[1],
    question_text[13],
    question_text[16],
    question_text[4],
  ], //E
  [
    question_text[0],
    question_text[3],
    question_text[15],
    question_text[9],
    question_text[12],
    question_text[6],
  ], //D
  [
    question_text[14],
    question_text[11],
    question_text[8],
    question_text[17],
    question_text[5],
    question_text[2],
  ], //B
  [
    question_text[15],
    question_text[12],
    question_text[9],
    question_text[18],
    question_text[6],
    question_text[3],
  ], //A
  [
    question_text[5],
    question_text[17],
    question_text[14],
    question_text[2],
    question_text[8],
    question_text[11],
  ], //F
];
const answers_ordered_2 = [
  [
    answer_text[2],
    answer_text[4],
    answer_text[3],
    answer_text[1],
    answer_text[0],
    answer_text[5],
  ],
  [
    answer_text[9],
    answer_text[8],
    answer_text[6],
    answer_text[10],
    answer_text[11],
    answer_text[7],
  ],
  [
    answer_text[6],
    answer_text[7],
    answer_text[11],
    answer_text[9],
    answer_text[10],
    answer_text[8],
  ],
  [
    answer_text[4],
    answer_text[3],
    answer_text[2],
    answer_text[5],
    answer_text[1],
    answer_text[0],
  ],
  [
    answer_text[5],
    answer_text[0],
    answer_text[1],
    answer_text[2],
    answer_text[3],
    answer_text[4],
  ],
  [
    answer_text[7],
    answer_text[11],
    answer_text[10],
    answer_text[6],
    answer_text[8],
    answer_text[9],
  ],
];
const conclusion_ordered_2 = [
  [
    conclusion_text[2],
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[1],
    conclusion_text[0],
    conclusion_text[5],
  ],
  [
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[0],
    conclusion_text[4],
    conclusion_text[5],
    conclusion_text[1],
  ],
  [
    conclusion_text[0],
    conclusion_text[1],
    conclusion_text[5],
    conclusion_text[3],
    conclusion_text[4],
    conclusion_text[2],
  ],
  [
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[5],
    conclusion_text[1],
    conclusion_text[0],
  ],
  [
    conclusion_text[5],
    conclusion_text[0],
    conclusion_text[1],
    conclusion_text[2],
    conclusion_text[3],
    conclusion_text[4],
  ],
  [
    conclusion_text[1],
    conclusion_text[5],
    conclusion_text[4],
    conclusion_text[0],
    conclusion_text[2],
    conclusion_text[3],
  ],
];
//flat
const flat_question_2 = _.flatten(question_ordered_2);
const flat_answer_2 = _.flatten(answers_ordered_2);
const flat_conclusion_2 = _.flatten(conclusion_ordered_2);

//fillers NOT RANDOMIZED (just chunked); 12 sublists
const filler_question_ordered = [
  [
    filler_question[0],
    filler_question[1],
    filler_question[2],
    filler_question[3],
    filler_question[0],
    filler_question[1],
    filler_question[2],
    filler_question[3],
  ],
  [
    filler_question[4],
    filler_question[5],
    filler_question[6],
    filler_question[7],
    filler_question[4],
    filler_question[5],
    filler_question[6],
    filler_question[7],
  ],
  [
    filler_question[8],
    filler_question[9],
    filler_question[10],
    filler_question[11],
    filler_question[8],
    filler_question[9],
    filler_question[10],
    filler_question[11],
  ],
  [
    filler_question[12],
    filler_question[13],
    filler_question[14],
    filler_question[15],
    filler_question[12],
    filler_question[13],
    filler_question[14],
    filler_question[15],
  ],
  [
    filler_question[16],
    filler_question[17],
    filler_question[18],
    filler_question[19],
    filler_question[16],
    filler_question[17],
    filler_question[18],
    filler_question[19],
  ],
  [
    filler_question[20],
    filler_question[21],
    filler_question[22],
    filler_question[23],
    filler_question[20],
    filler_question[21],
    filler_question[22],
    filler_question[23],
  ],
  [
    filler_question[24],
    filler_question[25],
    filler_question[26],
    filler_question[27],
    filler_question[24],
    filler_question[25],
    filler_question[26],
    filler_question[27],
  ],
  [
    filler_question[28],
    filler_question[29],
    filler_question[30],
    filler_question[31],
    filler_question[28],
    filler_question[29],
    filler_question[30],
    filler_question[31],
  ],
  [
    filler_question[32],
    filler_question[33],
    filler_question[34],
    filler_question[35],
    filler_question[32],
    filler_question[33],
    filler_question[34],
    filler_question[35],
  ],
  [
    filler_question[36],
    filler_question[37],
    filler_question[38],
    filler_question[39],
    filler_question[36],
    filler_question[37],
    filler_question[38],
    filler_question[39],
  ],
  [
    filler_question[40],
    filler_question[41],
    filler_question[42],
    filler_question[43],
    filler_question[40],
    filler_question[41],
    filler_question[42],
    filler_question[43],
  ],
  [
    filler_question[44],
    filler_question[45],
    filler_question[46],
    filler_question[47],
    filler_question[44],
    filler_question[45],
    filler_question[46],
    filler_question[47],
  ]
];
const filler_answers_ordered = [
  [
    filler_answer[0],
    filler_answer[0],
    filler_answer[0],
    filler_answer[0],
    filler_answer[1],
    filler_answer[1],
    filler_answer[1],
    filler_answer[1],
  ],
  [
    filler_answer[2],
    filler_answer[2],
    filler_answer[2],
    filler_answer[2],
    filler_answer[3],
    filler_answer[3],
    filler_answer[3],
    filler_answer[3],
  ],
  [
    filler_answer[4],
    filler_answer[4],
    filler_answer[4],
    filler_answer[4],
    filler_answer[5],
    filler_answer[5],
    filler_answer[5],
    filler_answer[5],

  ],
  [
    filler_answer[6],
    filler_answer[6],
    filler_answer[6],
    filler_answer[6],
    filler_answer[7],
    filler_answer[7],
    filler_answer[7],
    filler_answer[7],
  ],
  [
    filler_answer[8],
    filler_answer[8],
    filler_answer[8],
    filler_answer[8],
    filler_answer[9],
    filler_answer[9],
    filler_answer[9],
    filler_answer[9],
  ],
  [
    filler_answer[10],
    filler_answer[10],
    filler_answer[10],
    filler_answer[10],
    filler_answer[11],
    filler_answer[11],
    filler_answer[11],
    filler_answer[11],
  ],
  [
    filler_answer[12],
    filler_answer[12],
    filler_answer[12],
    filler_answer[12],
    filler_answer[13],
    filler_answer[13],
    filler_answer[13],
    filler_answer[13],
  ],
  [
    filler_answer[14],
    filler_answer[14],
    filler_answer[14],
    filler_answer[14],
    filler_answer[15],
    filler_answer[15],
    filler_answer[15],
    filler_answer[15],
  ],
  [
    filler_answer[16],
    filler_answer[16],
    filler_answer[16],
    filler_answer[16],
    filler_answer[17],
    filler_answer[17],
    filler_answer[17],
    filler_answer[17],
  ],
  [
    filler_answer[18],
    filler_answer[18],
    filler_answer[18],
    filler_answer[18],
    filler_answer[19],
    filler_answer[19],
    filler_answer[19],
    filler_answer[19],
  ],
  [
    filler_answer[20],
    filler_answer[20],
    filler_answer[20],
    filler_answer[20],
    filler_answer[21],
    filler_answer[21],
    filler_answer[21],
    filler_answer[21],

  ],
  [
    filler_answer[22],
    filler_answer[22],
    filler_answer[22],
    filler_answer[22],
    filler_answer[23],
    filler_answer[23],
    filler_answer[23],
    filler_answer[23],

  ]
];
const filler_conclusion_ordered = [
  [
    filler_conclusion[0],
    filler_conclusion[0],
    filler_conclusion[0],
    filler_conclusion[0],
    filler_conclusion[0],
    filler_conclusion[0],
    filler_conclusion[0],
    filler_conclusion[0],
  ],
  [
    filler_conclusion[1],
    filler_conclusion[1],
    filler_conclusion[1],
    filler_conclusion[1],
    filler_conclusion[1],
    filler_conclusion[1],
    filler_conclusion[1],
    filler_conclusion[1],
  ],
  [
    filler_conclusion[2],
    filler_conclusion[2],
    filler_conclusion[2],
    filler_conclusion[2],
    filler_conclusion[2],
    filler_conclusion[2],
    filler_conclusion[2],
    filler_conclusion[2],
  ],
  [
    filler_conclusion[3],
    filler_conclusion[3],
    filler_conclusion[3],
    filler_conclusion[3],
    filler_conclusion[3],
    filler_conclusion[3],
    filler_conclusion[3],
    filler_conclusion[3],
  ],
  [
    filler_conclusion[4],
    filler_conclusion[4],
    filler_conclusion[4],
    filler_conclusion[4],
    filler_conclusion[4],
    filler_conclusion[4],
    filler_conclusion[4],
    filler_conclusion[4],
  ],
  [
    filler_conclusion[5],
    filler_conclusion[5],
    filler_conclusion[5],
    filler_conclusion[5],
    filler_conclusion[5],
    filler_conclusion[5],
    filler_conclusion[5],
    filler_conclusion[5],
  ],
  [
    filler_conclusion[6],
    filler_conclusion[6],
    filler_conclusion[6],
    filler_conclusion[6],
    filler_conclusion[6],
    filler_conclusion[6],
    filler_conclusion[6],
    filler_conclusion[6],
  ],
  [
    filler_conclusion[7],
    filler_conclusion[7],
    filler_conclusion[7],
    filler_conclusion[7],
    filler_conclusion[7],
    filler_conclusion[7],
    filler_conclusion[7],
    filler_conclusion[7],
  ],
  [
    filler_conclusion[8],
    filler_conclusion[8],
    filler_conclusion[8],
    filler_conclusion[8],
    filler_conclusion[8],
    filler_conclusion[8],
    filler_conclusion[8],
    filler_conclusion[8],
  ],
  [
    filler_conclusion[9],
    filler_conclusion[9],
    filler_conclusion[9],
    filler_conclusion[9],
    filler_conclusion[9],
    filler_conclusion[9],
    filler_conclusion[9],
    filler_conclusion[9],
  ],
  [
    filler_conclusion[10],
    filler_conclusion[10],
    filler_conclusion[10],
    filler_conclusion[10],
    filler_conclusion[10],
    filler_conclusion[10],
    filler_conclusion[10],
    filler_conclusion[10],
  ],
  [
    filler_conclusion[11],
    filler_conclusion[11],
    filler_conclusion[11],
    filler_conclusion[11],
    filler_conclusion[11],
    filler_conclusion[11],
    filler_conclusion[11],
    filler_conclusion[11],
  ],
];
//flatten lists
const flat_filler_question = _.flatten(filler_question_ordered);
const flat_filler_answer = _.flatten(filler_answers_ordered);
const flat_filler_conclusion = _.flatten(filler_conclusion_ordered);

grouping(group)

// abwechselnd item und filler trials als blöcke (6 items, 12 fillers, ...)
/*const all_questions = _.flatten(_.concat(question_lists[0], filler_question_lists[0], question_lists[1], filler_question_lists[1], question_lists[2], filler_question_lists[2], question_lists[3], filler_question_lists[3], question_lists[4], filler_question_lists[4], question_lists[5], filler_question_lists[5]));
const all_answers = _.flatten(_.concat(answer_lists[0], filler_answer_lists[0], answer_lists[1], filler_answer_lists[1], answer_lists[2], filler_answer_lists[2], answer_lists[3], filler_answer_lists[3], answer_lists[4], filler_answer_lists[4], answer_lists[5], filler_answer_lists[5]));
const all_conclusions = _.flatten(_.concat(conclusion_lists[0], filler_conclusion_lists[0],conclusion_lists[1], filler_conclusion_lists[1],conclusion_lists[2], filler_conclusion_lists[2],conclusion_lists[3], filler_conclusion_lists[3],conclusion_lists[4], filler_conclusion_lists[4],conclusion_lists[5], filler_conclusion_lists[5]));
*/
