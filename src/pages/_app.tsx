import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import Header from 'pages/header'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '../../styles.css'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const _App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default _App
