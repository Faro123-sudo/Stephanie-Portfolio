document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars on scroll into view
  const skillBars = document.querySelectorAll('#resume .w-full > div');

  function animateSkillBars() {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && !bar.classList.contains('animated')) {
        bar.classList.add('animated');
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.transition = 'width 1.5s ease-in-out';
          bar.style.width = width;
        }, 100);
      }
    });
  }

  window.addEventListener('scroll', animateSkillBars);
  animateSkillBars();

  // Smooth scroll for navigation links
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
