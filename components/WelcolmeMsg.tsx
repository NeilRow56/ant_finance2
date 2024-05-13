'use client'

import { useUser } from '@clerk/nextjs'

export const WelcolmeMsg = () => {
  const { user, isLoaded } = useUser()

  const myDate = new Date()
  const hrs = myDate.getHours()

  let greet

  if (hrs < 12) greet = 'Good Morning'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening'

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-medium text-white lg:text-4xl">
        {greet}
        {isLoaded ? ', glad you are onboard' : ' '}
        {user?.firstName} 😇
      </h2>
      <p className="text-sm text-[#89b6fd] lg:text-base">
        This is your Financial Overview Report
      </p>
    </div>
  )
}
