//Main
const projects = [
  {
    name: "Calculator",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/Calculator-App",
  },
  {
    name: "Card Details",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/Interactive-Card-Details",
  },
  {
    name: "Interactive-Rating-Component",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/Interactive-Rating-Component",
  },
  {
    name: "NFT-Preview-Card",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/NFT-Preview-Card",
  },
  {
    name: "Notifications-Page",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/Notifications-Page",
  },
  {
    name: "Product-Preview-Card-Component",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/Product-Preview-Card-Component",
  },
  {
    name: "QR-Code-Component",
    URL: "https://alexbr784.github.io/solutions-frontend-mentor/QR-Code-Component",
  },
];

const ul = document.getElementById("dropUl");
const dropDiv = document.getElementById("drop");
const search = document.querySelector(".form-control");
const badge = document.getElementById("badge");
const projectsLen = projects.length;

badge.innerHTML = projectsLen;

console.log(search);
const onSubmit = (e) => {
  e.preventDefault();
  ul.innerHTML = "";
  const searchFor = search.value;
  console.log(searchFor);
  const filtered = projects.filter((item) =>
    item.name.toLowerCase().includes(searchFor.toLowerCase())
  );

  filterPerName(filtered);
};

function filterPerName(filtered) {
  if (filtered.length == 0) filtered = projects;
  for (const project of filtered) {
    ul.innerHTML += `<li><a class='dropdown-item d-flex align-items-center gap-2 py-2'href='${project.URL}'><span class='d-inline-block bg-success rounded-circle p-1'></span>${project.name}</a></li>`;
  }
}
