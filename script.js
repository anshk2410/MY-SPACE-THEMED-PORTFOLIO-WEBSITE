"use strict";
/* =====================================================================
   EDIT ME FIRST: your details. Leave a value as "" to hide it.
   ===================================================================== */
const CONFIG = {
  name: "Ansh",
  brand: "The Design Loop",
  location: "",        // e.g. "Mumbai, India" (hidden until you fill it in)
  availability: "",    // e.g. "Open to new projects" (hidden until you fill it in)
  email: "anshkanagare24@gmail.com",
  whatsapp: "917028681702",   // country code + number, no + or spaces (91 = India)
  instagram: "https://www.instagram.com/the_design_loop24/",
  // Replace with your real channel link, e.g. "https://www.youtube.com/@yourhandle"
  youtube: "https://www.youtube.com/results?search_query=The+Design+Loop+24",
  github: ""           // e.g. "https://github.com/yourname"
};

/* ===== Services (also drive the four planets) ===== */
const SV = [
  { k: "web", n: "Web Design", p: "Earth", o: [60, 40, 40, -8],
    d: "Modern, responsive websites designed to present brands, projects, and businesses professionally.",
    i: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/>',
    l: ["Landing pages", "Portfolio websites", "Personal websites", "Responsive layouts", "Basic interactive features"] },
  { k: "graphic", n: "Graphic Design", p: "Venus", o: [38, 28, 34, -16],
    d: "Distinctive visual assets designed to communicate ideas clearly and build a consistent visual identity.",
    i: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    l: ["Posters and banners", "Social media graphics", "Thumbnails", "Promotional creatives", "Brand identity concepts"] },
  { k: "video", n: "Video & Reel Editing", p: "Mars", o: [80, 56, 34, -34],
    d: "Engaging short-form videos and polished edits created for digital platforms.",
    i: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
    l: ["Instagram Reels", "YouTube Shorts", "Video cuts and transitions", "Text and subtitle treatments", "Music and pacing edits"] },
  { k: "content", n: "Content Creation", p: "Jupiter", o: [96, 76, 54, -20],
    d: "Digital content concepts designed to capture attention and communicate messages effectively.",
    i: '<path d="M4 5h16v10H9l-5 4z"/>',
    l: ["Social media content ideas", "Content planning", "Captions and hooks", "Visual storytelling", "Campaign concepts"] }
];

/* ===== Projects: add yours here. Keep "Concept Project" until they are real work.
   c = filter category (web, graphics, video, content)
   tl = tools used, e.g. "Figma, Premiere Pro" (hidden when empty)
   u  = project link, e.g. "https://..." (button hidden when empty) ===== */
const PR = [
  { id: "nova", c: "web", cl: "Web Design", t: "Nova",
    d: "A futuristic landing-page concept for an imaginary space-tech startup.",
    tg: ["Landing page", "Responsive", "Animation"],
    o: "Show how one page can explain a product clearly and still feel cinematic.",
    a: "A dark layout, one strong hero, short sections and clear calls to action.", tl: "", u: "" },
  { id: "nebula", c: "graphics", cl: "Graphics", t: "Nebula",
    d: "A visual identity and social graphics concept built around gradients and a simple logo mark.",
    tg: ["Identity", "Social graphics", "Colour"],
    o: "Create a small, consistent set of visuals that look like one brand.",
    a: "A limited palette, one repeating shape and flexible post templates.", tl: "", u: "" },
  { id: "afterglow", c: "video", cl: "Video Editing", t: "Afterglow",
    d: "A short-form video editing concept focused on rhythm, captions and transitions.",
    tg: ["Reel", "Captions", "Pacing"],
    o: "Keep viewers watching a 30-second vertical video from the first second.",
    a: "Cuts timed to the music, clear on-screen text and simple transitions.", tl: "", u: "" },
  { id: "signal", c: "content", cl: "Content Creation", t: "Signal",
    d: "A digital content campaign concept with hooks, captions and a posting plan.",
    tg: ["Campaign", "Hooks", "Planning"],
    o: "Turn one message into a week of posts that fit together.",
    a: "A single theme, varied formats and a clear call to action on each post.", tl: "", u: "" }
];

/* ===== Space facts: edit or add freely. First four show as cards. ===== */
const FACTS = [
  { t: "The Sun is a star", x: "It sits at the centre of our solar system, and its gravity keeps everything in orbit.", g: "radial-gradient(circle at 35% 30%,#fff3b0,#ffb43a 50%,#ff6a13)" },
  { t: "Eight planets", x: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune all orbit the Sun.", g: "radial-gradient(circle at 32% 30%,#9ad8ff,#1d62d0 55%,#0a2a63)" },
  { t: "Sunlight takes time", x: "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.", g: "radial-gradient(circle,#fff,#bfe9ff 40%,#2a6bff)" },
  { t: "Saturn's rings", x: "They are made mostly of ice particles, mixed with some rocky material and dust.", g: "radial-gradient(circle at 32% 30%,#f5dfae,#c9a05b 55%,#6e4f22)", r: 1 },
  { t: "Jupiter is huge", x: "Jupiter is the largest planet in our solar system." },
  { t: "Backwards on Venus", x: "Venus spins in the opposite direction to most planets, so the Sun rises in the west there." },
  { t: "Why Mars is red", x: "Its dust and rocks contain iron oxide, which is rust." },
  { t: "A drifting Moon", x: "The Moon is moving away from Earth by about 3.8 centimetres every year." },
  { t: "A long day", x: "One full spin of Venus takes longer than one trip around the Sun." }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Starfield ---------- */
(() => {
  const c = $("#stars"), x = c.getContext("2d");
  let w = 0, h = 0, S = [], on = false;
  const rnd = Math.random;
  function size() {
    w = c.width = innerWidth; h = c.height = innerHeight;
    S = Array.from({ length: w < 700 ? 90 : 170 }, () => ({
      x: rnd() * w, y: rnd() * h, r: rnd() * 1.3 + .2, p: rnd() * 6.28, s: rnd() * .02 + .005,
      c: rnd() < .2 ? "160,200,255" : rnd() < .3 ? "200,160,255" : "255,255,255"
    }));
  }
  function draw() {
    x.clearRect(0, 0, w, h);
    for (const s of S) {
      const a = RM ? .8 : .45 + .45 * Math.sin(s.p += s.s);
      x.fillStyle = "rgba(" + s.c + "," + a + ")";
      x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill();
    }
  }
  function loop() { draw(); if (!RM && !document.hidden) requestAnimationFrame(loop); else on = false; }
  size(); on = !RM; loop();
  let lw = innerWidth;
  addEventListener("resize", () => { if (innerWidth !== lw) { lw = innerWidth; size(); if (RM) draw(); } });
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !RM && !on) { on = true; loop(); } });
})();

/* ---------- Nav, progress bar, back-to-top ---------- */
const B = $("#burger"), M = $("#menu");
const tog = o => { M.classList.toggle("open", o); B.setAttribute("aria-expanded", o); B.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
B.onclick = () => tog(!M.classList.contains("open"));
M.onclick = e => { if (e.target.closest("a")) tog(false); };
addEventListener("keydown", e => { if (e.key === "Escape") tog(false); });

let tk = 0;
addEventListener("scroll", () => {
  if (tk) return;
  tk = requestAnimationFrame(() => {
    tk = 0;
    const m = document.documentElement.scrollHeight - innerHeight;
    $("#bar").style.width = (m > 0 ? scrollY / m * 100 : 0) + "%";
    $("#top").classList.toggle("show", scrollY > 700);
  });
}, { passive: true });

const navLinks = $$("#menu a");
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.setAttribute("aria-current", a.hash === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { threshold: .3 });
$$(".rv").forEach(el => rv.observe(el));

/* ---------- Hero: rotating line + pointer parallax ---------- */
if (!RM) {
  const sp = $$(".cycle span"); let n = 0;
  setInterval(() => { sp[n].classList.remove("on"); n = (n + 1) % sp.length; sp[n].classList.add("on"); }, 2400);
}
if (matchMedia("(pointer:fine)").matches && !RM) {
  const hero = $(".planet"); let pf = 0;
  addEventListener("pointermove", e => {
    if (pf) return;
    pf = requestAnimationFrame(() => {
      pf = 0;
      hero.style.setProperty("--px", (e.clientX / innerWidth - .5).toFixed(3));
      hero.style.setProperty("--py", (e.clientY / innerHeight - .5).toFixed(3));
    });
  });
}

/* ---------- Solar system + services ---------- */
const gcls = k => "g-" + k;
$("#ss").insertAdjacentHTML("beforeend", SV.map((s, i) =>
  `<div class="orbit" style="--d:${s.o[0]}%;--t:${s.o[1]}s;--dl:${s.o[3]}s">` +
  `<button class="pl ${gcls(s.k)}" style="--s:${s.o[2]}px" data-i="${i}" aria-pressed="false" aria-label="${s.n} (${s.p})">` +
  `<span class="o"></span><span class="nm">${s.n}</span></button></div>`).join(""));

const info = $("#pinfo");
function pick(i) {
  const s = SV[i];
  $$(".pl").forEach(b => b.setAttribute("aria-pressed", b.dataset.i == i));
  info.innerHTML = `<h3>${s.n} <small>(${s.p})</small></h3><p>${s.d}</p><a class="btn sm pri" href="#sv-${s.k}" data-open="${s.k}">See ${s.n} details</a>`;
}
$$(".pl").forEach(b => {
  b.onclick = () => pick(+b.dataset.i);
  b.onmouseenter = () => pick(+b.dataset.i);
  b.onfocus = () => pick(+b.dataset.i);
});
pick(0);

$("#cards").innerHTML = SV.map(s =>
  `<article class="card sv" id="sv-${s.k}"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${s.i}</svg>` +
  `<h3>${s.n}</h3><p>${s.d}</p>` +
  `<div class="more" id="m-${s.k}" hidden><p class="mini">Possible deliverables</p><ul>${s.l.map(x => `<li>${x}</li>`).join("")}</ul></div>` +
  `<button class="btn sm" aria-expanded="false" aria-controls="m-${s.k}">Explore Service</button></article>`).join("");

function toggleSv(card, open) {
  const b = $("button", card), m = $(".more", card);
  m.hidden = !open; b.setAttribute("aria-expanded", open); b.textContent = open ? "Hide details" : "Explore Service";
}
$("#cards").onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  const card = b.closest(".sv"); toggleSv(card, $(".more", card).hidden);
};
info.onclick = e => {
  const a = e.target.closest("[data-open]");
  if (a) toggleSv($("#sv-" + a.dataset.open), true);
};

/* ---------- About panel ---------- */
$("#panel").innerHTML = [
  ["Creator", CONFIG.name], ["Brand", CONFIG.brand], ["Focus", "Digital Creativity"],
  ["Based in", CONFIG.location], ["Availability", CONFIG.availability]
].filter(r => r[1]).map(r => `<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("");

/* ---------- Projects ---------- */
const art = {
  web: '<rect x="20" y="14" width="160" height="92" rx="8" fill="#0b1430" stroke="#4aa8ff"/><rect x="20" y="14" width="160" height="14" rx="8" fill="#16264d"/><circle cx="52" cy="66" r="20" fill="#2a6bff"/><rect x="86" y="52" width="76" height="8" rx="4" fill="#19d3ff"/><rect x="86" y="68" width="54" height="6" rx="3" fill="#a3b3d6"/><rect x="86" y="82" width="34" height="12" rx="6" fill="#a43cff"/>',
  graphics: '<circle cx="76" cy="60" r="38" fill="#19d3ff" fill-opacity=".55"/><circle cx="116" cy="60" r="38" fill="#a43cff" fill-opacity=".55"/><circle cx="96" cy="86" r="30" fill="#ffffff" fill-opacity=".35"/>',
  video: '<rect x="22" y="12" width="156" height="78" rx="8" fill="#0b1430" stroke="#4aa8ff"/><path d="M90 36l30 15-30 15z" fill="#19d3ff"/><rect x="22" y="98" width="156" height="10" rx="5" fill="#16264d"/><rect x="22" y="98" width="70" height="10" rx="5" fill="#a43cff"/>',
  content: '<rect x="30" y="14" width="110" height="64" rx="10" fill="#16264d" stroke="#4aa8ff"/><rect x="50" y="32" width="110" height="64" rx="10" fill="#1d2f66" stroke="#19d3ff"/><rect x="70" y="50" width="80" height="8" rx="4" fill="#19d3ff"/><rect x="70" y="66" width="56" height="6" rx="3" fill="#a3b3d6"/>'
};
$("#projects").innerHTML = PR.map(p =>
  `<article class="card pj" data-c="${p.c}"><div class="art ${p.c}"><svg viewBox="0 0 200 120" aria-hidden="true">${art[p.c]}</svg><span class="tag-c">Concept Project</span></div>` +
  `<div class="pb"><p class="cat">${p.cl}</p><h3>${p.t}</h3><p>${p.d}</p>` +
  `<ul class="tags">${p.tg.map(t => `<li>${t}</li>`).join("")}</ul>` +
  `<button class="btn sm" data-id="${p.id}">View Project</button></div></article>`).join("");

$$(".filters .btn").forEach(b => b.onclick = () => {
  $$(".filters .btn").forEach(x => x.setAttribute("aria-pressed", x === b));
  $$(".pj").forEach(c => { c.hidden = !(b.dataset.f === "all" || c.dataset.c === b.dataset.f); });
});

const D = $("#dlg");
$("#projects").onclick = e => {
  const b = e.target.closest("[data-id]"); if (!b) return;
  const p = PR.find(x => x.id === b.dataset.id);
  D.innerHTML = `<button class="x" aria-label="Close project details">&times;</button>` +
    `<p class="cat">${p.cl} | Concept Project</p><h3 id="dt">${p.t}</h3><p>${p.d}</p>` +
    `<h4>Objective</h4><p>${p.o}</p><h4>Creative approach</h4><p>${p.a}</p>` +
    (p.tl ? `<h4>Tools used</h4><p>${p.tl}</p>` : "") +
    (p.u ? `<a class="btn pri" href="${p.u}" target="_blank" rel="noopener">Open project link</a>` : "");
  D.showModal(); document.body.classList.add("lock");
};
D.addEventListener("click", e => { if (e.target === D || e.target.closest(".x")) D.close(); });
D.addEventListener("close", () => document.body.classList.remove("lock"));

/* ---------- Space facts ---------- */
$("#fcards").innerHTML = FACTS.slice(0, 4).map(f =>
  `<article class="card fc"><i class="o fo${f.r ? " rg" : ""}" style="--g:${f.g}"></i><h3>${f.t}</h3><p>${f.x}</p></article>`).join("");
let last = -1;
$("#more").onclick = () => {
  let i; do { i = Math.floor(Math.random() * FACTS.length); } while (i === last && FACTS.length > 1);
  last = i; $("#fact").innerHTML = `<b>${FACTS[i].t}.</b> ${FACTS[i].x}`;
};

/* ---------- Contact ---------- */
const LINKS = [
  ["Email", CONFIG.email, CONFIG.email && "mailto:" + CONFIG.email],
  ["WhatsApp", "+" + CONFIG.whatsapp.slice(0, 2) + " " + CONFIG.whatsapp.slice(2), CONFIG.whatsapp && "https://wa.me/" + CONFIG.whatsapp],
  ["Instagram", "@the_design_loop24", CONFIG.instagram],
  ["YouTube", "The Design Loop 24", CONFIG.youtube],
  ["GitHub", "", CONFIG.github]
].filter(l => l[2]);
const ext = u => u.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
$("#clinks").innerHTML = LINKS.map(([n, t, u]) => `<a class="cl" href="${u}"${ext(u)}><b>${n}</b><span>${t}</span></a>`).join("");
$("#flinks").innerHTML = LINKS.map(([n, , u]) => `<a href="${u}"${ext(u)}>${n}</a>`).join("");
$("#yr").textContent = new Date().getFullYear();

$("#form").addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  const v = id => $("#" + id).value.trim();
  const chk = (id, bad) => { $("#e-" + id).textContent = bad || ""; $("#" + id).setAttribute("aria-invalid", !!bad); if (bad) ok = false; };
  chk("nm", v("nm") ? "" : "Please enter your name.");
  chk("em", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("em")) ? "" : "Please enter a valid email address.");
  chk("tp", v("tp") ? "" : "Please choose a project type.");
  chk("ms", v("ms").length >= 10 ? "" : "Please write at least 10 characters.");
  const st = $("#status");
  if (!ok) { st.textContent = "Please fix the highlighted fields."; $("[aria-invalid=true]").focus(); return; }
  const body = "Hi " + CONFIG.name + ",\n\n" + v("ms") + "\n\nProject type: " + v("tp") + "\nFrom: " + v("nm") + " (" + v("em") + ")";
  location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Project enquiry: " + v("tp")) + "&body=" + encodeURIComponent(body);
  st.textContent = "Your email app should open with the message ready. Review it and press send. Nothing has been sent yet. If nothing opens, write to " + CONFIG.email + " directly.";
});
