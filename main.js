// Helper functions
const fetchData = () => {
  fetch("https://api.disneyapi.dev/character")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// EventListeners
window.addEventListener("load", () => {
  fetchData();
});
