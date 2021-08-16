// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
          intro,
          instructions,
          magpieUtils.views.loop([magpieUtils.views.loop([question_view, answer_view, conclusion_view], 6), magpieUtils.views.loop([fill_question, fill_answer, fill_conclusion], 12)], 6), //18 = 1 item block + 1 filler block; normal: all_questions.length
          post_test,
          thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "277",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "mgrenz@uos.de",
            //prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                question_view.name,
                answer_view.name,
                conclusion_view.name,
                fill_question.name,
                fill_answer.name,
                fill_conclusion.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 100
        }
    });
});
