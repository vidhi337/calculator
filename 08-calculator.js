let calculation = localStorage.getItem('calculation') || '';

displayEquation();

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    saveCalculation();
    displayEquation();

}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
    displayEquation();
}

function displayEquation() {
    document.querySelector('.js-input-equation').innerHTML = calculation;
}