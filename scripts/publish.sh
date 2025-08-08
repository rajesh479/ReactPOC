#!/bin/bash

# Publish script for React Bootstrap Modal MFE

echo "🚀 Starting publish process..."

# Check if we're on main branch
if [[ $(git branch --show-current) != "main" ]]; then
    echo "❌ Error: Must be on main branch to publish"
    exit 1
fi

# Check if working directory is clean
if [[ -n $(git status --porcelain) ]]; then
    echo "❌ Error: Working directory is not clean. Please commit all changes."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Aborting publish."
    exit 1
fi

# Build the package
echo "🔨 Building package..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Aborting publish."
    exit 1
fi

# Check if user is logged in to npm
npm whoami
if [ $? -ne 0 ]; then
    echo "❌ Not logged in to npm. Please run 'npm login' first."
    exit 1
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📦 Current version: $CURRENT_VERSION"

# Ask for new version
echo "Enter new version (patch/minor/major or specific version like 1.0.1):"
read NEW_VERSION

# Update version
npm version $NEW_VERSION
if [ $? -ne 0 ]; then
    echo "❌ Version update failed."
    exit 1
fi

# Publish to npm
echo "📤 Publishing to npm..."
npm publish
if [ $? -ne 0 ]; then
    echo "❌ Publish failed."
    exit 1
fi

# Push to git
echo "📤 Pushing to git..."
git push origin main --tags
if [ $? -ne 0 ]; then
    echo "❌ Git push failed."
    exit 1
fi

echo "✅ Successfully published version $NEW_VERSION!"
echo "🎉 Package is now available on npm!" 