# Publishing Guide

This guide will help you publish the React Bootstrap Modal MFE component to npm.

## Prerequisites

1. **npm account**: Make sure you have an npm account and are logged in
2. **Git repository**: Ensure your code is in a Git repository
3. **Node.js**: Make sure you have Node.js installed

## Pre-publishing Checklist

Before publishing, ensure you have:

- [ ] ✅ All tests passing (`npm test`)
- [ ] ✅ Build successful (`npm run build`)
- [ ] ✅ Updated version in `package.json`
- [ ] ✅ Updated `README.md` if needed
- [ ] ✅ Committed all changes to Git
- [ ] ✅ Logged in to npm (`npm login`)

## Publishing Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

```bash
npm test
```

### 3. Build the Package

```bash
npm run build
```

### 4. Login to npm (if not already logged in)

```bash
npm login
```

### 5. Publish to npm

```bash
npm publish
```

## Using the Publish Scripts

### For Unix/Linux/macOS:

```bash
chmod +x scripts/publish.sh
./scripts/publish.sh
```

### For Windows:

```cmd
scripts\publish.bat
```

The publish scripts will:
- Check if you're on the main branch
- Verify the working directory is clean
- Run tests
- Build the package
- Check npm login status
- Update the version
- Publish to npm
- Push to Git with tags

## Manual Version Management

If you prefer to manage versions manually:

### Patch version (bug fixes)
```bash
npm version patch
```

### Minor version (new features)
```bash
npm version minor
```

### Major version (breaking changes)
```bash
npm version major
```

### Specific version
```bash
npm version 1.2.3
```

## Publishing to Different Registries

### Public npm registry (default)
```bash
npm publish
```

### Private npm registry
```bash
npm publish --registry=https://your-registry.com
```

### Scoped package
```bash
npm publish --access public
```

## Troubleshooting

### "Package name already exists"
- Check if the package name is available on npm
- Consider using a scoped package name (e.g., `@your-org/react-bootstrap-modal-mfe`)

### "You must be logged in"
```bash
npm login
```

### "Working directory is not clean"
```bash
git add .
git commit -m "Prepare for release"
```

### "Tests failed"
- Fix any failing tests before publishing
- Run `npm test` to see detailed error messages

### "Build failed"
- Check for TypeScript compilation errors
- Ensure all dependencies are installed
- Run `npm run build` to see detailed error messages

## Post-publishing

After successful publishing:

1. **Verify the package**: Check that your package appears on npmjs.com
2. **Test installation**: Try installing your package in a new project
3. **Update documentation**: Update any external documentation if needed
4. **Announce release**: Share the new version with your team/users

## Package.json Configuration

Make sure your `package.json` has the correct configuration:

```json
{
  "name": "react-bootstrap-modal-mfe",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "bootstrap": "^5.0.0"
  }
}
```

## Security Considerations

- Never commit sensitive information (API keys, passwords)
- Use `.npmrc` for registry configuration if needed
- Consider using npm tokens for CI/CD pipelines
- Review the published package contents before release

## Best Practices

1. **Semantic Versioning**: Follow semantic versioning (MAJOR.MINOR.PATCH)
2. **Changelog**: Maintain a CHANGELOG.md file
3. **Git Tags**: Always tag releases in Git
4. **Testing**: Test the published package in a clean environment
5. **Documentation**: Keep documentation up to date
6. **Dependencies**: Use peer dependencies for React and Bootstrap

## Support

If you encounter issues during publishing:

1. Check the npm documentation: https://docs.npmjs.com/
2. Review npm error messages carefully
3. Ensure all prerequisites are met
4. Consider reaching out to the npm support team 