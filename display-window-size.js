javascript:(
  function() {
    var vals = document.createElement('div'),
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        doing;

    function fadeOut() {
      clearTimeout(doing);
      doing = setTimeout(function() { vals.style.opacity = 0; }, 1000);
    }

    window.addEventListener('resize', function() {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      vals.style.opacity = 1;
      vals.innerHTML = windowWidth + ' x ' + windowHeight;
      fadeOut();
    });

    vals.className = 'dj-dsiplay-window-size';
    vals.style.position = 'fixed';
    vals.style.zIndex = '100000';
    vals.style.top = '0';
    vals.style.right = '0';
    vals.style.padding = '1em';
    vals.style.color = '#fff';
    vals.style.font = '14px/1em sans-serif';
    vals.style.backgroundColor = 'rgba(0,0,0,0.75)';
    vals.style.borderRadius = '0 0 0 0.5em';
    vals.style.transition = 'opacity 200ms';
    vals.innerHTML = windowWidth + ' x ' + windowHeight;

    if (!document.querySelector('.dj-dsiplay-window-size')) document.body.appendChild(vals);
    fadeOut();
  }
)();
