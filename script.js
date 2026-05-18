    /* TYPING ANIMATION */
    const texts = ["DEVITA", "WEB DEVELOPER", "UI DESIGNER", "DEVITA"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedEl = document.getElementById("typed-name");

    function type() {
      const current = texts[textIndex];

      if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          if (textIndex === texts.length - 1) return;
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex++;
        }
      }

      setTimeout(type, isDeleting ? 75 : 115);
    }

    type();

    /* SKILL BAR ANIMATION ON SCROLL */
    const fills = document.querySelectorAll('.fill');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    fills.forEach(f => observer.observe(f));