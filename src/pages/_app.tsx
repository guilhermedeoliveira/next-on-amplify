import { AppProps } from 'next/app'

import Amplify from 'aws-amplify'
import config from '../../aws-exports'

Amplify.configure({
  ...config,
  ssr: true,
})

import 'styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
