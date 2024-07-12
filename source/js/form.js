const form = document.querySelector('.form');
const nameInput = form.querySelector('#name');
const phoneInput = form.querySelector('#phone');
const submitButton = form.querySelector('.form__button');

const checkInput = (rules, input) => {
  const checkedInput = input.value.match(rules);
  const nameErrorText = input.parentElement.querySelector('.form__error');
  if (!checkedInput || checkedInput[0] !== input.value) {
    input.classList.add('form__text-input--error');
    nameErrorText.classList.remove('visually-hidden');
    return false;
  }

  input.classList.remove('form__text-input--error');
  nameErrorText.classList.add('visually-hidden');
  return true;
};

const onClickCheck = (evt) => {
  evt.preventDefault();
  // const nameRules =  /[\p{L} ]+/;
  const nameRules =  /[а-яёА-ЯЁ ]+/;
  const phoneRules = /[^\p{L}]+/gu;
  const nameCheckResult = checkInput(nameRules, nameInput);
  const phoneCheckResult = checkInput(phoneRules, phoneInput);
  if(nameCheckResult && phoneCheckResult) {
    form.submit();
  }
};

submitButton.addEventListener('click', onClickCheck);
