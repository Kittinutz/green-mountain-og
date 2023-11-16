import HeaderNavigator from '@/components/HeaderNavigator'
import './globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({ weight: ['400', '600', '800'], subsets: ['latin'] })

export const metadata = {
  title: 'Green Mountain OG',
  description: 'Welcome to Green Mountain OG We are provide premium herb with good price!!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <HeaderNavigator></HeaderNavigator>
        {children}
      </body>
    </html>
  )
}
