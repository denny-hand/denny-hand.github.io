@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo Staging all changes...
git add -A

git diff --cached --quiet
if %errorlevel%==0 (
    echo Nothing to commit.
) else (
    set /p MSG="Commit message (or press Enter for 'update site'): "
    if "!MSG!"=="" set MSG=update site
    git commit -m "!MSG!"
)

echo.
echo Syncing with GitHub...
git pull --rebase origin main
if %errorlevel% neq 0 (
    echo ERROR: pull failed. Fix conflicts and try again.
    pause
    exit /b
)

echo.
echo Pushing...
git push origin main
if %errorlevel% neq 0 (
    echo Retrying after pull...
    git pull --rebase origin main
    git push origin main
)

if %errorlevel%==0 (
    echo.
    echo Deployed!
) else (
    echo.
    echo ERROR: push failed
)

pause
