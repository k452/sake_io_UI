import { FC } from 'react'
import { AppProps } from 'next/app'

const _App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  )
}

export default _App
