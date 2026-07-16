document.addEventListener('DOMContentLoaded', () => {
  const sparkles = document.querySelectorAll('.sparkles span');
  sparkles.forEach((sparkle, index) => {
    sparkle.style.animationDelay = `${index * 0.15}s`;
  });
});
