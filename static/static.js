

  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".same");

  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.01)";
       el.style.border = "3px solid white";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
         el.style.border = "none";
    });
  });
});


  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".same2");

  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.08)";
      el.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
      el.style.boxShadow = "none";
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".same3");

  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.08)";
      el.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
      el.style.boxShadow = "none";
    });
  });
});