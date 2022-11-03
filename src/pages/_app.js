import '../styles/globals.css'
import { Dataget } from '../../context/DataContext'

function MyApp({ Component, pageProps }) {
  return <Dataget> <Component {...pageProps} /></Dataget>
}

export default MyApp
