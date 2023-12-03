const BASE_URL = 'https://notify.axie.tools'

/* Store */
import { createStore } from 'react-cafe'

export const { set, states, snap, sub } = createStore<MyStore>({
  data: undefined,
  error: undefined
})

/* Component */
import { useCallback, useState } from 'react'
import { MyStore, Payload, WebhookError } from './types'

function useWebhook() {
  const [isLoading, setIsLoading] = useState(false)
  const data = states.data()
  const error = states.error()

  const createWebhook = useCallback(async(payload: Payload)=>{
    setIsLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      if(!res.ok) return set.error({error: res.statusText})

      const response = await res.json()

      set.data(response)
    } catch (er){
      set.error(er as WebhookError)
    }
    setIsLoading(false)
  }, [])

  return {
    data, error, isLoading, createWebhook
  }
}

export default useWebhook