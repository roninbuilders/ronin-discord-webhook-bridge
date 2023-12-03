import React, { SyntheticEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { getW3Address } from '@w3vm/react'
import { Payload } from '@/api-calls/types'
import { signMessage } from '@/blockchain'
import { set } from '@/api-calls'

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
    }else{
      set.error({error: "Please connect your Ronin wallet before creating the webhook"})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 max-w-sm mt-28 items-center space-x-2">
      <Input 
      value={discordURL}
      onChange={e => setDiscordURL(e.target.value)}
      type="url"
      placeholder="Discord Webhook URL" />
      <Button disabled={isLoading || !discordURL} variant='default' type="submit">
        {isLoading ? 'Loading' : 'Create Webhook'}
      </Button>
    </form>
  )
}

export default Form