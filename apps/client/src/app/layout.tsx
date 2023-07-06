import './globals.css';

import { Glory, Inter } from 'next/font/google';
import React from 'react';

const glory = Glory({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={glory.className}>{children}</body>
    </html>
  );
}
