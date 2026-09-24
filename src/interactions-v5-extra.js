// Show every client on demand; pause the marquee while visitors browse.
function wireLogoStrip(){
  var section=main.querySelector('.clients5'),button=main.querySelector('#clients28Toggle'),gallery=main.querySelector('#clients28Gallery');
  if(!section||!button||!gallery)return;
  function toggle(){var expanded=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'Close clients':'Our clients';gallery.hidden=!expanded;section.classList.toggle('is-paused',expanded);}
  button.addEventListener('click',toggle);
  var previousDispose=disposeExperience;
  disposeExperience=function(){button.removeEventListener('click',toggle);previousDispose();};
}
