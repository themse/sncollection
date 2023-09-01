import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'SN Collector - Home Page',
};

const WebLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-[320px] flex justify-between flex-col relative">
      <header>Header</header>

      <main className="flex-1">{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default WebLayout;
