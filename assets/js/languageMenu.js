const languageMenu = () => {
  const button = document.getElementById("languageMenuButton");
  const menu = document.getElementById("languageMenu");

  const clickAwayListener = (event) => {
    console.log("document EL fired");

    if (!event.composedPath().includes(menu)) {
      menu.classList.add("hidden");
    }
  };

  button.addEventListener("click", (event) => {
    const isHidden = menu.classList.contains("hidden");
    event.stopPropagation();

    if (isHidden) {
      menu.classList.remove("hidden");

      console.log("adding document EL");
      document.addEventListener("click", clickAwayListener, { once: true });

      return;
    }

    menu.classList.add("hidden");
    document.removeEventListener("click", clickAwayListener);
  });
};

export default languageMenu;
