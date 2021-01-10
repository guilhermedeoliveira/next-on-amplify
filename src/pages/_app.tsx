import 'styles/main.css'

import { AppProps } from 'next/app'
import Amplify from 'aws-amplify'

import config from 'src/aws-exports'

Amplify.configure({
  ...config,
  ssr: true,
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
