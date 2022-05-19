import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/graphql/client'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

// the chainId our app wants to be running on
// for our example we're going to be using the Polygon Mumbai Testnet
const desiredChainId = ChainId.Mainnet

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId} autoConnect>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
