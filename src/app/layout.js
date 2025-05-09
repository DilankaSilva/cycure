import Wrapper from "@/layout/wrapper";
import "../styles/index.css";
import Footer from "@/layout/footers/footer";
import { Inter, Cuprum } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
  });

  const cuprum = Cuprum({
    weight: [ '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-cuprum',
  });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Avesto Global</title>
                <link rel="icon" href="/favicon.png" type="image/png" />
            </head>
            <body suppressHydrationWarning={true} className={`${inter.variable} ${cuprum.variable}`}>
                <Wrapper>
                    {children}
                    <Footer />
                </Wrapper>
            </body>
        </html>
    );
}
