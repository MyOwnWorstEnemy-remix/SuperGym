// Работа аккордеонов
const faqButtonList = document.querySelectorAll('.faq__button');

const onButtonClick = (evt) => {
  evt.preventDefault();
  const button = evt.target;
  const question = evt.target.closest(".faq__question");
  button.classList.toggle("faq__button--active");
  question.classList.toggle("faq__question--active");
}

faqButtonList.forEach((faqButton) => {
  faqButton.addEventListener("click", onButtonClick);
});

// Работа табов
const tabList = document.querySelector('.faq__tabs');
const tabs = document.querySelectorAll('.faq__tab');
const tabContent = document.querySelectorAll('.faq__questions-list');

const hideTabContent = (tabIndex) => {
  for (let i = tabIndex; i < tabContent.length; i++) {
    tabContent[i].classList.add('visually-hidden');
  }
};

const showTabContent = (tabIndex) => {
  if (tabContent[tabIndex].classList.contains('visually-hidden')) {
    tabContent[tabIndex].classList.remove('visually-hidden');
  }
};

const onTabClick = (evt) => {
  evt.preventDefault();
  const tab = evt.target;
  if (tab && tab.classList.contains('faq__tab')) {
    const activeTab = document.querySelector('.faq__tab--active');
    activeTab.classList.remove('faq__tab--active');
    tab.classList.add('faq__tab--active');
    for(let i = 0; i < tabs.length; i++) {
      if (tab == tabs[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
};

tabList.addEventListener("click", onTabClick);
