## Docpad Sanitizer Plugin

A helper for HTML string sanitization based on [Google Caja](https://code.google.com/p/google-caja/source/browse/trunk/src/com/google/caja/plugin/html-sanitizer.js)

## Overview

This injects a helper object `sanitizer` into the templateData so you can use it like:

``` javascript
sanitizer.sanitize("string with unsafe tags and attributes")
```

For full list, refer https://github.com/theSmaw/Caja-HTML-Sanitizer