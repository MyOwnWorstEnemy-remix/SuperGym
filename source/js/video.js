const videoContainer = document.querySelector('.video');
const videoCurtain = document.querySelector('.video__curtain');
const videoPlayButton = document.querySelector('.video__button');

const loadVideo = () => {
  const iframe = document.createElement('iframe');
  iframe.title = 'Зал фитнес центра SUPERGYM';
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=qRE-hAmTqfeYkKZA&autoplay=1';
  iframe.loading = 'lazy';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.frameborder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerpolicy = 'strict-origin-when-cross-origin';
  videoContainer.appendChild(iframe);

  videoPlayButton.classList.add('visually-hidden');
  videoCurtain.classList.add('visually-hidden');
};

videoPlayButton.addEventListener('click', loadVideo);
