// Start email validation 
const inputEmail = document.querySelector('#email');
const iconExclamation = document.querySelector('.icon-exclamation');
const iconCheck = document.querySelector('.icon-check');
const iconEnvelope = document.querySelector('.icon-envelope');
const erroText = document.querySelector('.error-text');
const btnSubmit = document.querySelector('.btn-submit');
//let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // bad validate
// /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ === very good
let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; // regExp very good to valid email

inputEmail.addEventListener('input', () => {
    inputEmail.value.match(regExp) ? 
    (inputEmail.style.borderColor = '#27ae60') &&
    (inputEmail.style.color = '#27ae60') &&
    (iconCheck.style.opacity = '1') &&
    (iconExclamation.style.opacity = '0') &&
    (erroText.style.opacity = '0') &&
    (erroText.style.display = 'none') &&
    (btnSubmit.style.display = 'block') &&
    (btnSubmit.style.marginTop = '1rem')
    : 
    (inputEmail.style.borderColor = '#e74c3c') &&
    (inputEmail.style.color = '#e74c3c') &&
    (iconExclamation.style.opacity = '1') &&
    (iconCheck.style.opacity = '0') &&
    (erroText.style.opacity = '1') &&
    (erroText.style.display = 'block') &&
    (btnSubmit.style.display = 'none')

    inputEmail.value === '' ? 
    (inputEmail.style.borderColor = '#ccc') &&
    (inputEmail.style.color = '#ccc') &&
    (iconEnvelope.style.opacity = '1') && 
    (iconExclamation.style.opacity = '0') &&
    (iconCheck.style.opacity = '0') &&
    (erroText.style.opacity = '0') &&
    (erroText.style.display = 'block') &&
    (btnSubmit.style.display = 'none')
    : 
    (iconEnvelope.style.opacity = '0')
});

btnSubmit.addEventListener('click', () => {
    alert('Congratulations! That\'s email validation');
    alert('Do you want try again to testing any email ?');
});

// Start write text 
const formTitle = document.querySelector('.form-title');
const textFormTitle = formTitle.textContent;
let i = 0;
window.addEventListener('load', () => {
    formTitle.textContent = '';
    setInterval(() => {
        i < textFormTitle.length ?
            formTitle.textContent += textFormTitle[i] : formTitle.textContent = textFormTitle;
        i++;
    }, 300);
})
