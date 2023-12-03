import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ronin, createRoninModal } from '@roninbuilders/modal'
import { W3 } from '@w3vm/react'
 
const projectId = '2fec14841cdca6aee13fc5c972767627'

const w3props = createRoninModal({
	chain: ronin,
	projectId,
	SSR: true
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
	<W3 {...w3props} />
	<Component {...pageProps} />
	</>
}