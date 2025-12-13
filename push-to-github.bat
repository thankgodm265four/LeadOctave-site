@echo off
REM StratEdge Website - GitHub Push Script
REM Run this file to quickly push your project to GitHub

echo.
echo ========================================
echo StratEdge - GitHub Push Helper
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo Initializing git repository...
    git init
    echo.
)

REM Check current status
echo Checking git status...
git status
echo.

REM Stage all changes
echo.
echo Staging all changes...
git add .

REM Show what will be committed
echo.
echo Changes to be committed:
git diff --cached --name-only
echo.

REM Get commit message
set /p commit_msg="Enter commit message (press Enter for 'Update website'): "
if "%commit_msg%"=="" set commit_msg=Update website

REM Create commit
echo.
echo Creating commit: "%commit_msg%"
git commit -m "%commit_msg%"
echo.

REM Check if remote exists
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo No remote repository found!
    echo.
    echo Please set up your remote first:
    echo   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    echo.
    echo Then run:
    echo   git push -u origin main
    echo.
) else (
    echo.
    echo Pushing to GitHub...
    git push
    echo.
    echo ✓ Successfully pushed to GitHub!
    echo.
)

pause
