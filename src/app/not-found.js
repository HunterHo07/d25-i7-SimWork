'use client';

import Button from '@/components/ui/Button';
import AppLink from '@/components/ui/AppLink';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <AppLink href="/">
        <Button variant="primary">
          Return to Home
        </Button>
      </AppLink>
    </div>
  );
}
