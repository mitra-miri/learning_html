
function calculate(){
    const firstNamber = parseFloat(document.getElementById('number1').value);
    const secondNumber = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const result = document.getElementById('result');

    switch(operator){
        case '+':
            result.textContent = firstNamber + secondNumber;
            breake;
        case '-':
            result.textContent = firstNamber - secondNumber;
            breake;
        case '*':
            result.textContent = firstNamber * secondNumber;
            breake;
        case '/':
            if(secondNumber === 0){
                result.textContent = "Division by zero is not aloowed";
                return;
            } 
            result.textContent = firstNamber / secondNumber;
            breake;   
        default: "invalid operator";
    }
result.textContent = "Division by zero is not aloowed";
}

document.getElementById('Calculate').addEventListener('click',calculate);