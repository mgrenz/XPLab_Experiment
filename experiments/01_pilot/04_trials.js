// In this file you can specify the trial data for your experiment



const conclusion_text = [
    {
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
