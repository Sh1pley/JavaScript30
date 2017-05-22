

window.addEventListener('keydown', (event) => {
  playAudio();
  transition();
})

transition = () => {
  const keys = Array.from(document.querySelectorAll('.key'))
  keys.forEach( (key) => {
    key.addEventListener('transitionend', fadeKey)
  })
}

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

function fadeKey(){
  if (event.propertyName !== 'transform') return;

  this.classList.remove('playing');
}