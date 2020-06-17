const projects = [{
    name: "four-card-feature-section",
  },
  {
    name: "base-apparel-coming-soon",
  },
  {
    name: "intro-component-with-signup-form",
  },
  {
    name: "single-price-grid-component",
  },
  {
    name: "ping-coming-soon-page",
  },
];

const list = document.getElementById("list");

projects.forEach(({
  name
}, i) => {
  const listLink = document.createElement("a")
  const listItem = document.createElement("li");
  listLink.href = `/${name}/index.html`;

  listItem.innerHTML = `
    <img src="/${name}/design/desktop-design.jpg"/>
    <p>${i + 1}. ${formatProjectName(name)}</p>

    <div class="link-container">
      <a href="/${name}/index.html"><i class="fas fa-eye"></i></a>
    </div>
  `;
  list.appendChild(listLink)
  listLink.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}