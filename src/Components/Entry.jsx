import React from 'react'
import { useUser } from '@clerk/clerk-react'

export default function Entry() {
  const {user} = useUser()
  return (
    <>
    <h1>Your entry here</h1>
    <h1>{user?.id}</h1>
    </>
  )
}
