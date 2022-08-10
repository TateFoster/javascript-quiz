var buttonEl = document.querySelectorAll(".answer")
var job = document.querySelector("h3")
var correct = 0;
var question = document.querySelectorAll("#question");
var questionAll= ["Which of the following choices makes a variable into an object?", "Which shows the correct way of selecting a class in the related html document?",]
var answersAll = {
    answersOne: ["var example = []", "var example = {}", 'var example = ""', "var example = ()" ],
    answersTwo: ['document.querySelectorAll("#class")', 'document.getElementByID("class")', 'document.querySelectorAll(".class")', 'document.querySelectorAll("class")' ]
}
var index = 0;
console.log(answersAll.answersOne)


var answerQuestion = function (next) {
    console.log("click is heard");
    
    question[0].textContent = questionAll[index]

    
    switch (questionAll[index]) {

        case questionAll[0]:

            for (i = 0; i < answersAll.answersOne.length; i++) {
            var randomAnswer = answersAll.answersOne[i]
            buttonEl[i].textContent = randomAnswer }

            break;
        
        case questionAll[1]:

            for (i = 0; i < answersAll.answersTwo.length; i++) {
                var randomAnswer = answersAll.answersTwo[i]
                buttonEl[i].textContent = randomAnswer }

        }
    // console.log(randomAnswer)
    // }
    if (index < questionAll.length) {
    index = index + next 
    } else {question[0].textContent = "That's all! You scored " + correct + " out of " + questionAll.length}
}







for (i = 0; i < buttonEl.length; i++) {
buttonEl[i].addEventListener("click", function(event) {
    if (event.target.textContent === "var example = {}" || event.target.textContent === 'document.querySelectorAll(".class")') {
        correct++;
        job[0].textContent = "Correct!"
        
        console.log(correct)
    }
    answerQuestion(1);
})};
