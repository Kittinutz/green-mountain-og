import HeaderNavigator from '@/components/HeaderNavigator'
import './globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({ weight: ['400', '600', '800'], subsets: ['latin'] })

export const metadata = {
  title: 'Green Mountain OG',
  description: 'Discover the best cannabis shop in Patong! Green Mountain OG offers top-quality products and exceptional service. Visit us for a premium experience today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={popins.className}>
        <HeaderNavigator></HeaderNavigator>
        {children}
      </body>
    </html>
  )
}
