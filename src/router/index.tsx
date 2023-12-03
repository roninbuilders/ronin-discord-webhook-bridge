import useWebhook, { sub } from '@/api-calls'
import Connect from '@/components/connect'
import Data from '@/components/data'
import Form from '@/components/form'
import { getW3Address } from '@w3vm/react'
import React from 'react'
import toast from 'react-hot-toast'

sub.error((error)=> {if(error) toast.error(error.error, { position: 'top-right' })})

function Router() {
  const { createWebhook, data, isLoading } = useWebhook()
  const address = getW3Address()

  if(!address) return <Connect/>
  if(data) return <Data data={data}/>
  return <Form action={createWebhook} isLoading={isLoading} />
}

export default Router