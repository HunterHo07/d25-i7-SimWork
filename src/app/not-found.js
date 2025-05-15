'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import GithubPagesLink from '@/components/ui/GithubPagesLink';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Check if we're on GitHub Pages and handle client-side routing
    const path = window.location.pathname;
    const basePath = '/d25-i7-SimWork';

    if (path.startsWith(basePath) && path !== basePath && path !== `${basePath}/`) {
      const relativePath = path.replace(basePath, '');
      if (relativePath) {
        // Redirect to the correct path
        window.location.href = `${basePath}${relativePath}`;
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button href="/" variant="primary">
        Return to Home
      </Button>
    </div>
  );
}
