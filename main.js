document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     BURGER MENU
  ======================= */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");

  if (burger && menu) {
    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  }

  /* =======================
     HERO ANIMATION (ON SCROLL)
  ======================= */
  const hero = document.querySelector(".hero");

  if (hero) {
    const heroItems = hero.querySelectorAll(
      ".container-hero, .box-content, .box-img"
    );

    const heroObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            heroItems.forEach(el => el.classList.add("active"));
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    heroObserver.observe(hero);
  }

  /* =======================
     ABOUT OVERLAY (CURTAIN EFFECT)
  ======================= */
  const aboutSection = document.querySelector(".about");
  const overlay = aboutSection?.querySelector(".glass-overlay");

  if (aboutSection && overlay) {
    const aboutObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            overlay.classList.add("active"); // твій curtain-ефект
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px"
      }
    );

    aboutObserver.observe(aboutSection);
  }

  /* =======================
     BOX CHECK ANIMATION
  ======================= */
  const boxes = document.querySelectorAll(".box-check");

  if (boxes.length) {
    const boxObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    boxes.forEach(box => boxObserver.observe(box));
  }

  /* =======================
     SWIPER
  ======================= */
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

});

