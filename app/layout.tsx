import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/6614a35fa0c6737bd129c71b/1hr10b72r"
      />
    </html>
  );
}
