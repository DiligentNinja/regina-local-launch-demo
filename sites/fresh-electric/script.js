(function () {
  "use strict";
  var root = document.documentElement;
  var body = document.body;
  var stamps = document.querySelectorAll("#stamps b");
  var close = document.getElementById("close");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? window.scrollY / max : 0;
  }
  function tick() {
    var p = progress();
    root.style.setProperty("--p", p.toFixed(4));
    stamps.forEach(function (el) {
      var at = parseFloat(el.getAttribute("data-at") || "1");
      if (p >= at) el.classList.add("is-in");
    });
    if (close && close.getBoundingClientRect().top < window.innerHeight * 0.62) {
      body.classList.add("is-close");
    } else {
      body.classList.remove("is-close");
    }
  }
  var shot = parseFloat(new URLSearchParams(window.location.search).get("p") || "");
  if (!isNaN(shot)) {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, Math.max(0, max * shot));
  }
  tick();
  window.addEventListener("scroll", tick, { passive: true });

  if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    window.addEventListener("pointermove", function (e) {
      root.style.setProperty("--mx", ((e.clientX / window.innerWidth) - 0.5).toFixed(3));
      root.style.setProperty("--my", ((e.clientY / window.innerHeight) - 0.5).toFixed(3));
    }, { passive: true });
  }
})();
