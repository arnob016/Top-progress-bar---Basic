window.addEventListener('scroll', function() {
  const scrollDistance = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollDistance) * 100;
  
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = scrolled + '%';
});
