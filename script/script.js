const formCol = document.querySelector('#col')
const formName = document.querySelector('#name')
const formWeight = document.querySelector('#weight')
const formHeight = document.querySelector('#height')
const formAge = document.querySelector('#age')
const formSelect = document.querySelector('#train_select')
const formSubmit = document.querySelector('#submit')

localStorage.setItem("#name", "Tomek")



if (localStorage.getItem("name") !== null) {
    formName.value = localStorage.getItem("name")
}
formName.addEventListener("input", e => {
    localStorage.setItem("name", formName.value);
});
formCol.addEventListener("submit", e => {

    localStorage.removeItem("name");
});

const checkName = () => {
    if (formName.value === "name") {
        showMsg(`Witaj ${"name"}`)
    } else {
        formName.textContent = 'Nie podales imienia'

    }

}

formName.addEventListener('keyup', checkName)



if (localStorage.getItem("weight") !== null) {
    formWeight.value = localStorage.getItem("weight")
}
formWeight.addEventListener("input", e => {
    localStorage.setItem("weight", formWeight.value);
});
formCol.addEventListener("submit", e => {

    localStorage.removeItem("weight");
});
formWeight.addEventListener("click", function onClickAdd(event) {

    const numbers = parseInt(input.value);
    var numberResult = 0;



    if (typeof numbers === "number") {
        if (numbers < 10) {
            numberResult = numbers * numbers;
            alert(numberResult);
        }
    }
});

if (localStorage.getItem("height") !== null) {
    formHeight.value = localStorage.getItem("height")
}
formHeight.addEventListener("input", e => {
    localStorage.setItem("height", formHeight.value);
});
formCol.addEventListener("submit", e => {

    localStorage.removeItem("height");
});

if (localStorage.getItem("age") !== null) {
    formAge.value = localStorage.getItem("age")
}
formAge.addEventListener("input", e => {
    localStorage.setItem("age", formAge.value);
});
formCol.addEventListener("submit", e => {

    localStorage.removeItem("age");
});

if (localStorage.getItem("name") !== null) {
    formSelect.value = localStorage.getItem("1", "2", "3")
}
formSelect.addEventListener("input", e => {
    localStorage.setItem("1", "2", "3", formSelect.value);
});
formSubmit.addEventListener("submit", e => {

    localStorage.removeItem("1", "2", "3");
});