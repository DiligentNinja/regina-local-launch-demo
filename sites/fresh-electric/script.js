(function () {
  "use strict";
  var btn = document.getElementById("brief-copy");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var type = document.getElementById("brief-type");
    var symptom = document.getElementById("brief-symptom");
    var addr = document.getElementById("brief-addr");
    var out = document.getElementById("brief-out");
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
})();
