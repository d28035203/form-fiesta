/**
 * validate.js — client-side form checks (web tech practice)
 */
(function () {
  var form = document.getElementById("f");
  var msg = document.getElementById("msg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.className = "error";
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var pw = document.getElementById("pw").value;
    if (name.length < 2) { msg.textContent = "Name too short."; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      msg.textContent = "Email looks wrong."; return;
    }
    if (pw.length < 6) { msg.textContent = "Password min 6 chars."; return; }
    msg.className = "";
    msg.textContent = "Looks good — (no server, just a fiesta).";
    form.reset();
  });
})();
