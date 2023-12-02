import React, { SyntheticEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { getW3Address } from '@w3vm/react'
import { Payload } from '@/api-calls/types'
import { signMessage } from '@/blockchain'

function Form({ action, isLoading }: { action:(payload: Payload) => Promise<void>, isLoading: boolean }) {
  const [discordURL, setDiscordURL] = useState('')
  const address = getW3Address()

  async function handleSubmit(e: SyntheticEvent){
    e.preventDefault()

    if(address && discordURL){
      const { signature, nonce } = await signMessage({ address, discordURL })
      if(!signature) return

      const payload: Payload = {
        upstream: discordURL,
        owner: address,
        signature,
        nonce,
      }
      action(payload)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 max-w-sm items-center space-x-2">
      <Input 
      value={discordURL}
      onChange={e => setDiscordURL(e.target.value)}
      type="url"
      placeholder="Discord Webhook URL" />
      <Button variant='default' type="submit">Create Webhook</Button>
    </form>
  )
}

export default Form