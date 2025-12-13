# 🚀 Git & GitHub - Visual Step-by-Step Guide

## The Problem
You want to push your StratEdge website to GitHub but aren't sure how.

## The Solution
Follow these 3 simple steps:

---

## 📍 STEP 1: Set Up Git Locally (One Time Only)

Open **PowerShell** in your project folder and run these commands:

```powershell
git init
```
✅ This creates a `.git` folder (already exists for you)

```powershell
git config user.name "Your Full Name"
git config user.email "your-email@example.com"
```
✅ This tells Git who you are

```powershell
git add .
```
✅ This stages all your files

```powershell
git commit -m "Initial commit: StratEdge website"
```
✅ This saves your files locally with a message

---

## 🌐 STEP 2: Create Empty Repository on GitHub

1. **Go to:** https://github.com/new
2. **Fill in:**
   - Repository name: `Leaddoctave1`
   - Description: "StratEdge professional website"
   - Visibility: Choose **Public** or **Private**
3. **IMPORTANT:** Leave these unchecked:
   - ❌ Initialize with README
   - ❌ Add .gitignore
   - ❌ Choose license
4. **Click:** "Create repository"

You'll see a new page with your repository URL!

---

## 🔗 STEP 3: Connect & Push to GitHub

Copy these commands from GitHub's page and run them in PowerShell:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Leaddoctave1.git
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` = Your GitHub username

Example:
```powershell
git branch -M main
git remote add origin https://github.com/john-doe/Leaddoctave1.git
git push -u origin main
```

When prompted:
- **Username:** Your GitHub username
- **Password:** Your Personal Access Token (see below)

---

## 🔑 Getting Your Personal Access Token

When you run `git push`, you need to authenticate. Here's how:

### Generate Token:
1. Go to: https://github.com/settings/tokens
2. Click: "Generate new token" → "Generate new token (classic)"
3. **Token name:** `GitHub Push Token`
4. **Scopes:** Check ✅ `repo`
5. Click: "Generate token"
6. **Copy the token** (appears in green box - you'll only see it once!)

### Use Token:
When prompted for password during `git push`, paste the token (not your GitHub password).

---

## ✅ Verify Success

Visit: `https://github.com/YOUR_USERNAME/Leaddoctave1`

You should see:
- ✅ All your project files
- ✅ Your commit message
- ✅ File counts and sizes

---

## 🔄 Future Updates (After Initial Push)

Every time you make changes:

```powershell
git add .
git commit -m "What changed: Added new section"
git push
```

That's it! 🎉

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "fatal: not a git repository" | Run `git init` in your project folder |
| "remote origin already exists" | Run `git remote remove origin` first |
| "Authentication failed" | Use Personal Access Token, not your password |
| "Permission denied (publickey)" | You're using SSH - either use HTTPS URL or set up SSH keys |

---

## 📞 Need Help?

Common commands:
```powershell
git status              # See what changed
git log                 # View commit history
git remote -v          # See connected repositories
git branch             # List branches
```

---

**🎯 Pro Tip:** After the first push, subsequent pushes are much faster - just:
```powershell
git add .
git commit -m "message"
git push
```

Good luck! 🚀
