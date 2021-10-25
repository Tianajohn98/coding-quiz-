const startButton = document.getElementById('start-btn')
const quizContainerElement = document.getElementById('quiz-container')
const questionElement = document.getElementById('quiz-questions')
const answerButtonElement = document.getElementById('answer-buttons')

let randomQues, currentQues 



startButton.addEventListener('click', startQuiz)





function startQuiz() {
startButton.classList.add('hide')
randomQues = questions.sort(() => Math.random() - .5 )
currentQues = 0
quizContainerElement.classList.remove('hide')
nextPage()
} 





function nextPage() {
    reset()
showQuestion(randomQues[currentQues])
 
}

function showQuestion(questions){

questionElement.innerText = questions.question
questions.answers.forEach(answers => {
    const button = document.createElement('button')
    button.innerText = answers.text
    button.classList.add('btn')
    if (answers.correct ) {
        button.dataset.correct = answers.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
})

   

}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
if (selectedButton.correct = true) {
    nextPage()
}

    

}



  function reset() {

   while (answerButtonElement.firstChild ) {
    answerButtonElement.removeChild
   (answerButtonElement.firstChild)
    }
}



const questions = [

    {
       question: 'In the Doms event object, what does its target property refer to ?',''
       answers:[
        { text: 'It refers to the HTML element that was interacted with to dispatch the event', correct: true},
        { text: 'It refers to the HTML element we want to affect as a result of our dispatched event', correct:false},
        { text: 'It refers to the class element we want to affect as a result of our dispatched event', correct:false},
        { text: 'It refers to the DOM object', correct:false}
    ]


    }
] 

