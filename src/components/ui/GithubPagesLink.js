'use client';

import Link from 'next/link';

export default function GithubPagesLink({ href, children, className, ...props }) {
  // Properly handle basePath for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/d25-i7-SimWork' : '';

  // Don't add basePath if href already starts with it or is an external link
  // Also handle hash links and mailto: links
  const fullHref = href.startsWith('http') ||
                  href.startsWith(basePath) ||
                  href.startsWith('#') ||
                  href.startsWith('mailto:') ||
                  href.startsWith('tel:')
    ? href
    : `${basePath}${href}`;

  return (
    <Link href={fullHref} className={className} {...props}>
      {children}
    </Link>
  );
}
