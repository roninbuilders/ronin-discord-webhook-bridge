import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ronin, createRoninModal } from '@roninbuilders/modal'
 
const projectId = '2fec14841cdca6aee13fc5c972767627'

createRoninModal({
	chain: ronin,
	projectId,
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}