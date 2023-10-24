import '@/styles/globals.css'
import '@/styles/custom.css'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Navmenu from '../src/components/Navmenu';
export default function App({ Component, pageProps }) {
  return (
    <>
        <Navmenu></Navmenu>
        <Component {...pageProps} />
    </>
  )
}
