'use client';

import Link from 'next/link';

export default function GithubPagesLink({ href, children, className, ...props }) {
  // No need to adjust the href anymore
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
