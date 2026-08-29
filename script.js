/* Graynotes — small helpers only. No analytics, no pixels. */
(function () {
  document.documentElement.classList.add("has-js");

  document.querySelectorAll(".prose table").forEach(function (table) {
    if (table.parentElement && table.parentElement.classList.contains("table-wrap")) return;
    var wrap = document.createElement("div");
    wrap.className = "table-wrap";
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
})();
