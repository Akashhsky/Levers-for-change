/* One route-scoped motion controller; native scrolling, no scroll interception. */
function wireMotion6(){
  var media=window.matchMedia('(prefers-reduced-motion: reduce)'),saved=null;
  try{saved=localStorage.getItem('lfc-motion');}catch(e){}
  var enabled=saved?saved==='full':!media.matches,button=main.querySelector('#motion6Toggle');
  var removers=[],observer,frame=0,animations=new Set(),chapters=Array.from(main.querySelectorAll('[data-chapter6]'));
  var targets=Array.from(main.querySelectorAll('.intro5,.proof5,.editorial-section-head,.story5,.leader5,.digital5,.approach5,.closing5,.section .band'));
  var hero=main.querySelector('.hero6-frame'),image=main.querySelector('[data-parallax6]');
  function on(el,event,fn,opts){if(!el)return;el.addEventListener(event,fn,opts);removers.push(function(){el.removeEventListener(event,fn,opts);});}
  function count(node){if(node.dataset.counted6)return;node.dataset.counted6='true';var value=Number(node.dataset.count6),suffix=node.dataset.suffix6||'',start=performance.now();node.setAttribute('aria-label',value+suffix);
    function tick(now){if(!enabled){node.textContent=value+suffix;return;}var t=Math.min(1,(now-start)/1100);node.textContent=Math.round(value*(1-Math.pow(1-t,3)))+suffix;if(t<1){var id=requestAnimationFrame(function(n){animations.delete(id);tick(n);});animations.add(id);}}
    tick(start);
  }
  function apply(){document.body.classList.toggle('motion-full',enabled);document.body.classList.toggle('motion-paused',!enabled);
    if(button){button.textContent=enabled?'Reduce motion':'Enable motion';button.setAttribute('aria-pressed',String(enabled));}
    if(observer)observer.disconnect();
    targets.forEach(function(el,i){el.classList.add('motion6-ready');el.style.setProperty('--delay6',((el.classList.contains('leader5')||el.classList.contains('story5'))?i%3*85:0)+'ms');el.classList.toggle('motion6-pending',enabled&&!el.classList.contains('motion6-seen')&&el.getBoundingClientRect().top>innerHeight*.9);});
    if(enabled&&'IntersectionObserver' in window){observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting)return;entry.target.classList.remove('motion6-pending');entry.target.classList.add('motion6-seen');entry.target.querySelectorAll('[data-count6]').forEach(count);observer.unobserve(entry.target);});},{threshold:.08});targets.forEach(function(el){observer.observe(el);});}
    if(!enabled){main.querySelectorAll('[data-count6]').forEach(function(n){n.textContent=n.dataset.count6+(n.dataset.suffix6||'');});if(image)image.style.removeProperty('--parallax6');}
    schedule();
  }
  function update(){frame=0;if(enabled&&hero&&image){var r=hero.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){var offset=Math.max(-25,Math.min(25,(innerHeight*.45-r.top-r.height/2)*.065));image.style.setProperty('--parallax6',offset.toFixed(2)+'px');}}
    var active='';chapters.forEach(function(section){if(section.getBoundingClientRect().top<innerHeight*.48)active=section.id;});main.querySelectorAll('[data-jump6]').forEach(function(b){b.classList.toggle('is-active',b.dataset.jump6===active);if(b.dataset.jump6===active)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(update);}
  on(window,'scroll',schedule,{passive:true});on(window,'resize',schedule,{passive:true});
  on(button,'click',function(){enabled=!enabled;saved=enabled?'full':'reduced';try{localStorage.setItem('lfc-motion',saved);}catch(e){}apply();});
  on(media,'change',function(){if(!saved){enabled=!media.matches;apply();}});
  main.querySelectorAll('[data-jump6]').forEach(function(b){on(b,'click',function(){var target=document.getElementById(b.dataset.jump6);if(target){target.scrollIntoView({behavior:enabled?'smooth':'instant',block:'start'});var heading=target.querySelector('h2');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}}});});
  // Logo playback is independent and starts automatically, as requested.
  apply();
  var previousDispose=disposeExperience;
  disposeExperience=function(){if(observer)observer.disconnect();if(frame)cancelAnimationFrame(frame);animations.forEach(function(id){cancelAnimationFrame(id);});removers.forEach(function(remove){remove();});previousDispose();};
}
