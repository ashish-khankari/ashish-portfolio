const treeData = [
  {
    name: "work", type: "folder", children: [
      { name: "central-ai.tsx", type: "tsx", page: "centralai" },
      { name: "trade-safe.tsx", type: "tsx", page: "tradesafetransfers" },
      { name: "commit.tsx", type: "tsx", page: "commit" },
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

const projects = {
  commit: {
    file: "commit.tsx",
    title: "Commit - Focus Timer",
    kicker: "React Native · Firebase · Kotlin",
    intro: "A focused productivity app built to help people commit to distraction-free work and build consistent habits.",
    desc: "Commit combines focused sessions, commitment challenges, streaks and progress tracking in a lightweight mobile experience designed for students, developers, creators and professionals.",
    engineering: "Efficient native modules for app-state handling and precise session calculations, real-time session status updates, and reliable background tracking.",
    challenges: "Managing session state accurately across app states, moving time-sensitive calculations into native modules, owning product development and project management as a solo build, and preparing the app for Play Store deployment.",
    result: "Built and deployed a complete productivity product from idea through implementation and Play Store release, while keeping the experience intentionally focused rather than feature-heavy.",
    stack: ["React Native", "Firebase", "Kotlin", "Native Modules", "GitHub", "Expo", "ChatGPT"],
    primaryStack: "React Native · Firebase · Kotlin",
    technology: ["Native Modules", "GitHub", "Expo", "ChatGPT"],
    visual: "phone",
    images: ["images/commit/image1.webp", "images/commit/image2.webp", "images/commit/image3.webp"]
  },
  centralai: {
    file: "central-ai.tsx",
    title: "Central AI Assistant",
    kicker: "React Native · AI Integrations · Full-Stack",
    intro: "An AI-powered business assistant built to automate customer interactions and connect everyday business tools.",
    desc: "Central AI provides an AI receptionist experience for qualifying leads, answering customer questions, scheduling meetings and transferring calls, with integrations designed to automate end-to-end customer workflows.",
    engineering: "Owned the product end to end, from application development through deployment to the Play Store and App Store. Built automation flows for customers and integrated 50+ third-party apps through Composio and OAuth, including Gmail, Slack, Notion and Jira. Implemented interactive flow experiences in React Native using Reanimated and Gesture Handler.",
    challenges: "Managing a complex product lifecycle while handling heavy animations, third-party OAuth integrations and automation flows. Used Linear for project planning and delivery, and AI development tools such as Claude and Cursor to reduce implementation time and improve development efficiency.",
    result: "Delivered an end-to-end mobile product with a broad third-party integration layer, customer automation workflows and production deployments across both major mobile platforms.",
    stack: ["React Native", "Firebase", "Kotlin", "Swift", "WebView", "Native Modules", "Expo", "Composio", "OAuth"],
    primaryStack: "React Native · Firebase · Kotlin · Swift · WebView",
    technology: ["Native Modules", "GitHub", "Expo", "Composio", "OAuth", "Claude", "Cursor", "Linear"],
    visual: "phone",
    images: ["images/centralai/image1.webp", "images/centralai/image2.webp", "images/centralai/image3.webp"]
  },
  tradesafetransfers: {
    file: "trade-safe.tsx",
    title: "Trade Safe Transfers",
    kicker: "TradeSafe · Escrow · Product UI",
    intro: "An escrow-based payment platform designed to make service transactions safer and more transparent for tradies and customers.",
    desc: "TradeSafe helps service providers and customers create contracts, protect payments through escrow, track project milestones and manage approvals with clearer expectations on both sides.",
    engineering: "Product-focused interface for digital contracts, escrow payment flows, project milestones, approvals, disputes and real-time status updates.",
    challenges: "Designing a trustworthy experience around payments and agreements while keeping important transaction states easy to understand.",
    result: "A product experience focused on reducing trust gaps between service providers and customers through clearer contracts, protected payments and transparent project progress.",
    stack: ["React", "JavaScript", "Responsive UI"],
    visual: "phone",
    images: ["images/tradesafe/image1.webp", "images/tradesafe/image2.webp", "images/tradesafe/image3.webp"]
  },
  xpets: {
    file: "xpets.tsx",
    title: "Xpets App",
    kicker: "xPets · Social · Pet Care",
    intro: "A social platform for pets and their owners, combining community, pet profiles and pet care discovery in one experience.",
    desc: "xPets lets owners create pet profiles, share their pets' stories, connect with other pet lovers, discover wellness products and participate in interactive community content.",
    engineering: "Product experience spanning pet profiles, community interactions, search and follow flows, pet wellness content and a marketplace for pet care products.",
    challenges: "Balancing social features with pet-care discovery so the product feels like a community rather than simply a marketplace or content feed.",
    result: "A multi-purpose pet platform that brings social sharing, community discovery and pet wellness into a single product experience.",
    stack: ["React", "JavaScript", "Responsive UI"],
    visual: "phone",
    images: ["images/xpets/image1.webp", "images/xpets/image2.webp", "images/xpets/image3.webp"]
  },
  thriveai: {
    file: "thrive.tsx",
    title: "Thrive AI",
    kicker: "Thrive AI · Mental Wellness · AI",
    intro: "A private AI-guided wellness app for reflection, journaling, mood tracking and personal growth.",
    desc: "Thrive AI creates a private space for emotional check-ins, journaling, meditation, guided exercises, affirmations and personalized growth guidance that adapts to how the user feels.",
    engineering: "Designed around personalized daily reflections, emotion-aware check-ins, journaling, gentle goal-setting and progress tracking, with privacy positioned as a core product principle.",
    challenges: "Creating a supportive experience without turning personal growth into a rigid productivity system, while keeping reflection and personal data feeling private and trustworthy.",
    result: "A calm, personalized wellness experience centered on small consistent steps, emotional reflection and private self-care.",
    stack: ["React", "JavaScript", "Responsive UI"],
    visual: "phone",
    images: ["images/thriveai/image1.webp", "images/thriveai/image2.webp", "images/thriveai/image3.webp"]
  }
};

let current = "home", openFolders = new Set(["work"]);

function icon(type) {
  return type === "folder" ? "🗂️" : type === "tsx" ? "📄" : type === "md" ? "📝" : type === "ts" ? "📘" : "🗄️";
}

function renderTree() {
  const root = document.getElementById("tree");
  root.innerHTML = "";

  treeData.forEach(node => {
    const wrap = document.createElement("div");
    wrap.className = "folder " + (openFolders.has(node.name) ? "open" : "");

    if (node.type === "folder") {
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `<span class="chev">▶</span><span class="folder">${icon("folder")}</span><span>${node.name}</span>`;
      row.onclick = () => {
        openFolders.has(node.name) ? openFolders.delete(node.name) : openFolders.add(node.name);
        renderTree();
      };
      wrap.appendChild(row);

      const children = document.createElement("div");
      children.className = "children " + (openFolders.has(node.name) ? "" : "hidden");

      node.children.forEach(file => {
        const r = document.createElement("div");
        r.className = "row " + (current === file.page ? "active" : "");
        r.innerHTML = `<span class="chev"></span><span class="${file.type}">${icon(file.type)}</span><span>${file.name}</span>`;
        r.onclick = () => show(file.page);
        children.appendChild(r);
      });

      wrap.appendChild(children);
    } else {
      const r = document.createElement("div");
      r.className = "row " + (current === node.page ? "active" : "");
      r.innerHTML = `<span class="chev"></span><span class="${node.type}">${icon(node.type)}</span><span>${node.name}</span>`;
      r.onclick = () => show(node.page);
      wrap.appendChild(r);
    }

    root.appendChild(wrap);
  });
}

function visual(type) {
  if (type === "phone") {
    return `<div class="phone"><div class="phone-screen"><div class="phone-line short"></div><div class="ring"></div><div class="phone-line"></div><div class="phone-line short"></div></div></div>`;
  }
  if (type === "flow") {
    return `<div class="flow"><div class="flow-row"><b>POST</b>/auth/login <span>200</span></div><div class="flow-row"><b>GET</b>/users/:id <span>200</span></div><div class="flow-row"><b>POST</b>/orders <span>201</span></div></div>`;
  }
  if (type === "meal") {
    return `<div class="browser"><div class="browser-bar"></div><div class="meal"><small>FRESH · DAILY</small><strong>Home-style meals,<br>delivered.</strong></div></div>`;
  }
  return `<div class="dashboard"><div class="metrics"><i></i><i></i><i></i></div><div class="chart"></div></div>`;
}

function home() {
  return `<div class="hero">
    <div>
      <div class="crumb">README.md <b>·</b> portfolio</div>
      <h1>Hi, I'm <em>Ashish.</em><br>React Native<br>Developer.</h1>
      <p>I build mobile and web products with React Native, React, Node.js and backend technologies — from the interface users touch to the APIs behind it.</p>
      <div class="hero-buttons">
        <a class="btn lime" href="#" onclick="show('work');return false">View selected work ↗</a>
        <a class="btn outline" href="#contact" onclick="show('contact');return false">Contact me</a>
      </div>
    </div>
    <div class="quick-card">
      <div class="label">Quick read</div>
      <h3>Developer first.<br>Product minded.</h3>
      <p>Clean interfaces, practical architecture and an emphasis on shipping useful software.</p>
      <div class="quick-list">
        <div><span>Experience</span><b>3+ years</b></div>
        <div><span>Primary</span><b>React Native</b></div>
        <div><span>Also</span><b>React · Node.js</b></div>
        <div><span>Based</span><b>India</b></div>
      </div>
    </div>
  </div>`;
}

function work() {
  return `<div class="section-head">
    <div><div class="crumb">work / selected projects</div><h2>Things I've built.</h2></div>
    <p>Real projects where available, plus clearly-labelled portfolio concepts used to demonstrate product and engineering thinking.</p>
  </div>
  <div class="project-grid">
    ${Object.entries(projects).map(([key, p], i) => `
      <article class="project" onclick="show('${key}')">
        <div class="project-visual p${i + 1}">
          ${p.images ? `<div class="project-phone-frame"><img src="${p.images[0]}" alt="${p.title}" class="project-phone-image"></div>` : visual(p.visual)}
        </div>
        <div class="project-info">
          <div class="project-meta">${p.kicker}</div>
          <h3>${p.title}</h3>
          <p>${p.intro}</p>
          <div class="tags">${p.stack.map(x => `<span>${x}</span>`).join("")}</div>
        </div>
      </article>
    `).join("")}
  </div>`;
}

function renderImageGallery(images) {
  return `<div class="image-gallery">
    <div class="gallery-carousel">
      ${images.map((img, i) => `
        <div class="carousel-item" style="--index: ${i}" onclick="openImageModal('${img}')">
          <img src="${img}" alt="Screenshot ${i + 1}" class="carousel-image">
        </div>
      `).join('')}
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

  modal.addEventListener("click", e => {
    if (e.target.classList.contains("modal-backdrop")) modal.remove();
  });
}

function project(key) {
  const p = projects[key];
  const primaryStack = p.primaryStack || p.stack[0] || "";
  const technologies = p.technology || p.stack.slice(1);

  return `<div class="case">
    <div class="case-label">work / ${p.file}</div>
    <h1>${p.title}</h1>
    <p class="case-intro">${p.intro}</p>
    <div class="case-preview">${p.images ? renderImageGallery(p.images) : visual(p.visual)}</div>

    <div class="case-grid">
      <div class="case-copy">
        <h2>What I built</h2>
        <p>${p.desc}</p>

        <h2>Engineering</h2>
        <p>${p.engineering}</p>

        <h2>Challenges & Decisions</h2>
        <p>${p.challenges}</p>

        <h2>Result</h2>
        <p>${p.result}</p>
      </div>

      <aside class="side">
        <div><small>PRIMARY STACK</small><b>${primaryStack}</b></div>
        ${technologies.map(x => `<div><small>TECHNOLOGY</small><b>${x}</b></div>`).join("")}
      </aside>
    </div>

    <a href="#" class="back" onclick="show('work');return false">← Back to work</a>
  </div>`;
}

function about() {
  return `
    <div class="about-page">

      <div class="about-hero">
        <div class="about-heading">
          <div class="crumb">about / profile.md</div>

          <div class="about-eyebrow">
            <span class="about-dot"></span>
            Developer profile
          </div>

          <h1>
            More than<br>
            just <span>screens.</span>
          </h1>

          <p class="about-lead">
            I build products across the mobile, frontend and backend layers —
            with React Native as my primary focus.
          </p>
        </div>

        <div class="about-intro-card">
          <div class="about-card-label">CURRENT FOCUS</div>

          <div class="focus-item">
            <span class="focus-number">01</span>
            <div>
              <strong>Mobile Products</strong>
              <p>React Native applications with clean UX, reliable state management and production-ready architecture.</p>
            </div>
          </div>

          <div class="focus-item">
            <span class="focus-number">02</span>
            <div>
              <strong>Full-Stack Thinking</strong>
              <p>Understanding the API, database and business logic behind the interface — not treating the frontend as an isolated layer.</p>
            </div>
          </div>

          <div class="focus-item">
            <span class="focus-number">03</span>
            <div>
              <strong>Product Engineering</strong>
              <p>Building features around the actual user problem rather than simply translating designs into code.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-divider">
        <span>01</span>
        <span>HOW I WORK</span>
        <span></span>
      </div>

      <div class="about-story">
        <div class="about-story-title">
          <span class="section-index">01</span>
          <h2>Think in<br><em>systems.</em></h2>
        </div>

        <div class="about-story-copy">
          <p>I started with frontend development, but working on real applications pushed me deeper into the stack.</p>

          <p>Today I work primarily with React Native, while also working with React, Node.js, Express, Firebase and MySQL. That means I can think about a feature from the screen the user sees all the way through the API and data layer behind it.</p>

          <p>I don't believe every problem needs a complicated architecture. My preference is to understand the requirement first, then choose the simplest structure that can scale without becoming difficult to maintain.</p>

          <div class="about-quote">
            <span class="quote-mark">"</span>
            <p>Good engineering is not about adding more layers. It's about knowing which layers you actually need.</p>
          </div>
        </div>
      </div>

      <div class="about-divider">
        <span>02</span>
        <span>WHAT I BRING</span>
        <span></span>
      </div>

      <div class="about-capabilities">
        <div class="capability">
          <div class="capability-number">01</div>
          <div class="capability-icon">RN</div>
          <h3>Mobile Engineering</h3>
          <p>Building React Native applications with reusable components, predictable state management, API integration, persistence and attention to performance.</p>
          <div class="capability-tags">
            <span>React Native</span><span>Expo</span><span>Redux</span><span>AsyncStorage</span>
          </div>
        </div>

        <div class="capability">
          <div class="capability-number">02</div>
          <div class="capability-icon">&lt;/&gt;</div>
          <h3>Frontend Development</h3>
          <p>Creating responsive interfaces with reusable UI patterns, component-driven architecture and a strong focus on interaction and visual hierarchy.</p>
          <div class="capability-tags">
            <span>React</span><span>TypeScript</span><span>JavaScript</span><span>Responsive UI</span>
          </div>
        </div>

        <div class="capability">
          <div class="capability-number">03</div>
          <div class="capability-icon">API</div>
          <h3>Backend & APIs</h3>
          <p>Building REST APIs, handling authentication, integrating databases and connecting frontend applications to reliable backend services.</p>
          <div class="capability-tags">
            <span>Node.js</span><span>Express</span><span>REST</span><span>Authentication</span>
          </div>
        </div>

        <div class="capability">
          <div class="capability-number">04</div>
          <div class="capability-icon">DB</div>
          <h3>Data & Infrastructure</h3>
          <p>Working with application data, persistence and real-time requirements while keeping the data flow understandable and maintainable.</p>
          <div class="capability-tags">
            <span>Firebase</span><span>MySQL</span><span>Data Modeling</span><span>Real-time Sync</span>
          </div>
        </div>
      </div>

      <div class="about-divider">
        <span>03</span>
        <span>BEYOND THE DAY JOB</span>
        <span></span>
      </div>

      <div class="about-bottom">
        <div class="about-open-source">
          <div class="about-bottom-label">OPEN SOURCE</div>

          <h2>I don't only<br>build <span>inside</span> a company.</h2>

          <p>I've also contributed to open-source React Native projects, which means working inside an unfamiliar codebase, understanding existing patterns and making changes that fit the project rather than only my own coding style.</p>

          <div class="oss-list">
            <div class="oss-item">
              <div class="oss-icon">PR</div>
              <div>
                <strong>Pull Requests</strong>
                <span>Contributions to open-source React Native projects</span>
              </div>
            </div>

            <div class="oss-item">
              <div class="oss-icon">RN</div>
              <div>
                <strong>React Native Ecosystem</strong>
                <span>Working with real-world codebases and patterns</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-stats">
          <div class="about-stat"><strong>3+</strong><span>Years building software</span></div>
          <div class="about-stat"><strong>RN</strong><span>Primary specialty</span></div>
          <div class="about-stat"><strong>FS</strong><span>Full-stack capable</span></div>
          <div class="about-stat"><strong>OSS</strong><span>Open-source contributor</span></div>
        </div>
      </div>

      <div class="about-closing">
        <div>
          <div class="closing-label">THE SHORT VERSION</div>
          <h2>Build useful things.<br>Understand <span>why.</span></h2>
        </div>

        <p>I'm most interested in teams where engineers are expected to understand the product, make technical decisions and take ownership beyond writing individual components.</p>
      </div>

    </div>
  `;
}

function skillsPage() {
  return `
    <div class="skills-page">

      <div class="skills-hero">
        <div>
          <div class="crumb">skills / stack.ts</div>
          <h1>Tools I use<br>to <span>build.</span></h1>
        </div>

        <p>
          My primary focus is React Native development, but I work across
          frontend, backend, APIs and databases when a product requires
          an end-to-end solution.
        </p>
      </div>

      <div class="skills-overview">
        <div class="skill-highlight">
          <span class="skill-number">01</span>
          <div>
            <h3>Mobile Development</h3>
            <p>
              Building cross-platform mobile applications with React Native,
              focusing on reusable components, navigation, state management,
              API integration and performance.
            </p>
          </div>
        </div>

        <div class="skill-highlight">
          <span class="skill-number">02</span>
          <div>
            <h3>Frontend Development</h3>
            <p>
              Creating responsive interfaces with React, JavaScript and
              TypeScript with an emphasis on component architecture and
              maintainable UI systems.
            </p>
          </div>
        </div>

        <div class="skill-highlight">
          <span class="skill-number">03</span>
          <div>
            <h3>Backend & APIs</h3>
            <p>
              Building REST APIs and backend services using Node.js and
              Express, including authentication, API integration and
              server-side logic.
            </p>
          </div>
        </div>

        <div class="skill-highlight">
          <span class="skill-number">04</span>
          <div>
            <h3>Data & Services</h3>
            <p>
              Working with Firebase and MySQL for application data,
              authentication, persistence and real-time functionality.
            </p>
          </div>
        </div>
      </div>

      <div class="stack-section">
        <div class="stack-heading">
          <div>
            <div class="crumb">stack.ts / technologies</div>
            <h2>Technical stack.</h2>
          </div>

          <span class="stack-count">18+ technologies & tools</span>
        </div>

        <div class="stack-grid">

          <div class="stack-card primary-stack">
            <div class="stack-card-top">
              <span class="stack-index">01</span>
              <span class="stack-label">PRIMARY</span>
            </div>

            <h3>React Native</h3>

            <p>
              My primary development focus for building production
              mobile applications.
            </p>

            <div class="skill-tags">
              <span>React Native</span>
              <span>Expo</span>
              <span>React Navigation</span>
              <span>Redux</span>
              <span>Redux Toolkit</span>
              <span>AsyncStorage</span>
              <span>Firebase</span>
            </div>
          </div>

          <div class="stack-card">
            <div class="stack-card-top">
              <span class="stack-index">02</span>
              <span class="stack-label">FRONTEND</span>
            </div>

            <h3>React & Web</h3>

            <p>
              Building responsive web applications and reusable
              component-based interfaces.
            </p>

            <div class="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React Router</span>
              <span>Redux Toolkit</span>
              <span>MUI</span>
            </div>
          </div>

          <div class="stack-card">
            <div class="stack-card-top">
              <span class="stack-index">03</span>
              <span class="stack-label">BACKEND</span>
            </div>

            <h3>Node.js & APIs</h3>

            <p>
              Developing backend services and REST APIs that connect
              applications to business logic and data.
            </p>

            <div class="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>Axios</span>
              <span>Authentication</span>
              <span>API Integration</span>
            </div>
          </div>

          <div class="stack-card">
            <div class="stack-card-top">
              <span class="stack-index">04</span>
              <span class="stack-label">DATABASE</span>
            </div>

            <h3>Data & Storage</h3>

            <p>
              Working with relational and cloud databases for application
              persistence and real-time data.
            </p>

            <div class="skill-tags">
              <span>MySQL</span>
              <span>Firebase</span>
              <span>Firestore</span>
              <span>Firebase Storage</span>
              <span>Data Modeling</span>
              <span>AsyncStorage</span>
            </div>
          </div>

          <div class="stack-card">
            <div class="stack-card-top">
              <span class="stack-index">05</span>
              <span class="stack-label">TOOLS</span>
            </div>

            <h3>Development Tools</h3>

            <p>
              Tools I use throughout development, debugging and
              source-control workflows.
            </p>

            <div class="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>npm</span>
              <span>Android Studio</span>
            </div>
          </div>

          <div class="stack-card">
            <div class="stack-card-top">
              <span class="stack-index">06</span>
              <span class="stack-label">CURRENTLY LEARNING</span>
            </div>

            <h3>Expanding the Stack</h3>

            <p>
              Technologies I'm actively exploring to become stronger
              across the full development lifecycle.
            </p>

            <div class="skill-tags">
              <span>GraphQL</span>
              <span>Apollo Client</span>
              <span>Next.js</span>
              <span>System Design</span>
              <span>Backend Architecture</span>
            </div>
          </div>

        </div>
      </div>

      <div class="skills-bottom">
        <div>
          <span class="bottom-label">THE APPROACH</span>
          <h2>Technology is<br>the tool, not the product.</h2>
        </div>

        <p>
          I don't try to use a technology just because it's popular.
          I prefer choosing tools based on the product requirements,
          complexity and long-term maintainability.
        </p>
      </div>

    </div>
  `;
}

function experience() {
  return `<div class="section-head">
    <div><div class="crumb">experience / experience.ts</div><h2>Work experience.</h2></div>
  </div>
  <div class="exp-timeline">
    <div class="exp-item">
      <div class="exp-header">
        <h3>ExeLance IT</h3>
        <div class="exp-meta"><span class="role">React Native Developer</span><span class="period">2024 — Present</span></div>
      </div>
      <div class="exp-details">
        <p><b>Responsibilities:</b> Building production React Native applications, API integration, state management, performance optimization.</p>
        <p><b>Tech:</b> React Native · Expo · Firebase · Node.js · TypeScript</p>
      </div>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <h3>Fablead Developers Pvt. Ltd.</h3>
        <div class="exp-meta"><span class="role">React Native Developer</span><span class="period">2022 — 2024</span></div>
      </div>
      <div class="exp-details">
        <p><b>Responsibilities:</b> Mobile app development, UI implementation, bug fixes, feature development for client projects.</p>
        <p><b>Tech:</b> React Native · JavaScript · Redux · Firebase</p>
      </div>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <h3>Internship</h3>
        <div class="exp-meta"><span class="role">Developer (Mobile)</span><span class="period">2021 — 2022</span></div>
      </div>
      <div class="exp-details">
        <p><b>Responsibilities:</b> Learning production workflows, contributing to mobile features, understanding architecture patterns.</p>
        <p><b>Tech:</b> React Native · JavaScript · Firebase</p>
      </div>
    </div>
  </div>`;
}

function contact() {
  return `<div class="contact-page">
    <div class="crumb">contact / contact.md</div>
    <h1>Let's build<br>something <span>great.</span></h1>
    <p>I'm open to React Native, React and full-stack opportunities. For a project, role or collaboration, send me a message.</p>
    <div class="contact-links">
      <a class="contact-link" href="mailto:ashishkhankari0922@gmail.com" target="_blank"><span class="contact-icon">📧</span> Email</a>
      <a class="contact-link" href="https://www.linkedin.com/in/ashish-khankari/" target="_blank"><span class="contact-icon">💼</span> LinkedIn</a>
      <a class="contact-link" href="https://github.com/ashish-khankari" target="_blank"><span class="contact-icon">🐙</span> GitHub</a>
      <a class="contact-link" href="https://medium.com/@ashishkhankari" target="_blank"><span class="contact-icon">✍️</span> Medium</a>
      <a class="contact-link" href="https://drive.google.com/file/d/1kgT4qRUm5Geet_E2qHkl8pKu8bg4tv5w/view?usp=sharing" target="_blank"><span class="contact-icon">📄</span> Resume</a>
    </div>
  </div>`;
}

function pageContent(page) {
  if (page === "home") return home();
  if (page === "work") return work();
  if (projects[page]) return project(page);
  if (page === "skills") return skillsPage();
  if (page === "about") return about();
  if (page === "experience") return experience();
  return contact();
}

function label(page) {
  if (page === "home") return "README.md";
  if (page === "work") return "projects.tsx";
  if (projects[page]) return projects[page].file;
  if (page === "skills") return "stack.ts";
  if (page === "about") return "profile.md";
  if (page === "experience") return "experience.ts";
  return "contact.md";
}

function toggleDrawer() {
  document.querySelector(".explorer").classList.toggle("open");
}

function closeDrawer() {
  document.querySelector(".explorer").classList.remove("open");
}

function show(page) {
  closeDrawer();
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

    tab.addEventListener("click", e => {
      if (!e.target.classList.contains("close")) show(page);
    });

    tab.querySelector(".close").addEventListener("click", e => {
      e.stopPropagation();

      const wasActive = tab.classList.contains("active");
      tab.remove();

      if (wasActive) {
        const remainingTabs = [...tabs.children];

        if (remainingTabs.length > 0) {
          show(remainingTabs[remainingTabs.length - 1].dataset.page);
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

function createCommandPalette() {
  const existing = document.querySelector(".command-palette");
  if (existing) return;

  const palette = document.createElement("div");
  palette.className = "command-palette";

  palette.innerHTML = `
    <div class="command-overlay"></div>
    <div class="command-box">
      <input type="text" class="command-input" placeholder="Search files...">
      <div class="command-results" id="results"></div>
    </div>
  `;

  document.body.appendChild(palette);

  const input = palette.querySelector(".command-input");
  const results = palette.querySelector("#results");
  const overlay = palette.querySelector(".command-overlay");

  const files = [
    { label: "projects.tsx", page: "work" },
    { label: "central-ai.tsx", page: "centralai" },
    { label: "trade-safe.tsx", page: "tradesafetransfers" },
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

    results.innerHTML = filtered.map((f, i) => `
      <div class="result ${i === 0 ? "active" : ""}" data-page="${f.page}" data-egg="${f.isEgg || false}">
        <span>></span>${f.label}
      </div>
    `).join("");
  }

  input.addEventListener("input", renderResults);

  input.addEventListener("keydown", e => {
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
      if (!active) return;

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

  results.addEventListener("click", e => {
    const result = e.target.closest(".result");
    if (!result) return;

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

  content.innerHTML = `
    <div class="easter-egg">
      <div class="terminal">
        <div class="line">$ sudo hire ashish</div>
        <div class="line status">Checking requirements...</div>
        <div class="line check">✓ React Native</div>
        <div class="line check">✓ React</div>
        <div class="line check">✓ Node.js</div>
        <div class="line check">✓ Can build things</div>
        <div class="line check">✓ Still learning</div>
        <div class="line result">Permission granted. 🚀</div>
      </div>
      <a href="#" class="back" onclick="show('home');return false">← Back</a>
    </div>
  `;
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDrawer();

  if (e.ctrlKey && e.key.toLowerCase() === "k") {
    e.preventDefault();
    createCommandPalette();
  }

  if (document.activeElement.tagName !== "INPUT") {
    if (e.key.toLowerCase() === "g" && !e.ctrlKey) show("work");
    if (e.key.toLowerCase() === "a" && !e.ctrlKey) show("about");
    if (e.key.toLowerCase() === "c" && !e.ctrlKey) show("contact");
  }
});

document.addEventListener("click", e => {
  const explorer = document.querySelector(".explorer");
  const menuToggle = document.querySelector(".menu-toggle");

  if (
    explorer &&
    explorer.classList.contains("open") &&
    !explorer.contains(e.target) &&
    menuToggle &&
    !menuToggle.contains(e.target)
  ) {
    closeDrawer();
  }
});

renderTree();
show("home");
