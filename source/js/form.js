const form = document.querySelector('.form');
const nameInput = form.querySelector('#name');
const phoneInput = form.querySelector('#phone');
const submitButton = form.querySelector('.form__button');

const addErrorText = (input) => {
  const nameErrorText = input.parentElement.nextElementSibling;
  input.classList.add('form__text-input--error');
  nameErrorText.classList.remove('visually-hidden');
};

const removeErrorText = (input) => {
  const nameErrorText = input.parentElement.nextElementSibling;
  input.classList.remove('form__text-input--error');
  nameErrorText.classList.add('visually-hidden');
};

const checkInput = (rules, input) => {
  const inputValue = input.value.trim();
  const checkedInput = inputValue.match(rules);
  if (!checkedInput || checkedInput[0] !== inputValue) {
    addErrorText(input);
    return false;
  }

  removeErrorText(input);
  return true;
};

const onClickCheck = (evt) => {
  evt.preventDefault();
  const nameRules = /[a-zA-Zа-яёА-ЯЁ ]+/;
  const phoneRules = /[^\p{L}]+/gu;
  const nameCheckResult = checkInput(nameRules, nameInput);
  const phoneCheckResult = checkInput(phoneRules, phoneInput);
  if(nameCheckResult && phoneCheckResult) {
    form.submit();
    phoneInput.value = '';
    nameInput.value = '';
  }
};

submitButton.addEventListener('click', onClickCheck);

nameInput.addEventListener('input', () => {
  removeErrorText(nameInput);
});

phoneInput.addEventListener('input', () => {
  removeErrorText(phoneInput);
});
