// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `This is a sample introduction view.
            <br />
            <br />
            The introduction view welcomes the participant and gives general information
            about the experiment. You are in the <strong>${coin}</strong> group.
            <br />
            <br />
            This is a minimal experiment with one forced choice view. It can serve as a starting point for programming your own experiment.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'go to trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


//QUD view : only reading
const question = magpieViews.view_generator(
  'forced_choice',
  {
    trials: 6,
    name: 'question',
    data: question_text,
  },
  {
    answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
    }
  }
);


//MOD view: self_paced_reading with button press and time measurement
const answer = magpieViews.view_generator(
  'self_paced_reading',
  {
    trials: 6,
    name: 'answer',
    data: answer_text,
  },
  //chang eanswer format from button press choice to one click answer
  {
    answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
    },
  }
);


//Conclusion with Likert scale rating with custom likert scale
const conclusion = magpieViews.view_generator(
  'rating_scale',
  {
    trials: 6,
    name: 'conclusion',
    data: conclusion_text,
  },
  {
    answer_container_generator: function(config, CT) {
          return `<p class='magpie-view-question'>${config.data[CT].question}</p>
                  <div class='magpie-view-answer-container'>
                      <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
                      <label for="1" class='magpie-response-rating'>1</label>
                      <input type="radio" name="answer" id="1" value="1" />
                      <label for="2" class='magpie-response-rating'>2</label>
                      <input type="radio" name="answer" id="2" value="2" />
                      <label for="3" class='magpie-response-rating'>3</label>
                      <input type="radio" name="answer" id="3" value="3" />
                      <label for="4" class='magpie-response-rating'>4</label>
                      <input type="radio" name="answer" id="4" value="4" />
                      <label for="5" class='magpie-response-rating'>5</label>
                      <input type="radio" name="answer" id="5" value="5" />
                      <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
                    </div>`;
    }
  }
);


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
