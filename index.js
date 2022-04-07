// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Create a title dynamically
const title = document.createElement('H1');
title.innerText = 'Submit Here';

// Create a form dynamically
const form = document.createElement('FORM');
form.setAttribute('id', 'myform');

// Create an input element for Full Name
const FN = document.createElement('input');
FN.setAttribute('id', 'text');
FN.setAttribute('type', 'text');
FN.setAttribute('name', 'tester');

// create a submit button
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');

form.appendChild(title);
form.appendChild(FN);
form.appendChild(submitBtn);

appDiv.appendChild(form);

const formForm = document.querySelector('#myform');
//const inputForm = document.querySelector('#text');

//console.log(inputForm);

const formData = new FormData(formForm);

formForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = formData;
  console.log(data);
  Array.from(data).map((elem) => {
    console.log(elem);
  });
});
