'use client';

import Image from 'next/image';

export default function GithubPagesImage({ src, ...props }) {
  // Add basePath to src in production
  // Make sure we don't add the basePath twice
  const imageSrc = process.env.NODE_ENV === 'production'
    ? (src.startsWith('/d25-i7-SimWork') ? src : `/d25-i7-SimWork${src}`)
    : src;

  return <Image src={imageSrc} unoptimized {...props} />;
}
