/* Wolfmaster K9 — site interactions. Pages work fully without this file. */
(function () {
  "use strict";
  var root = document.documentElement;

  // ----- Dropdowns (click/keyboard; hover handled in CSS on desktop) -----
  var subs = document.querySelectorAll(".has-sub");
  function closeAll(except) {
    subs.forEach(function (li) {
      if (li === except) return;
      li.classList.remove("is-open");
      var b = li.querySelector(".nav__toggle");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }
  subs.forEach(function (li) {
    var b = li.querySelector(".nav__toggle");
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !li.classList.contains("is-open");
      closeAll(li);
      li.classList.toggle("is-open", open);
      b.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".has-sub")) closeAll(); });

  // ----- Mobile menu -----
  var burger = document.getElementById("burger");
  function setNav(open) {
    root.classList.toggle("nav-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (burger) burger.addEventListener("click", function () { setNav(!root.classList.contains("nav-open")); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeAll(); if (burger) setNav(false); }
  });

  // ----- Reveal on scroll -----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, i = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.transitionDelay = Math.min(i * 70, 350) + "ms";
        el.classList.add("is-in");
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // ----- Dog filters -----
  document.querySelectorAll("[data-filters]").forEach(function (form) {
    var grid = form.parentNode.querySelector("[data-dog-grid]");
    var empty = form.parentNode.querySelector("[data-empty]");
    if (!grid) return;
    function apply() {
      var f = new FormData(form), shown = 0;
      grid.querySelectorAll(".dog-card").forEach(function (card) {
        var ok = ["breed", "sex", "status"].every(function (k) { var v = f.get(k); return !v || card.dataset[k] === v; });
        card.hidden = !ok;
        if (ok) { shown++; card.classList.add("is-in"); }
      });
      if (empty) empty.hidden = shown > 0;
    }
    form.addEventListener("change", apply);
    form.addEventListener("reset", function () { setTimeout(apply, 0); });
  });

  // ----- Enquiry form → WhatsApp -----
  document.querySelectorAll("form[data-whatsapp]").forEach(function (form) {
    var note = form.querySelector(".form__note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (el) {
        var bad = !el.value.trim();
        el.classList.toggle("is-invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) { note.textContent = "Please add your first name and phone number."; return; }
      var d = new FormData(form);
      var lines = [
        "Website enquiry: " + d.get("interest"),
        "Name: " + [d.get("first"), d.get("last")].filter(Boolean).join(" "),
        "Phone: " + d.get("phone"),
        d.get("email") ? "Email: " + d.get("email") : "",
        d.get("city") ? "City: " + d.get("city") : "",
        d.get("message") ? "\n" + d.get("message") : "",
      ].filter(Boolean).join("\n");
      window.open("https://wa.me/" + form.dataset.whatsapp + "?text=" + encodeURIComponent(lines), "_blank", "noopener");
      note.textContent = "WhatsApp is opening with your details. Press send to reach us.";
      form.reset();
    });
  });

  // ----- Hero slideshow: swap every 3 seconds -----
  document.querySelectorAll("[data-slides]").forEach(function (box) {
    var slides = box.querySelectorAll(".hero__img");
    if (slides.length < 2) return;
    var dots = document.createElement("div");
    dots.className = "hero__dots"; dots.setAttribute("aria-hidden", "true");
    slides.forEach(function (_, i) { var d = document.createElement("span"); if (!i) d.className = "is-active"; dots.appendChild(d); });
    var inner = box.parentNode.querySelector(".hero__inner");
    if (inner) inner.insertBefore(dots, inner.querySelector(".hero__down"));
    slides.forEach(function (s) { s.loading = "eager"; });
    var i = 0;
    setInterval(function () {
      if (document.hidden) return;
      slides[i].classList.remove("is-active"); dots.children[i].classList.remove("is-active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("is-active"); dots.children[i].classList.add("is-active");
    }, 3000);
  });

  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
