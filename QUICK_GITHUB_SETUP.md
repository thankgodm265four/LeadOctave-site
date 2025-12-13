# StratEdge Website - Quick GitHub Setup (3 Steps)

## ⚡ Quick Start (Copy & Paste)

### Step 1: Initialize Git Locally
Open PowerShell in your project folder and run:
```powershell
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"
git add .
git commit -m "Initial commit: StratEdge website"
```

### Step 2: Create Empty Repository on GitHub
1. Go to https://github.com/new
2. Enter repository name: `Leaddoctave1`
3. Select **Private** or **Public**
4. **IMPORTANT:** Don't select "Initialize with README"
5. Click "Create repository"

### Step 3: Connect & Push
After creating the repo, GitHub shows a page with your repository URL. Copy and run:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace:
- `YOUR_USERNAME` = your GitHub username
- `YOUR_REPO` = your repository name (e.g., `Leaddoctave1`)

---

## 🔐 Authentication

When you run `git push`, you'll be asked for a password:
- **Username:** Your GitHub username
- **Password:** Generate a Personal Access Token (NOT your GitHub password)

### To Generate a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: `GitHub Push Token`
4. Select scope: `repo`
5. Click "Generate token"
6. Copy the token (you'll only see it once!)
7. Use it as your password when pushing

---

## ✅ Verify Success

Visit: `https://github.com/YOUR_USERNAME/Leaddoctave1`

You should see all your project files!

---

## 📝 Future Updates

After making changes:
```powershell
git add .
git commit -m "Description of what changed"
git push
```

That's it! 🚀
