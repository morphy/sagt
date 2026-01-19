const mobileMenu = () => {
  const button = document.getElementById("mobileMenuButton");
  const menu = document.getElementById("mobileMenu");

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
};

export default mobileMenu;
