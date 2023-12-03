import { WebhookRes } from '@/api-calls/types'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Image from 'next/image'
import {toast} from 'react-hot-toast'

function copy(text?: string){
  if(!text) return
  
  navigator?.clipboard.writeText(text)
  toast.success('Copied!')
}

function Data({ data }: {data: WebhookRes}) {
  return (
    <div className='flex flex-col items-start justify-center gap-1 mt-2 w-full md:w-2/5 p-10' >

      <Label className='text-base' htmlFor="deleteToken">Webhook URL</Label>
      <span className='m-0 p-0 relative w-full'>
        <Input 
          readOnly
          value={data?.deleteToken}
          id="deleteToken"
          type="text"/>
        <Image onClick={()=>copy(data?.deleteToken)} className='cursor-pointer absolute right-3 top-2.5' src="/copy.svg" width={20} height={21.24} alt='' />
      </span>
      <span className='text-sm mb-8 mt-1 opacity-70' >
        Copy this into the Webhook URL field on the SkyMavis Developer Portal
      </span>

      <Label className='text-base' htmlFor="id">Webhook ID</Label>
      <span className='m-0 p-0 relative w-full'>
        <Input
          readOnly
          value={data?.id}
          id="id"
          type="text"/>
        <Image onClick={()=>copy(data?.id)} className='cursor-pointer absolute right-3 top-2.5' src="/copy.svg" width={20} height={21.24} alt='' />
      </span>
      <span className='text-sm mb-8 mt-1 opacity-70'>
        Keep this! You need this if you ever want to delete your webhook!
      </span>

      <Label className='text-base' htmlFor="url">Delete Token</Label>
      <span className='m-0 p-0 relative w-full'>
        <Input
          readOnly
          id="url"
          value={data?.url}
          type="url"/>
        <Image onClick={()=>copy(data?.url)} className='cursor-pointer absolute right-3 top-2.5' src="/copy.svg" width={20} height={21.24} alt='' />
      </span>
      <span className='text-sm mb-8 mt-1 opacity-70'>
        Keep this! You need this if you ever want to delete your webhook!
      </span>
    </div>
  )
}

export default Data