import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import 'styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sneaker Collector',
  description:
    'This tool provides you with the tools to curate, organize, and catalogue your sneakers',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
