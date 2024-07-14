const tabList = document.querySelector('.filter');
const tabs = document.querySelectorAll('.filter__button');

const periods = [1, 6, 12];
const prices = [5000, 1700, 2700];

const changePrices = (periodIndex) => {
  const period = periods[periodIndex];
  const cards = document.querySelectorAll('.card__price');
  for(let i = 0; i < cards.length; i++){
    cards[i].innerHTML = `${prices[i] * period}<span aria-hidden="true">${prices[i] * period}</span>`;
  }
};

const onTabClick = (evt) => {
  evt.preventDefault();
  const tab = evt.target;
  if (tab && tab.classList.contains('filter__button')) {
    const activeTab = document.querySelector('.filter__item--active');
    activeTab.classList.remove('filter__item--active');
    tab.parentNode.classList.add('filter__item--active');
    for(let i = 0; i < tabs.length; i++) {
      if (tab === tabs[i]) {
        changePrices(i);
        break;
      }
    }
  }
};

tabList.addEventListener('click', onTabClick);
