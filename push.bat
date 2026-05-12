@echo off
cd /d "%~dp0"

echo Pulling remote changes...
git pull --rebase origin main
if %errorlevel% neq 0 (
    echo ERROR: pull failed
    pause
    exit /b
)

echo.
echo Staging all changes...
git add -A

echo.
set /p MSG="Commit message (or press Enter for 'update site'): "
if "!MSG!"=="" set MSG=update site
git commit -m "%MSG%"

echo.
echo Pushing to GitHub...
git push origin main

if %errorlevel%==0 (
    echo.
    echo Done!
) else (
    echo.
    echo ERROR: push failed
)

pause
