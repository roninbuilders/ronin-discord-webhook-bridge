import { WebhookRes } from '@/api-calls/types'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

function Data({ data }: {data: WebhookRes}) {
  return (
    <div>
      <Label htmlFor="deleteToken">Webhook URL</Label>
      <Input 
      value={data?.deleteToken}
      id="deleteToken"
      type="password"/>
      <Label htmlFor="id">Webhook ID</Label>
      <Input 
      value={data?.id}
      id="id"
      type="text"/>
      <Label htmlFor="url">Delete Token</Label>
      <Input
      id="url"
      value={data?.url}
      type="url"/>
    </div>
  )
}

export default Data