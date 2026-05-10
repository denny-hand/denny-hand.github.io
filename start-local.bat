@echo off
cd /d "%~dp0"
echo.
echo Starting local server...
echo Open in browser: http://localhost:8080
echo.
echo Press Ctrl+C to stop.
echo.
start "" "http://localhost:8080"
python -m http.server 8080
pause
