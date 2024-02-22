const form = document.querySelector('#form');
const table = document.querySelector('table tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const food = document.querySelectorAll('input[name="food"]:checked');
  const address = document.querySelector('#address').value;
  const country = document.querySelector('#country').value;
  const state = document.querySelector('#state').value;
  const pincode = document.querySelector('#pincode').value;
  
    const foodList = [];
  food.forEach((item) => {
    foodList.push(item.value);
  });

  const row = table.insertRow();
  row.insertCell().textContent = firstName;
  row.insertCell().textContent = lastName;
  row.insertCell().textContent = gender;
  row.insertCell().textContent = foodList.join(', ');
  row.insertCell().textContent = address;
  row.insertCell().textContent = country;
  row.insertCell().textContent = state;
  row.insertCell().textContent = pincode;

  form.reset();
});