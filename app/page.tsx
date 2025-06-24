
import Head from 'next/head'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import Footer from '@/components/Footer'
import Wavify from '@/components/Wavify'


export default function Home() {
  return (
    <div className="flex flex-col fixed inset-0 bg-white dark:bg-black">
      <Head>
        <title>Negi | Illustrator, Developer</title>
        <meta name="description" content="Portfolio of Aditya Negi - Illustrator and Developer" />
      </Head>

      <Header />
      <MainContent />
      
      <Wavify  />
      
        <Footer />
    </div>
  )
}