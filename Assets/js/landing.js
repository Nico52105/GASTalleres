document.addEventListener("DOMContentLoaded", function () {
  var revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach(function (element) {
    observer.observe(element);
  });
});
