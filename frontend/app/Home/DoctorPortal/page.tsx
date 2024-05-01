"use client"
import NavbarLanding from '@/components/navbarLanding';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const doctorPortal = () => {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false)
  const handlePageLoad = () => {
    if (localStorage.getItem("role") !== "doctor") {
      router.push('/Forbidden')
    }
    else {
      setHasAccess(true)
    }
  }
  useEffect(() => {
    handlePageLoad()
  }, [hasAccess]);
  return (
    <>
      {hasAccess ?
        <div>
          <NavbarLanding />
        </div> :
        <div>Access Denied</div>}
    </>
  )
}

export default doctorPortal