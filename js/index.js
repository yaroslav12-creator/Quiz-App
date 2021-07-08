const startButton = document.getElementById('Start');
const nextButton = document.getElementById('Next');
const questionContainerElement = document.getElementById('question-container');

let shuffledQuestions, currentQuestionIndex;
let rightAnswers = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    ++currentQuestionIndex;
    setNextQuestion();
});

function startGame() { 
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)    
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide'); 
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questions) {
    questionElement.innerText = questions.question;
    questions.answers.forEach(answer => {
        const button = document.createElement('button');

        button.innerText = answer.text;
        button.classList.add('btn');

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else { 
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question: 'How many time zones are there in Russia?',
        answers: [
            { text: '11', correct: true},
            { text: '12', correct: false},
            { text: '10', correct: false},
            { text: '15', correct: false},
        ]
    },
    {
        question: 'How many stripes are there on the US flag? ',
        answers: [
            { text: '10', correct: false},
            { text: '13', correct: true},
            { text: '12', correct: false},
            { text: '6', correct: false},
        ]
    },  
    {
        question: 'How many days does it take for the Earth to orbit the Sun? ',
        answers: [
            { text: '366', correct: false},
            { text: '365', correct: true},
            { text: '333', correct: false},
            { text: '369', correct: false},
        ]
    },
    {
        question: 'What country has the most islands in the world?',
        answers: [
            { text: 'Norway', correct: false},
            { text: 'Sweden', correct: true},
            { text: 'Finland', correct: false},
            { text: 'Iceland', correct: false},
        ]
    },
    {
        question: 'What’s the smallest country in the world?',
        answers: [
            { text: 'Croatia', correct: false},
            { text: 'Austria', correct: false},
            { text: 'Hungary', correct: false},
            { text: 'The Vatican', correct: true},
        ]
    },
    {
        question: 'What’s the capital of Canada?',
        answers: [
            { text: '3', correct: false},
            { text: 'Pinehouse', correct: false},
            { text: 'Ottawa', correct: true},
            { text: 'Hungary', correct: false},
        ]
    },
]






























