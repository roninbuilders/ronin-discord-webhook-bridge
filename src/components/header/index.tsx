import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='width-full px-2 mt-16 text-center' >
      <div className='text-5xl font-bold' >SkyMavis - Discord Webhook Bridge</div>
      <div className='mt-8 opacity-70' >This is a simple tool to create a bridge between SkyMavis and Discord. It allows you to use SkyMavis webhooks with your Discord server.</div>
    </div>
  )
}

export default Header