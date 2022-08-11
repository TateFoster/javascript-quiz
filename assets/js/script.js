var buttonEl = document.querySelectorAll(".answer");
var job = document.querySelector("h3");
var correct = 0;
var question = document.querySelectorAll("#question");
var submitEl = document.querySelectorAll("div");
var userScoreEl = document.querySelectorAll("#user-score");
var userInitials = document.querySelector("#initials");
var scoresEl = document.querySelectorAll(".score");
var questionAll = [
  "Which of the following choices makes a variable into an object?",
  "Which shows the correct way of selecting a class in the related html document?",
  "What type of function allows you to itterate through an array?",
  "What type of Event Listener is used to start this quiz?",
  "What primitive data type does ! in front of a function change?",
  "What default action does the click event on a button have?",
  "JavaScript manipulates html through ______.",
  "JavaScript is mostly used in _______",
  "A method is a what attached to an object?",
];
var answersAll = {
  answersOne: [
    "var example = [ ]",
    "var example = { }",
    'var example = " "',
    "var example = ( )",
  ],
  answersTwo: [
    'document.querySelectorAll("#class")',
    'document.getElementByID("class")',
    'document.querySelectorAll(".class")',
    'document.querySelectorAll("class")',
  ],
  answersThree: ["if() {} else {}", "switch() {}", "function() {}", "for() {}"],
  answersFour: ["click", "mouseover", "keydown", "load"],
  answersFive: ["string", "boolean", "number", "symbol"],
  answersSix: ["none", "refreshes page", "creates alert", "calls function"],
  answersSeven: ["the DOM", "API's", "a method", "scope"],
  answersEight: [
    "web development",
    "game development",
    "databases",
    "system applications",
  ],
  answersNine: ["a function", "an object", "a variable", "an array"],
};
var timerEl = document.querySelectorAll("#timer");
var timerSeconds = 30;
var index = 0;
var score = ["0 : PH", "0 : PH", "0 : PH", "0 : PH", "0 : PH"];

var highScores = function () {
  score = JSON.parse(localStorage.getItem("newScore"));
  for (i = 0; i < score.length; i++) {
    scoresEl[i].textContent = score[i];
  }
};

highScores();

var answerQuestion = function (next) {
  question[0].textContent = questionAll[index];

  switch (questionAll[index]) {
    case questionAll[0]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersOne.length * Math.random());
        buttonEl[i].textContent = answersAll.answersOne[r];
        answersAll.answersOne.splice(r, 1);
      }

      break;

    case questionAll[1]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersTwo.length * Math.random());
        buttonEl[i].textContent = answersAll.answersTwo[r];
        answersAll.answersTwo.splice(r, 1);
      }
      break;

    case questionAll[2]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersThree.length * Math.random());
        buttonEl[i].textContent = answersAll.answersThree[r];
        answersAll.answersThree.splice(r, 1);
      }
      break;

    case questionAll[3]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersFour.length * Math.random());
        buttonEl[i].textContent = answersAll.answersFour[r];
        answersAll.answersFour.splice(r, 1);
      }
      break;

    case questionAll[4]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersFive.length * Math.random());
        buttonEl[i].textContent = answersAll.answersFive[r];
        answersAll.answersFive.splice(r, 1);
      }
      break;

    case questionAll[5]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersSix.length * Math.random());
        buttonEl[i].textContent = answersAll.answersSix[r];
        answersAll.answersSix.splice(r, 1);
      }
      break;

    case questionAll[6]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersSeven.length * Math.random());
        buttonEl[i].textContent = answersAll.answersSeven[r];
        answersAll.answersSeven.splice(r, 1);
      }
      break;

    case questionAll[7]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersEight.length * Math.random());
        buttonEl[i].textContent = answersAll.answersEight[r];
        answersAll.answersEight.splice(r, 1);
      }
      break;

    case questionAll[8]:
      for (i = 0; i < buttonEl.length; i++) {
        r = Math.floor(answersAll.answersNine.length * Math.random());
        buttonEl[i].textContent = answersAll.answersNine[r];
        answersAll.answersNine.splice(r, 1);
      }
      break;
  }

  if (index < questionAll.length) {
    index = index + next;
  } else {
    allDone();
  }
};

var allDone = function () {
  if (timerSeconds > 0) {
    setTime();
  }
  question[0].textContent =
    "That's all! You scored " + correct + " out of " + questionAll.length;
  job.textContent = "";

  for (i = 0; i < buttonEl.length; i++) {
    buttonEl[i].dataset.present = "hidden";
  }
  submitEl[0].dataset.present = "shown";
};

function setTime() {
  timerEl[0].textContent = timerSeconds + " seconds remaining.";
  var timerInterval = setInterval(function () {
    if (timerSeconds === 0 || index === questionAll.length) {
      clearInterval(timerInterval);

      if (timerSeconds === 0) {
        allDone();
        timerEl[0].textContent = "Time's up!";
      }
    } else {
      timerSeconds--;
      timerEl[0].textContent = timerSeconds + " seconds remaining.";
    }
  }, 1000);
}

for (i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.textContent.includes("Quiz")) {
      setTime();
    } else {
      if (
        event.target.textContent === "var example = { }" ||
        event.target.textContent === 'document.querySelectorAll(".class")' ||
        event.target.textContent === "for() {}" ||
        event.target.textContent === "click" ||
        event.target.textContent === "boolean" ||
        event.target.textContent === "refreshes page" ||
        event.target.textContent === "the DOM" ||
        event.target.textContent === "web development" ||
        event.target.textContent === "a function"
      ) {
        correct++;
        job.textContent = "That's Correct!";
        job.dataset.answer = "correct";
      } else {
        job.textContent = "Sorry that's wrong!";
        job.dataset.answer = "incorrect";
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
      }
    }
    answerQuestion(1);
  });
}

userScoreEl[0].addEventListener("submit", function (event) {
  adjustHighScores();

  score = score.sort(function (a, b) {
    return parseInt(b) - parseInt(a);
  });

  localStorage.setItem("newScore", JSON.stringify(score));

  highScores();
});

function adjustHighScores() {
  var newScore = correct + " : " + userInitials.value.trim();
  for (i = 4; i > -1; i--) {
    parseInt(score[i]);
    console.log(parseInt(score[i]));
    if (parseInt(newScore) > parseInt(score[i])) {
      score.splice([i], 1, newScore);

      return;
    }
  }
}
