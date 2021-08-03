// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs *///create list of trials for participant by randomly choosing 1 list
//abwechselnd nicht randomly!!!!!!!//create list of trials for participant by randomly choosing 1 list
//abwechselnd nicht randomly!!!!!!!

const trial_list = _.flatten(_.sampleSize(latin_square_lists, 3));


const trial_list = _.flatten(_.sampleSize(latin_square_lists, 3));//create list of trials for participant by randomly choosing 1 list
//abwechselnd nicht randomly!!!!!!!

const trial_list = _.flatten(_.sampleSize(latin_square_lists, 3));


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

/* Generators for custom view templates, answer container elements and enable response functions
 *
 *
 */

custom_self_paced_reading_stimulus = function(config, CT){
    const helpText = config.data[CT].help_text !== undefined ?
          config.data[CT].help_text : "Press the SPACE bar to reveal the words";
    $("main").html(`<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
                    <p class='magpie-help-text magpie-nodisplay'>${helpText}</p>
                    <p class='magpie-spr-sentence context-sentence'></p>
                    <br/>
                    <p class='magpie-spr-sentence trigger-sentence'></p>
                    <br/>
                    <p class='magpie-spr-sentence continuation-sentence'></p>
                </div>`);
}


custom_self_paced_reading_answer = function(config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
    },


custom_self_paced_reading_response = function(config, CT, magpie, answer_container_generator, startingTime) {

    const context = config.data[CT].context.trim().split(" | ");
    const trigger = config.data[CT].trigger.trim().split(" | ");
    const continuation = config.data[CT].continuation.trim().split(" | ");
    const sentenceList = context.concat(trigger, continuation).filter(item => item);
    // console.log(sentenceList);
    let spaceCounter = 0;

    let wordList;
    let context_wordList;
    let trigger_wordList;
    let continuation_wordList;

    let readingTimes = [];

    let underline = config.data[CT].underline === undefined ? "words" : config.data[CT].underline;
    let not_underline = underline === "none";
    let one_line = underline === "sentence";

    // shows the sentence word by word on SPACE press
    const handle_key_press = function(e) {

	// if space is pressed and we still have words left
	if (e.which === 32 && spaceCounter < sentenceList.length) {
	    // reveal the next word
	    wordList[spaceCounter].classList.remove("spr-word-hidden");

	    // for the first time, make the help text invisible
	    if (spaceCounter === 0) {
		$(".magpie-help-text").addClass("magpie-invisible");
            }

	    // if we are after the first word, hide the current word
            if (spaceCounter > 0) {
		wordList[spaceCounter - 1].classList.add("spr-word-hidden");
            }

	    // save the current time
            readingTimes.push(Date.now());

	    // increase the space counter
            spaceCounter++;

	    // otherwise if we are out of words
	}  else if (e.which === 32 && spaceCounter === sentenceList.length) {

	    readingTimes.push(Date.now());
	    spaceCounter ++

	    // delete all current sentences
            $(".magpie-spr-sentence").html("");

	    // add the question
            $(".magpie-view").append(answer_container_generator(config, CT));

	    // when the question is answered
            $("input[name=answer]").on("change", function() {

		// record the overall reaction time
		let RT = Date.now() - startingTime;

		// save the reaction times for each word
		reactionTimes = readingTimes
		    .reduce((result, current, idx) => {
			return result.concat(
			    readingTimes[idx + 1] - readingTimes[idx]
			);
		    }, [])
		    .filter((item) => isNaN(item) === false);

		// split the reaction times by sentence
		let context_reaction = reactionTimes.slice(0, context_wordList.length)
		let trigger_reaction =  reactionTimes.slice(context_wordList.length, context_wordList.length + trigger_wordList.length)
		let continuation_reaction =  reactionTimes.slice(context_wordList.length + trigger_wordList.length)
    // console.log("context RT list as STRING")
    // console.log(context_reaction.join("|"))
		// set which data will be saved
		let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: $("input[name=answer]:checked").val(),
                    // record whether given response matches expected response
                    correctness: $("input[name=answer]:checked").val() === config.data[CT].correct_answer,

		    // save all reaction times for double checking
        // convert lists to strings for data analysis in R -- otherwise the float lists are automatically collapsed by R into one int
		    all_reaction_times: reactionTimes.join("|"),
        context_reaction_times: context_reaction.join("|"),
		    trigger_reaction_times: trigger_reaction.join("|"),
		    continuation_reaction_times: continuation_reaction.join("|"),
        time_spent: RT
		};

		// push the trial data and goto the next view
		trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
		magpie.trial_data.push(trial_data);
		magpie.findNextView();

            });
	}
    };
    // shows the help text
    $(".magpie-help-text").removeClass("magpie-nodisplay");

    // creates the sentence
    context.map((word) => {
        $(".context-sentence").append(
	    `<span class='context-word spr-word spr-word-hidden'>${word}</span>`
        );
    });
    trigger.map((word) => {
        $(".trigger-sentence").append(
	    `<span class='trigger-word spr-word spr-word-hidden'>${word}</span>`
        );
    });
    continuation.map((word) => {
        $(".continuation-sentence").append(
	    `<span class='continuation-word spr-word spr-word-hidden'>${word}</span>`
        );
    });

    // creates an array of spr word elements
    context_wordList = $(".context-word").toArray();
    trigger_wordList = $(".trigger-word").toArray();
    continuation_wordList = $(".continuation-word").toArray();

    wordList = $(".spr-word").toArray()


    if (not_underline){
	$('.magpie-spr-sentence .spr-word').addClass('no-line');
    }
    if (one_line){
	$('.magpie-spr-sentence .spr-word').addClass('one-line');
    }

    // attaches an eventListener to the body for space
    $("body").on("keydown", handle_key_press);

}
