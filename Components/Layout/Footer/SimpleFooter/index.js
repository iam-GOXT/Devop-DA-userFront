import React from 'react'
import Link  from 'next/link'
import { LandingSpan } from '../../../../styles/Footer.module'

const SimpleFooter = () => {
  return (
    <>
        <LandingSpan>
            <Link href = "https://japa.travel/privacy-policy/"  passHref target="_blank">
              &copy; OjiraSoft
            </Link>|

            <a>All rights reserved</a>|

            <Link href= 'https://japa.travel/terms-and-conditions/' passHref target="_blank">
              Terms & Conditions
            </Link>|

            <Link href= 'https://japa.travel/privacy-policy/' passHref target="_blank">
             Privacy Policy
            </Link>
        </LandingSpan>
    </>
  )
}

export default SimpleFooter