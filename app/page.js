'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import Home from '/pages/home.js'


export default function Page() {
  const router = useRouter();
  return (
    <div>
      <Home />
    </div>
  )
}

