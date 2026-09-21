const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    navigation.classList.remove("open");

    menuButton?.setAttribute(
      "aria-expanded",
      "false"
    );

    if (!href || !href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    if (href === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    const headerHeight =
      header?.getBoundingClientRect().height || 0;

    const extraSpace = 24;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      extraSpace;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  });
});

/* También corrige el botón "Cómo llegar" */
document
  .querySelectorAll('a[href="#ubicacion"]')
  .forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.closest(".main-nav")) {
        return;
      }

      event.preventDefault();

      const target =
        document.querySelector("#ubicacion");

      if (!target) {
        return;
      }

      const headerHeight =
        header?.getBoundingClientRect().height || 0;

      const targetTop =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        24;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  });

/* Año automático */
const year =
  document.querySelector("#year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}
