'use client';

import Image from 'next/image';

export default function AppImage({ src, ...props }) {
  return <Image src={src} unoptimized {...props} />;
}
