// The logo strip is controllable and pauses automatically for reading.
function wireLogoStrip(){
  var section=main.querySelector('.clients5'),button=main.querySelector('#logoPause');
  if(!section||!button)return;
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)'),playing=true;
  function sync(){section.classList.toggle('is-paused',!playing);section.classList.toggle('is-playing',playing);button.hidden=false;button.textContent=playing?'Pause logos':'Play logos';button.setAttribute('aria-pressed',String(!playing));}
  function toggle(){playing=!playing;sync();}
  button.addEventListener('click',toggle);reduced.addEventListener('change',sync);sync();
  var previousDispose=disposeExperience;
  disposeExperience=function(){button.removeEventListener('click',toggle);reduced.removeEventListener('change',sync);previousDispose();};
}
