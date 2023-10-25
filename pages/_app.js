import '@/styles/globals.css';
import '@/styles/custom.css'
import Head from 'next/head';
import Navmenu from '../src/components/Navmenu';
import Footer from '@/src/components/Footer';
export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
        </Head>
        <Navmenu></Navmenu>
        <Component {...pageProps} />
        <Footer></Footer>
    </>
  )
}
