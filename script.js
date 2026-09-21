(function () {
  'use strict';

  var root = document.documentElement;

  /* ------------------------------ Theme ---------------------------------- */

  var themeToggle = document.getElementById('theme-toggle');

  // Dark grey is the design's default; light is only ever an explicit choice.
  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function syncToggleLabel() {
    if (!themeToggle) return;
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    themeToggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
      syncToggleLabel();
    });
    syncToggleLabel();
  }

  /* --------------------------- Mobile menu ------------------------------- */

  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  function closeMenu() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  /* ------------------- Scroll progress + stuck nav shadow ----------------- */

  var nav = document.getElementById('nav');
  var progress = document.getElementById('progress');
  var ticking = false;

  function onScroll() {
    var scrolled = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) {
      var pct = max > 0 ? (scrolled / max) * 100 : 0;
      progress.style.setProperty('--scroll', pct.toFixed(2) + '%');
    }
    if (nav) nav.classList.toggle('is-stuck', scrolled > 8);

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  /* ------------------------------ Scroll spy ------------------------------ */

  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      });
    }, {
      // Trip when a section crosses the upper third of the viewport.
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ------------------------------ Copy email ------------------------------ */

  var copyBtn = document.getElementById('copy-email');

  if (copyBtn) {
    var label = document.getElementById('copy-email-label');
    var status = document.getElementById('copy-status');
    var original = label ? label.textContent : '';
    var resetTimer;

    copyBtn.addEventListener('click', function () {
      var email = copyBtn.dataset.email || '';

      var done = function (ok) {
        if (label) label.textContent = ok ? 'Copied to clipboard' : email;
        if (status) status.textContent = ok ? 'Email address copied' : 'Copy failed';
        copyBtn.classList.toggle('is-copied', ok);

        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
          if (label) label.textContent = original;
          if (status) status.textContent = '';
          copyBtn.classList.remove('is-copied');
        }, 2200);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  }

  /* ------------------------------ Footer year ----------------------------- */

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
