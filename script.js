// Animate elements on scroll using Intersection Observer
const faders = document.querySelectorAll('.feature');

const appearOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade-in');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Button hover animation
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.backgroundColor = '#1b2b64';
scrollBtn.style.color = '#fff';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
