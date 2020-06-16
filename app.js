const projects = [
  "four-card-feature-section-master",
  "base-apparel-coming-soon-master",
  "intro-component-with-signup-form-master",
  "single-price-grid-component-master"
]

projects.forEach(project => {
  const link = document.createElement('a');
  link.src = project;
})