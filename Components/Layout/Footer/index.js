import React from 'react'
import MainFooter from './MainFooter'
import SimpleFooter from './SimpleFooter'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
  return (
    <div> 
        {
            router.pathname !== '/' ? <MainFooter /> : <SimpleFooter/>
        }
    </div>
  )
}

export default Footer