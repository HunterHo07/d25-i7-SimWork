// Enhanced GitHub Pages router for Next.js static exports
(function() {
  // Single Page Apps for GitHub Pages
  // Modified from: https://github.com/rafgraph/spa-github-pages

  // Configuration
  var basePath = '/d25-i7-SimWork';
  var pathSegmentsToKeep = 1; // Keep the repo name in the path

  var l = window.location;

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

    // Only handle internal links that don't already have the basePath
    if (href && href.startsWith('/') && !href.startsWith(basePath) && !href.startsWith('http')) {
      e.preventDefault();
      var newPath = basePath + href;
      window.history.pushState(null, null, newPath);
      window.dispatchEvent(new Event('popstate'));
    }
  });
})();
