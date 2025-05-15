'use client';

import Image from 'next/image';

export default function GithubPagesImage({ src, ...props }) {
  // Add basePath to src in production
  const imageSrc = process.env.NODE_ENV === 'production' 
    ? `/d25-i7-SimWork${src}` 
    : src;
  
  return <Image src={imageSrc} {...props} />;
}
