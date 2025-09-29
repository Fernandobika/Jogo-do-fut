document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    cont tergerSelection = document.getElementById(targetId);

    if (targetSelection) {
      window.scrollTo({
        top:targetSelection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const header = documen.querySelector('header');
  if(window.scrolly > 50) {
    header.style.backgoundColor = '#333';
  } else {
    header.style.backgroundColor = '#1a1a1a';
  }
});
  
