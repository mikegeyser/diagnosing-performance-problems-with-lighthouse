
- Introduction
- Why should we care about performance?
- What does lighthouse bring to the table?
    - Key metrics
    - Weightings

- Demo
    - Show the small meme generator site
    - Show a simple lighthouse audit of a site.
        - Show the key metrics.
        - Highlight the large image warnings.
        - Show the javascript bundle size.
        - Show the trace (and make joke about the size)
        - Show code coverage report

        - Check out WebPack bundle analyzer
            - webpack --profile --json > stats.json
            - webpack-bundle-analyzer stats.json

    - Split the bundle and lazy load the creation component
        - Create React.lazy component
        - Import Suspense
        - Wrap component inside Suspense with fallback.

    - Add in differential loading of modules
        - Extract base config
        - Import webpack merge
        - Create modern and legacy config
        - Export as array
        - Remove CoreJS import
        - du -h public/js

    - Use imageoptim on the images.
        - Import Imagemin and MozJpeg
        - Add plugin

    - Puppeteer lighthouse audit report on test
        - Add lighhouserc.json
        - Add lighthouse npm script
        - Start new tab and run.
    
- Conclusion

