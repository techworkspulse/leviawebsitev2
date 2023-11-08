import '@/styles/globals.css';
import '@/styles/custom.css'
import Head from 'next/head';
import { register } from 'swiper/element/bundle';

register();

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
        </Head>
        <Component {...pageProps} />
    </>
  )
}
