import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DappProvider } from "@elrondnetwork/dapp-core"
import { network, walletConnectBridge, walletConnectDeepLink } from '../config'
import { AppWrapper } from '../context/state'; // import based on where you put it
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DappProvider networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}>
      <AppWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </AppWrapper>
    </DappProvider>
  )
}

export default MyApp
