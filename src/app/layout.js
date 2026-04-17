import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BottomNav from '@/components/bottom-nav';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600', '700'] });

export const metadata = {
  title: 'Novel Reader Premium',
  description: 'Vertical reading platform dengan UX ala Webtoon.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen bg-soft-gray text-deep-slate">
        <Providers>
          <Navbar />
          <main className="min-h-[calc(100vh-8rem)] pt-20">{children}</main>
          <Footer />
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
