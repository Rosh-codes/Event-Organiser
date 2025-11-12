// Scroll reveal using IntersectionObserver for performance
export const initScrollReveal = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const options = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.05,
  };

  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, options);

  const elements = Array.from(document.querySelectorAll('.reveal'));
  elements.forEach((el) => observer.observe(el));
};

export default initScrollReveal;
