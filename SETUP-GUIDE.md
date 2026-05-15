# 🚀 Shreya's Portfolio — Full Setup Guide
## VS Code + Claude + Netlify Deploy

---

## PART 1 — SET UP VS CODE

### Step 1: Install VS Code
1. Go to **https://code.visualstudio.com**
2. Click **Download for Mac** (or Windows)
3. Open the downloaded file and drag VS Code into your Applications folder
4. Open VS Code

### Step 2: Install Node.js (required to run React)
1. Go to **https://nodejs.org**
2. Download the **LTS version** (the green button)
3. Run the installer — click Next through everything
4. To verify it worked: open VS Code → press `` Ctrl+` `` (backtick) to open the terminal → type:
   ```
   node --version
   ```
   You should see something like `v20.x.x` ✅

---

## PART 2 — OPEN YOUR PORTFOLIO IN VS CODE

### Step 3: Unzip and open the project
1. **Unzip** `shreya-portfolio.zip` — you'll get a folder called `shreya-portfolio`
2. Open VS Code
3. Go to **File → Open Folder**
4. Select the `shreya-portfolio` folder
5. Click **Open**

You'll see all the files listed in the left sidebar.

### Step 4: Install dependencies
1. In VS Code, open the terminal: **View → Terminal** (or press `` Ctrl+` ``)
2. Type this and press Enter:
   ```
   npm install
   ```
3. Wait ~30 seconds for it to finish
4. Then type:
   ```
   npm run dev
   ```
5. You'll see a URL like `http://localhost:5173`
6. **Ctrl+Click** that URL → your portfolio opens in the browser! 🎉

---

## PART 3 — USE CLAUDE TO MAKE CHANGES

### Step 5: Install the Claude Code extension
1. In VS Code, click the **Extensions icon** on the left sidebar (looks like 4 squares)
2. Search for: **Claude Code**
3. Install the one by **Anthropic** (verified publisher, 2M+ installs)
4. You'll need a **Claude Pro subscription** to use it

### Step 6: How to ask Claude to make changes
Once Claude Code is installed, you can talk to it directly inside VS Code.

**Example prompts you can type to Claude Code:**

> "Change the hero section background color to dark purple"

> "Add a new skill tag called 'Databricks' to the Programming category in Skills.jsx"

> "Make the project cards have a glowing violet border on hover instead of rose"

> "Add a new project card for my Purdue practicum project with these details: [paste your details]"

> "Replace the photo placeholder in Hero.jsx with my actual photo — the file is called shreya.jpg"

**To add your photo:**
1. Put your photo file (e.g. `shreya.jpg`) inside the `public/` folder
2. Open `src/components/Hero.jsx`
3. Find this comment: `{/* Replace the div below with: */}`
4. Replace the placeholder `<div>` block with:
   ```jsx
   <img src="/shreya.jpg" className="w-full h-full object-cover rounded-full" alt="Shreya" />
   ```

### Step 7: Where each section lives
| Section | File |
|---|---|
| Navigation bar | `src/components/Nav.jsx` |
| Hero (top section) | `src/components/Hero.jsx` |
| Education | `src/components/Education.jsx` |
| Experience (timeline) | `src/components/Experience.jsx` |
| Projects | `src/components/Projects.jsx` |
| Skills (tags) | `src/components/Skills.jsx` |
| Hobbies | `src/components/Hobbies.jsx` |
| Awards | `src/components/Awards.jsx` |
| Contact | `src/components/Contact.jsx` |
| Colors & fonts | `src/index.css` + `tailwind.config.js` |

### Step 8: Save and see changes instantly
- Every time you save a file (**Cmd+S** on Mac, **Ctrl+S** on Windows)
- The browser will **automatically refresh** and show your changes
- No need to restart anything

---

## PART 4 — DEPLOY TO NETLIFY (Free)

### Step 9: Create a GitHub account (if you don't have one)
1. Go to **https://github.com**
2. Sign up for a free account

### Step 10: Push your project to GitHub
1. In VS Code, click the **Source Control icon** on the left sidebar (looks like a branch)
2. Click **Initialize Repository**
3. Click the **+** next to "Changes" to stage all files
4. Type a commit message like `Initial portfolio` in the text box at the top
5. Press **Cmd+Enter** (Mac) or **Ctrl+Enter** (Windows) to commit
6. Click **Publish Branch** → choose **Public** → name it `shreya-portfolio`
7. Your code is now on GitHub ✅

### Step 11: Deploy on Netlify
1. Go to **https://netlify.com** and sign up (free, use your GitHub account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **GitHub** → authorize Netlify
4. Find and select your `shreya-portfolio` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**
7. Wait ~2 minutes
8. Netlify gives you a URL like `https://quirky-name-123.netlify.app`
9. Your portfolio is LIVE 🎉

### Step 12: Get a custom URL (optional)
- In Netlify: **Site settings → Domain management → Custom domains**
- You can set a free subdomain like `shreya-malvankar.netlify.app`
- Or buy a domain like `shreyamalvankar.com` (~$12/year on Namecheap)

### Step 13: Auto-deploy when you make changes
Netlify is now connected to GitHub. Every time you:
1. Make a change in VS Code
2. Save the file
3. Commit it (Source Control panel → stage → commit → push)

**Netlify automatically rebuilds and updates your live site within 2 minutes.** No manual re-deploying needed.

---

## QUICK REFERENCE — Most Common Tasks

| What you want to do | How |
|---|---|
| Change your name/title | Edit `src/components/Hero.jsx` |
| Add a project | Edit `src/components/Projects.jsx`, copy an existing card block |
| Add/remove a skill tag | Edit `src/components/Skills.jsx`, find the right group |
| Change colors | Edit `tailwind.config.js` under `colors:` |
| Add a new experience | Edit `src/components/Experience.jsx`, add to the `EXP` array |
| Update contact email | Edit `src/components/Contact.jsx` and `src/components/Nav.jsx` |
| Add your photo | Put photo in `public/`, edit `Hero.jsx` (see Step 6 above) |
| Update LinkedIn URL | Search the whole project for `shreya-malvankar` and replace |

---

## IF SOMETHING BREAKS

1. **Terminal shows red errors** → read the error message, paste it into Claude chat and ask "what does this mean and how do I fix it?"
2. **Page is blank** → open browser DevTools (F12) → Console tab → screenshot the red error → ask Claude
3. **npm install fails** → try `npm install --legacy-peer-deps`
4. **Port already in use** → type `npm run dev -- --port 3000` instead

---

*Portfolio built with React + Vite + Tailwind CSS · Designed for Shreya Malvankar*
