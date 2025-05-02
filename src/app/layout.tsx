import Header from './components/Header';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'TechParts Hub',
  description: 'Premium Computer Components for Gamers and Builders',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: '80px', maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
