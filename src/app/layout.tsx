import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'lang chain',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <header className='bg-black'>
          <div className='container h-[60px] flex items-center'>
            <h1 className='text-xl font-bold text-white'>LANG CHAIN</h1>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
