const startButton = document.getElementById('start-btn')
const quizContainerElement = document.getElementById('quiz-container')
const questionElement = document.getElementById('quiz-questions')
const answerButtonElement = document.getElementById('answer-buttons')
const scoreEl = document.getElementById('Score')

const timeStart = 1
let time = timeStart * 60
const timerEl = document.getElementById('Timer')
startTime = setInterval(Countdown, 1000)

let randomQues, currentQues



startButton.addEventListener('click', startQuiz)
answerButtonElement.addEventListener('click', () => { 
    currentQues++
    scoreCount()
    nextPage()
})



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
if (randomQues.length > currentQues + 1) {
    nextPage()
} else {   endQuiz()   }

}



function endQuiz() {

   
    clearInterval(startTime)

startButton.classList.remove('hide')

quizContainerElement.classList.add('hide')


}





   function scoreCount() {
    let score = 0
    
  
    if ( questions.answers.correct == true ) {
      score++;
    } 
    answerButtonElement.addEventListener('click', scoreCount)
     
    }

   
    




function Countdown () {
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}: ${seconds}`; 
    time--;

    
}

    




  function reset() {

   while (answerButtonElement.firstChild ) {
    answerButtonElement.removeChild
   (answerButtonElement.firstChild)
    }
}



const questions = [

    {
       question: 'In the Doms event object, what does its target property refer to ?',
       answers: [
        { text: 'It refers to the HTML element that was interacted with to dispatch the event', correct: true},
        { text: 'It refers to the HTML element we want to affect as a result of our dispatched event', correct:false},
        { text: 'It refers to the class element we want to affect as a result of our dispatched event', correct:false},
        { text: 'It refers to the DOM object', correct:false}
    ]

    },
    {
       question: 'What does the browser event submit allow us to do?',
       answers: [
        { text: 'Submit a from using a button', correct: true},
        { text: 'Submit a form using the enter key', correct:false},
        { text: 'Submit a form using both a button and the enter key', correct:true},
        { text: 'Submit a dog', correct:false}
    ]

    },
    {
       question: 'What are the six primitive data types in Javascript ?',
       answers: [
        { text: 'String, number, boolean, bigInt, symbol, undefined', correct: true},
        { text: 'sentence, symbol, boolean, undefined, number, bigInt', correct:false},
        { text: 'symbol, float, boolean, number, bigInt, undefined', correct:false},
        { text: 'boolean, falsy, number, bitInt, undefined, sentence', correct:false}
    ]

    },
    {
       question: 'What are the two types of scope java uses?',
       answers: [
        { text: 'abroad and local', correct:false},
        { text: 'surrounding and inner', correct:false},
        { text: 'outside and inside', correct:false},
        { text: 'global and local', correct:true}
    ]

    },
    {
       question: 'Inside the HTML document where do you place your javascript code?',
       answers: [
        { text: 'Inside the head element', correct:false},
        { text: 'Inside the script element ', correct:true},
        { text: 'Inside the link element', correct:false},
        { text: 'Inside the footer', correct:false}
    ]

    },


]