"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Dashboard from '../components/Dashboard.js'

const DashboardPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  if(!session){
    router.push('/login')
  }
    return (
        <Dashboard/>
    )
}

export default DashboardPage