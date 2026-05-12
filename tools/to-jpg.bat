@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Drop image files onto this script to convert them to JPG.
    pause
    exit /b
)

for %%F in (%*) do (
    set "SRC=%%~fF"
    set "DIR=%%~dpF"
    set "NAME=%%~nF"
    set "EXT=%%~xF"

    if /i "!EXT!"==".jpg" (
        set "OUT=!DIR!!NAME!_conv.jpg"
    ) else (
        set "OUT=!DIR!!NAME!.jpg"
    )

    echo Converting: %%~nxF
    magick "!SRC!" -quality 95 "!OUT!"

    if !errorlevel!==0 (
        echo   Done: !OUT!
    ) else (
        echo   ERROR: conversion failed
        echo   Make sure ImageMagick is installed: https://imagemagick.org/script/download.php#windows
    )
    echo.
)

pause
