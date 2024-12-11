function performCalculation() {
    const base = parseInt(document.getElementById("base").value);
    const firstNumber = document.getElementById("firstNumber").value;
    const operation = document.getElementById("operation").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const resultField = document.getElementById("result");

    try {
        // Parse the input values as floats
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Invalid number input.");
            return;
        }

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
                if (num2 === 0) {
                    alert("Division by zero is not allowed.");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                alert("Invalid operation.");
                return;
        }

        // Determine the maximum number of decimal places from the inputs
        const decimalPlaces1 = getDecimalPlaces(firstNumber);
        const decimalPlaces2 = getDecimalPlaces(secondNumber);
        const maxDecimalPlaces = Math.max(decimalPlaces1, decimalPlaces2);

        // Display the result with the appropriate number of decimal places
        resultField.value = result.toFixed(maxDecimalPlaces);
    } catch (error) {
        alert("Error in calculation.");
    }
}

function resetForm() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").value = "";
}

function copyResult() {
    const resultField = document.getElementById("result");
    resultField.select();
    document.execCommand("copy");
    alert("Result copied!");
}

// Helper function to get the number of decimal places in a number string
function getDecimalPlaces(numberStr) {
    if (numberStr.includes('.')) {
        return numberStr.split('.')[1].length;
    }
    return 0;
}
