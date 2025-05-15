'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import GithubPagesLink from '@/components/ui/GithubPagesLink';
import Script from 'next/script';

export default function NotFound() {
  const router = useRouter();
  const basePath = process.env.NODE_ENV === 'production' ? '/d25-i7-SimWork' : '';

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== 'undefined') {
      // Check if we're on GitHub Pages and handle client-side routing
      const path = window.location.pathname;
      const hostname = window.location.hostname;
      const isGitHubPages = hostname === 'hunterho07.github.io';

      // If we're on a 404 page in production, try to extract the intended path
      if ((process.env.NODE_ENV === 'production' || isGitHubPages) &&
          (path.includes('/404') || path.includes('/404.html'))) {
        // Extract the path after the repo name
        const pathSegments = path.split('/').filter(Boolean);

        // Remove the repo name and 404 segments
        const cleanedSegments = pathSegments.filter(segment =>
          segment !== 'd25-i7-SimWork' && segment !== '404' && segment !== '404.html'
        );

        if (cleanedSegments.length > 0) {
          // Redirect to the correct path
          const correctPath = `${basePath}/${cleanedSegments.join('/')}`;
          window.location.href = correctPath;
        } else {
          // If no path segments, go to home
          window.location.href = basePath + '/';
        }
        return;
      }

      // Check if we're on a path that doesn't include the basePath in production
      if (isGitHubPages && !path.includes('/d25-i7-SimWork') && path !== '/') {
        // Redirect to the correct path with basePath
        window.location.href = basePath + path;
      }
    }
  }, [basePath]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <GithubPagesLink href="/">
        <Button variant="primary">
          Return to Home
        </Button>
      </GithubPagesLink>

      {/* Load the GitHub Pages router script */}
      <Script src={`${basePath}/gh-pages-router.js`} strategy="afterInteractive" />
    </div>
  );
}
