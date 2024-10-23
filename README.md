Welcome to **Aquaweb.css**, a customizable, class-light CSS framework that enhances your website with a retro-inspired aesthetic.

**Warning**: This library is currently in its early development stages and may not be suitable for production environments.

## How to Use

To integrate Aquaweb.css into your project, add the following link to the `<head>` section of your HTML:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/bartlomiej-aleksiejczyk/aquaweb.css@0.1.13/dist/aquaweb.min.css"
/>
```

This link refers to the latest version hosted on the jsDelivr CDN, ensuring you are always using the most updated version of the library.

### Responsive Single Column Layout

To achieve a responsive single column layout, use the `responsive-container` class.

## Development

To contribute to Aquaweb.css, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bartlomiej-aleksiejczyk/aquaweb.css.git
   cd aquaweb.css
   ```

2. Install dependencies (if applicable):

   ```bash
   npm install
   ```

3. **Build the project**: The CSS files are bundled using a custom build script. To build the minified version of the framework, run the following command:

   ```bash
   npm run build
   ```

   This will use the `bundleCss.js` script located in `src/build` to bundle and minify the CSS from `src/css/aquaweb.css` into `dist/aquaweb.min.css`.

4. **Release a new version**: To release a new version of Aquaweb.css, run:

   ```bash
   npm run release
   ```

   This will trigger the `releaseNewVersion.js` script, which manages versioning and prepares the project for release.

5. Make your changes, build the project, and open a pull request for review.

**Scripts**:

```json
"scripts": {
  "build": "node src/build/bundleCss.js src/css/aquaweb.css dist/aquaweb.min.css true",
  "release": "node src/build/releaseNewVersion.js"
}
```
