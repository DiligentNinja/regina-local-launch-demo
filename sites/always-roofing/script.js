(function () {
  "use strict";
  var nodes = document.querySelectorAll("[data-enter]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("ar-visible");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    nodes.forEach(function (n) { io.observe(n); });
  } else {
    nodes.forEach(function (n) { n.classList.add("ar-visible"); });
  }

  var btn = document.getElementById("ar-copy");
  if (btn) {
    btn.addEventListener("click", function () {
      var trade = document.getElementById("ar-trade");
      var see = document.getElementById("ar-see");
      var wet = document.getElementById("ar-wet");
      var addr = document.getElementById("ar-addr");
      var out = document.getElementById("ar-brief");
      var text =
        "Always Roofing brief for Mike Stephenson\n" +
        "Trade: " + (trade ? trade.value : "") + "\n" +
        "Seen: " + (see ? see.value : "") + "\n" +
        "Interior wet: " + (wet ? wet.value : "") + "\n" +
        "Address: " + (addr ? addr.value : "") + "\n" +
        "Call: 306-209-5007";
      if (out) { out.hidden = false; out.textContent = text; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = "Brief copied";
        });
      }
    });
  }

  document.querySelectorAll(".ar-copy-script").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var t = btn.getAttribute("data-copy") || "";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () {
          var prev = btn.textContent;
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = prev; }, 1500);
        });
      }
    });
  });
})();
