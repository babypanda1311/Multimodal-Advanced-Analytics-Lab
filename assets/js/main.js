/* Renders the page from window.LAB and window.PUBLICATIONS (see data.js / publications.js) */
(function () {
  "use strict";
  var L = window.LAB, P = window.PUBLICATIONS || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var initials = function (n) { return n.replace(/^(Associate Professor|Professor|Dr\.?|A\/Prof\.?|Prof\.?)\s+/i, "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase(); };
  var linkList = function (arr) { return (arr || []).map(function (x) { return '<a href="' + esc(x.u) + '" target="_blank" rel="noopener">' + esc(x.l) + "</a>"; }).join(""); };

  var ICONS = {
    vision: '<circle cx="12" cy="12" r="3"/><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/>',
    health: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.2A8 8 0 1 1 21 12z"/><path d="M8 11h8M8 15h5"/>',
    sat: '<rect x="9" y="9" width="6" height="6" rx="1" transform="rotate(45 12 12)"/><path d="M4 4l3 3M17 17l3 3M3 12a9 9 0 0 1 9-9M21 12a9 9 0 0 1-9 9"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    brain: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="12" r="2.5"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3"/>'
  };
  var icon = function (k) { return '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || ICONS.brain) + "</svg>"; };

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var saved = null; try { saved = localStorage.getItem("maa-theme"); } catch (e) {}
  var prefersDark = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
  $("#mode").addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("maa-theme", t); } catch (e) {}
  });

  /* ---------- mobile menu ---------- */
  var burger = $("#burger"), menu = $("#menu");
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  /* ---------- hero / about ---------- */
  document.title = L.name + " | UTS";
  $("#h-aff").textContent = L.affiliation;
  $("#h-name").textContent = L.name;
  $("#h-tag").textContent = L.tagline;
  $("#stats").innerHTML = L.stats.map(function (s) { return "<li><b>" + esc(s.n) + "</b><span>" + esc(s.l) + "</span></li>"; }).join("");
  $("#about-t").innerHTML = L.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("#impact").innerHTML = L.impact.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
  $("#news").innerHTML = L.news.map(function (n) { return "<li><b>" + esc(n.d) + "</b>" + esc(n.t) + "</li>"; }).join("");
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- people ---------- */
  function person(p, lead) {
    var av = p.photo ? '<img src="' + esc(p.photo) + '" alt="Portrait of ' + esc(p.name) + '">' : esc(initials(p.name));
    return '<article class="card person' + (lead ? " lead-card" : "") + '">' +
      '<div class="avatar" aria-hidden="' + (p.photo ? "false" : "true") + '">' + av + "</div>" +
      "<div><span class=\"role\">" + esc(p.role) + "</span><h3>" + esc(p.name) + "</h3>" +
      (p.affiliation ? '<p class="aff">' + esc(p.affiliation) + "</p>" : "") +
      "<p>" + esc(p.bio) + "</p>" +
      (p.links && p.links.length ? '<div class="links">' + linkList(p.links) + "</div>" : "") + "</div></article>";
  }
  $("#people-grid").innerHTML = person(L.director, true) + L.coDirectors.map(function (c) { return person(c, false); }).join("");

  /* ---------- research ---------- */
  $("#themes").innerHTML = L.themes.map(function (t) {
    return '<article class="card theme"><div class="ic">' + icon(t.icon) + "</div><h3>" + esc(t.title) + "</h3><p>" + esc(t.text) + '</p><div class="tags">' +
      t.tags.map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</div></article>";
  }).join("");

  /* ---------- publications ---------- */
  var pubState = { q: "", type: "all", year: "all", shown: 25 };
  var PAGE = 25;
  var years = Array.from(new Set(P.map(function (x) { return x.y; }))).sort(function (a, b) { return b - a; });
  $("#pub-year").innerHTML = '<option value="all">All years</option>' + years.map(function (y) { return "<option>" + y + "</option>"; }).join("");
  var minY = years[years.length - 1], maxY = years[0];
  $("#pub-note").textContent = "Selected publications " + minY + "-" + maxY + " (" + P.length + " items listed). The complete record, including earlier work, is on the profiles below.";
  $("#pub-links").innerHTML = "Full list: " + L.fullListLinks.map(function (x) { return '<a href="' + esc(x.u) + '" target="_blank" rel="noopener">' + esc(x.l) + "</a>"; }).join(" · ");

  function hi(text, q) {
    var s = esc(text);
    if (!q) return s;
    try { return s.replace(new RegExp("(" + esc(q).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>"); } catch (e) { return s; }
  }
  var kindLabel = { journal: "Journal", conference: "Conf.", book: "Book" };
  function renderPubs() {
    var q = pubState.q.trim().toLowerCase();
    var list = P.filter(function (x) {
      if (pubState.type !== "all" && x.k !== pubState.type) return false;
      if (pubState.year !== "all" && String(x.y) !== pubState.year) return false;
      if (q && (x.t + " " + x.a + " " + x.v).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    $("#pub-count").textContent = list.length + " publication" + (list.length === 1 ? "" : "s");
    var out = "", last = null;
    list.slice(0, pubState.shown).forEach(function (x) {
      if (x.y !== last) { out += '<h3 class="yr">' + x.y + "</h3>"; last = x.y; }
      var title = x.doi ? '<a href="' + esc(x.doi) + '" target="_blank" rel="noopener">' + hi(x.t, q) + "</a>" : hi(x.t, q);
      out += '<article class="pub"><span class="badge ' + x.k + '">' + kindLabel[x.k] + "</span><div><p class=\"t\">" + title + '</p><p class="a">' + hi(x.a, q) + '</p><p class="v">' + hi(x.v, q) + "</p></div></article>";
    });
    $("#pub-list").innerHTML = out || '<p class="muted">No publications match your search.</p>';
    $("#pub-more").style.display = list.length > pubState.shown ? "" : "none";
  }
  var deb; $("#pub-q").addEventListener("input", function (e) { clearTimeout(deb); deb = setTimeout(function () { pubState.q = e.target.value; pubState.shown = PAGE; renderPubs(); }, 150); });
  $("#pub-year").addEventListener("change", function (e) { pubState.year = e.target.value; pubState.shown = PAGE; renderPubs(); });
  $("#pub-more").addEventListener("click", function () { pubState.shown += PAGE; renderPubs(); });
  function segment(sel, cb) {
    var box = $(sel);
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      Array.prototype.forEach.call(box.children, function (c) { c.classList.remove("on"); c.setAttribute("aria-selected", "false"); });
      b.classList.add("on"); b.setAttribute("aria-selected", "true"); cb(b.getAttribute("data-v"));
    });
  }
  segment("#pub-type", function (v) { pubState.type = v; pubState.shown = PAGE; renderPubs(); });
  renderPubs();

  /* ---------- funding ---------- */
  var fs = { q: "", st: "all" };
  function renderFunding() {
    var q = fs.q.trim().toLowerCase();
    var rows = L.funding.filter(function (f) {
      return (fs.st === "all" || f.st === fs.st) && (!q || (f.s + " " + f.p).toLowerCase().indexOf(q) >= 0);
    });
    $("#fund-tbl tbody").innerHTML = rows.map(function (f) {
      return "<tr><td>" + esc(f.y) + "</td><td>" + esc(f.s) + "</td><td>" + esc(f.p) + '</td><td><span class="st ' + f.st + '">' + f.st + "</span></td></tr>";
    }).join("") || '<tr><td colspan="4" class="muted">No projects match.</td></tr>';
  }
  $("#fund-q").addEventListener("input", function (e) { fs.q = e.target.value; renderFunding(); });
  segment("#fund-st", function (v) { fs.st = v; renderFunding(); });
  renderFunding();

  /* ---------- students ---------- */
  var tab = "current";
  function renderStudents() {
    var list = L.students.filter(function (s) { return s.st === tab; });
    if (tab === "graduated") list.sort(function (a, b) { return (b.yr || 0) - (a.yr || 0); });
    $("#stu-grid").innerHTML = list.map(function (s) {
      return '<article class="card"><h3>' + esc(s.n) + '</h3><div class="chip-row"><span class="chip">' + esc(s.deg) + "</span><span class=\"chip\">" + esc(s.role) + "</span>" +
        (s.yr ? '<span class="chip">Graduated ' + s.yr + "</span>" : "") + "</div><p>" + esc(s.t) + "</p></article>";
    }).join("");
  }
  segment("#stu-tab", function (v) { tab = v; renderStudents(); });
  renderStudents();

  /* ---------- collaborators ---------- */
  var chips = function (a) { return a.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join(""); };
  $("#c-ind").innerHTML = chips(L.collab.industry);
  $("#c-au").innerHTML = chips(L.collab.academicAU);
  $("#c-intl").innerHTML = L.collab.academicIntl.map(function (g) { return '<div class="country"><b>' + esc(g.c) + '</b><div class="chips">' + chips(g.l) + "</div></div>"; }).join("");

  /* ---------- service ---------- */
  var ul = function (a) { return a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); };
  $("#s-awards").innerHTML = ul(L.service.awards);
  $("#s-chair").innerHTML = ul(L.service.chair);
  $("#s-edit").innerHTML = ul(L.service.editorial);

  /* ---------- contact ---------- */
  var c = L.contact;
  $("#join").textContent = c.join;
  $("#mail").href = "mailto:" + c.email + "?subject=" + encodeURIComponent("Enquiry: " + L.name);
  $("#mail2").href = "mailto:" + c.email; $("#mail2").textContent = c.email;
  $("#phone").textContent = c.phone;
  $("#addr").innerHTML = c.address.map(esc).join("<br>");
  $("#c-links").innerHTML = linkList(L.director.links);

  /* ---------- scroll helpers ---------- */
  var totop = $("#totop");
  totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  var links = Array.prototype.slice.call(document.querySelectorAll(".menu a"));
  var secs = links.map(function (a) { return $(a.getAttribute("href")); });
  function onScroll() {
    totop.classList.toggle("show", window.scrollY > 600);
    var y = window.scrollY + 120, cur = -1;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle("act", i === cur); });
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
})();
