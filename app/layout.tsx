import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ChatbotProvider } from '@/components/chatbot/chatbot-provider';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'SoftSell - Software License Resale Made Easy',
  description: 'Turn unused software licenses into cash with SoftSell. Get instant valuations and quick payments for your unused software licenses.',
  keywords: 'software resale, license resale, sell software licenses, software valuation',
  openGraph: {
    title: 'SoftSell - Software License Resale Made Easy',
    description: 'Turn unused software licenses into cash with SoftSell.',
    url: 'https://softsell.com',
    siteName: 'SoftSell',
    images: [
      {
        url: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ScrollProgressIndicator /> */}
          {children}
          <ScrollToTop />
          <ChatbotProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}