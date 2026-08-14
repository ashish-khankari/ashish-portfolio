const treeData = [
  {
    name: "work", type: "folder", children: [
      { name: "commit.tsx", type: "tsx", page: "commit" },
      { name: "central-ai.tsx", type: "tsx", page: "centralai" },
      { name: "trade-safe.tsx", type: "tsx", page: "tradesafetransfers" },
      { name: "xpets.tsx", type: "tsx", page: "xpets" },
      { name: "thriveai.tsx", type: "tsx", page: "thriveai" }
    ]
  },
  { name: "skills", type: "folder", children: [{ name: "stack.ts", type: "ts", page: "skills" }] },
  { name: "about", type: "folder", children: [{ name: "profile.md", type: "md", page: "about" }] },
  { name: "experience", type: "folder", children: [{ name: "experience.ts", type: "ts", page: "experience" }] },
  { name: "contact", type: "folder", children: [{ name: "contact.md", type: "md", page: "contact" }] },
  { name: "README.md", type: "md", page: "home" }
];

const skills = {
  mobile: ["React Native", "Expo", "Redux", "State Management"],
  frontend: ["React", "TypeScript", "JavaScript", "Responsive Design"],
  backend: ["Node.js", "Express", "REST APIs", "Authentication"],
  data: ["Firebase", "MySQL", "Data Modeling", "Real-time Sync"]
};

const projects = {
  commit: { file: "commit.tsx", title: "Commit - Focus Timer", kicker: "React Native · Firebase · Payments", intro: "A focused mobile productivity experience built around timed sessions, progress feedback, and simple interactions.", desc: "The product is designed around one clear job: start a focused session and make the active state easy to understand. The portfolio version shows the product thinking without inventing production metrics.", engineering: "State management for session tracking, local persistence with AsyncStorage, real-time timer updates with accurate elapsed time.", challenges: "Keeping the UI responsive during rapid state updates, managing timer accuracy across app states, clean abstraction for session logic.", stack: ["React Native", "Expo", "Firebase"], visual: "phone", images: ["images/commit/image1.webp", "images/commit/image2.webp", "images/commit/image3.webp"] },
  centralai: { file: "central-ai.tsx", title: "Central AI Assistant", kicker: "Full-Stack · Node.js · MySQL", intro: "A workflow-builder concept for connecting API requests into repeatable flows with a developer-first interface.", desc: "The concept explores API authentication, flow steps, persistence, and execution history in one workspace. It is also a useful example of the frontend-to-backend work behind the portfolio.", engineering: "Visual flow builder with drag-and-drop nodes, state synchronization between client and server, request/response handling, execution history tracking and replay.", challenges: "Managing complex state for flow definitions, handling async operations in sequence, real-time updates without over-fetching, designing intuitive API node configuration.", stack: ["React", "TypeScript", "Node.js", "Express", "MySQL"], visual: "phone", images: ["images/centralai/image1.webp", "images/centralai/image2.webp", "images/centralai/image3.webp"] },
  tradesafetransfers: { file: "trade-safe.tsx", title: "Trade Safe Transfers", kicker: "Web · React · Product UI", intro: "A food-ordering web concept focused on discovery, visual hierarchy, and a short path to action.", desc: "The interface is intentionally product-focused: fewer competing actions, clear pricing, responsive layouts, and reusable UI patterns.", engineering: "Component-based architecture with reusable card patterns, responsive grid layout system, lazy-loaded images, optimized asset pipeline.", challenges: "Designing visual hierarchy that guides without overwhelming, creating mobile-first responsive layouts, maintaining performance with product imagery.", stack: ["React", "JavaScript", "Responsive UI"], visual: "phone", images: ["images/tradesafe/image1.webp", "images/tradesafe/image2.webp", "images/tradesafe/image3.webp"] },
  xpets: { file: "xpets.tsx", title: "Xpets App", kicker: "Xpets- Pet Care", intro: "A dashboard concept showing how dense product data can remain readable and actionable.", desc: "The visual system uses hierarchy, compact metrics, and progressive detail instead of turning the screen into a wall of charts.", engineering: "Data aggregation layer, efficient chart rendering, metric calculations, responsive grid dashboard layout, data caching strategy.", challenges: "Presenting dense data without cognitive overload, optimizing chart re-renders on data updates, maintaining readability at multiple breakpoints.", stack: ["React", "TypeScript", "Data UI"], visual: "phone", images: ["images/xpets/image1.webp", "images/xpets/image2.webp", "images/xpets/image3.webp"] },
  thriveai: { file: "thrive.tsx", title: "Thrive AI", kicker: "Thrive AI-mental Well Being", intro: "A dashboard concept showing how dense product data can remain readable and actionable.", desc: "The visual system uses hierarchy, compact metrics, and progressive detail instead of turning the screen into a wall of charts.", engineering: "Data aggregation layer, efficient chart rendering, metric calculations, responsive grid dashboard layout, data caching strategy.", challenges: "Presenting dense data without cognitive overload, optimizing chart re-renders on data updates, maintaining readability at multiple breakpoints.", stack: ["React", "TypeScript", "Data UI"], visual: "phone", images: ["images/thriveai/image1.webp", "images/thriveai/image2.webp", "images/thriveai/image3.webp"] }
};

let current = "home", openFolders = new Set(["work"]);

function icon(type) { return type === "folder" ? "▰" : type === "tsx" ? "◈" : type === "md" ? "▤" : "◇" }
function renderTree() {
  const root = document.getElementById("tree");
  root.innerHTML = "";
  treeData.forEach(node => {
    const wrap = document.createElement("div"); wrap.className = "folder " + (openFolders.has(node.name) ? "open" : "");
    if (node.type === "folder") {
      const row = document.createElement("div"); row.className = "row";
      row.innerHTML = `<span class="chev">▶</span><span class="folder">▰</span><span>${node.name}</span>`;
      row.onclick = () => { openFolders.has(node.name) ? openFolders.delete(node.name) : openFolders.add(node.name); renderTree() };
      wrap.appendChild(row);
      const children = document.createElement("div"); children.className = "children " + (openFolders.has(node.name) ? "" : "hidden");
      node.children.forEach(file => {
        const r = document.createElement("div"); r.className = "row " + (current === file.page ? "active" : "");
        r.innerHTML = `<span class="chev"></span><span class="${file.type}">${icon(file.type)}</span><span>${file.name}</span>`;
        r.onclick = () => show(file.page); children.appendChild(r);
      });
      wrap.appendChild(children);
    } else {
      const r = document.createElement("div"); r.className = "row " + (current === node.page ? "active" : "");
      r.innerHTML = `<span class="chev"></span><span class="${node.type}">${icon(node.type)}</span><span>${node.name}</span>`;
      r.onclick = () => show(node.page); wrap.appendChild(r);
    }
    root.appendChild(wrap);
  });
}

function visual(type) {
  if (type === "phone") return `<div class="phone"><div class="phone-screen"><div class="phone-line short"></div><div class="ring"></div><div class="phone-line"></div><div class="phone-line short"></div></div></div>`;
  if (type === "flow") return `<div class="flow"><div class="flow-row"><b>POST</b>/auth/login <span>200</span></div><div class="flow-row"><b>GET</b>/users/:id <span>200</span></div><div class="flow-row"><b>POST</b>/orders <span>201</span></div></div>`;
  if (type === "meal") return `<div class="browser"><div class="browser-bar"></div><div class="meal"><small>FRESH · DAILY</small><strong>Home-style meals,<br>delivered.</strong></div></div>`;
  return `<div class="dashboard"><div class="metrics"><i></i><i></i><i></i></div><div class="chart"></div></div>`;
}

function home() {
  return `<div class="hero">
<div>
<div class="crumb">README.md <b>·</b> portfolio</div>
<h1>Hi, I'm <em>Ashish.</em><br>React Native<br>Developer.</h1>
<p>I build mobile and web products with React Native, React, Node.js and backend technologies — from the interface users touch to the APIs behind it.</p>
<div class="hero-buttons"><a class="btn lime" href="#" onclick="show('work');return false">View selected work ↗</a><a class="btn outline" href="#contact" onclick="show('contact');return false">Contact me</a></div>
</div>
<div class="quick-card"><div class="label">Quick read</div><h3>Developer first.<br>Product minded.</h3><p>Clean interfaces, practical architecture and an emphasis on shipping useful software.</p><div class="quick-list"><div><span>Experience</span><b>3+ years</b></div><div><span>Primary</span><b>React Native</b></div><div><span>Also</span><b>React · Node.js</b></div><div><span>Based</span><b>India</b></div></div></div>
</div>`;
}

function work() {
  return `<div class="section-head"><div><div class="crumb">work / selected projects</div><h2>Things I've built.</h2></div><p>Real projects where available, plus clearly-labelled portfolio concepts used to demonstrate product and engineering thinking.</p></div><div class="project-grid">${Object.entries(projects).map(([key, p], i) => `<article class="project" onclick="show('${key}')"><div class="project-visual p${i + 1}">${p.images ? `<div class="project-phone-frame"><img src="${p.images[0]}" alt="${p.title}" class="project-phone-image"></div>` : visual(p.visual)}</div><div class="project-info"><div class="project-meta">${p.kicker}</div><h3>${p.title}</h3><p>${p.intro}</p><div class="tags">${p.stack.map(x => `<span>${x}</span>`).join("")}</div></div></article>`).join("")}</div>`;
}

function renderImageGallery(images) {
  return `<div class="image-gallery">
    <div class="gallery-carousel">
      ${images.map((img, i) => `<div class="carousel-item" style="--index: ${i}" onclick="openImageModal('${img}')">
        <img src="${img}" alt="Screenshot ${i + 1}" class="carousel-image">
      </div>`).join('')}
    </div>
  </div>`;
}

function openImageModal(imageSrc) {
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <button class="modal-close" onclick="this.closest('.image-modal').remove()">×</button>
      <img src="${imageSrc}" alt="Full screenshot" class="modal-image">
    </div>
  `;
  document.body.appendChild(modal);
  
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      modal.remove();
    }
  });
}

function project(key) {
  const p = projects[key];
  return `<div class="case"><div class="case-label">work / ${p.file}</div><h1>${p.title.replace("—", "— <span>")}</span></h1><p class="case-intro">${p.intro}</p><div class="case-preview">${p.images ? renderImageGallery(p.images) : visual(p.visual)}</div><div class="case-grid"><div class="case-copy"><h2>What I built</h2><p>${p.desc}</p><h2>Engineering</h2><p>${p.engineering}</p><h2>Challenges & Decisions</h2><p>${p.challenges}</p><h2>Result</h2><p>Real metrics should go here when available. I would rather leave this honest than manufacture numbers for a portfolio.</p></div><aside class="side">${p.stack.map((x, i) => `<div><small>${i === 0 ? "PRIMARY STACK" : "TECHNOLOGY"}</small><b>${x}</b></div>`).join("")}</aside></div><a href="#" class="back" onclick="show('work');return false">← Back to work</a></div>`;
}

function about() {
  return `<div class="about-grid"><div><div class="crumb">about / profile.md</div><h2>More than<br>just screens.</h2></div><div><p>I work across mobile, web and backend layers. My main focus is React Native, but I also build React interfaces and Node.js APIs when the product needs an end-to-end solution.</p><p>I care about clear UX, maintainable code and understanding why a feature exists before deciding how to build it.</p><div class="facts"><div class="fact"><b>3+</b><span>Years experience</span></div><div class="fact"><b>RN</b><span>Primary specialty</span></div><div class="fact"><b>FS</b><span>Full-stack capable</span></div><div class="fact"><b>OSS</b><span>Open-source work</span></div></div></div></div>`;
}

function skillsPage() {
  return `<div class="section-head"><div><div class="crumb">skills / stack.ts</div><h2>Technology stack.</h2></div></div><div class="skills-grid">${Object.entries(skills).map(([cat, items]) => `<div class="skill-block"><h3>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h3><div class="skill-tags">${items.map(x => `<span class="skill-tag">${x}</span>`).join("")}</div></div>`).join("")}</div>`;
}

function experience() {
  return `<div class="section-head"><div><div class="crumb">experience / experience.ts</div><h2>Work experience.</h2></div></div><div class="exp-timeline"><div class="exp-item"><div class="exp-header"><h3>ExeLance IT</h3><div class="exp-meta"><span class="role">React Native Developer</span><span class="period">2024 — Present</span></div></div><div class="exp-details"><p><b>Responsibilities:</b> Building production React Native applications, API integration, state management, performance optimization.</p><p><b>Tech:</b> React Native · Expo · Firebase · Node.js · TypeScript</p></div></div><div class="exp-item"><div class="exp-header"><h3>Fablead Developers Pvt. Ltd.</h3><div class="exp-meta"><span class="role">React Native Developer</span><span class="period">2022 — 2024</span></div></div><div class="exp-details"><p><b>Responsibilities:</b> Mobile app development, UI implementation, bug fixes, feature development for client projects.</p><p><b>Tech:</b> React Native · JavaScript · Redux · Firebase</p></div></div><div class="exp-item"><div class="exp-header"><h3>Internship</h3><div class="exp-meta"><span class="role">Developer (Mobile)</span><span class="period">2021 — 2022</span></div></div><div class="exp-details"><p><b>Responsibilities:</b> Learning production workflows, contributing to mobile features, understanding architecture patterns.</p><p><b>Tech:</b> React Native · JavaScript · Firebase</p></div></div></div>`;
}

function contact() {
  return `<div class="contact-page"><div class="crumb">contact / contact.md</div><h1>Let's build<br>something <span>useful.</span></h1><p>I'm open to React Native, React and full-stack opportunities. For a project, role or collaboration, send me a message.</p><div class="contact-links"><a class="contact-link" href="mailto:your-email@example.com">Email ↗</a><a class="contact-link" href="#" target="_blank">LinkedIn ↗</a><a class="contact-link" href="#" target="_blank">GitHub ↗</a><a class="contact-link" href="#" target="_blank">Resume ↗</a></div></div>`;
}

function pageContent(page) {
  if (page === "home") return home(); if (page === "work") return work(); if (projects[page]) return project(page); if (page === "skills") return skillsPage(); if (page === "about") return about(); if (page === "experience") return experience(); return contact();
}

function label(page) {
  if (page === "home") return "README.md"; if (page === "work") return "projects.tsx"; if (projects[page]) return projects[page].file; if (page === "skills") return "stack.ts"; if (page === "about") return "profile.md"; if (page === "experience") return "experience.ts"; return "contact.md";
}
function show(page) {
  current = page;
  document.getElementById("content").innerHTML = pageContent(page);

  const tabs = document.getElementById("tabs");
  let tab = [...tabs.children].find(x => x.dataset.page === page);
  if (!tab) {
    tab = document.createElement("div");
    tab.className = "tab";
    tab.dataset.page = page;

    tab.innerHTML = `
      <span class="tab-label">${label(page)}</span>
      <span class="close">×</span>
    `;
    tab.addEventListener("click", (e) => {
      if (e.target.classList.contains("close")) return;
      show(page);
    });
    tab.querySelector(".close").addEventListener("click", (e) => {
      e.stopPropagation();

      const wasActive = tab.classList.contains("active");
      tab.remove();

      if (wasActive) {
        const remainingTabs = [...tabs.children];

        if (remainingTabs.length > 0) {
          const nextTab = remainingTabs[remainingTabs.length - 1];
          show(nextTab.dataset.page);
        } else {
          show("home");
        }
      }
    });

    tabs.appendChild(tab);
  }
  tabs.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t === tab);
  });

  tab.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
  renderTree();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Command Palette
function createCommandPalette() {
  const palette = document.createElement("div"); palette.className = "command-palette"; palette.innerHTML = `<div class="command-overlay"></div><div class="command-box"><input type="text" class="command-input" placeholder="Search files..."><div class="command-results" id="results"></div></div>`;
  document.body.appendChild(palette);
  const input = palette.querySelector(".command-input");
  const results = palette.querySelector("#results");
  const overlay = palette.querySelector(".command-overlay");

  const files = [
    { label: "projects.tsx", page: "work" },
    { label: "central-ai.tsx", page: "central-ai" },
    { label: "trade-safe.tsx", page: "trade-safe" },
    { label: "xpets.tsx", page: "xpets" },
    { label: "thriveai.tsx", page: "thriveai" },
    { label: "profile.md", page: "about" },
    { label: "stack.ts", page: "skills" },
    { label: "experience.ts", page: "experience" },
    { label: "contact.md", page: "contact" },
    { label: "README.md", page: "home" },
    { label: "sudo hire ashish", page: "easter", isEgg: true }
  ];

  function renderResults() {
    const query = input.value.toLowerCase();
    const filtered = files.filter(f => f.label.toLowerCase().includes(query));
    results.innerHTML = filtered.map((f, i) => `<div class="result ${i === 0 ? "active" : ""}" data-page="${f.page}" data-egg="${f.isEgg || false}"><span>></span>${f.label}</div>`).join("");
  }

  input.addEventListener("input", renderResults);
  input.addEventListener("keydown", (e) => {
    const active = results.querySelector(".result.active");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = active?.nextElementSibling || results.firstElementChild;
      results.querySelectorAll(".result").forEach(r => r.classList.remove("active"));
      next?.classList.add("active");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = active?.previousElementSibling || results.lastElementChild;
      results.querySelectorAll(".result").forEach(r => r.classList.remove("active"));
      prev?.classList.add("active");
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active.dataset.egg === "true") {
        closeCommandPalette();
        showEasterEgg();
      } else {
        show(active.dataset.page);
        closeCommandPalette();
      }
    } else if (e.key === "Escape") {
      closeCommandPalette();
    }
  });

  results.addEventListener("click", (e) => {
    const result = e.target.closest(".result");
    if (result.dataset.egg === "true") {
      closeCommandPalette();
      showEasterEgg();
    } else {
      show(result.dataset.page);
      closeCommandPalette();
    }
  });

  overlay.addEventListener("click", closeCommandPalette);
  renderResults();
  input.focus();
}

function closeCommandPalette() {
  const palette = document.querySelector(".command-palette");
  if (palette) palette.style.animation = "fadeOut .15s ease-out";
  setTimeout(() => palette?.remove(), 150);
}

function showEasterEgg() {
  const content = document.getElementById("content");
  content.innerHTML = `<div class="easter-egg"><div class="terminal"><div class="line">$ sudo hire ashish</div><div class="line status">Checking requirements...</div><div class="line check">✓ React Native</div><div class="line check">✓ React</div><div class="line check">✓ Node.js</div><div class="line check">✓ Can build things</div><div class="line check">✓ Still learning</div><div class="line result">Permission granted. 🚀</div></div><a href="#" class="back" onclick="show('home');return false">← Back</a></div>`;
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    createCommandPalette();
  }
  if (e.key === "g" && !e.ctrlKey) {
    if (document.activeElement.tagName !== "INPUT") {
      show("work");
    }
  }
  if (e.key === "a" && !e.ctrlKey) {
    if (document.activeElement.tagName !== "INPUT") {
      show("about");
    }
  }
  if (e.key === "c" && !e.ctrlKey) {
    if (document.activeElement.tagName !== "INPUT") {
      show("contact");
    }
  }
});

renderTree(); show("home");
