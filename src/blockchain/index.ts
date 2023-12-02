import { getW3 } from '@w3vm/react'
import { BrowserProvider } from 'ethers'

export async function signMessage({ discordURL, address }:{discordURL: string, address: string}){
  const nonce = Math.random().toString(36).substring(7)
  const message = `I am ${address} and I want to create a webhook for ${discordURL} - nonce: ${nonce}`

  const signer = await createSigner()
  const signature = await signer.signMessage(message)
  return { signature, nonce }
}

async function createSigner(){
  const walletProvider = getW3.walletProvider()
  if(!walletProvider) throw new Error('user disconnected')

  const provider = new BrowserProvider(walletProvider)
  const signer = await provider.getSigner()
  return signer
}