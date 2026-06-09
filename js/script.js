document.addEventListener('DOMContentLoaded', () => {

  /* ============ NAV SCROLL ============ */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    nav.classList.toggle('scrolled', curr > 40);
    if (curr > 80) {
      nav.classList.toggle('nav-hidden', curr > lastScroll);
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScroll = curr;
  }, { passive: true });

  /* ============ MOBILE NAV ============ */
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ============ SMOOTH SCROLL ============ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ============ NAV ACTIVE SECTION ============ */
  const glowItems = document.querySelectorAll('.glow-item');
  const sections = [];
  glowItems.forEach(item => {
    const href = item.querySelector('a').getAttribute('href');
    const section = document.querySelector(href);
    if (section) sections.push({ item, section });
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sections.forEach(({ item, section }) => {
          item.classList.toggle('active', section === entry.target);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

  sections.forEach(({ section }) => sectionObserver.observe(section));

  /* ============ CONTACT FORM (EmailJS) ============ */
  emailjs.init('acx215WcUh-Qkwkue');

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;

      emailjs.sendForm('service_portfolio', 'template_qhzoyqo', form)
        .then(() => {
          btn.innerHTML = 'Sent! I\'ll get back soon.';
          form.reset();
          setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
          }, 4000);
        })
        .catch(() => {
          btn.innerHTML = 'Oops! Try again.';
          btn.disabled = false;
          setTimeout(() => {
            btn.innerHTML = original;
          }, 3000);
        });
    });
  }

  /* ============ 3D GLOWING ORBITAL RINGS ============ */
  const scene = document.querySelector('.scene-3d');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;opacity:0.5';
  scene.innerHTML = '';
  scene.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W, H;
  let time = 0;
  let mouseX = 0, mouseY = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / W - 0.5) * 2;
    mouseY = (e.clientY / H - 0.5) * 2;
  });

  const rings = [
    { radius: 140, tubes: 70, speed: 0.35, tiltX: 0.3, tiltY: 0.5, color: '241, 110, 0', size: 1.8 },
    { radius: 200, tubes: 90, speed: -0.2, tiltX: -0.6, tiltY: 0.2, color: '200, 95, 40', size: 1.2 },
    { radius: 90, tubes: 45, speed: 0.55, tiltX: 0.8, tiltY: -0.4, color: '255, 255, 255', size: 1 },
  ];

  function project3D(x, y, z) {
    const perspective = 500;
    const scale = perspective / (perspective + z);
    return {
      x: (x - W / 2) * scale + W / 2,
      y: (y - H / 2) * scale + H / 2,
      scale: scale,
      z: z
    };
  }

  function rotateX(y, z, angle) {
    return { y: y * Math.cos(angle) - z * Math.sin(angle), z: y * Math.sin(angle) + z * Math.cos(angle) };
  }

  function rotateY(x, z, angle) {
    return { x: x * Math.cos(angle) - z * Math.sin(angle), z: x * Math.sin(angle) + z * Math.cos(angle) };
  }

  let particles = [];
  function initParticles() {
    particles = [];
    rings.forEach(ring => {
      for (let i = 0; i < ring.tubes; i++) {
        const theta = (i / ring.tubes) * Math.PI * 2;
        const x = ring.radius * Math.cos(theta);
        const z = ring.radius * Math.sin(theta);
        particles.push({
          x, y: 0, z,
          theta, ring,
          phase: Math.random() * Math.PI * 2
        });
      }
    });
  }
  initParticles();

  function animateOrbits() {
    time += 0.01;
    ctx.clearRect(0, 0, W, H);

    const mx = mouseX * 30;
    const my = mouseY * 20;

    const sorted = particles.map(p => {
      let { x, y, z } = p;
      const tiltAngle = time * p.ring.speed;
      const rotY = rotateY(x, z, tiltAngle + p.ring.tiltY);
      x = rotY.x; z = rotY.z;
      const rotX = rotateX(y, z, p.ring.tiltX);
      y = rotX.y; z = rotX.z;

      x += mx;
      y += my;

      const pr = project3D(x, y, z);
      return { ...pr, p, ring: p.ring, theta: p.theta, phase: p.phase };
    }).sort((a, b) => a.z - b.z);

    rings.forEach(ring => {
      const ringPts = sorted.filter(s => s.ring === ring).sort((a, b) => a.theta - b.theta);
      for (let i = 0; i < ringPts.length; i++) {
        const a = ringPts[i];
        const b = ringPts[(i + 1) % ringPts.length];
        const alpha = (1 - (a.z + 250) / 500) * 0.12;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${ring.color}, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    });

    rings.forEach(ring => {
      const ringPts = sorted.filter(s => s.ring === ring);
      for (let i = 0; i < ringPts.length; i++) {
        const a = ringPts[i];
        const b = ringPts[(i + 1) % ringPts.length];
        if (a.z > 0) {
          const glowAlpha = Math.min(1, (a.z + 250) / 300) * 0.02;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${ring.color}, ${glowAlpha})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }
    });

    sorted.forEach(s => {
      const depthAlpha = (1 - (s.z + 250) / 500);
      const size = s.p.ring.size * s.scale * (0.6 + 0.4 * depthAlpha);
      if (size < 0.1) return;

      const twinkle = 0.7 + 0.3 * Math.sin(s.phase + time * 2);
      const alpha = depthAlpha * twinkle;

      ctx.beginPath();
      ctx.arc(s.x, s.y, Math.max(size, 0.2), 0, Math.PI * 2);

      if (size > 1.2) {
        ctx.shadowBlur = size * 8;
        ctx.shadowColor = `rgba(${s.ring.color}, ${alpha * 0.3})`;
        ctx.fillStyle = `rgba(${s.ring.color}, ${alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        ctx.fillStyle = `rgba(${s.ring.color}, ${alpha})`;
        ctx.fill();
      }
    });

    requestAnimationFrame(animateOrbits);
  }
  animateOrbits();

  /* ============ 3D TILT ============ */
  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach(el => {
    const isYOnly = el.dataset.tiltAxis === 'y';
    const maxTilt = 8;
    const scale = 1.01;
    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    el.appendChild(glare);

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      let tiltX, tiltY;
      if (isYOnly) {
        tiltX = 0;
        tiltY = (mouseX / (rect.width / 2)) * maxTilt;
      } else {
        tiltX = -(mouseY / (rect.height / 2)) * maxTilt;
        tiltY = (mouseX / (rect.width / 2)) * maxTilt;
      }

      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;

      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
      glare.style.opacity = '1';
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      glare.style.opacity = '0';
    });
  });

  /* ============ CURSOR GLOW ============ */
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
  });

  /* ============ ABOUT VIDEO PLAY ON VIEW ============ */
  const aboutVideo = document.getElementById('aboutVideo');
  const soundBtn = document.getElementById('aboutSoundToggle');
  if (aboutVideo && soundBtn) {
    soundBtn.addEventListener('click', () => {
      aboutVideo.muted = !aboutVideo.muted;
      soundBtn.innerHTML = aboutVideo.muted
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
    });

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutVideo.play();
        } else {
          aboutVideo.pause();
        }
      });
    }, { threshold: 0.3 });
    videoObserver.observe(aboutVideo);
  }

  /* ============ ABOUT STATS COUNTER ============ */
  const statNumbers = document.querySelectorAll('.about-stat-num');
  if (statNumbers.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = target === 100 ? current + '%' : current + '+';
          }, 30);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => countObserver.observe(el));
  }

  /* ============ SCROLL REVEAL ============ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* ============ SCROLL VELOCITY RINGS ============ */
  let scrollVelocity = 0;
  let lastScrollY = 0;
  let scrollTarget = 0;
  let scrollSmooth = 0;

  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    scrollVelocity = curr - lastScrollY;
    scrollTarget = curr;
    lastScrollY = curr;
  }, { passive: true });

  function updateRingScroll() {
    scrollSmooth += (scrollTarget - scrollSmooth) * 0.03;
    const velocityInfluence = Math.min(Math.abs(scrollVelocity) * 0.005, 0.5);

    rings.forEach((ring, i) => {
      ring.speed = [0.35, -0.2, 0.55][i] + velocityInfluence * (i % 2 === 0 ? 1 : -1);
      ring.tiltX = [0.3, -0.6, 0.8][i] + scrollSmooth * 0.0003 * 0.5;
    });

    requestAnimationFrame(updateRingScroll);
  }
  updateRingScroll();

});
