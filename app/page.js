'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import Home from '/pages/home.js'


function Page() {
  const router = useRouter();
  return (
    <div>
      <Home />
    </div>
  )
}

export default Page