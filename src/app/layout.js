// app/layout.js (Server Component)
import AnimatedBackground from './components/background';
import Navbar from './components/Navbar';
import './globals.css';

// Metadata export (works only in Server Components)
export const metadata = {
  title: {
    default: 'FutureRecipes - AI-Powered Recipe Discovery',
    template: '%s | FutureRecipes'
  },
  description: 'Discover extraordinary recipes powered by advanced AI. Transform your kitchen into a culinary laboratory.',
  keywords: ['recipes', 'cooking', 'AI', 'food', 'culinary', 'kitchen'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'FutureRecipes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FutureRecipes - AI-Powered Recipe Discovery',
    description: 'Discover extraordinary recipes powered by advanced AI. Transform your kitchen into a culinary laboratory.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'FutureRecipes',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'FutureRecipes - AI-Powered Recipe Discovery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureRecipes - AI-Powered Recipe Discovery',
    description: 'Discover extraordinary recipes powered by advanced AI. Transform your kitchen into a culinary laboratory.',
    images: ['/twitter-image.jpg'], // Add your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
        <AnimatedBackground>
          {/* Content Layer */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            
            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </AnimatedBackground>
      </body>
    </html>
  );
}