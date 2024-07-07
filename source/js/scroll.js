const button = document.querySelector(".hero__button");

const onClickScroll = () => {
  const element = document.querySelector(".price");
  element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
};

button.addEventListener('click', onClickScroll);
