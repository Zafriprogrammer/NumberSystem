function performCalculation() {
    const base = parseInt(document.getElementById("base").value);
    const firstNumber = document.getElementById("firstNumber").value;
    const operation = document.getElementById("operation").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const resultField = document.getElementById("result");

    try {
        // Parse the input values based on the selected base
        const num1 = parseInt(firstNumber, base);
        const num2 = parseInt(secondNumber, base);

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
                result = Math.floor(num1 / num2); // Floor division for integer result
                break;
            default:
                alert("Invalid operation.");
                return;
        }

        // Convert the result back to the selected base and display it
        resultField.value = result.toString(base).toUpperCase();
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

