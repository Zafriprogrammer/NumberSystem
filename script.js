function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLastChar() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function evaluateExpression() {
    try {
        const display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid expression");
    }
}

function convertBase() {
    const display = document.getElementById("display");
    const baseSelection = document.getElementById("baseSelection").value;
    const currentValue = display.value;
    
    // Check if display has a valid number to convert
    if (currentValue === "" || isNaN(parseInt(currentValue, 10))) {
        alert("Enter a valid number before converting.");
        return;
    }
    
    // Convert the input number to the desired base
    const numberInDecimal = parseInt(currentValue, 10);
    let convertedValue;
    
    switch (parseInt(baseSelection)) {
        case 2:
            convertedValue = numberInDecimal.toString(2);
            break;
        case 8:
            convertedValue = numberInDecimal.toString(8);
            break;
        case 10:
            convertedValue = numberInDecimal.toString(10);
            break;
        case 16:
            convertedValue = numberInDecimal.toString(16).toUpperCase();
            break;
        default:
            alert("Invalid base selection");
            return;
    }
    
    display.value = convertedValue;
}
