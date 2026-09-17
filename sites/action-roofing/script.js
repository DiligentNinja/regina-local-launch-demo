document.getElementById("lead")?.addEventListener("submit", function (event) {
  event.preventDefault();
  var status = document.getElementById("status");
  if (status) {
    status.textContent = "Preview only — this form is not connected yet. Call or email Action Roofing to reach the shop today.";
  }
});
