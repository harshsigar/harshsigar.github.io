# 🚀 Personal Portfolio Website

A sleek, modern, zero-dependency personal portfolio website built with semantic **HTML5**, **Modern CSS3** (variables, glassmorphism, responsive grid/flexbox), and **Vanilla JavaScript**. 

Designed specifically for **Computer Science & Engineering students** to showcase their projects, technical skills, coursework milestones, and social profiles.

---

## 🌟 Key Features

- **⚡ Zero Build Dependencies**: No Node.js, Webpack, or Vite required. Runs instantly in any browser.
- **🎨 Cyber-Modern Aesthetic**: Dark theme by default with glowing accents, glassmorphism cards, and a 1-click Light mode toggle.
- **💻 Interactive Developer Console (Easter Egg)**: Built-in simulated bash terminal that lets visitors run commands like `help`, `skills`, `projects`, `contact`, `theme`, and `sudo hire-me`.
- **⌨️ Dynamic Typewriter Subheading**: Cycles smoothly through roles and specializations in the hero section.
- **🔍 Project Category Filtering**: Instant client-side filtering (`All`, `Web Apps`, `C++ & CLI`, `Visualizers & Tools`).
- **📱 100% Mobile & Tablet Responsive**: Responsive layouts with custom mobile drawer navigation.
- **📋 Copy-to-Clipboard Email with Toast Alerts**: Quick action button for recruiters and visitors to copy your email.
- **🌐 GitHub Pages Ready**: Built with relative asset paths for 1-click deployment on GitHub Pages.

---

## 📂 Project Structure

```text
c:\Codes\portfolio\
├── index.html                  # Main portfolio website (HTML5 semantic structure & SEO)
├── css\
│   └── style.css               # Modern CSS: design tokens, glassmorphism, responsive styles
├── js\
│   └── script.js               # Interactive JS: theme toggle, typewriter, terminal, filters
├── assets\
│   ├── images\                 # SVG images & project thumbnails
│   │   ├── avatar.svg          # Stylized developer avatar illustration
│   │   ├── favicon.svg         # Tab favicon
│   │   ├── project-1.svg       # Developer Portfolio preview graphic
│   │   ├── project-2.svg       # C++ CLI Task Manager preview graphic
│   │   ├── project-3.svg       # Sorting Algorithm Visualizer preview graphic
│   │   └── project-4.svg       # DevLog & Notes Hub preview graphic
│   └── resume\
│       └── README.txt          # Place your 'resume.pdf' here
└── README.md                   # Setup, customization & GitHub Pages deployment guide
```

---

## 🖥️ How to Preview Locally

### Option 1: Double-Click (Easiest)
Simply open File Explorer, navigate to `c:\Codes\portfolio`, and double-click `index.html` to open it in your default browser (Chrome, Edge, Firefox, Brave, etc.).

### Option 2: Using Python HTTP Server (Recommended)
Open PowerShell in `c:\Codes\portfolio` and run:
```powershell
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3: VS Code Live Server Extension
1. Open this folder in VS Code (`File` -> `Open Folder...` -> `c:\Codes\portfolio`).
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and select **Open with Live Server**.

---

## ✏️ How to Customize Your Portfolio

All sections in `index.html` are clearly marked with `<!-- EDIT HERE: ... -->` comments:

1. **Your Name & Bio**:
   - Open `index.html` and search for `Harsh Sigar` or `hero-title` to update your name.
   - Update the description in `<p class="hero-description">`.
2. **Your Social Profiles**:
   - Search for `hero-socials` and update the `href=""` URLs for your GitHub, LinkedIn, X, and LeetCode profiles.
3. **Your Email**:
   - Update `mailto:` links in `index.html` and change the `userEmail` variable in `js/script.js`.
4. **Your Skills & Tech Stack**:
   - Locate the `<section id="skills">` in `index.html` and add/remove `<span class="skill-pill">...</span>` badges as you learn new technologies (e.g., Java, React, Docker).
5. **Adding / Editing Projects**:
   - Locate `<section id="projects">` and duplicate or edit an `<article class="project-card">` block.
   - Set the `data-category` attribute to `web`, `cpp`, or `mini` for automatic filter matching.
6. **Adding Your Resume**:
   - Save your resume PDF as `resume.pdf` inside `assets/resume/`.
   - Update the navigation resume link to `./assets/resume/resume.pdf`.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com) (Account: `harshsigar`).
2. Click the **+** icon in the top-right corner and select **New repository** (or visit [github.com/new](https://github.com/new)).
3. **Repository Name**:
   - Enter **`harshsigar.github.io`** (this creates your root personal website at `https://harshsigar.github.io/`).
4. Set visibility to **Public**.
5. Leave all initialization options unchecked (do NOT add README, .gitignore, or license).
6. Click **Create repository**.

### Step 2: Upload or Push Your Files

#### Option A: Quick Upload via Web Browser (Zero Setup)
1. On your newly created repository page, click **"uploading an existing file"**.
2. Open [`c:\Codes\portfolio`](file:///c:/Codes/portfolio) on your computer.
3. Select and drag all files (`index.html`, `README.md`, folders `css`, `js`, `assets`) into GitHub.
4. Click **Commit changes**.

#### Option B: Using Git in PowerShell
```powershell
cd c:\Codes\portfolio
git init
git add .
git commit -m "Initial commit: Harsh Sigar Portfolio"
git branch -M main
git remote add origin https://github.com/harshsigar/harshsigar.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/harshsigar/harshsigar.github.io`.
2. Click **Settings** (top tab) -> **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` and folder `/ (root)`
   - Click **Save**.
4. In 1–2 minutes, your website will be live at:
   👉 **https://harshsigar.github.io/** 🎉

---

## 🌐 How to Add a Custom Domain Later (e.g., `harshsigar.com`)

When you buy a domain name (from Namecheap, GoDaddy, Cloudflare, Google Domains/Squarespace, etc.):

1. In GitHub Repository -> **Settings** -> **Pages** -> **Custom domain**:
   - Type your domain name (e.g., `harshsigar.com` or `www.harshsigar.com`) and click **Save**.
   - Check **Enforce HTTPS** (GitHub provides free SSL certificates!).
2. In your Domain Registrar's DNS settings, add:
   - **Apex domain (`@`)**: Add 4 `A` records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Subdomain (`www`)**: Add 1 `CNAME` record pointing to `<your-username>.github.io`.

---

## 📜 License
This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

