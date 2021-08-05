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
  text: `A warm welcome to this experiment and a heartfelt
        thank-you for participating.
            <br />
            <br />
            Taking part in this experiment is voluntary and
            you can quit at any moment without having to expect
            negative consequences.
            <br />
            <br />
            Your data will be stored anonymously and is collected
            for our final project in the course "Experimental Psychology Lab".
            The experiment will take approximately 20 minutes.
            <br />
            <br />
            Proceeding signifies that you read, understood and agree
            to this terms.`,
  buttonText: 'proceed to instructions'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `The setting of this experiment is a courtroom with a judge and
   a witness present.
           <br />
           <br />
           In the following you are presented with a sequence of three
           screens.
            <br />
            <br />
            The first screen displays a question the judge asks
            the witness, which you are asked to read at your own pace.
            <br />
            <br />
            The second screen will display the answer of the witness. You are
            again asked to read the answer but this time you can only read one
            word at a time. In order to reveal the next word, press SPACE.
            <br />
            <br />
            On the third screen, a conclusion of the judge will be displayed.
            We ask you to read the conclusion and indicate afterwards on a
            scale from 1 (not justifiable at all) to 5 (strongly justifiable) for how
            justifiable you preceive the judges conclusion.
            <br /r>
            <br /r>
            Please try to avoid breaks and minimize distractions in your immediate surrounding.`,
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

//item views
const question_view = magpieViews.view_generator(
  'forced_choice',
  {
    trials: 1,
    name: 'question_view',
    data: main_question,
  },
  {
    answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;},

      stimulus_container_generator: function (config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[0]}</p>
                    <p class='magpie-view-question'>"${config.data[CT].question}"</p>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[1]}</p>
                    </div>
                </div>`;}
  }
);

const answer_view = magpieViews.view_generator(
  'self_paced_reading',
  {
    trials: 1,
    name: 'answer_view',
    data: main_answer,
  },
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

const conclusion_view = magpieViews.view_generator(
  'rating_scale',
  {
    trials: 1,
    name: 'conclusion_view',
    data: main_conclusion,
  },
  {
    answer_container_generator: function(config, CT) {
          return `<div class='magpie-view-answer-container'>
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
                    </div>`;},

      stimulus_container_generator:  function (config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[0]}</p>
                    <p class='magpie-view-question'>"${config.data[CT].question}"</p>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[1]}</p>
                    </div>
                </div>`;}
  }
);


//filler views
const fill_question = magpieViews.view_generator(
  'forced_choice',
  {
    trials: 1,
    name: 'fill_question',
    data: flat_filler_question,
  },
  {
    answer_container_generator: function (config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                </div>`;
    },
    stimulus_container_generator: function (config, CT) {
      return `<div class='magpie-view'>
                  <h1 class='magpie-view-title'>${config.title}</h1>
                  <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[0]}</p>
                  <p class='magpie-view-question'>"${config.data[CT].question}"</p>
                  <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[1]}</p>
                  </div>
              </div>`;}

  }
);

const fill_answer = magpieViews.view_generator(
  'self_paced_reading',
  {
    trials: 1,
    name: 'fill_answer',
    data: flat_filler_answer,
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

const fill_conclusion = magpieViews.view_generator(
  'rating_scale',
  {
    trials: 1,
    name: 'fill_conclusion',
    data: flat_filler_conclusion,
  },
  {
    answer_container_generator: function(config, CT) {
          return `<div class='magpie-view-answer-container'>
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
    },
    stimulus_container_generator:  function (config, CT) {
      return `<div class='magpie-view'>
                  <h1 class='magpie-view-title'>${config.title}</h1>
                  <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[0]}</p>
                  <p class='magpie-view-question'>"${config.data[CT].question}"</p>
                  <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD[1]}</p>
                  </div>
              </div>`;}
  }
);


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
