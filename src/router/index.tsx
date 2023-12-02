import useWebhook from '@/api-calls'
import Connect from '@/components/connect'
import Data from '@/components/data'
import Form from '@/components/form'
import { getW3Address } from '@w3vm/react'
import React from 'react'

type Props = {}

function Router({}: Props) {
  const { createWebhook, data, error, isLoading } = useWebhook()
  const address = getW3Address()

  if(!address) return <Connect/>
  if(data) return <Data data={data}/>
  return <Form action={createWebhook} isLoading={isLoading} />
}

export default Router