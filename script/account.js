const saveUserSetting = (userObject) => {
    window.localStorage.setItem('userSettings', JSON.stringify(userObject));
};

const submitBtn = document.querySelector('#submit');
const validationResultDiv = document.querySelector('#validationResult');

const printValidationResult = (message) => {
    validationResultDiv.innerHTML = message;
};

window.onload = submitBtn.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const age = document.querySelector('#age').value;

    const userSettings = { name: name, height: height, weight: weight, age: age };
    console.log(userSettings);
    // && - i ; || - lub

    // if (name.includes('@') || name.includes('#') || name.length == 0) {
    //     printValidationResult(`Error- bad words`);

    //     return;
    // }

    function checkWrongName() {
        if (name.includes('@') || name.includes('#') || name.length == 0) {
            printValidationResult(`Error- bad words`);
            document.getElementById('name').style.backgroundColor = 'Red';
            document.getElementById('wrong_text').display = 'block';
            document.getElementById('wrong_text').innerHTML = 'There is a wrong word';

            return;
        }
    }
    checkWrongName();

    function checkWrongHeight() {
        if (height < 50 || height > 200 || height.length == 0) {
            printValidationResult(`Error -  wrong size`);
            document.getElementById('height').style.backgroundColor = 'Red';
            return;
        }
    }
    checkWrongHeight();

    function checkWrongWeight() {
        if (weight < 30 || weight > 300 || weight.length == 0) {
            printValidationResult('Error - wrong size');
            document.getElementById('weight').style.backgroundColor = 'Red';
            return;
        }
    }
    checkWrongWeight();

    function checkWrongAge() {
        if (age < 1 || age < 120 || age.length > 0) {
            console.log(age);
        } else {
            printValidationResult('Error-wrong age');
            document.getElementById('age').style.backgroundColor = 'Red';
            return;
        }
    }
    checkWrongAge();
    printValidationResult('');
    // name != '@, #, $, %'
    //
    // height = 50 - 300
    // weight 30m - 300
    // age 1 - 120
    //

    saveUserSetting(userSettings);
});