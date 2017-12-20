$(function(){

  var directions = "<p>Welcome to the Video Game Trivia Directions. You have 3 minutes to choose the correct answers to all ten questions. Click the correct answer so that it is stays highlighted. Once the timer is done your score will be displayed.</p>";
  var about = '<p>This trivia will cover modern Video Games from the current century. Good Luck!</p>';
  var homeBtn = '<button type="button" class="btn btn-dark homeBtn">Home</button>';

  var questions = ['<div class="triviaQuestion">Who is the main protagonist in the Halo franchise?</div> <div class="answers wrong">The Arbiter</div> <div class="answers right">Master Chief</div> <div class="answers wrong">Marcus Fenix</div> <div class="answers wrong">Jeff Bridges</div>','<div class="triviaQuestion">Which of the following is not a faction found in the Elders Scrolls Series?</div> <div class="answers right">New Monarchy</div> <div class="answers wrong">The Thieves Guild</div> <div class="answers wrong">The Dark Brotherhood</div> <div class="answers wrong">The Mages Guild</div>','<div class="triviaQuestion">In the Fable series, which instrument are you able to play?</div> <div class="answers wrong">Ocarina</div> <div class="answers right">Lute</div> <div class="answers wrong">Flute</div> <div class="answers wrong">Harp</div>'];
  // var nextBtn = '<button type="button" class="btn btn-dark nextBtn">Next</button>';
  // var questionNumber = 1;

  var counter = 10;

  var score = {
    right: 0,
    wrong: 0,
  }

  var rightDiv = '<div>right: </div>';
  var wrongDiv = '<div>wrong: </div>';

  // button click to open directions
  $(".directions").on("click", function() {
    $(".content").html(directions + homeBtn);
  });

  // button click to open about
  $(".about").on("click", function() {
    $(".content").html(about + homeBtn);
  });

  // function to make timer
  function timer(){
    var timer = setInterval(timer, 1000);
    $(".counter").html('<div>Timer: </div>' + counter);
    counter--;
    if (counter < 0) {
      clearInterval(timer);
      $(".content").html(rightDiv + score.right + wrongDiv + score.wrong);
      // timer = setInterval(timer, 1000);
    };
  };

  // button click to open the first question
  $(".play").on("click", function() {
    $(".content").html(questions + '<div class="counter"></div>' + homeBtn);
    timer();
  });

  $(document).on("click", ".answers", function(){
    $(this).css("color", "blue");
  });

  $

  // function to go to next question
  // function nextQuestion(){
  //   questionNumber++;
  //   // if else for if questionNumber less than >10 go, else show end screen
  //   $(".content").html(questions[questionNumber] + '<div class="counter"></div>' + homeBtn);
  // };

  // // button click to open the next questions
  // $(document).on("click",".nextBtn", function() {
  //   nextQuestion();
  //   counter = 10;
  // });

  // button click to return to main menu
  $(document).on("click",".homeBtn", function() {
    window.location.reload();
  });
});
