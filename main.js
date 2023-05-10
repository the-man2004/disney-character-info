// DOM elements
const cardContainer = document.querySelector(".card-container");
const buttons = document.querySelector(".buttons");

// Global variables
const URL = "https://api.disneyapi.dev/character";
let nextPage, prevPage;

// Helper functions
const renderInfo = (data) => {
  data.forEach((char) => {
    cardContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <li class="card">
            <img src="${char.imageUrl}" alt="">
            <p>${char.name}</p>
        </li>
    `
    );
  });
};

const fetchData = (url) => {
  if (url === null) return;

  fetch(url)
    .then((res) => res.json())
    .then((info) => {
      console.log(info);

      nextPage = info.info.nextPage;
      prevPage = info.info.previousPage;

      cardContainer.innerHTML = "";
      renderInfo(info.data);
    });
};

// EventListeners
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("prev-btn")) {
    console.log("prev");
    fetchData(prevPage);
  }
  if (e.target.classList.contains("next-btn")) {
    console.log("next");
    fetchData(nextPage);
  }
});

window.addEventListener("load", () => {
  fetchData(URL);
});
