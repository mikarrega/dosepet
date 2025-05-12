import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Roboto_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dose Pet",
  description: "Ajudamos a manter a saúde do seu animal de estimação em dia",
};

// Simulação de autenticação (substitua por lógica real)
const isAuthenticated = () => {
  // Aqui você pode verificar cookies, tokens ou contexto de autenticação
  return false; // Altere para `true` para simular um usuário autenticado
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isAuthenticated() && ( // Exibe o menu apenas se o usuário estiver autenticado
          <nav>
            <Link href="/home">Início</Link>
            <Link href="/about">Sobre</Link>
          </nav>
        )}
        {children}
      </body>
    </html>
  );
}