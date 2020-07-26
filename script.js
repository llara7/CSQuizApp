const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = question.sort(() => Math.random() - .5
  )
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
}
function setNextQuestion(){
  showQuestion(shuffledQuestions)
}
function selectAnswer(){
  

}
const question = [
  {

  }
]