// Enhanced GitHub Pages router for Next.js static exports
(function() {
  // Single Page Apps for GitHub Pages
  // Modified from: https://github.com/rafgraph/spa-github-pages

  // Configuration
  var basePath = '/d25-i7-SimWork';
  var pathSegmentsToKeep = 1; // Keep the repo name in the path
  var hostname = window.location.hostname;
  var isGitHubPages = hostname === 'hunterho07.github.io';

  // Only run on GitHub Pages
  if (!isGitHubPages) return;

  var l = window.location;

  // Fix for double basePath in URLs
  function fixDoublePaths() {
    var doublePathRegex = new RegExp(basePath + basePath, 'g');

    // Fix links with double basePath
    document.querySelectorAll('a[href*="' + basePath + basePath + '"]').forEach(function(link) {
      var href = link.getAttribute('href');
      var fixedHref = href.replace(doublePathRegex, basePath);
      link.setAttribute('href', fixedHref);
      console.log('Fixed double basePath in link:', href, '->', fixedHref);
    });

    // Fix images with double basePath
    document.querySelectorAll('img[src*="' + basePath + basePath + '"]').forEach(function(img) {
      var src = img.getAttribute('src');
      var fixedSrc = src.replace(doublePathRegex, basePath);
      img.setAttribute('src', fixedSrc);
      console.log('Fixed double basePath in image:', src, '->', fixedSrc);
    });
  }

  // Run path fixing on load and periodically
  window.addEventListener('load', fixDoublePaths);
  setInterval(fixDoublePaths, 1000); // Check every second

  // Handle query string-based routing (for direct navigation to 404.html)
  if (l.search) {
    var q = {};
    l.search.slice(1).split('&').forEach(function(v) {
      var a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });

    // If the path is specified in the search query, redirect to it
    if (q.p !== undefined) {
      var newPath = basePath + (q.p.charAt(0) === '/' ? q.p : '/' + q.p);
      var newQuery = q.q ? ('?' + q.q) : '';
      var newHash = l.hash || '';

      window.history.replaceState(null, null, newPath + newQuery + newHash);
      return; // Exit early after redirect
    }
  }

  // Handle 404 redirects
  if (l.pathname.includes('/404') || l.pathname.includes('/404.html')) {
    // Extract the path from the URL
    var pathSegments = l.pathname.slice(1).split('/').slice(pathSegmentsToKeep);
    var path = pathSegments.join('/');

    // If we have a path, redirect to it
    if (path) {
      window.location.href = basePath + '/' + path;
    } else {
      // If no path, redirect to home
      window.location.href = basePath + '/';
    }
  }

  // Add event listener for internal navigation
  document.addEventListener('click', function(e) {
    // Find closest anchor tag
    var anchor = e.target.closest('a');
    if (!anchor) return;

    var href = anchor.getAttribute('href');
    if (!href) return;

    // Fix double basePath in href
    if (href.includes(basePath + basePath)) {
      href = href.replace(basePath + basePath, basePath);
      anchor.setAttribute('href', href);
    }

    // Skip if it's an external link, hash link, or already has basePath
    if (href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith(basePath)) {
      return;
    }

    // Only handle internal links that start with /
    if (href.startsWith('/')) {
      e.preventDefault();
      var newPath = basePath + href;
      window.history.pushState(null, null, newPath);
      window.dispatchEvent(new Event('popstate'));

      // If this is a Next.js app, we need to manually trigger a route change
      if (window.__NEXT_DATA__) {
        var event = new CustomEvent('routeChangeComplete', { detail: { url: newPath } });
        window.dispatchEvent(event);
      }
    }
  });
})();
