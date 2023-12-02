import Image from 'next/image'
import React from 'react'

type Props = {}

function Connect({}: Props) {
  return (
    <div className='flex flex-col gap-3 items-center justify-center' >
      <Image src="/connect.png" width={200} height={166} alt="" />
      <ronin-button label='Connect' />
    </div>
  )
}

export default Connect