// protect.js
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  if ((e.ctrlKey || e.metaKey) && (key === "s" || key === "u")) {
    e.preventDefault();
  }
  if (e.key === "F12") {
    e.preventDefault();
  }
});
