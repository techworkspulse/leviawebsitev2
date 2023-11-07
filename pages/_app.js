import '@/styles/globals.css';
import '@/styles/custom.css'
import Head from 'next/head';
import Footer from '@/src/components/Footer';
import { register } from 'swiper/element/bundle';

register();

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
        </Head>
        <Component {...pageProps} />
        <Footer></Footer>
    </>
  )
}
