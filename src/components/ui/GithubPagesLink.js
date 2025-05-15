'use client';

import Link from 'next/link';

export default function GithubPagesLink({ href, children, className, ...props }) {
  // Determine if we're in production (GitHub Pages)
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Adjust the href for GitHub Pages
  const adjustedHref = isProduction ? `/d25-i7-SimWork${href}` : href;
  
  return (
    <Link href={adjustedHref} className={className} {...props}>
      {children}
    </Link>
  );
}
