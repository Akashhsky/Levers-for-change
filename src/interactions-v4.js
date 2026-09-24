  // Each route owns its listeners, observers and timers; tear them down before navigation.
  var disposeExperience = function(){};
  function wireExperience(){
    var removers=[], observer, timer=null, resize;
    var reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    function on(el,event,fn,options){if(!el)return;el.addEventListener(event,fn,options);removers.push(function(){el.removeEventListener(event,fn,options);});}
    var revealNodes=main.querySelectorAll('.reveal, .page-editorial, .section .band, .gallery');
    if(!reduced.matches && 'IntersectionObserver' in window){
      observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.06});
      revealNodes.forEach(function(el){el.classList.add('reveal');if(el.getBoundingClientRect().top>window.innerHeight*.95)el.classList.add('reveal-pending');observer.observe(el);});
    }
    var rail=main.querySelector('.industry3-rail');
    function moveIndustries(direction){if(rail)rail.scrollBy({left:direction*(rail.clientWidth*.78),behavior:reduced.matches?'instant':'smooth'});}
    main.querySelectorAll('[data-industry-direction]').forEach(function(button){on(button,'click',function(){moveIndustries(Number(button.dataset.industryDirection));});});
    on(rail,'keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();moveIndustries(e.key==='ArrowRight'?1:-1);}});
    var showcase=main.querySelector('.showcase');
    if(showcase){
      var track=showcase.querySelector('.showcase-track'),cards=Array.from(track.children),active=2,playing=false,hovering=false;
      var play=main.querySelector('#showcasePlay'),dots=Array.from(main.querySelectorAll('[data-slide]')),counter=main.querySelector('.slide-count');
      function position(animate){
        if(!animate)track.style.transition='none';
        var card=cards[active];
        track.style.transform='translate3d('+(showcase.clientWidth/2-card.offsetLeft-card.offsetWidth/2)+'px,0,0)';
        cards.forEach(function(c,i){c.classList.toggle('is-active',i===active);c.querySelector('a').tabIndex=i===active?0:-1;});
        dots.forEach(function(d,i){d.setAttribute('aria-pressed',String(i===active));});
        counter.textContent=String(active+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');
        if(!animate){track.getBoundingClientRect();track.style.transition='';}
      }
      function stopTimer(){if(timer){clearInterval(timer);timer=null;}}
      // Playback is always an explicit visitor action. Reduced motion keeps frame changes unanimated.
      function syncTimer(){stopTimer();if(playing&&!hovering&&!document.hidden){timer=setInterval(function(){active=(active+1)%cards.length;position(true);},6000);}}
      function setPlaying(value){playing=value;play.setAttribute('aria-pressed',String(value));play.setAttribute('aria-label',value?'Pause slideshow':'Play slideshow');play.textContent=value?'Ⅱ':'▷';syncTimer();}
      function select(index,user){active=(index+cards.length)%cards.length;position(true);if(user)setPlaying(false);}
      on(main.querySelector('#showcasePrev'),'click',function(){select(active-1,true);});
      on(main.querySelector('#showcaseNext'),'click',function(){select(active+1,true);});
      on(play,'click',function(){setPlaying(!playing);});
      dots.forEach(function(dot,i){on(dot,'click',function(){select(i,true);});});
      cards.forEach(function(card,i){on(card,'click',function(e){if(i!==active){e.preventDefault();select(i,true);}});});
      on(showcase,'keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();select(active+(e.key==='ArrowRight'?1:-1),true);}});
      on(showcase,'pointerenter',function(){hovering=true;syncTimer();});on(showcase,'pointerleave',function(){hovering=false;syncTimer();});
      on(showcase,'focusin',function(){setPlaying(false);});
      on(document,'visibilitychange',syncTimer);
      on(reduced,'change',function(){if(reduced.matches)setPlaying(false);});
      var startX=0,startY=0,dragging=false,suppressClick=false;
      on(showcase,'pointerdown',function(e){if(e.button!==0)return;startX=e.clientX;startY=e.clientY;dragging=true;suppressClick=false;});
      on(showcase,'pointerup',function(e){if(!dragging)return;dragging=false;var dx=e.clientX-startX,dy=e.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){suppressClick=true;select(active+(dx<0?1:-1),true);}});
      on(showcase,'pointercancel',function(){dragging=false;});
      on(showcase,'click',function(e){if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false;}},true);
      on(showcase,'dragstart',function(e){e.preventDefault();});
      if('ResizeObserver' in window){resize=new ResizeObserver(function(){position(false);});resize.observe(showcase);}
      else on(window,'resize',function(){position(false);});
      position(false);
    }
    var tabs=Array.from(main.querySelectorAll('[data-cap]')),panel=main.querySelector('#cap-panel');
    function switchCapability(index,focus){
      tabs.forEach(function(tab,i){tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
      panel.innerHTML=capabilityPanel(index);panel.setAttribute('aria-labelledby','cap-tab-'+index);panel.classList.remove('is-changing');panel.getBoundingClientRect();panel.classList.add('is-changing');if(focus)tabs[index].focus();
    }
    tabs.forEach(function(tab,i){on(tab,'click',function(){switchCapability(i,false);});on(tab,'keydown',function(e){var target=i;if(e.key==='ArrowRight')target=(i+1)%tabs.length;else if(e.key==='ArrowLeft')target=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')target=0;else if(e.key==='End')target=tabs.length-1;else return;e.preventDefault();switchCapability(target,true);});});
    var steps=Array.from(main.querySelectorAll('.engagement-steps details'));
    steps.forEach(function(detail){on(detail,'toggle',function(){if(detail.open)steps.forEach(function(other){if(other!==detail)other.open=false;});});});
    // All motion is decorative; content remains available with reduced motion or no observer.
    disposeExperience=function(){removers.forEach(function(remove){remove();});if(observer)observer.disconnect();if(resize)resize.disconnect();if(timer)clearInterval(timer);};
  }
  function casePhoto(c){return 'v4/cases/'+c.slug;}
