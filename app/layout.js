import Nav from './components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive Geometry Genius',
  description: 'Generate Geometry Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>

        <Nav/>
        {children}
        </body>
    </html>
  )
}
