document.addEventListener('DOMContentLoaded', () => {
  const firstSlide = document.querySelector('.first--slide');
  const lastSlide = document.querySelector('.last--slide');

  // Let's hide the first slide after 10 seconds (adjust as needed)
  setTimeout(() => {
    firstSlide.style.opacity = '0';
    firstSlide.style.pointerEvents = 'none';

    // Show the last slide after the first slide has faded out
    setTimeout(() => {
      lastSlide.classList.remove('hidden');
    }, 1000); // Wait 1 second for the fade out to finish
  }, 10000); // 10 seconds before the transition begins
});
