import type { Metadata } from 'next'
import './globals.css'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

export const metadata: Metadata = {
  title: '심재훈의 포트폴리오',
  description: '심재훈입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-100">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
