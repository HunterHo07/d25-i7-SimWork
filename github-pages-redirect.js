// GitHub Pages redirect handler for Next.js static exports
(function() {
  // Configuration
  var basePath = '/d25-i7-SimWork';
  var hostname = window.location.hostname;
  var isGitHubPages = hostname === 'hunterho07.github.io';

  // Only run on GitHub Pages
  if (!isGitHubPages) return;

  var path = window.location.pathname;

  // Fix double basePath issue
  if (path.includes(basePath + basePath)) {
    console.log('Fixing double basePath in URL:', path);
    path = path.replace(basePath + basePath, basePath);
    window.location.href = path;
    return;
  }

  // If we're already on a path with the basePath, no need to redirect
  if (path.startsWith(basePath)) return;

  // If we're on the root path, redirect to the basePath
  if (path === '/' || path === '') {
    window.location.href = basePath + '/';
    return;
  }

  // If we're on any other path, add the basePath
  window.location.href = basePath + path;
})();
