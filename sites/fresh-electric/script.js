(function () {
  "use strict";
  var nodes = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("fe-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach(function (n) { io.observe(n); });
  } else {
    nodes.forEach(function (n) { n.classList.add("fe-in"); });
  }

  var btn = document.getElementById("fe-copy-brief");
  if (btn) {
    btn.addEventListener("click", function () {
      var type = document.getElementById("fe-type");
      var symptom = document.getElementById("fe-symptom");
      var addr = document.getElementById("fe-addr");
      var out = document.getElementById("fe-brief-out");
      var text =
        "Fresh Electric brief\n" +
        "Type: " + (type ? type.value : "") + "\n" +
        "Symptom: " + (symptom ? symptom.value : "") + "\n" +
        "Address/access: " + (addr ? addr.value : "") + "\n" +
        "Call: 306-536-4737";
      if (out) {
        out.hidden = false;
        out.textContent = text;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { btn.textContent = "Brief copied"; },
          function () { btn.textContent = "Copy failed — see brief below"; }
        );
      } else {
        btn.textContent = "Brief shown below — copy manually";
      }
    });
  }

  document.querySelectorAll(".fe-faq-item summary").forEach(function (s) {
    s.addEventListener("click", function () {
      /* native details; sticky remains available */
    });
  });
})();
