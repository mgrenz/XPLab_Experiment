// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
// You can determine global (random) parameters here
// Declare your variables here


//Group allocation function
//Select item list depending on which group was allocated
const group = _.sample(["list1", "list2", "list3", "list4", "list5", "list6"]);

function grouping(group) {
  let list;
  if (group == "list1") {
    main_question= flat_question_1;
    main_answer= flat_answer_1;
    main_conclusion= flat_conclusion_1;
  } else if (group == "list2") {
    main_question= flat_question_2;
    main_answer= flat_answer_2;
    main_conclusion= flat_conclusion_2;
  } else if (group == "list3") {
    main_question= flat_question_3;
    main_answer= flat_answer_3;
    main_conclusion= flat_conclusion_3;
  } else if (group == "list4") {
    main_question= flat_question_4;
    main_answer= flat_answer_4;
    main_conclusion= flat_conclusion_4;
  } else if (group == "list5") {
    main_question= flat_question_5;
    main_answer= flat_answer_5;
    main_conclusion= flat_conclusion_5;
  } else {
    main_question= flat_question_6;
    main_answer= flat_answer_6;
    main_conclusion= flat_conclusion_6;
  }
  return main_question, main_answer, main_conclusion;
};



//Shuffle function for filler items:
// Generate random sequence of indices andcreate filler question, answer and
//conclusion list based on indice list

//randomly distributed indices
let shuffled_indices = _.shuffle(_.range(0, 72));
//create filler question list based on indices
function shuffle_filler_quest(shuffled_indices) {
  q_list = [];
  for (var i = 0; i < shuffled_indices.length; i++) {
    index = shuffled_indices[i];
    q_list = _.concat(q_list, filler_question_ordered[index])
  }
  return q_list;
};

//create filler answer list based on indices
function shuffle_filler_answ(shuffled_indices) {
  a_list = [];
  for (var i = 0; i < shuffled_indices.length; i++) {
    index = shuffled_indices[i];
    a_list = _.concat(a_list, filler_answers_ordered[index])
  }
  return a_list;
};

//create filler conclusion list based on indices
function shuffle_filler_conc(shuffled_indices) {
  c_list = [];
  for (var i = 0; i < shuffled_indices.length; i++) {
    index = shuffled_indices[i];
    c_list = _.concat(c_list, filler_conclusion_ordered[index])
  }
  return c_list;
};


/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
