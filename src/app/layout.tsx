import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { ConsultProvider } from '@/context/result';
import { Providers } from './provider';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Footer from '@/components/footer/footer';
import { Suspense } from 'react';
import Loading from '@/components/loading';
import AppBar from '@/components/layout/appbar';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Bakat Anak',
  description: 'Sistem Pakar Identifikasi Minat Bakat Anak',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Providers>{children}</Providers>
        </Suspense>

        <Footer />
      </body>
    </html>
  );
}
