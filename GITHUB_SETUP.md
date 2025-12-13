# GitHub Setup Instructions for StratEdge Website

## Step 1: Initialize Git Locally

Open PowerShell in your project directory (`C:\Users\Administrator\Documents\github\Leaddoctave1`) and run:

```powershell
# Initialize git repository
git init

# Configure your Git username and email (if not already configured globally)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: StratEdge website with Astro, React, and Tailwind CSS"
```

## Step 2: Create Repository on GitHub

1. Go to https://github.com/new
2. **Repository name:** `Leaddoctave1` (or any name you prefer)
3. **Description:** "StratEdge website - Professional corporate website built with Astro, React, and Tailwind CSS"
4. **Privacy:** Choose **Public** or **Private** based on your preference
5. **Do NOT initialize with README, .gitignore, or license** (you already have these)
6. Click **"Create repository"**

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show instructions. Copy the commands below and run them:

```powershell
# Add the remote repository (replace YOUR_USERNAME and YOUR_REPO)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push your code to GitHub
git push -u origin main
```

**Example:**
```powershell
git branch -M main
git remote add origin https://github.com/myusername/Leaddoctave1.git
git push -u origin main
```

## Step 4: Authenticate with GitHub

If prompted for credentials, you have two options:

### Option A: Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token and paste it when prompted for a password

### Option B: SSH Key Setup
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your-email@example.com"`
2. Add the public key to GitHub (Settings → SSH and GPG keys)
3. Use SSH URL instead: `git@github.com:YOUR_USERNAME/YOUR_REPO.git`

## Step 5: Verify Push Was Successful

Visit your repository on GitHub: `https://github.com/YOUR_USERNAME/YOUR_REPO`

You should see all your files uploaded!

## Step 6: Future Commits

After making changes locally, use:

```powershell
# Check what changed
git status

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

## Troubleshooting

### "fatal: not a git repository"
- Make sure you're in the correct directory: `C:\Users\Administrator\Documents\github\Leaddoctave1`
- Run `git init` to initialize

### "remote origin already exists"
- Remove the old remote: `git remote remove origin`
- Then add the new one: `git remote add origin https://github.com/...`

### Authentication failed
- Use a Personal Access Token instead of your GitHub password
- Or set up SSH keys as described above

### Large files error
- The `node_modules/` and `dist/` folders are already in `.gitignore`
- Only source files (~5-10 MB) will be pushed

---

**Need help?** Feel free to ask for clarification on any step!
