// ============================================
// MAIN — Core logic & rendering
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initThemeToggle();
  initTypingEffect();
  renderStats();
  renderSkills();
  renderTimeline();
  renderOfficialProjects();
  renderPersonalProjects();
  renderEducation();
  renderContact();
  initScrollReveal();
  initProjectTabs();
  initBackToTop();
});

// --- Particles ---
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (canvas) new ParticleNetwork(canvas);
}

// --- Navbar ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
      navLinks.forEach(l => l.classList.remove('active'));
      // Find matching desktop/mobile link
      const href = link.getAttribute('href');
      document.querySelectorAll(`.nav-links a[href="${href}"], .mobile-menu a[href="${href}"]`)
        .forEach(l => l.classList.add('active'));
    });
  });

  // Active section highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  });
}

// --- Theme Toggle ---
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateToggleIcon(saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
  });
}

function updateToggleIcon(theme) {
  const toggle = document.getElementById('theme-toggle');
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// --- Typing Effect ---
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const texts = PROFILE.typingTexts;
  let textIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = texts[textIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; }
      setTimeout(type, 30);
    } else {
      el.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) { isDeleting = true; setTimeout(type, 2000); }
      else setTimeout(type, 60);
    }
  }
  type();
}

// --- Render Stats ---
function renderStats() {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  grid.innerHTML = STATS.map(s => `
    <div class="stat-card reveal">
      <div class="stat-number" data-target="${s.number}">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

// --- Render Skills ---
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = SKILLS.map(cat => `
    <div class="skill-category reveal">
      <div class="skill-category-title">
        <span class="cat-icon">${cat.icon}</span> ${cat.title}
      </div>
      <div class="skill-tags">
        ${cat.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// --- Render Timeline ---
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <div>
          <div class="timeline-role">${exp.role}</div>
          <div class="timeline-company">${exp.company}</div>
        </div>
        <div class="timeline-meta">${exp.period} · ${exp.location}</div>
      </div>
      <ul class="timeline-desc">
        ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="timeline-projects">
        ${exp.projects.map(p => `<span class="tag tag-green">${p}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// --- Render Official Projects ---
function renderOfficialProjects(filter = 'all') {
  const container = document.getElementById('official-projects-grid');
  if (!container) return;
  const filtered = filter === 'all' ? OFFICIAL_PROJECTS : OFFICIAL_PROJECTS.filter(p => p.category === filter);
  container.innerHTML = filtered.map(p => `
    <div class="project-card glass-card reveal" data-category="${p.category}">
      <div class="project-card-header">
        <div class="project-card-icon">${p.icon}</div>
        <span class="tag tag-green">${p.company}</span>
      </div>
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div style="margin-top: var(--space-sm);">
          <span style="font-size:0.78rem;color:var(--accent-secondary);font-weight:600;">⚡ ${p.impact}</span>
        </div>
      </div>
      <div class="project-card-footer">
        <div class="project-card-tags">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// --- Render Personal Projects ---
function renderPersonalProjects(filter = 'all') {
  const container = document.getElementById('personal-projects-grid');
  if (!container) return;
  const filtered = filter === 'all' ? PERSONAL_PROJECTS : PERSONAL_PROJECTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => {
    if (p.featured) {
      return `
      <div class="project-card featured glass-card reveal" data-category="${p.category}">
        <div class="project-featured-content">
          <div style="margin-bottom:var(--space-sm);">
            <span class="status-badge ${p.status}">${p.statusLabel}</span>
          </div>
          <h3 style="font-size:1.4rem;margin-bottom:var(--space-sm);">${p.icon} ${p.title}</h3>
          <p>${p.description}</p>
          <ul class="feature-list">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="project-card-tags" style="margin:var(--space-md) 0;">
            ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${p.url ? `<a href="${p.url}" target="_blank" class="btn btn-primary" style="align-self:flex-start;">Visit Product →</a>` : ''}
        </div>
        <div class="project-featured-visual">
          <div style="text-align:center;color:var(--text-muted);">
            <div style="font-size:4rem;margin-bottom:var(--space-md);">${p.icon}</div>
            <div style="font-family:var(--font-code);font-size:0.8rem;color:var(--accent-primary);">// Edge-deployed AI</div>
            <div style="font-family:var(--font-code);font-size:0.8rem;color:var(--text-muted);">// Zero cloud dependency</div>
            <div style="font-family:var(--font-code);font-size:0.8rem;color:var(--accent-secondary);">// Custom-trained models</div>
          </div>
        </div>
      </div>`;
    }
    return `
    <div class="project-card glass-card reveal" data-category="${p.category}">
      <div class="project-card-header">
        <div class="project-card-icon">${p.icon}</div>
        <span class="status-badge ${p.status}">${p.statusLabel}</span>
      </div>
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${p.features ? `<ul class="feature-list">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
      </div>
      <div class="project-card-footer">
        <div class="project-card-tags">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        ${p.url ? `<a href="${p.url}" target="_blank" class="btn-ghost">Visit →</a>` : ''}
      </div>
    </div>`;
  }).join('');
  initScrollReveal();
}

// --- Render Education ---
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;
  container.innerHTML = `
    <div class="edu-card glass-card reveal">
      <div class="edu-icon">🎓</div>
      <div class="edu-details">
        <h3>${EDUCATION.degree}</h3>
        <p>${EDUCATION.university}</p>
        <p style="color:var(--text-muted);font-family:var(--font-code);font-size:0.82rem;">${EDUCATION.period}</p>
      </div>
    </div>
  `;
}

// --- Render Contact ---
function renderContact() {
  const info = document.getElementById('contact-info');
  if (!info) return;
  info.innerHTML = `
    <h3>Let's Build Something Remarkable</h3>
    <p>Whether you're looking for an AI architect, exploring partnership opportunities, or want to discuss cutting-edge AI — I'd love to hear from you.</p>
    <div class="contact-links">
      <a href="mailto:${PROFILE.email}" class="contact-link" id="contact-email">
        <div class="link-icon">✉️</div>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">${PROFILE.email}</div>
          <div style="font-size:0.78rem;color:var(--text-muted);">Email</div>
        </div>
      </a>
      <a href="${PROFILE.linkedin}" target="_blank" class="contact-link" id="contact-linkedin">
        <div class="link-icon">💼</div>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">LinkedIn Profile</div>
          <div style="font-size:0.78rem;color:var(--text-muted);">Connect with me</div>
        </div>
      </a>
      <a href="${PROFILE.github}" target="_blank" class="contact-link" id="contact-github">
        <div class="link-icon">💻</div>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">GitHub</div>
          <div style="font-size:0.78rem;color:var(--text-muted);">View my code</div>
        </div>
      </a>
      <div class="contact-link" id="contact-location">
        <div class="link-icon">📍</div>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">${PROFILE.location}</div>
          <div style="font-size:0.78rem;color:var(--text-muted);">${PROFILE.availability}</div>
        </div>
      </div>
    </div>
  `;
}

// --- Project Tab Filtering ---
function initProjectTabs() {
  document.querySelectorAll('.project-tabs').forEach(tabGroup => {
    const section = tabGroup.dataset.section;
    tabGroup.querySelectorAll('.project-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabGroup.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        if (section === 'official') renderOfficialProjects(filter);
        else renderPersonalProjects(filter);
      });
    });
  });
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
    .forEach(el => observer.observe(el));
}

// --- Back to Top ---
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
