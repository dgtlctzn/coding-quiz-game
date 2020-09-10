$(document).ready(function () {
  var questionDiv = $("#question");
  //   console.log(questions);
  var currentQuestionIndex = 0;

  function displayQuestion() {
    // Show the first question.
    questionDiv.empty();

    var h1El = $("<h1>");
    h1El.text(questions[currentQuestionIndex].title);
    questionDiv.append(h1El);
    var ulEl = $("<ul>");

    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
      var liEl = $("<li>");
      var buttonEl = $("<button>");
      buttonEl.addClass("btn btn-secondary answer");
      buttonEl.text(questions[currentQuestionIndex].choices[i]);
      liEl.append(buttonEl);
      ulEl.append(liEl);
    }

    questionDiv.append(ulEl);
  }

  $("#start-game").on("click", function () {
    // Hide the welcome screen.
    $("#welcome-screen").attr("style", "display: none");
    // Start the timer
    displayQuestion();

    // alert("Start the game!");
  });

  $("#question").on("click", ".answer", function () {
    console.log($(this));
    console.log("Clicked an element with class answer.");
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      questionDiv.attr("style", "display: none");
      $("#save-screen").attr("style", "display: block");
    }
  });
});
