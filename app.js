const projects = [
  "four-card-feature-section-master",
  "base-apparel-coming-soon-master",
  "intro-component-with-signup-form-master",
  "single-price-grid-component-master"
];

const list = document.getElementById('list');

projects.forEach((project, i) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `/${project}/index.html`;
  link.innerText = `${i + 1}. ${formatProjectName(project)}`;

  const img = document.createElement('img');
  img.src = `/${project}/design/desktop-design.jpg`;

  list.appendChild(listItem);
  link.prepend(img);
  listItem.appendChild(link);

});

function formatProjectName(name) {
  return name
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}