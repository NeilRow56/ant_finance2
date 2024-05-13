import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

import Image from 'next/image'

const SignUpPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full flex-1 ">
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="space-y-4 pt-12 text-center lg:pt-24">
          <h1 className="text-3xl font-bold text-[#2E2A47] ">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create an account to get to your dashboard
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
