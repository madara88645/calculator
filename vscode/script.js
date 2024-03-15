let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}
