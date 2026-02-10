const menu = () => {
  const button = document.getElementById("menuButton");
  const menu = document.getElementById("menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
};

export default menu;
