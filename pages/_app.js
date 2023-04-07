import '@/styles/globals.css'

// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

// chakra ui
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button, Input, FormLabel, Textarea } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    FormLabel,
    Textarea
  },
})

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
