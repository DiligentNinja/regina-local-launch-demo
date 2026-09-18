(function () {
  "use strict";
  var root = document.documentElement;
  var folio = document.getElementById("folio");
  var ghost = document.getElementById("ghost");
  var chapters = document.querySelectorAll("[data-folio]");

  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? window.scrollY / max : 0;
  }
  function tick() {
    root.style.setProperty("--p", progress().toFixed(4));
    var mid = window.innerHeight * 0.4;
    var current = "Title";
    chapters.forEach(function (ch) {
      var r = ch.getBoundingClientRect();
      if (r.top <= mid) current = ch.getAttribute("data-folio") || current;
    });
    if (folio) folio.textContent = current;
    if (ghost) ghost.textContent = current;
  }
  tick();
  window.addEventListener("scroll", tick, { passive: true });
})();
