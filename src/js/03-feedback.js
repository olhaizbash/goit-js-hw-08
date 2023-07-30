
import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
} 
const KEY_LOCAL = "feedback-form-state";
const formData = {};
saveInput();
refs.form.addEventListener('input', throttle((onInput), 500));
refs.form.addEventListener('submit', onSubmit);
function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY_LOCAL, JSON.stringify(formData));
}

function onSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_LOCAL)));
    event.currentTarget.reset();
    localStorage.removeItem(KEY_LOCAL);
    
}

function saveInput() {
    const saveInfo = localStorage.getItem(KEY_LOCAL);
    if (saveInfo) {
        const data = JSON.parse(saveInfo);
        refs.input.value = data.email;
        refs.textarea.value = data.message;
    }
}