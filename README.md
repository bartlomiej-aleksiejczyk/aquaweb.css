Welcome to **Aquaweb.css**, a customizable, lightweight CSS framework designed to give your website a retro-inspired aesthetic.

**Note**: Aquaweb.css is currently in the early stages of development and may not be suitable for production environments yet.

## How to Use

To integrate Aquaweb.css into your project, add the following link to the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bartlomiej-aleksiejczyk/aquaweb.css@0.7.3/dist/aquaweb.min.css" />
```

This link points to the latest stable version hosted on the jsDelivr CDN, ensuring you are always using the most up-to-date version of the library.

### Responsive Single Column Layout

To achieve a responsive single-column layout, apply the `responsive-container` class to the desired container element.

## Development

To devlop Aquaweb.css, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/bartlomiej-aleksiejczyk/aquaweb.css.git
   cd aquaweb.css
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Make your changes**: Modify the necessary files to improve or extend the functionality of Aquaweb.css.

4. **Build and release a new version**: After making changes, you can build and release a new version of Aquaweb.css by running the following command:

   ```bash
   npm run release <version-type> "<optional-comment>"
   ```

   The `releaseNewVersion.js` script manages versioning and prepares the project for release. Specify the type of version bump (`patch`, `minor`, or `major`), and optionally, add a comment to describe the update.

   Example:

   ```bash
   npm run release minor "Added new pill component"
   ```

   This command will increment the minor version number and add the specified comment to the release notes.

## Scripts

Here are the main scripts used for building and releasing Aquaweb.css:

```json
"scripts": {
  "build": "node src/build/bundleCss.js src/css/aquaweb.css dist/aquaweb.min.css true",
  "release": "node src/build/releaseNewVersion.js"
}
```

These scripts automate the bundling, minification, and version management processes.
