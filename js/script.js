/**
 * ==========================================================================
 * PERSONAL PORTFOLIO - JAVASCRIPT ENGINE
 * Handles: Theme Toggle, Typewriter, Project Filtering, Interactive Terminal,
 * ScrollSpy, Mobile Navigation, Toast Alerts, and Copy Helpers.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. THEME SWITCHER (Dark / Light Mode)
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (!systemPrefersDark) {
    htmlRoot.setAttribute('data-theme', 'light');
  } else {
    htmlRoot.setAttribute('data-theme', 'dark');
  }

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode ✨`);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // ------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION MENU
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. NAVBAR SCROLL EFFECT & SCROLLSPY
  // ------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky shadow
    if (scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // ScrollSpy active link detection
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (activeLink) activeLink.classList.add('active');
      } else {
        if (activeLink) activeLink.classList.remove('active');
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 4. TYPEWRITER EFFECT IN HERO SECTION
  // ------------------------------------------------------------------------
  const typedTextSpan = document.getElementById('typedText');
  const roles = [
    'B.Tech CSE Undergrad',
    'Problem Solver & Coder',
    'Full-Stack Web Explorer',
    'C++ & Python Enthusiast',
    'Open Source Learner'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 40;
  const delayBetweenRoles = 1800;

  function typeEffect() {
    if (!typedTextSpan) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenRoles);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 400);
    } else {
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  typeEffect();

  // ------------------------------------------------------------------------
  // 5. HERO INTERACTIVE CODE CARD TABS
  // ------------------------------------------------------------------------
  const heroTabs = document.querySelectorAll('.card-tab');
  const heroCodeContent = document.getElementById('heroCodeContent');

  const tabSnippets = {
    'about.json': `{\n  <span class="code-prop">"name"</span>: <span class="code-str">"Harsh Sigar"</span>,\n  <span class="code-prop">"role"</span>: <span class="code-str">"B.Tech CSE Undergrad"</span>,\n  <span class="code-prop">"status"</span>: <span class="code-str">"Building cool software &amp; learning DSA"</span>,\n  <span class="code-prop">"interests"</span>: [<span class="code-str">"Web Dev"</span>, <span class="code-str">"Algorithms"</span>, <span class="code-str">"Systems"</span>]\n}`,
    'skills.ts': `<span class="code-keyword">const</span> <span class="code-var">developerSkills</span> = {\n  <span class="code-prop">languages</span>: [<span class="code-str">"C++"</span>, <span class="code-str">"C"</span>, <span class="code-str">"Python"</span>, <span class="code-str">"JavaScript"</span>],\n  <span class="code-prop">tools</span>: [<span class="code-str">"Git"</span>, <span class="code-str">"GitHub"</span>, <span class="code-str">"VS Code"</span>, <span class="code-str">"Linux"</span>],\n  <span class="code-prop">focus</span>: <span class="code-str">"Data Structures &amp; Web Architectures"</span>\n};`,
    'goals.sh': `<span class="code-keyword">#!/bin/bash</span>\n<span class="code-var">echo</span> <span class="code-str">"🚀 2026-2027 Roadmap:"</span>\n<span class="code-var">echo</span> <span class="code-str">"1. Master DSA (LeetCode / Codeforces)"</span>\n<span class="code-var">echo</span> <span class="code-str">"2. Build 5+ Full-Stack Web Projects"</span>\n<span class="code-var">echo</span> <span class="code-str">"3. Win College Hackathons &amp; Contribute to OSS"</span>`
  };

  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      heroTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const fileName = tab.getAttribute('data-tab');
      if (heroCodeContent && tabSnippets[fileName]) {
        heroCodeContent.innerHTML = tabSnippets[fileName];
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. PROJECTS CATEGORY FILTER
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 7. INTERACTIVE TERMINAL SIMULATOR (EASTER EGG)
  // ------------------------------------------------------------------------
  const terminalInput = document.getElementById('terminalInput');
  const terminalLogs = document.getElementById('terminalLogs');
  const terminalChips = document.querySelectorAll('.terminal-chip');

  const commandResponses = {
    'help': `Available Commands:
  • <span class="log-line command">about</span>      - Summary of who I am
  • <span class="log-line command">skills</span>     - My current programming stack
  • <span class="log-line command">projects</span>   - List of featured projects
  • <span class="log-line command">education</span>  - My academic background
  • <span class="log-line command">contact</span>    - Ways to reach me
  • <span class="log-line command">theme</span>      - Toggle Dark / Light theme
  • <span class="log-line command">sudo hire-me</span>- Special recruiter command 🚀
  • <span class="log-line command">clear</span>      - Clear the terminal screen`,

    'about': `Harsh Sigar | B.Tech CSE Undergrad
Enthusiastic first-year Computer Science student passionate about software engineering, problem solving, algorithms, and web applications.`,

    'skills': `Core Languages: C++, C, Python, JavaScript, HTML5/CSS3
Frameworks & Libraries: React (learning), Node.js (exploring)
Tools & Environments: Git, GitHub, VS Code, Linux Terminal`,

    'projects': `1. Personal Portfolio Website (HTML5, Modern CSS, JavaScript)
2. C++ CLI Task & Habit Manager (C++17, File I/O, OOP)
3. Sorting Algorithm Visualizer (Vanilla JS, Canvas API)
4. DevLog & Student Resource Hub (Modern Web)`,

    'education': `• Degree: Bachelor of Technology (B.Tech) in CSE (2026 - 2030)
• Senior Secondary (XII): SS Adarsh Convent School (Science - PCM + CS)
• Secondary (X): SS Adarsh Convent School
• Focus Areas: Data Structures, Algorithms, Problem Solving, Modern Web`,

    'contact': `Email: harshsigar.dev@gmail.com
GitHub: https://github.com/harshsigar
LinkedIn: https://linkedin.com/in/harshsigar`,

    'sudo hire-me': `🎉 ACCESS GRANTED!
Great choice! I am passionate, quick to learn, and ready to contribute to impactful software projects. Let's talk over email: harshsigar.dev@gmail.com`,

    'theme': () => {
      toggleTheme();
      return `Theme switched successfully!`;
    }
  };

  function executeTerminalCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    // Log the user command
    const userLine = document.createElement('div');
    userLine.className = 'log-line';
    userLine.innerHTML = `<span class="terminal-prompt">$</span> <span class="log-line command">${escapeHtml(cleanCmd)}</span>`;
    terminalLogs.appendChild(userLine);

    if (cleanCmd === 'clear') {
      terminalLogs.innerHTML = '';
      terminalInput.value = '';
      return;
    }

    const responseLine = document.createElement('div');
    responseLine.className = 'log-line output';

    if (commandResponses[cleanCmd]) {
      const response = commandResponses[cleanCmd];
      if (typeof response === 'function') {
        responseLine.innerHTML = response();
      } else {
        responseLine.innerHTML = response.replace(/\n/g, '<br>');
      }
    } else {
      responseLine.className = 'log-line error';
      responseLine.innerHTML = `command not found: "${escapeHtml(cleanCmd)}". Type <span class="command">'help'</span> for available commands.`;
    }

    terminalLogs.appendChild(responseLine);
    terminalInput.value = '';

    // Scroll terminal to bottom
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeTerminalCommand(terminalInput.value);
      }
    });
  }

  terminalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (terminalInput) {
        terminalInput.value = cmd;
        executeTerminalCommand(cmd);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 8. TOAST NOTIFICATION ENGINE
  // ------------------------------------------------------------------------
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ------------------------------------------------------------------------
  // 9. COPY EMAIL TO CLIPBOARD
  // ------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const userEmail = 'harshsigar.dev@gmail.com'; // EDITABLE

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(userEmail).then(() => {
        showToast('📋 Email copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${userEmail}`);
      });
    });
  }

  // ------------------------------------------------------------------------
  // 10. CONTACT FORM HANDLER
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      
      // If using Formspree/EmailJS, the real POST request goes here.
      showToast(`Thanks ${name}! Your message was logged successfully 🚀`);
      contactForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 11. DYNAMIC FOOTER YEAR
  // ------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Helper utility
  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
