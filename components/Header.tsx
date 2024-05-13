import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { Navigation } from './Navigation'
import { UserButton, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import { WelcolmeMsg } from './WelcolmeMsg'

const Header = () => {
  return (
    <header className=" to bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className=" flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcolmeMsg />
      </div>
    </header>
  )
}

export default Header
