import type { AppProps } from 'next/app'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/lib/global-styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </StyledComponentsRegistry>
  )
}
