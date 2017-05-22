

window.addEventListener('keydown', (event) => {
  playAudio();
})

window.addEventListener('keyup', (event) => {
  fadeKey()
})

playAudio = () => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  highlightKey();
  audio.play();
}

highlightKey = () => {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (key) key.classList.add('playing');
}

fadeKey = () => {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (key) key.classList.remove('playing');
}