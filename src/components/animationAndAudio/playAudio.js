
export default
function playAudio(music) {
  const audio = document.createElement('audio');
  audio.src = music.url.src;
  document.body.appendChild(audio);
  audio.src = music.url.src;
  audio.loop = true;
  return audio;
}
