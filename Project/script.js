// Animate input file selection
const inputFile = document.querySelector('input[type="file"]');

inputFile.addEventListener('change', () => {
  if (inputFile.files.length > 0) {
    alert("Image uploaded successfully!");
  }
});

// Smooth scroll (optional if nav links have href="#section")
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade in animation on scroll for main
const mainSection = document.querySelector('main');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      mainSection.classList.add('show');
    }
  });
});

observer.observe(mainSection);

// Add fade effect in CSS
const style = document.createElement('style');
style.innerHTML = `
  main {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
  }

  main.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
