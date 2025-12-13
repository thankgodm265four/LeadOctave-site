@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo StratEdge - GitHub Push Script
echo ========================================
echo.

REM Set git configuration
echo [1/5] Configuring Git...
git config --global user.name "StratEdge Developer"
git config --global user.email "dev@stratedge.local"
echo Done.

REM Stage all files
echo [2/5] Staging files...
git add .
echo Done.

REM Check status
echo [3/5] Checking status...
git status
echo.

REM Create commit
echo [4/5] Creating commit...
git commit -m "StratEdge Website: Professional landing page with Hero, Partners, About sections built with Astro + React + Tailwind CSS"
echo Done.

REM Add remote and push
echo [5/5] Pushing to GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/thgod9/LeadOctave.git
git branch -M main

echo.
echo Attempting to push to GitHub...
git push -u origin main

echo.
echo ========================================
if %ERRORLEVEL% equ 0 (
    echo SUCCESS: Project pushed to GitHub!
    echo Visit: https://github.com/thgod9/LeadOctave
) else (
    echo NOTE: Push requires authentication
    echo Please provide your GitHub credentials or Personal Access Token
    echo when prompted above.
)
echo ========================================
echo.

endlocal
pause
