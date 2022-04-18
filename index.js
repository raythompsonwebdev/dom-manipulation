// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Create a title dynamically
const title = document.createElement('H1');
title.innerText = 'Submit Here';

// Create a title dynamically
const Answer = document.createElement('H2');
Answer.setAttribute('id', 'User');
Answer.innerText = '';

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
appDiv.appendChild(Answer);

const formForm = document.querySelector('#myform');
const User = document.querySelector('#User');

formForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let result = ' ';
  let valueP = ' ';
  const formData = new FormData(formForm);
  const data = formData;
  Array.from(data).forEach((elem) => {
    const [name, value] = elem;
    result = value.length;
    valueP = value;
  });

  if (result > 5) {
    return (User.innerText = 'String length more than 5 : True');
  } else {
    return (User.innerText = 'String length less than 5 : False');
  }
});
