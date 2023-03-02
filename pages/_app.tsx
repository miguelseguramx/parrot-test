import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import StyledComponentsRegistry from "@/lib/registry"
import GlobalStyles from "@/lib/global-styles"
import { SessionProvider } from "next-auth/react"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 10,
      // retry: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </StyledComponentsRegistry>
    </SessionProvider>
  )
}
