/**
 * ROBBCAST — site behavior and content configuration.
 * Edit the sections below to update links, episodes, and data without touching HTML.
 */

// ==============================
// PODCAST LINKS — UPDATE HERE
// Replace # placeholders with your YouTube / Spotify URLs
// ==============================
const podcastLinks = {
  latestWatch: "https://www.youtube.com/watch?v=PLACEHOLDER_LATEST",
  latestListen: "https://open.spotify.com/show/PLACEHOLDER_LATEST",
};

// ==============================
// SOCIAL LINKS — UPDATE HERE
// ==============================
const socialLinks = {
  youtube: "https://www.youtube.com/@PLACEHOLDER",
  spotify: "https://open.spotify.com/show/PLACEHOLDER",
  apple: "https://podcasts.apple.com/podcast/PLACEHOLDER",
  instagram: "https://www.instagram.com/PLACEHOLDER",
};

// ==============================
// ROBB PHOTOS — UPDATE PATHS HERE
// ==============================
const robbPhotos = {
  hero: "assets/images/profile_robb.png",
  about: "assets/images/serious_robb.JPG",
};

// Extra photos shown in the About gallery (add paths under assets/images/)
const aboutGallery = [
  {
    src: "assets/images/camo_robb.JPG",
    alt: "Robb Granado in Carolina gear",
    caption: "Carolina Corner, visual aid",
  },
  {
    src: "assets/images/boil_robb.jpg",
    alt: "Robb Granado at a seafood boil",
    caption: "Field research: dinner hours",
  },
  {
    src: "assets/images/workout_robb.JPG",
    alt: "Robb Granado working out",
    caption: "Traffic stress management",
  },
  {
    src: "assets/images/nirvana_robb.jpg",
    alt: "Robb Granado at a concert",
    caption: "Zip line feasibility study",
  },
  {
    src: "assets/images/fish_robb.jpg",
    alt: "Robb Granado fishing",
    caption: "Investigative reporting",
  },
  {
    src: "assets/images/birthday_robb.JPG",
    alt: "Robb Granado celebrating a birthday",
    caption: "Another year of local concerns",
  },
];

// ==============================
// ROBBCAST EPISODES
// ADD NEW EPISODES HERE (newest first for featured = episodes[0])
// ==============================
const EPISODE_THUMB_DEFAULT = "assets/images/episode-placeholder.svg";

const episodes = [
  {
    id: "ep-001",
    number: "001",
    title: "Carolina Football, Fandom & Other Important Matters",
    description:
      "Robb sits down to discuss the state of Carolina football, the personalities surrounding the program, and why being a fan means caring deeply about things completely outside your control.",
    date: "March 1, 2026",
    thumbnail: "assets/images/camo_robb.JPG",
    watchUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_EP001",
    listenUrl: "https://open.spotify.com/episode/PLACEHOLDER_EP001",
  },
  {
    id: "ep-002",
    number: "002",
    title: "Why Does Everything Close at 9?",
    description:
      "An honest conversation about dining hours, hunger, and the gap between when you're ready for dinner and when Chapel Hill says you're done.",
    date: "March 8, 2026",
    thumbnail: "assets/images/boil_robb.jpg",
    watchUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_EP002",
    listenUrl: "https://open.spotify.com/episode/PLACEHOLDER_EP002",
  },
  {
    id: "ep-003",
    number: "003",
    title: "The St. Thomas More Traffic Investigation",
    description:
      "Robb walks through an intersection that has opinions about everyone who uses it, and shares theories that deserve a town hall meeting.",
    date: "March 15, 2026",
    thumbnail: "assets/images/workout_robb.JPG",
    watchUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_EP003",
    listenUrl: "https://open.spotify.com/episode/PLACEHOLDER_EP003",
  },
  {
    id: "ep-004",
    number: "004",
    title: "America Has a Zip Line Problem",
    description:
      "A thoughtful look at recreational infrastructure, missed opportunities, and whether enthusiasm alone can justify more cables in the sky.",
    date: "March 22, 2026",
    thumbnail: "assets/images/nirvana_robb.jpg",
    watchUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_EP004",
    listenUrl: "https://open.spotify.com/episode/PLACEHOLDER_EP004",
  },
  {
    id: "ep-005",
    number: "005",
    title: "Can Chapel Hill Fix This Intersection?",
    description:
      "Engineering, politics, and the eternal question of why left turns feel personally offensive.",
    date: "March 29, 2026",
    thumbnail: "assets/images/fish_robb.jpg",
    watchUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_EP005",
    listenUrl: "https://open.spotify.com/episode/PLACEHOLDER_EP005",
  },
];

// ==============================
// ROBB-O-METER — UPDATE VALUES HERE (0–100)
// ==============================
const robbOMeter = [
  { label: "UNC Football Optimism", value: 87 },
  { label: "Chapel Hill Traffic Frustration", value: 94 },
  { label: "Probability Town Hall Grill Is Open When Robb Wants Food", value: 23 },
  { label: "Current Zip Line Availability", value: 11 },
];

// ==============================
// ZIP LINE INDEX — UPDATE LOCATIONS HERE
// Scores are 0–10; overall is displayed as X / 10
// ==============================
const zipLineIndex = [
  {
    name: "Kenan Memorial Stadium",
    overall: 9.4,
    potential: 9.8,
    practicality: 6.2,
    fun: 10,
    robbApproval: 9.5,
  },
  {
    name: "Franklin Street",
    overall: 8.7,
    potential: 9.0,
    practicality: 5.5,
    fun: 9.5,
    robbApproval: 9.2,
  },
  {
    name: "UNC Campus",
    overall: 9.1,
    potential: 9.5,
    practicality: 6.0,
    fun: 9.8,
    robbApproval: 9.4,
  },
  {
    name: "A Chapel Hill Traffic Jam",
    overall: 10,
    potential: 10,
    practicality: 8.0,
    fun: 7.5,
    robbApproval: 10,
  },
  {
    name: "Town Hall Grill",
    overall: 7.8,
    potential: 8.5,
    practicality: 4.0,
    fun: 8.0,
    robbApproval: 8.9,
  },
];

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderFeaturedEpisode() {
  const container = document.getElementById("featured-episode");
  const episode = episodes[0];
  if (!container || !episode) return;

  container.innerHTML = `
    <img class="featured-thumb" src="${escapeHtml(episode.thumbnail)}" alt="" width="640" height="400" loading="lazy">
    <div class="featured-body">
      <p class="episode-number">EP. ${escapeHtml(episode.number)}</p>
      <h3>${escapeHtml(episode.title)}</h3>
      <p>${escapeHtml(episode.description)}</p>
      <div class="featured-actions">
        <a class="btn btn-primary" href="${escapeHtml(episode.watchUrl)}" target="_blank" rel="noopener noreferrer">Watch Episode</a>
        <a class="btn btn-outline" href="${escapeHtml(episode.listenUrl)}" target="_blank" rel="noopener noreferrer">Listen Now</a>
      </div>
    </div>
  `;
}

function renderEpisodes() {
  const grid = document.getElementById("episodes-grid");
  if (!grid) return;

  grid.innerHTML = episodes
    .map(
      (ep) => `
    <article class="episode-card reveal" id="${escapeHtml(ep.id)}">
      <img class="episode-thumb" src="${escapeHtml(ep.thumbnail)}" alt="" width="640" height="360" loading="lazy">
      <div class="episode-card-body">
        <p class="episode-number">EP. ${escapeHtml(ep.number)}</p>
        <h3>${escapeHtml(ep.title)}</h3>
        <p class="episode-date">${escapeHtml(ep.date)}</p>
        <p>${escapeHtml(ep.description)}</p>
        <div class="episode-card-actions">
          <a class="btn btn-outline" href="${escapeHtml(ep.watchUrl)}" target="_blank" rel="noopener noreferrer">Watch</a>
          <a class="btn btn-outline" href="${escapeHtml(ep.listenUrl)}" target="_blank" rel="noopener noreferrer">Listen</a>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function renderRobbOMeter() {
  const grid = document.getElementById("robb-o-meter-grid");
  if (!grid) return;

  grid.innerHTML = robbOMeter
    .map(
      (item) => `
    <div class="meter-item">
      <div class="meter-label">
        <span>${escapeHtml(item.label)}</span>
        <span class="meter-value" aria-hidden="true">${item.value}%</span>
      </div>
      <div
        class="meter-track"
        role="meter"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${item.value}"
        aria-label="${escapeHtml(item.label)}"
      >
        <div class="meter-fill" style="--meter-pct: ${item.value}%"></div>
      </div>
    </div>
  `
    )
    .join("");
}

function renderZipLineIndex() {
  const list = document.getElementById("zip-line-list");
  if (!list) return;

  list.innerHTML = zipLineIndex
    .map(
      (entry) => `
    <article class="zip-entry">
      <div class="zip-entry-header">
        <h3 class="zip-entry-name">${escapeHtml(entry.name)}</h3>
        <span class="zip-overall">${entry.overall} / 10</span>
      </div>
      <div class="zip-metrics">
        <div class="zip-metric">
          <span class="zip-metric-label">Zip Line Potential</span>
          <span class="zip-metric-value">${entry.potential}</span>
        </div>
        <div class="zip-metric">
          <span class="zip-metric-label">Practicality</span>
          <span class="zip-metric-value">${entry.practicality}</span>
        </div>
        <div class="zip-metric">
          <span class="zip-metric-label">Fun Factor</span>
          <span class="zip-metric-value">${entry.fun}</span>
        </div>
        <div class="zip-metric">
          <span class="zip-metric-label">Robb Approval</span>
          <span class="zip-metric-value">${entry.robbApproval}</span>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function applyRobbPhotos() {
  const hero = document.getElementById("hero-host-image");
  if (hero && robbPhotos.hero) {
    hero.src = robbPhotos.hero;
  }
  const about = document.getElementById("about-robb-image");
  if (about && robbPhotos.about) {
    about.src = robbPhotos.about;
  }
}

function renderAboutGallery() {
  const wrap = document.getElementById("about-gallery");
  if (!wrap || !aboutGallery.length) return;

  wrap.innerHTML = `
    <p class="about-gallery-title">On the record</p>
    <div class="about-gallery">
      ${aboutGallery
        .map(
          (item) => `
        <figure class="gallery-figure">
          <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" width="640" height="480" loading="lazy">
          <figcaption>${escapeHtml(item.caption)}</figcaption>
        </figure>
      `
        )
        .join("")}
    </div>
  `;
}

function applySocialLinks() {
  document.querySelectorAll("[data-social]").forEach((link) => {
    const key = link.getAttribute("data-social");
    if (key && socialLinks[key]) {
      link.href = socialLinks[key];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
}

function wirePodcastLinks() {
  const heroWatch = document.getElementById("hero-watch-latest");
  if (heroWatch && podcastLinks.latestWatch) {
    heroWatch.href = podcastLinks.latestWatch;
    heroWatch.target = "_blank";
    heroWatch.rel = "noopener noreferrer";
  }

  const beefLink = document.getElementById("beef-argument-link");
  const featured = episodes[0];
  if (beefLink && featured) {
    beefLink.href = featured.watchUrl;
    beefLink.target = "_blank";
    beefLink.rel = "noopener noreferrer";
  }
}

function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll(".reveal");

  if (prefersReduced) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  elements.forEach((el) => observer.observe(el));
}

function initMeterAnimation() {
  const section = document.getElementById("robb-o-meter");
  if (!section) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fills = section.querySelectorAll(".meter-fill");

  if (prefersReduced) {
    fills.forEach((fill) => fill.classList.add("is-animated"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fills.forEach((fill) => fill.classList.add("is-animated"));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(section);
}

function showToast(message, durationMs = 6000) {
  const region = document.getElementById("toast-region");
  if (!region) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>${escapeHtml(message)}</span>
    <button type="button" class="toast-dismiss" aria-label="Dismiss">×</button>
  `;

  const dismiss = () => {
    toast.remove();
  };

  toast.querySelector(".toast-dismiss").addEventListener("click", dismiss);
  region.appendChild(toast);

  if (durationMs > 0) {
    window.setTimeout(() => {
      if (toast.isConnected) dismiss();
    }, durationMs);
  }
}

function runZipLineAnimation() {
  const overlay = document.getElementById("zip-line-overlay");
  if (!overlay) return;

  overlay.hidden = false;
  overlay.setAttribute("aria-hidden", "false");
  overlay.innerHTML = `
    <div class="zip-line-cable" aria-hidden="true"></div>
    <span class="zip-line-rider" aria-hidden="true">🧗</span>
  `;

  window.setTimeout(() => {
    overlay.hidden = true;
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = "";
  }, 1800);
}

function initEasterEggs() {
  const logo = document.getElementById("site-logo");
  let logoClicks = 0;
  let logoClickTimer = null;

  if (logo) {
    logo.addEventListener("click", (e) => {
      if (logo.getAttribute("href") === "#top") {
        logoClicks += 1;
        window.clearTimeout(logoClickTimer);
        logoClickTimer = window.setTimeout(() => {
          logoClicks = 0;
        }, 2500);

        if (logoClicks >= 5) {
          logoClicks = 0;
          e.preventDefault();
          showToast("ZIP LINE MODE ACTIVATED", 4000);
          runZipLineAnimation();
        }
      }
    });
  }

  window.setTimeout(() => {
    showToast("Robb just checked. Town Hall Grill is probably closed.", 8000);
  }, 45000);

  let zCount = 0;
  let zTimer = null;

  document.addEventListener("keydown", (e) => {
    if (e.key !== "z" && e.key !== "Z") return;

    const target = e.target;
    const tag = target && target.tagName ? target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || target.isContentEditable) return;

    zCount += 1;
    window.clearTimeout(zTimer);
    zTimer = window.setTimeout(() => {
      zCount = 0;
    }, 2000);

    if (zCount >= 3) {
      zCount = 0;
      showToast("ZIP LINE APPROVED.", 4000);
    }
  });
}

function init() {
  applyRobbPhotos();
  renderAboutGallery();
  renderFeaturedEpisode();
  renderEpisodes();
  renderRobbOMeter();
  renderZipLineIndex();
  applySocialLinks();
  wirePodcastLinks();
  initNav();
  initScrollReveal();
  initMeterAnimation();
  initEasterEggs();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
