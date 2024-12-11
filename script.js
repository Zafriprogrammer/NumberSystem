function openTab(event, tabName) {
    const tablinks = document.querySelectorAll('.tablink');
    const tabContents = document.querySelectorAll('.tab-content');

    tablinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function calculate() {
    const base = parseInt(document.getElementById('base').value);
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').value = result.toString(base);
}

function resetCalculator() {
    document.getElementById('base').value = '10';
    document.getElementById('first-number').value = '';
    document.getElementById('operation').value = '+';
    document.getElementById('second-number').value = '';
    document.getElementById('result').value = '';
}

function convert() {
    const fromBase = parseInt(document.getElementById('from-base').value);
    const toBase = parseInt(document.getElementById('to-base').value);
    const input = document.getElementById('input-number').value;

    // Split the number into integer and fractional parts
    const [integerPart, fractionalPart] = input.split('.');

    // Convert the integer part
    let decimalValue = parseInt(integerPart, fromBase) || 0;

    // Convert the fractional part
    if (fractionalPart) {
        let fractionalValue = 0;
        for (let i = 0; i < fractionalPart.length; i++) {
            fractionalValue += parseInt(fractionalPart[i], fromBase) / Math.pow(fromBase, i + 1);
        }
        decimalValue += fractionalValue;
    }

    // Convert the decimal value to the target base
    let result = Math.floor(decimalValue).toString(toBase);

    // Handle fractional part in the target base
    if (fractionalPart) {
        let fractionalDecimal = decimalValue % 1;
        let fractionalResult = '';
        for (let i = 0; i < 10 && fractionalDecimal !== 0; i++) {
            fractionalDecimal *= toBase;
            fractionalResult += Math.floor(fractionalDecimal).toString(toBase);
            fractionalDecimal %= 1;
        }
        result += '.' + fractionalResult;
    }

    document.getElementById('converted-result').value = result;
}

function resetConverter() {
    document.getElementById('input-number').value = '';
    document.getElementById('from-base').value = '10';
    document.getElementById('to-base').value = '16';
    document.getElementById('converted-result').value = '';
}

function swapBases() {
    const fromBase = document.getElementById('from-base');
    const toBase = document.getElementById('to-base');
    [fromBase.value, toBase.value] = [toBase.value, fromBase.value];
}
