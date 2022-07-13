(function() {
    const height     = 80;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;
  
    function onScroll() {
      const target = document.getElementById('header')
      if (lastPosition > height) {
        if (lastPosition > offset) {
          target.classList.add('head-animation');
        } else {
          target.classList.remove('head-animation');
        }
        offset = lastPosition;
      }
    }
  
    window.addEventListener('scroll', function(e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();
