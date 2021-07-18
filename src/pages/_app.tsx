import { FC } from 'react'
import { AppProps } from 'next/app'
import Header from 'pages/header'
import '../../styles.css'

const _App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    // <div suppressHydrationWarning>
    //   {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    // </div>
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default _App
