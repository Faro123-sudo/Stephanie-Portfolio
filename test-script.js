document.addEventListener('DOMContentLoaded', () => {

// Floating programming components

const codeElements = [
    "<html>", "<div>", "</div>", "<script>", "</script>", "{ }", "();", "</>",
    "const", "let", "function", "I-Love-Coding", "Singing-Too", "if ()", 
    "else", "return", "=>", "console.log()", "import", "from", "class", 
    "extends", "new", "this", "super", "try", "catch", "finally", "async", "await"
];
const container = document.getElementById('code-container');
if (container) {
    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        span.className = 'code-particle';
        span.textContent = codeElements[Math.floor(Math.random() * codeElements.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDelay = Math.random() * 10 + 's';
        span.style.animationDuration = (Math.random() * 5 + 8) + 's';
        container.appendChild(span);
    }
}

// Dark mode toggle
const toggleDark = document.getElementById('toggle-dark');
toggleDark.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    // Toggle body background and text colors for better effect
    if (document.documentElement.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = 'var(--beige-light)';
        document.body.style.color = 'var(--brown-dark)';
    } else {
        document.body.style.backgroundColor = 'var(--beige-light)';
        document.body.style.color = 'var(--brown-dark)';
    }
});

// Typewriter effect for subtitle
  const typewriterPhrases = [
    "Software Engineering Student",
    "Web App Developer",
    "Aspiring Full-stack Developer",
    "Exploring AI, Machine Learning & Mobile Development",
    "Passionate About Scalable Tech & User-Centered Design"
  ];
  let twChar = 0, twPhrase = 0;
  const twElem = document.getElementById('typewriter-text');

  function typeTypewriter() {
    if (!twElem) return;
    if (twChar < typewriterPhrases[twPhrase].length) {
      twElem.textContent += typewriterPhrases[twPhrase][twChar++];
      setTimeout(typeTypewriter, 60);
    } else {
      setTimeout(() => {
        twElem.textContent = '';
        twChar = 0;
        twPhrase = (twPhrase + 1) % typewriterPhrases.length;
        typeTypewriter();
      }, 1200);
    }
  }
  typeTypewriter();
});

// Smooth scroll for nav links
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Ripple effect for buttons
document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        circle.className = 'ripple-effect';
        circle.style.position = 'absolute';
        circle.style.background = 'rgba(255,255,255,0.4)';
        circle.style.borderRadius = '50%';
        circle.style.pointerEvents = 'none';
        circle.style.width = circle.style.height = Math.max(this.offsetWidth, this.offsetHeight) + 'px';
        circle.style.left = (e.offsetX - this.offsetWidth / 2) + 'px';
        circle.style.top = (e.offsetY - this.offsetHeight / 2) + 'px';
        circle.style.transform = 'scale(0)';
        circle.style.transition = 'transform 0.5s, opacity 0.5s';
        this.style.position = 'relative';
        this.appendChild(circle);
        setTimeout(() => {
            circle.style.transform = 'scale(2)';
            circle.style.opacity = '0';
        }, 10);
        setTimeout(() => circle.remove(), 510);
    });
});

// Reveal on scroll
function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
