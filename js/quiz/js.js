const data = [
    {
        question: "What is the result of '2' + 2 in JavaScript?",
        choices: ['4', '22', 'NaN', 'Error'],
        correctAnswer: 1,

    }, 

    {
        question: 'Which method is used to add elements to the end of an array?',
        choices: ['push()', 'pop()', 'unshift()', 'shift()'],
        correctAnswer: 0,
    },

    {
        question: 'What does `NaN` stand for in JavaScript?',
        choices: [
        'No Any Number',
        'Negative Any Number',
        'Null and None',
        'Not a Number',
        ],
        correctAnswer: 3,
    },

];


let score = 0
let wrongAnswer = []
let currentQuestion = 0;
const questionContainerElement = document.getElementById('question-container')
const subBtnElement = document.getElementById('submit-btn');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

function loadQ(){
    const {question,choices} = data[currentQuestion]
    questionElement.textContent = question;
    
    choicesElement.innerHTML = ''
    choices.forEach((choice, index) => {
        const choiceBtn = document.createElement('button')
        choicesElement.appendChild(choiceBtn)
        choiceBtn.textContent = choice
        // choiceBtn.classList.add('coice')
        choiceBtn.addEventListener('click',function() {selectAns(index)})
    });
}

function selectAns(index){
    
    [...choicesElement.children].forEach((child)=>{
        child.classList.remove('selectedBtn')

    });
    choicesElement.children[index].classList.add('selectedBtn')
}

function nextQuestion(){
    const selectedBtn = choicesElement.querySelector('.selectedBtn')
    if(!selectedBtn) return

    if([...choicesElement.children].indexOf(selectedBtn) === data[currentQuestion].correctAnswer)
        score +=1;
    else{
        indexOfWrongAns =[...choicesElement.children].indexOf(selectedBtn);
        

        wrongAnswer.push({Question: data[currentQuestion].question , 
            YourAnswer :data[currentQuestion].choices[indexOfWrongAns],
            correctAnswer:data[currentQuestion].choices[data[currentQuestion].correctAnswer]
        })
    }
    currentQuestion += 1;

    if (currentQuestion >= data.length) showResult()
    else loadQ()


    
}

function showResult(){
    questionContainerElement.style.display = 'none'
    subBtnElement.style.display = 'none'
    temp=
    `
    <p class ='score'>You scored ${Math.round((score*100)/data.length)} % 
    ( ${score} out of ${data.length})
    </p>
    `
    if(wrongAnswer.length !=0){
        temp += '<h6>Wrong answer</h6>'
        temp += '<ul>'
        wrongAnswer.forEach ((wrong)=>{
            temp +=
                `<li>
                    <p>Question : ${wrong.Question}</p>
                    <p>Your answer : <span class='wrong-style'>${wrong.YourAnswer}</span></p>
                    <p>Correct Answer : <span class='correct-style'>${wrong.correctAnswer}</span></p>

                </li>`

        })
        temp +='</ul>'
        resultElement.innerHTML = temp;
    }

}

subBtnElement.addEventListener('click',nextQuestion)
loadQ()