// One continuous loop; the controls move exactly one client at a time.
function wireLogoStrip(){
  var section=main.querySelector('.clients29');if(!section)return;
  var track=section.querySelector('.logo5-track'),group=track.firstElementChild,button=section.querySelector('#clients29Playback'),status=section.querySelector('#clients29Status');
  var media=window.matchMedia('(prefers-reduced-motion: reduce)'),paused=false,offset=0,last=0,frame=0,tween=null,resumeAt=0,visible=true,removers=[];
  function on(el,event,fn){el.addEventListener(event,fn);removers.push(function(){el.removeEventListener(event,fn);});}
  function sync(){section.classList.toggle('is-paused',paused);button.setAttribute('aria-label',paused?'Play client logos':'Pause client logos');}
  function tick(now){var elapsed=last?Math.min(now-last,50):0;last=now;var width=group.offsetWidth;
    if(tween){var t=Math.min((now-tween.start)/400,1);offset=tween.from+(tween.to-tween.from)*(1-Math.pow(1-t,3));if(t===1)tween=null;}
    else if(!paused&&visible&&!document.hidden&&now>resumeAt)offset+=elapsed*.042;
    if(width&&!tween)offset=((offset%width)+width)%width;
    track.style.transform='translate3d('+(-offset)+'px,0,0)';frame=requestAnimationFrame(tick);
  }
  section.querySelectorAll('[data-logo-step]').forEach(function(control){on(control,'click',function(){var step=Number(control.dataset.logoStep),cell=group.firstElementChild.offsetWidth,width=group.offsetWidth;var from=tween?tween.to:offset;if(step<0&&from<cell)from+=width;var index=step>0?Math.floor(from/cell)+1:Math.ceil(from/cell)-1;var to=index*cell;tween={from:from,to:to,start:performance.now()};if(media.matches){offset=to;tween=null;}resumeAt=performance.now()+2500;var item=CLIENT_MARKS[((index%CLIENT_MARKS.length)+CLIENT_MARKS.length)%CLIENT_MARKS.length];status.textContent=item.name;});});
  on(button,'click',function(){paused=!paused;sync();});on(media,'change',function(){paused=media.matches;sync();});
  var observer='IntersectionObserver' in window?new IntersectionObserver(function(entries){visible=entries[0].isIntersecting;}):null;if(observer)observer.observe(section);
  sync();frame=requestAnimationFrame(tick);
  var previousDispose=disposeExperience;disposeExperience=function(){cancelAnimationFrame(frame);if(observer)observer.disconnect();removers.forEach(function(remove){remove();});previousDispose();};
}

