// In this file you can specify the trial data for your experiment


// item information
const question_text = [
  //SUP answer condition
    {
      type: 'main',
      id:1,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you find at most ten of the coins in the wallet?',
      option1: 'Next',
    }, //0
    {
      type: 'main',
      id:1,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'WHAT',
      question: 'What did you find in the wallet?',
      option1: 'Next',
    }, //1
    {
      type: 'main',
      id:1,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the coins did you find in the wallet?',
      option1: 'Next',
    }, //2
    {
      type: 'main',
      id:2,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you find at most ten of the pills in the bag?',
      option1: 'Next',
    }, //3
    {
      type: 'main',
      id:2,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'WHAT',
      question: 'What did you find in the bag?',
      option1: 'Next',
    }, //4
    {
      type: 'main',
      id:2,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the pills did you find in the bag?',
      option1: 'Next',
    }, //5
    {
      type: 'main',
      id:3,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you hear at most ten of the shots coming from the school shooting?',
      option1: 'Next',
    }, //6
    {
      type: 'main',
      id:3,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'WHAT',
      question: 'What did you hear coming from the school shooting?',
      option1: 'Next',
    }, //7
    {
      type: 'main',
      id:3,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the shots did you hear coming from the school shooting?',
      option1: 'Next',
    }, //8
    {
      type: 'main',
      id:4,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you see at most ten of the robbers in front of the bank?',
      option1: 'Next',
    }, //9
    {
      type: 'main',
      id:4,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'WHAT',
      question: 'What did you see in front of the bank?',
      option1: 'Next',
    }, //10
    {
      type: 'main',
      id:4,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the robbers did you see in front of the bank?',
      option1: 'Next',
    }, //11
    {
      type: 'main',
      id:5,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you see at most ten of the bills in the purse?',
      option1: 'Next',
    }, //12
    {
      type: 'main',
      id:5,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'WHAT',
      question: 'What did you see in the purse?',
      option1: 'Next',
    }, //13
    {
      type: 'main',
      id:5,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the bills did you see in the purse?',
      option1: 'Next',
    }, //14
    {
      type: 'main',
      id:6,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you find at most ten of the shot glasses on the kitchen counter?',
      option1: 'Next',
    }, //15
    {
      type: 'main',
      id:6,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'WHAT',
      question: 'What did you see on the kitchen counter?',
      option1: 'Next',
    }, //16
    {
      type: 'main',
      id:6,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the shot glasses did you see on the kitchen counter?',
      option1: 'Next',
    }, //17
    //COMP answer condition
    {
      type: 'main',
      id:1,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you find less than ten of the coins in the wallet?',
      option1: 'Next',
    }, //18
    {
      type: 'main',
      id:2,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: ' Did you find less than ten of the pills in the bag?',
      option1: 'Next',
    }, //19
    {
      type: 'main',
      id:3,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you hear less than ten of the shots coming from the school shooting?',
      option1: 'Next',
    }, //20
    {
      type: 'main',
      id:4,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you see less than ten of the robbers in front of the bank?',
      option1: 'Next',
    }, //21
    {
      type: 'main',
      id:5,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you see less than ten of the bills in the purse?',
      option1: 'Next',
    }, //22
    {
      type: 'main',
      id:6,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'POLAR',
      question: 'Did you find less than ten of the shot glasses on the kitchen counter?',
      option1: 'Next',
    }, //23
    // item 6; Howmany: 'find'
    {
      type: 'main',
      id:6,
      QUD: ['The judge asks:', 'The witness responds:'],
      condition: 'HOWMANY',
      question: 'How many of the shot glasses did you find on the kitchen counter?',
      option1: 'Next',
    }, //24

];
const answer_text = [
  //item 6: 'find'
    {
      type: 'main',
      id: 1,
      condition: 'COMP',
      sentence: 'I | found | less | than | ten | of | the | coins | in | the | wallet.',
      option1: 'next'
    }, //0
    {
      type: 'main',
      id: 2,
      condition: 'COMP',
      sentence: ' I | found | less | than | ten | of | the | pills | in  | the | bag.',
      option1: 'next'
    }, //1
    {
      type: 'main',
      id: 3,
      condition: 'COMP',
      sentence: ' I | heard | less | than | ten | of | the | shots | coming | from | the | school | shooting.',
      option1: 'next'
    }, //2
    {
      type: 'main',
      id: 4,
      condition: 'COMP',
      sentence: 'I | saw | less | than | ten | of | the | robbers | in | front | of | the | bank.',
      option1: 'next'
    }, //3
    {
      type: 'main',
      id: 5,
      condition: 'COMP',
      sentence: 'I | saw | less | than | ten | of | the | bills | in  | the | purse.',
      option1: 'next'
    }, //4
    {
      type: 'main',
      id: 6,
      condition: 'COMP',
      sentence: 'I | found | less | than | ten | of | the | shot | glasses | on | the | kitchen | counter.',
      option1: 'next'
    }, //5
    {
      type: 'main',
      id: 1,
      condition: 'SUP',
      sentence: 'I | found | at | most | ten | of | the | coins | in | the | wallet.',
      option1: 'next'
    }, //6
    {
      type: 'main',
      id:2,
      condition: 'SUP',
      sentence: 'I | found | at | most | ten | of | the | pills | in  | the | bag.',
      option1: 'next'
    }, //7
    {
      type: 'main',
      id:3,
      condition: 'SUP',
      sentence: 'I | heard | at | most | ten | of | the | shots | coming | from | the | school | shooting.',
      option1: 'next'
    }, //8
    {
      type: 'main',
      id:4,
      condition: 'SUP',
      sentence: 'I | saw | at | most | ten | of | the | robbers | in | front | of | the | bank.',
      option1: 'next'
    }, //9
    {
      type: 'main',
      id:5,
      condition: 'SUP',
      sentence: 'I | saw | at | most | ten | of | the | bills | in | the | purse.',
      option1: 'next'
    }, //10
    {
      type: 'main',
      id:6,
      condition: 'SUP',
      sentence: 'I | found | at | most | ten | of | the | shot | glasses | on | the | kitchen | counter. ',
      option1: 'next'
    }, //11
    //item 6: 'see'
    {
      type: 'main',
      id:6,
      condition: 'SUP',
      sentence: 'I | saw | at | most | ten | of | the | shot | glasses | on | the | kitchen | counter.',
      option1: 'next'
    }, //12
    {
      type: 'main',
      id:6,
      condition: 'COMP',
      sentence: 'I | saw | less | than | ten | of | the | shot | glasses | on | the | kitchen | counter.',
      option1: 'next'
    }, //13
];
const conclusion_text = [
  //item6: 'find'
    {
      type: 'main',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the coins she found in the wallet.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'main',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the pills she found in the bag.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //1
    {
      type: 'main',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the shots she heard coming from the school shooting.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //2
    {
      type: 'main',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the robbers she saw in front of the bank.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //3
    {
      type: 'main',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the bills she saw in the purse.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //4
    {
      type: 'main',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the shot glasses she found on the kitchen counter.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //5
    //item 6: 'see'
    {
      type: 'main',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness doesn’t know exactly how many of the shot glasses she saw on the kitchen counter.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //6
  ];

//filler information

const filler_question = [
  //Condition1: Polar-Sup
  {
    type: 'filler-oi',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you see at most ten of the bread slices on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-plau',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you see at most ten of the balloons flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you find at most ten corpses in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you find at most ten children while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-implau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you hear at most ten women shouting at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you certainly hear at most ten animals howling in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-ov',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you find at most ten of the lollipops in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you approximately find at most ten pictures of the assault in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-implau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you certainly see at most ten drug addicts at the party?',
    option1: 'Next',
  }, //8
  //condition2: polar-comp
  {
    type: 'filler-ov',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you approximately see less than ten of the bread slices on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-implau',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you only see less than ten of the balloons flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you certainly find less than ten corpses in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you certainly find less than ten children while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-implau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you hear less than ten women shouting at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-oi',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you hear less than ten animals howling in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you find nearly less than ten of the lollipops in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you certainly find less than ten pictures of the assault in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'POLAR',
    question: 'Did you see only less than ten drug addicts at the party?',
    option1: 'Next',
  }, //8
  //condition3: what-sup
  {
    type: 'filler-plau',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly see on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-ov',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly see flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-ov',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly find in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-plau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly find while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you approximately hear at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you probably hear in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-ov',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you probably find in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-ov',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly find in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly see at the party?',
    option1: 'Next',
  }, //8
  //condition4: what-comp
  {
    type: 'filler-implau',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly see on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-plau',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you probably see flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly find in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you find while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-implau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly hear at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you hear in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you certainly find in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you find in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'WHAT',
    question: 'What did you probably see at the party?',
    option1: 'Next',
  }, //8
  //condition5: howmany-sup
  {
    type: 'filler-ov',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many slices of the bread did you approximately see on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-oi',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many of the balloons did you approximately see flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many corpses did you certainly find in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many children did you probably find while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many women did you certainly hear shouting at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-oi',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many animals did you approximately see roaming in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many of the lollipops did you certainly find in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-ov',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many pictures of the assault did you probably find in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-implau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many drug addicts did you approximately see at the party?',
    option1: 'Next',
  }, //8
  //condition6: howmany-comp
  {
    type: 'filler-implau',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many slices of the bread did you see on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-implau',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'Approximately how many of the balloons did you see flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many corpses did you certainly find in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many children did you approximately find while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many women did you approximately hear shouting at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many animals did you see roaming in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many of the lollipops did you probably find in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many pictures of the assault did you find in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-implau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'HOWMANY',
    question: 'How many drug addicts did you probably see at the party?',
    option1: 'Next',
  }, //8
  //condition7: did-sup
  {
    type: 'filler-oi',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you only see ten bread slices on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-oi',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you certainly see ten balloons flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you find only ten corpses in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you find children while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you hear women shouting at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-plau',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you certainly see animals roaming in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-plau',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you only find ten lollipops in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-plau',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you see only ten pictures of the assault in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you only see ten drug addicts at the party?',
    option1: 'Next',
  }, //8
  //condition8: did-comp
  {
    type: 'filler-plau',
    id:1,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you approximately see ten bread slices on the kitchen counter?',
    option1: 'Next',
  }, //0
  {
    type: 'filler-plau',
    id:2,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you only see ten of the balloons flying in the air?',
    option1: 'Next',
  }, //1
  {
    type: 'filler-ov',
    id:3,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you find only ten corpses in the office?',
    option1: 'Next',
  }, //2
  {
    type: 'filler-plau',
    id:4,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you find children while trying to escape the fire?',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you hear women shouting at this event?',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you see animals roaming in the forest?',
    option1: 'Next',
  }, //5
  {
    type: 'filler-ov',
    id:7,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you only see ten of the lollipops in the drawer?',
    option1: 'Next',
  }, //6
  {
    type: 'filler-ov',
    id:8,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you only see ten pictures of the assault in the locker?',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    QUD: ['The judge asks:', 'The witness responds:'],
    condition: 'DID',
    question: 'Did you see only ten drug addicts at the party?',
    option1: 'Next',
  }, //8
];
const filler_answer = [
  //Condition1: Polar-Sup
  {
    type: 'filler-oi',
    id:1,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | of | the | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-plau',
    id:2,
    condition: 'SUP',
    sentence: 'I | saw | only | at | most | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-implau',
    id:5,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | animals | howling | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-ov',
    id:7,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | pictures | of | the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-implau',
    id:9,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //Condition2: Polar-comp
  {
    type: 'filler-ov',
    id:1,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | of | the | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-implau',
    id:2,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    condition: 'COMP',
    sentence: 'I  | only | found | less | than | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-implau',
    id:5,
    condition: 'COMP',
    sentence: 'I | only | heard | less| than | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-oi',
    id:6,
    condition: 'COMP',
    sentence: 'I | heard | less | than | ten | animals | howling | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    condition: 'COMP',
    sentence: 'I | certainly | found | less | than | ten | pictures | of the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    condition: 'COMP',
    sentence: 'I | only | saw | less | than | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //Condition3: What-Sup
  {
    type: 'filler-plau',
    id:1,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | of | the | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-ov',
    id:2,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-ov',
    id:3,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-plau',
    id:4,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | animals | howling | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-ov',
    id:7,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-ov',
    id:8,
    condition: 'SUP',
    sentence: 'I | only | found | at | most | ten | pictures | of | the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    condition: 'SUP',
    sentence: 'I | only | saw | at | most | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //Condition4: what-comp
  {
    type: 'filler-implau',
    id:1,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | of | the | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-plau',
    id:2,
    condition: 'COMP',
    sentence: 'I | only | saw | less | than | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-implau',
    id:5,
    condition: 'COMP',
    sentence: 'I | heard | less | than | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    condition: 'COMP',
    sentence: 'I | only | heard | less | than | ten | animals | howling | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    condition: 'COMP',
    sentence: 'I | only | found | less | than | ten | pictures | of the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    condition: 'COMP',
    sentence: 'I | only | saw | less | than | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //Condition5: howmany-sup
  {
    type: 'filler-ov',
    id:1,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | of | the | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-oi',
    id:2,
    condition: 'SUP',
    sentence: 'I | only | saw | at | most | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    condition: 'SUP',
    sentence: 'I | heard | at | most | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-oi',
    id:6,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | animals | roamin | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-ov',
    id:8,
    condition: 'SUP',
    sentence: 'I | probably | found | at | most | ten | pictures | of | the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //condition6: howmany-comp
  {
    type: 'filler-implau',
    id:1,
    condition: 'COMP',
    sentence: 'I | only | saw | less | than | ten | of | the | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-implau',
    id:2,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    condition: 'COMP',
    sentence: 'I | heard | less | than | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    condition: 'COMP',
    sentence: 'I | only | saw | less | than | ten | animals | roaming | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-oi',
    id:7,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-oi',
    id:8,
    condition: 'COMP',
    sentence: 'I | found | only | less | than | ten | pictures | of the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-implau',
    id:9,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //condition7: did-sup
  {
    type: 'filler-oi',
    id:1,
    condition: 'SUP',
    sentence: 'I | probably | saw | at | most | ten | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-oi',
    id:2,
    condition: 'SUP',
    sentence: 'I | probably | saw | at | most | ten | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-oi',
    id:3,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-implau',
    id:4,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    condition: 'SUP',
    sentence: 'I | certainly | heard | at | most | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-plau',
    id:6,
    condition: 'SUP',
    sentence: 'I | probably | saw | at | most | ten | animals | roaming | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-plau',
    id:7,
    condition: 'SUP',
    sentence: 'I | found | at | most | ten | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-plau',
    id:8,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | pictures | of | the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    condition: 'SUP',
    sentence: 'I | saw | at | most | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8
  //condition8: did-comp
  {
    type: 'filler-plau',
    id:1,
    condition: 'COMP',
    sentence: 'I | saw | probably | less | than | ten | bread | slices | on | the | kitchen | counter.',
    option1: 'Next',
  }, //0
  {
    type: 'filler-plau',
    id:2,
    condition: 'COMP',
    sentence: 'I | probably | saw | less | than | ten | of | the | balloons | flying | in | the | air.',
    option1: 'Next',
  }, //1
  {
    type: 'filler-ov',
    id:3,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | corpses | in | the | office.',
    option1: 'Next',
  }, //2
  {
    type: 'filler-plau',
    id:4,
    condition: 'COMP',
    sentence: 'I | found | less | than | ten | children | while | trying | to | escape | the | fire.',
    option1: 'Next',
  }, //3
  {
    type: 'filler-plau',
    id:5,
    condition: 'COMP',
    sentence: 'I | heard | less| than | ten | women | shouting | at | this | event.',
    option1: 'Next',
  }, //4
  {
    type: 'filler-ov',
    id:6,
    condition: 'COMP',
    sentence: 'I | approximately | saw | less | than | ten | animals | roaming | in | the | forest.',
    option1: 'Next',
  }, //5
  {
    type: 'filler-ov',
    id:7,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | of | the | lollipops | in | the | drawer.',
    option1: 'Next',
  }, //6
  {
    type: 'filler-ov',
    id:8,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | pictures | of the | assault | in | the | locker.',
    option1: 'Next',
  }, //7
  {
    type: 'filler-plau',
    id:9,
    condition: 'COMP',
    sentence: 'I | saw | less | than | ten | drug | addicts | at | the | party.',
    option1: 'Next',
  }, //8

];
const filler_conclusion = [
    //Condition1: Polar-Sup
    {
      type: 'filler-oi',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw ten of the bread slices on the kitchen counter.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of the balloons she saw in the air is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that they saw eleven corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children they found trying to escape the fire is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she heard nine animals howling in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she found ten of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven pictures of the assault in the locker',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably high. ',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition2: Polar-comp
    {
      type: 'filler-ov',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine of the bread slices on the kitchen counter.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the balloons she saw flying in the air is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children she found trying to escape the fire is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she heard eleven animals howling in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she found ten of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven pictures of the assault in the locker.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition3: what-Sup
    {
      type: 'filler-plau',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of bread slices is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw ten of the balloons flying in the air.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children she found trying to escape the fire is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she heard ten animals howling in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she found ten of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine pictures of the assault in the locker.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition4: what-comp
    {
      type: 'filler-implau',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the bread slices is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the balloons flying in the air is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw ten corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children she found trying to escape the fire is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she heard nine animals howling in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she found eleven of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven pictures of the assault in the locker.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of drug addicts she saw at the party is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition5: howmany-sup
    {
      type: 'filler-ov',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine slices of the bread on the kitchen counter.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven of the balloons flying in the air.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children she found trying to escape the fire is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven animals roaming in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she found eleven of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine pictures of the assault in the locker.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition6: howmany-comp
    {
      type: 'filler-implau',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the bread slices she saw on the kitchen counter is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the balloons she saw flying in the air is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children she found trying to escape the fire is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine animals roaming in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she found eleven of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven pictures of the assault in the locker.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition7: did-sup
    {
      type: 'filler-oi',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that it is possible that she saw eleven bread slices on the kitchen counter.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven balloons flying in the air.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-oi',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw eleven corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-implau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children they found trying to escape the fire is comparably high.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of animals she saw roaming in the forest is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of lollipops she found in the drawer is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of pictures she saw in the locker is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    //Condition8: did-comp
    {
      type: 'filler-plau',
      id:1,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the bread slices she saw on the kitchen counter is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:2,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks that the number of the balloons she saw flying in the air is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:3,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine corpses at the office.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:4,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of children she found trying to escape the fire is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:5,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of women she heard shouting at this event is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:6,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she heard nine animals roaming in the forest.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:7,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine of the lollipops in the drawer.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-ov',
      id:8,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness considers it possible that she saw nine pictures of the assault in the locker.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
    {
      type: 'filler-plau',
      id:9,
      QUD: ['Based on this, the judge concludes:', 'How justified is the judge in drawing that conclusion?'],
      question: 'The witness thinks the number of drug addicts she saw at the party is comparably low.',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    }, //0
];

//latin square design
//use double latin square design to create 6 item lists

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

//full lists: 6 conditions à 6 items
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
    question_text[18],
    question_text[19],
    question_text[23],
    question_text[21],
    question_text[22],
    question_text[20],
  ], //D
  [
    question_text[14],
    question_text[11],
    question_text[8],
    question_text[24],
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
    answer_text[12],
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
    answer_text[12],
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
    answer_text[13],
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
    conclusion_text[6],
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
    conclusion_text[6],
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
    conclusion_text[6],
    conclusion_text[4],
    conclusion_text[0],
    conclusion_text[2],
    conclusion_text[3],
  ],
];
//flat
const flat_question_1 = _.flatten(question_ordered_1);
const flat_answer_1 = _.flatten(answers_ordered_1);
const flat_conclusion_1 = _.flatten(conclusion_ordered_1);

//L2 items
const question_ordered_2 = [
  [
    question_text[20],
    question_text[22],
    question_text[21],
    question_text[19],
    question_text[18],
    question_text[23],
  ],//D
  [
    question_text[10],
    question_text[7],
    question_text[1],
    question_text[13],
    question_text[16],
    question_text[4],
  ],//C
  [
    question_text[0],
    question_text[3],
    question_text[15],
    question_text[9],
    question_text[12],
    question_text[6],
  ],//A
  [
    question_text[14],
    question_text[11],
    question_text[8],
    question_text[17],
    question_text[5],
    question_text[2],
  ],//E
  [
    question_text[15],
    question_text[12],
    question_text[9],
    question_text[18],
    question_text[6],
    question_text[3],
  ],//F
  [
    question_text[5],
    question_text[24],
    question_text[14],
    question_text[2],
    question_text[8],
    question_text[11],
  ], //B
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
    answer_text[12],
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
    answer_text[13],
    answer_text[0],
    answer_text[1],
    answer_text[2],
    answer_text[3],
    answer_text[4],
  ],
  [
    answer_text[7],
    answer_text[12],
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
    conclusion_text[6],
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
    conclusion_text[6],
    conclusion_text[0],
    conclusion_text[1],
    conclusion_text[2],
    conclusion_text[3],
    conclusion_text[4],
  ],
  [
    conclusion_text[1],
    conclusion_text[6],
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

//L3 items
const question_ordered_3 = [
  [
    question_text[6],
    question_text[12],
    question_text[9],
    question_text[3],
    question_text[0],
    question_text[15],
  ], //A
  [
    question_text[11],
    question_text[8],
    question_text[2],
    question_text[14],
    question_text[24],
    question_text[5],
  ], //B
  [
    question_text[1],
    question_text[4],
    question_text[16],
    question_text[10],
    question_text[13],
    question_text[7],
  ], //F
  [
    question_text[22],
    question_text[21],
    question_text[20],
    question_text[23],
    question_text[19],
    question_text[18],
  ], //D
  [
    question_text[17],
    question_text[2],
    question_text[5],
    question_text[8],
    question_text[11],
    question_text[14],
  ], //E
  [
    question_text[4],
    question_text[16],
    question_text[13],
    question_text[1],
    question_text[7],
    question_text[10],
  ], //C
];
const answers_ordered_3 = [
  [
    answer_text[8],
    answer_text[10],
    answer_text[9],
    answer_text[7],
    answer_text[6],
    answer_text[11],
  ],
  //A
  [
    answer_text[9],
    answer_text[8],
    answer_text[6],
    answer_text[10],
    answer_text[12],
    answer_text[7],
  ],
  //B
  [
    answer_text[0],
    answer_text[1],
    answer_text[13],
    answer_text[3],
    answer_text[4],
    answer_text[2],
  ],
  //F
  [
    answer_text[4],
    answer_text[3],
    answer_text[2],
    answer_text[5],
    answer_text[1],
    answer_text[0],
  ],
  //D
  [
    answer_text[5],
    answer_text[0],
    answer_text[1],
    answer_text[2],
    answer_text[3],
    answer_text[4],
  ],
  //E
  [
    answer_text[7],
    answer_text[12],
    answer_text[10],
    answer_text[6],
    answer_text[8],
    answer_text[9],
  ],
  //C
];
const conclusion_ordered_3 = [
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
    conclusion_text[6],
    conclusion_text[1],
  ],
  [
    conclusion_text[0],
    conclusion_text[1],
    conclusion_text[6],
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
    conclusion_text[6],
    conclusion_text[4],
    conclusion_text[0],
    conclusion_text[2],
    conclusion_text[3],
  ],
];
//flat
const flat_question_3 = _.flatten(question_ordered_3);
const flat_answer_3 = _.flatten(answers_ordered_3);
const flat_conclusion_3 = _.flatten(conclusion_ordered_3);

//L4 items
const question_ordered_4 = [
  [
    question_text[8],
    question_text[14],
    question_text[11],
    question_text[5],
    question_text[2],
    question_text[17],
  ], //E
  [
    question_text[21],
    question_text[23],
    question_text[18],
    question_text[22],
    question_text[23],
    question_text[19],
  ], //D
  [
    question_text[1],
    question_text[4],
    question_text[16],
    question_text[10],
    question_text[13],
    question_text[7],
  ], //C
  [
    question_text[13],
    question_text[10],
    question_text[7],
    question_text[16],
    question_text[4],
    question_text[1],
  ], //F
  [
    question_text[24],
    question_text[2],
    question_text[5],
    question_text[8],
    question_text[11],
    question_text[14],
  ], //B
  [
    question_text[3],
    question_text[15],
    question_text[12],
    question_text[0],
    question_text[6],
    question_text[9],
  ], //A
];
const answers_ordered_4 = [
  [
    answer_text[2],
    answer_text[4],
    answer_text[3],
    answer_text[1],
    answer_text[0],
    answer_text[5],
  ],
  //E
  [
    answer_text[3],
    answer_text[2],
    answer_text[0],
    answer_text[4],
    answer_text[5],
    answer_text[1],
  ],
  //D
  [
    answer_text[6],
    answer_text[7],
    answer_text[12],
    answer_text[9],
    answer_text[10],
    answer_text[8],
  ],
  //C
  [
    answer_text[4],
    answer_text[3],
    answer_text[2],
    answer_text[13],
    answer_text[1],
    answer_text[0],
  ],
  //F
  [
    answer_text[12],
    answer_text[6],
    answer_text[7],
    answer_text[8],
    answer_text[9],
    answer_text[10],
  ],
  //B
  [
    answer_text[7],
    answer_text[11],
    answer_text[10],
    answer_text[6],
    answer_text[8],
    answer_text[9],
  ],
  //A
];
const conclusion_ordered_4 = [
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
    conclusion_text[6],
    conclusion_text[3],
    conclusion_text[4],
    conclusion_text[2],
  ],
  [
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[6],
    conclusion_text[1],
    conclusion_text[0],
  ],
  [
    conclusion_text[6],
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
const flat_question_4 = _.flatten(question_ordered_4);
const flat_answer_4 = _.flatten(answers_ordered_4);
const flat_conclusion_4 = _.flatten(conclusion_ordered_4);

//L5 items
const question_ordered_5 = [
  [
    question_text[7],
    question_text[13],
    question_text[10],
    question_text[4],
    question_text[1],
    question_text[16],
  ], //F
  [
    question_text[9],
    question_text[6],
    question_text[0],
    question_text[12],
    question_text[15],
    question_text[3],
  ], //A
  [
    question_text[2],
    question_text[5],
    question_text[24],
    question_text[11],
    question_text[14],
    question_text[8],
  ], //B
  [
    question_text[13],
    question_text[10],
    question_text[7],
    question_text[16],
    question_text[4],
    question_text[1],
  ], //C
  [
    question_text[23],
    question_text[18],
    question_text[19],
    question_text[20],
    question_text[21],
    question_text[22],
  ], //D
  [
    question_text[5],
    question_text[17],
    question_text[14],
    question_text[2],
    question_text[8],
    question_text[11],
  ], //E
];
const answers_ordered_5 = [
  [
    answer_text[2],
    answer_text[4],
    answer_text[3],
    answer_text[1],
    answer_text[0],
    answer_text[13],
  ],
  //F
  [
    answer_text[9],
    answer_text[8],
    answer_text[6],
    answer_text[10],
    answer_text[11],
    answer_text[7],
  ],
  //A
  [
    answer_text[6],
    answer_text[7],
    answer_text[12],
    answer_text[9],
    answer_text[10],
    answer_text[8],
  ],
  //B
  [
    answer_text[10],
    answer_text[9],
    answer_text[8],
    answer_text[12],
    answer_text[7],
    answer_text[6],
  ],
  //C
  [
    answer_text[5],
    answer_text[0],
    answer_text[1],
    answer_text[2],
    answer_text[3],
    answer_text[4],
  ],
  //D
  [
    answer_text[1],
    answer_text[5],
    answer_text[4],
    answer_text[0],
    answer_text[2],
    answer_text[3],
  ],
  //E
];
const conclusion_ordered_5 = [
  [
    conclusion_text[2],
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[1],
    conclusion_text[0],
    conclusion_text[6],
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
    conclusion_text[6],
    conclusion_text[3],
    conclusion_text[4],
    conclusion_text[2],
  ],
  [
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[6],
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
const flat_question_5 = _.flatten(question_ordered_5);
const flat_answer_5 = _.flatten(answers_ordered_5);
const flat_conclusion_5 = _.flatten(conclusion_ordered_5);

//L6 items
const question_ordered_6 = [
  [
    question_text[8],
    question_text[14],
    question_text[11],
    question_text[5],
    question_text[2],
    question_text[24],
  ], //B
  [
    question_text[10],
    question_text[7],
    question_text[1],
    question_text[13],
    question_text[16],
    question_text[4],
  ], //F
  [
    question_text[2],
    question_text[5],
    question_text[17],
    question_text[11],
    question_text[14],
    question_text[8],
  ], //E
  [
    question_text[12],
    question_text[9],
    question_text[6],
    question_text[15],
    question_text[3],
    question_text[0],
  ], //A
  [
    question_text[16],
    question_text[1],
    question_text[4],
    question_text[7],
    question_text[10],
    question_text[13],
  ], //C
  [
    question_text[19],
    question_text[23],
    question_text[22],
    question_text[18],
    question_text[20],
    question_text[21],
  ], //D
];
const answers_ordered_6 = [
  [
    answer_text[8],
    answer_text[10],
    answer_text[9],
    answer_text[7],
    answer_text[6],
    answer_text[12],
  ],
  //B
  [
    answer_text[3],
    answer_text[2],
    answer_text[0],
    answer_text[4],
    answer_text[13],
    answer_text[1],
  ],
  //F
  [
    answer_text[0],
    answer_text[1],
    answer_text[5],
    answer_text[3],
    answer_text[4],
    answer_text[2],
  ],
  //E
  [
    answer_text[10],
    answer_text[9],
    answer_text[8],
    answer_text[11],
    answer_text[7],
    answer_text[6],
  ],
  //A
  [
    answer_text[12],
    answer_text[6],
    answer_text[7],
    answer_text[8],
    answer_text[9],
    answer_text[10],
  ],
  //C
  [
    answer_text[1],
    answer_text[5],
    answer_text[4],
    answer_text[0],
    answer_text[2],
    answer_text[3],
  ],
  //D
];
const conclusion_ordered_6 = [
  [
    conclusion_text[2],
    conclusion_text[4],
    conclusion_text[3],
    conclusion_text[1],
    conclusion_text[0],
    conclusion_text[6],
  ],
  [
    conclusion_text[3],
    conclusion_text[2],
    conclusion_text[0],
    conclusion_text[4],
    conclusion_text[6],
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
    conclusion_text[6],
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
const flat_question_6 = _.flatten(question_ordered_6);
const flat_answer_6 = _.flatten(answers_ordered_6);
const flat_conclusion_6 = _.flatten(conclusion_ordered_6);



//randomize fillers with custom function
const flat_filler_question = shuffle_filler_quest(shuffled_indices);
const flat_filler_answer = shuffle_filler_answ(shuffled_indices);
const flat_filler_conclusion = shuffle_filler_conc(shuffled_indices);


//select item list according to random group allocation
grouping(group)
