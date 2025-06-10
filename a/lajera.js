// Variables, Functions, Arrays, and Objects Example
function showVariables() {
  // Variables
  let name = 'Alice';
  const age = 22;
  var city = 'Manila';

  // Function
  function greet(person) {
    return `Hello, ${person}!`;
  }

  // Array
  const fruits = ['apple', 'banana', 'orange'];

  // Object
  const student = {
    name: 'Bob',
    age: 20,
    city: 'Cebu'
  };

  // Output
  document.getElementById('variables-output').innerHTML = `
    <strong>Variables:</strong> Name: ${name}, Age: ${age}, City: ${city}<br>
    <strong>Function:</strong> ${greet(name)}<br>
    <strong>Array:</strong> ${fruits.join(', ')}<br>
    <strong>Object:</strong> Name: ${student.name}, Age: ${student.age}, City: ${student.city}
  `;
}

// DOM Manipulation Example
function changeDomText() {
  document.getElementById('dom-output').textContent = 'The text has been changed!';
}
function resetDomText() {
  document.getElementById('dom-output').textContent = 'This text will change!';
}

// Event Handling Example
const eventBtn = document.getElementById('event-btn');
const eventOutput = document.getElementById('event-output');
if (eventBtn && eventOutput) {
  eventBtn.addEventListener('click', function() {
    eventOutput.textContent = 'Button was clicked!';
  });
}
