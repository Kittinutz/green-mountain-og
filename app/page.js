import SectionFooterBanner from '@/components/Banner/SectionFooterBanner'
import SectionMainBanner from '@/components/Banner/SectionMainBanner'
import HeaderNavigator from '@/components/HeaderNavigator'
import ProductLanding from '@/components/Product/ProductLanding'
import { getReviews } from '@/utils/google'
import { getProduct } from '@/utils/mongo/product'
import Head from 'next/head'
import Image from 'next/image'

export default async function Home() {
  const products = await getProduct()
  const review = await getReviews()
  console.log({
    review
  })
  return (
    <main className="relative">

      <Head>
        <title >Green Mountain OG</title>
        <meta property="og:title" content="Green Mountain OG" key="title" />
      </Head>
      <SectionMainBanner />
      <ProductLanding products={products} />
      <SectionFooterBanner />
    </main>
  )
}
