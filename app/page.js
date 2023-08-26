import SectionMainBanner from '@/components/Banner/SectionMainBanner'
import HeaderNavigator from '@/components/HeaderNavigator'
import ProductLanding from '@/components/Product/ProductLanding'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">

      <Head>
        <title >Green Mountain OG</title>
        <meta property="og:title" content="Green Mountain OG" key="title" />
      </Head>
      <SectionMainBanner />
      <ProductLanding />
    </main>
  )
}
