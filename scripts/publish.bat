@echo off
setlocal enabledelayedexpansion

echo 🚀 Starting publish process...

REM Check if we're on main branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
if not "%CURRENT_BRANCH%"=="main" (
    echo ❌ Error: Must be on main branch to publish
    exit /b 1
)

REM Check if working directory is clean
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    echo ❌ Error: Working directory is not clean. Please commit all changes.
    exit /b 1
)

REM Run tests
echo 🧪 Running tests...
call npm test
if %errorlevel% neq 0 (
    echo ❌ Tests failed. Aborting publish.
    exit /b 1
)

REM Build the package
echo 🔨 Building package...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed. Aborting publish.
    exit /b 1
)

REM Check if user is logged in to npm
call npm whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Not logged in to npm. Please run 'npm login' first.
    exit /b 1
)

REM Get current version
for /f "tokens=*" %%i in ('node -p "require('./package.json').version"') do set CURRENT_VERSION=%%i
echo 📦 Current version: %CURRENT_VERSION%

REM Ask for new version
set /p NEW_VERSION="Enter new version (patch/minor/major or specific version like 1.0.1): "

REM Update version
call npm version %NEW_VERSION%
if %errorlevel% neq 0 (
    echo ❌ Version update failed.
    exit /b 1
)

REM Publish to npm
echo 📤 Publishing to npm...
call npm publish
if %errorlevel% neq 0 (
    echo ❌ Publish failed.
    exit /b 1
)

REM Push to git
echo 📤 Pushing to git...
call git push origin main --tags
if %errorlevel% neq 0 (
    echo ❌ Git push failed.
    exit /b 1
)

echo ✅ Successfully published version %NEW_VERSION%!
echo 🎉 Package is now available on npm!

endlocal 