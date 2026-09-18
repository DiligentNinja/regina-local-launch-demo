(function () {
  "use strict";
  var nodes = document.querySelectorAll("[data-rise]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("ke-show");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.1 });
    nodes.forEach(function (n) { io.observe(n); });
  } else {
    nodes.forEach(function (n) { n.classList.add("ke-show"); });
  }

  document.querySelectorAll(".ke-card-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var body = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (body) body.hidden = expanded;
    });
  });

  document.querySelectorAll(".ke-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var t = btn.getAttribute("data-copy") || "";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () {
          var prev = btn.textContent;
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = prev; }, 1600);
        });
      }
    });
  });

  var chips = document.querySelectorAll(".ke-chip");
  var cards = document.querySelectorAll(".ke-card[data-tags]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-on"); });
      chip.classList.add("is-on");
      var f = chip.getAttribute("data-filter");
      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-tags") || "").split(/\s+/);
        var show = f === "all" || tags.indexOf(f) !== -1;
        card.classList.toggle("is-dim", !show);
        card.hidden = false;
      });
    });
  });
})();
