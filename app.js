const projects = [
  {
    name: "easybank-landing-page",
  },
  {
    name: "insure-landing-page",
  },
  {
    name: "base-apparel-coming-soon",
  },
  {
    name: "single-price-grid-component",
  },
  {
    name: "intro-component-with-signup-form",
  },
  {
    name: "project-tracking-intro-component",
  },
  {
    name: "pricing-component-with-toggle",
  },
  {
    name: "four-card-feature-section",
  },

  {
    name: "ping-coming-soon-page",
  },
  {
    name: "huddle-landing-page",
  },
  {
    name: "fylo-landing-page",
  },

  {
    name: "single-introductory-section",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name }, i) => {
  const listLink = document.createElement("a");
  const listItem = document.createElement("li");
  listLink.href = `/${name}/index.html`;

  listItem.innerHTML = `
    <img src="/${name}/design/desktop-design.jpg"/>
    <p>${i + 1}. ${formatProjectName(name)}</p>

    <div class="link-container">
      <a href="/${name}/index.html"><i class="fas fa-eye"></i></a>
    </div>
  `;
  list.appendChild(listLink);
  listLink.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
