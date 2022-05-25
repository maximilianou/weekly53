import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>[file::pages/_app.tsx]<Component {...pageProps} />[file::pages/_app.tsx]</>
}

export default MyApp
