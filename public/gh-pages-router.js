// This script handles GitHub Pages routing for Next.js apps
(function() {
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  
  // This script checks if a redirect is needed and handles it
  var pathSegmentsToKeep = 1; // Keep the first segment (repo name)
  
  var l = window.location;
  var basePath = '/d25-i7-SimWork';
  
  // Check if we need to redirect
  if (l.search) {
    // Try to parse the search query
    var q = {};
    l.search.slice(1).split('&').forEach(function(v) {
      var a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    
    // If the path is specified in the search query, redirect to it
    if (q.p !== undefined) {
      window.history.replaceState(null, null, 
        basePath + (q.p.charAt(0) === '/' ? q.p : '/' + q.p) + 
        (q.q ? ('?' + q.q) : '') + 
        l.hash
      );
    }
  }
  
  // If we're on a 404 page, try to redirect to the correct path
  if (l.pathname.split('/')[1] === '404.html') {
    var pathSegments = l.pathname.slice(1).split('/').slice(pathSegmentsToKeep);
    var path = pathSegments.join('/');
    
    // Redirect to the correct path
    window.location.href = basePath + '/' + path;
  }
})();
