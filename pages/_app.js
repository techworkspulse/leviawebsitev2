import '@/styles/globals.css'
import Navmenu from '../src/components/Navmenu';
export default function App({ Component, pageProps }) {
  return (
    <>
        <Navmenu></Navmenu>
        <Component {...pageProps} />
    </>
  )
}
