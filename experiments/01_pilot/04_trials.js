// In this file you can specify the trial data for your experiment


//Vorlage: https://github.com/magpie-ea/magpie-speaker-knowledge


let raw_trial_information = [
  {
    ID: 1,
    question_info: {
      polar: 'The judge asks: "question1polar" <br /r> The witness responds:',
      howmany: 'The judge asks: "question1howmany" <br /r> The witness responds:',
      what: 'The judge asks: "question1what" <br /r> The witness responds:',
      option1: 'Next',
    },
    answer_info: {
      comp: 'This | is | an | example | textcomp',
      sup: 'This | is | an | example | textsup',
      option1: 'next'
    },
    conclusion_info: {
      question: 'Based on this, the judge concludes: <br /> <br /> "conclusion1"  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    },
  },
  {
    ID: 2,
    question_info: {
      polar: 'The judge asks: "question2polar" <br /r> The witness responds:',
      howmany: 'The judge asks: "question2howmany" <br /r> The witness responds:',
      what: 'The judge asks: "question2what" <br /r> The witness responds:',
      option1: 'Next',
    },
    answer_info: {
      comp: 'This | is | an | example | textcomp2',
      sup: 'This | is | an | example | textsup2',
      option1: 'next'
    },
    conclusion_info: {
      question: 'Based on this, the judge concludes: <br /> <br /> "conclusion2"  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    },
  },
  {
    ID: 3,
    question_info: {
      polar: 'The judge asks: "question3polar" <br /r> The witness responds:',
      howmany: 'The judge asks: "question3howmany" <br /r> The witness responds:',
      what: 'The judge asks: "question3what" <br /r> The witness responds:',
      option1: 'Next',
    },
    answer_info: {
      comp: 'This | is | an | example | textcomp3',
      sup: 'This | is | an | example | textsup3',
      option1: 'next'
    },
    conclusion_info: {
      question: 'Based on this, the judge concludes: <br /> <br /> "conclusion3"  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    },
  },
  {
    ID: 4,
    question_info: {
      polar: 'The judge asks: "question4polar" <br /r> The witness responds:',
      howmany: 'The judge asks: "question4howmany" <br /r> The witness responds:',
      what: 'The judge asks: "question4what" <br /r> The witness responds:',
      option1: 'Next',
    },
    answer_info: {
      comp: 'This | is | an | example | textcomp4',
      sup: 'This | is | an | example | textsup4',
      option1: 'next'
    },
    conclusion_info: {
      question: 'Based on this, the judge concludes: <br /> <br /> "conclusion4"  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    },
  },
  {
    ID: 5,
    question_info: {
      polar: 'The judge asks: "question5polar" <br /r> The witness responds:',
      howmany: 'The judge asks: "question5howmany" <br /r> The witness responds:',
      what: 'The judge asks: "question5what" <br /r> The witness responds:',
      option1: 'Next',
    },
    answer_info: {
      comp: 'This | is | an | example | textcomp5',
      sup: 'This | is | an | example | textsup5',
      option1: 'next'
    },
    conclusion_info: {
      question: 'Based on this, the judge concludes: <br /> <br /> "conclusion5"  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    },
  },
  {
    ID: 6,
    question_info: {
      polar: 'The judge asks: "question6polar" <br /r> The witness responds:',
      howmany: 'The judge asks: "question6howmany" <br /r> The witness responds:',
      what: 'The judge asks: "question6what" <br /r> The witness responds:',
      option1: 'Next',
    },
    answer_info: {
      comp: 'This | is | an | example | textcomp6',
      sup: 'This | is | an | example | textsup6',
      option1: 'next'
    },
    conclusion_info: {
      question: 'Based on this, the judge concludes: <br /> <br /> "conclusion6"  <br /> <br /> How justified is the judge in drawing that conclusion?',
      optionLeft: 'not justifiable at all',
      optionRight: 'strongly justifiable',
    },
  },
];

let raw_filler_trial_information = [
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 7,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 8,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 9,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 10,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 11,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 12,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 13,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 14,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 15,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 16,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 17,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 18,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 19,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 20,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 21,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 22,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 36,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 6,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 66,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },{
    type: "filler",
    ID: 1,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 2,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 3,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 4,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 5,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  },
  {
    type: "filler",
    ID: 72,
    question: 'fillerquestion',
    answer: 'filleranswer',
    conclusion: 'fillerconclusion',
  }
];

//Latin Square 1:
//6 conditions
//3 Question conditions: POLAR, HOWMANY, WHAT
//2 Answer conditions: SUP, COMP

//Latin Sqaure 2:
//6 items


// A = POLAR, COMP | 1
// B = HOWMANY, COMP | 2
// C = WHAT, COMP | 3
// D = POLAR, SUP | 4
// E = HOWMANY, SUP | 5
// F = WHAT, SUP | 6

// C E D B A F
// D C A E F B
// A B F D E C
// E D C F B A
// F A B C D E
// B F E A C D

const latin_square_lists = [
  [
    {
      question_condition: 'what',
      answer_condition: 'comp'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'sup'
    },
    {
      question_condition: 'polar',
      answer_condition: 'sup'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'comp'
    },
    {
      question_condition: 'polar',
      answer_condition: 'comp'
    },
    {
      question_condition: 'what',
      answer_condition: 'sup'
    }
  ], //L1
  [
    {
      question_condition: 'polar',
      answer_condition: 'sup'
    },
    {
      question_condition: 'what',
      answer_condition: 'comp'
    },
    {
      question_condition: 'polar',
      answer_condition: 'comp'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'sup'
    },
    {
      question_condition: 'what',
      answer_condition: 'sup'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'comp'
    }
  ], //L2
  [
    {
      question_condition: 'polar',
      answer_condition: 'comp'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'comp'
    },
    {
      question_condition: 'what',
      answer_condition: 'sup'
    },
    {
      question_condition: 'polar',
      answer_condition: 'sup'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'sup'
    },
    {
      question_condition: 'what',
      answer_condition: 'comp'
    }
  ], //L3
  [
    {
      question_condition: 'howmany',
      answer_condition: 'sup'
    },
    {
      question_condition: 'polar',
      answer_condition: 'sup'
    },
    {
      question_condition: 'what',
      answer_condition: 'comp'
    },
    {
      question_condition: 'what',
      answer_condition: 'sup'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'comp'
    },
    {
      question_condition: 'polar',
      answer_condition: 'comp'
    }
  ], //L4
  [
    {
      question_condition: 'what',
      answer_condition: 'sup'
    },
    {
      question_condition: 'polar',
      answer_condition: 'comp'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'comp'
    },
    {
      question_condition: 'what',
      answer_condition: 'comp'
    },
    {
      question_condition: 'polar',
      answer_condition: 'sup'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'sup'
    }
  ], //L5
  [
    {
      question_condition: 'howmany',
      answer_condition: 'comp'
    },
    {
      question_condition: 'what',
      answer_condition: 'SUP'
    },
    {
      question_condition: 'howmany',
      answer_condition: 'sup'
    },
    {
      question_condition: 'polar',
      answer_condition: 'comp'
    },
    {
      question_condition: 'what',
      answer_condition: 'comp'
    },
    {
      question_condition: 'polar',
      answer_condition: 'sup'
    }
  ] //L6
];

const latin_square_list_2 = [
  [
    {
      ID: 3
    },
    {
      ID: 5
    },
    {
      ID: 4
    },
    {
      ID: 2
    },
    {
      ID: 1
    },
    {
      ID: 6
    }
  ], //L1
  [
    {
      ID: 4
    },
    {
      ID: 3
    },
    {
      ID: 1
    },
    {
      ID: 5
    },
    {
      ID: 6
    },
    {
      ID: 2
    }
  ], //L2
  [
    {
      ID: 1
    },
    {
      ID: 2
    },
    {
      ID: 6
    },
    {
      ID: 4
    },
    {
      ID: 5
    },
    {
      ID: 3
    }
  ], //L3
  [
    {
      ID: 5
    },
    {
      ID: 4
    },
    {
      ID: 3
    },
    {
      ID: 6
    },
    {
      ID: 2
    },
    {
      ID: 1
    }
  ], //L4
  [
    {
      ID: 6
    },
    {
      ID: 1
    },
    {
      ID: 2
    },
    {
      ID: 3
    },
    {
      ID: 4
    },
    {
      ID: 5
    }
  ], //L5
  [
    {
      ID: 2
    },
    {
      ID: 6
    },
    {
      ID: 5
    },
    {
      ID: 1
    },
    {
      ID: 3
    },
    {
      ID: 4
    }
  ] //L6
];



//create list of trials for participant by randomly choosing 1 list
//abwechselnd nicht randomly!!!!!!!

//const trial_list = _.flatten(_.sampleSize(latin_square_lists, 3));

// shuffle latin square lists and flatten new rdered list
const trial_list = _.flatten(_.shuffle(latin_square_lists));

// fills in a single trial based on question and answer type
const create_trial = function (trial, args) {
  return {
    type: "main",
    question_type: args.question_condition, //qestion condition: POLAR/HOWMANY/WHAT
    answer_type: args.answer_condition, //answer condition: SUP/COMP
    question_text: trial.question_info[args.question_condition], //question text
    answer_text: trial.answer_info[args.answer_condition], //answer text
    conclusion_text: trial.conclusion_info[trial.question], //conclusion text
    option1: 'next', //option for answer and question screen
    optionLeft: 'not justifiable', //option left conclusio screen likert scale
    optionRight: 'justifiable', //option right conclusion screen likert scale
    ID: trial.ID
  };
};

//fills in filler trial
const create_filler_trial = function (trial) {
  return {
    ID: trial.ID,
    type: trial.type,
    question_text: trial.question,
    answer_text: trial.answer,
    conclusion_text: trial.conclusion,
    option1: 'next',
    optionLeft: 'not justifiable',
    optionRight: 'justifiable'
  };
};

// fill in all trial templates in list from latin square design with the corresponding text from the raw_trial_info and shuffle
const trial_info = trial_list.map(function (e) {
  trial = create_trial(raw_trial_information[_.indexOf(trial_list, e)], e);
  return trial;
});

console.log(trial);
console.log(trial_info);

// fill in all filler trial templates in the list with the corresponding text from the raw_trial_info and shuffle
const filler_trial_info = raw_filler_trial_information.map(function (e) {
  trial = create_filler_trial(
    raw_filler_trial_information[_.indexOf(raw_filler_trial_information, e)],
    e
  );
  return trial;
});

//use all fillers
const filler_trials = _.shuffle(filler_trial_info);

// console.log(filler_trial_info);
console.log(filler_trials);
// put main trials and filler trials together in one array
var main_trials = _.shuffle([...trial_info, ...filler_trials]); // .slice(0, 10);; filler_trial_info originally
// console.log("before");
console.log(main_trials);

//shuffle fillers
//slice it into 6 pieces (a 12 items)
//concatenate trial lists and filler lists abwechselnd
