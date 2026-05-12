@echo off
cd /d "%~dp0"

echo Pulling from GitHub...
git pull --rebase origin main

if %errorlevel%==0 (
    echo.
    echo Done!
) else (
    echo.
    echo ERROR: pull failed
)

pause
