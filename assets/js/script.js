var buttonEl = document.querySelectorAll(".answer")
var job = document.querySelector("h3")
var correct = 0;
var question = document.querySelectorAll("#question");
var questionAll= ["Which of the following choices makes a variable into an object?", "Which shows the correct way of selecting a class in the related html document?", "What type of function allows you to itterate through an array?", "What type of Event Listener is used to start this quiz?"]
var answersAll = {
    answersOne: ["var example = [ ]", "var example = { }", 'var example = " "', "var example = ( )" ],
    answersTwo: ['document.querySelectorAll("#class")', 'document.getElementByID("class")', 'document.querySelectorAll(".class")', 'document.querySelectorAll("class")' ],
    answersThree: ["if() {} else {}", "switch() {}", "function() {}", "for() {}"],
    answersFour: ["click", "mouseover", "keydown", "load"]
}

var timer = 30;
var index = 0;
console.log(answersAll.answersOne)


var answerQuestion = function (next) {
    console.log("click is heard");
    
    question[0].textContent = questionAll[index]

    
    switch (question[0].textContent) {

        case questionAll[0]:

            for (i = 0; i < buttonEl.length; i++) {
            r = Math.floor(answersAll.answersOne.length * Math.random())
            buttonEl[i].textContent = answersAll.answersOne[r]
            answersAll.answersOne.splice(r, 1)}

            break;
        
        case questionAll[1]:

            for (i = 0; i < buttonEl.length; i++) {
                r = Math.floor(answersAll.answersTwo.length * Math.random())
                buttonEl[i].textContent = answersAll.answersTwo[r]
                answersAll.answersTwo.splice(r, 1)}
            break;

        case questionAll[2]:

            for (i = 0; i < buttonEl.length; i++) {
                r = Math.floor(answersAll.answersThree.length * Math.random())
                buttonEl[i].textContent = answersAll.answersThree[r]
                answersAll.answersThree.splice(r, 1)}
            break;

            case questionAll[3]:

                for (i = 0; i < buttonEl.length; i++) {
                    r = Math.floor(answersAll.answersFour.length * Math.random())
                    buttonEl[i].textContent = answersAll.answersFour[r]
                    answersAll.answersFour.splice(r, 1)}
                break;
        }
    // console.log(randomAnswer)
    // }
    if (index < questionAll.length ) {
    index = index + next 
    } else {question[0].textContent = "That's all! You scored " + correct + " out of " + questionAll.length}
}







for (i = 0; i < buttonEl.length; i++) {
buttonEl[i].addEventListener("click", function(event) {
    if (event.target.textContent.includes("Quiz")){} else {
    if (event.target.textContent === "var example = { }" || event.target.textContent === 'document.querySelectorAll(".class")' || event.target.textContent === "for() {}" || event.target.textContent === "click") {
        correct++;
        job.textContent = "That's Correct!"
        job.dataset.answer = "correct";

        console.log(correct)
    } else {job.textContent = "Sorry that's wrong!";
     job.dataset.answer = "incorrect";}}
    answerQuestion(1);
})};
