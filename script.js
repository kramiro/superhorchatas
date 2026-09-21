const menuButton =
  document.querySelector(".menu-toggle");

const navigation =
  document.querySelector(".main-nav");

const header =
  document.querySelector(".site-header");


/* =============================
   MENÚ MÓVIL
============================= */

menuButton?.addEventListener(
  "click",
  () => {
    const isOpen =
      navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  }
);


/* =============================
   FUNCIÓN DE SCROLL
============================= */

function scrollToSection(selector) {

  /*
    INICIO
    Siempre va hasta arriba.
  */

  if (
    selector === "#top" ||
    selector === "#inicio"
  ) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /*
    Buscar sección.
  */

  const target =
    document.querySelector(selector);

  if (!target) {
    return;
  }


  /*
    Altura REAL del header sticky.
  */

  const headerHeight =
    header
      ? header.getBoundingClientRect().height
      : 0;


  /*
    Posición absoluta de la sección.
  */

  const sectionTop =
    target.getBoundingClientRect().top +
    window.pageYOffset;


  /*
    Dejamos la sección exactamente
    debajo del header.
  */

  const scrollPosition =
    sectionTop -
    headerHeight;


  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth"
  });
}


/* =============================
   LINKS INTERNOS
============================= */

document
  .querySelectorAll("[data-scroll]")
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const href =
          link.getAttribute("href");

        if (
          !href ||
          !href.startsWith("#")
        ) {
          return;
        }


        /*
          Evitamos el comportamiento
          automático del navegador.
        */

        event.preventDefault();


        /*
          Cerramos menú móvil.
        */

        navigation?.classList.remove(
          "open"
        );

        menuButton?.setAttribute(
          "aria-expanded",
          "false"
        );


        /*
          Ejecutamos nuestro scroll.
        */

        scrollToSection(href);


        /*
          Actualizamos la URL sin
          provocar otro salto.
        */

        if (href !== "#top") {
          history.replaceState(
            null,
            "",
            href
          );
        } else {
          history.replaceState(
            null,
            "",
            window.location.pathname
          );
        }
      }
    );

  });


/* =============================
   AÑO AUTOMÁTICO
============================= */

const year =
  document.querySelector("#year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}
