// simmodlr shared behaviour: theme, scroll reveal, chart animation.
document.body.dataset.theme = 'paper';

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Animate chart bars when in view
const chartObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar').forEach((b, i) => {
        setTimeout(() => b.classList.add('animate'), i * 80);
      });
      chartObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.chart-wrap').forEach(el => chartObs.observe(el));
