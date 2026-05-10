@echo off
cd /d "%~dp0"

echo.
echo Deploying to GitHub...
echo.

git add .
git commit -m "update site"
git push

if %errorlevel%==0 (
    echo.
    echo Done! Site will update in 1-2 minutes.
    echo https://denny-hand.github.io
) else (
    echo.
    echo Something went wrong. Check the error above.
)

pause
