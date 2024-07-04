import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { Providers } from './provider';
import Footer from '@/components/footer/footer';
import { Suspense } from 'react';
import Loading from '@/components/loading';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Bakat Anak',
  description: 'Sistem Pakar Identifikasi Minat Bakat Anak',
  icons: {
    icon: '/icons/bakatanak-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="dicoding:email"
        content="rioaldierwanto@gmail.com"></meta>
      <body className={poppins.className}>
        <Navbar />
        <div className="min-h-[100vh] py-10">
          <Suspense fallback={<Loading />}>
            <Providers>{children}</Providers>
          </Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
