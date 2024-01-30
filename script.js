const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
}
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const punctuation = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${punctuation}${phoneNumber}`
  );

  const output = document.createElement('p');
  output.className = 'output-text';
  phoneRegex.test(input)
    ? (output.style.color = '#006400')
    : (output.style.color = '#8B0000');
  output.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.innerHTML = '';
  resultsDiv.appendChild(output);
  resultsDiv.style.display = 'block';
}; 

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.style.display = 'none';
  resultsDiv.textContent = '';
});