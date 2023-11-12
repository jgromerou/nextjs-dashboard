import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className} antialiased`}
      >
        {children}
        <footer className="py-10 flex justify-center items-center">
          Hecho con amor por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
