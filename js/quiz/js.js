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

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

function q1(){
    const {question,choices} = data[0]
    questionElement.textContent = question;
    
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
q1()