(function () {
  "use strict";
  var root = document.documentElement;
  var body = document.body;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? window.scrollY / max : 0;
  }
  function tick() {
    var p = progress();
    var split = reduce ? (p > 0.8 ? 92 : 50) : (p < 0.2 ? 50 : Math.min(92, 50 + (p - 0.2) * 52.5));
    root.style.setProperty("--p", p.toFixed(4));
    root.style.setProperty("--split", split.toFixed(2));
    if (p > 0.78) body.classList.add("is-won");
    else body.classList.remove("is-won");
  }
  var shot = parseFloat(new URLSearchParams(window.location.search).get("p") || "");
  if (!isNaN(shot)) {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, Math.max(0, max * shot));
  }
  tick();
  window.addEventListener("scroll", tick, { passive: true });
})();
