'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Logo() {
  const router = useRouter()

  return (
    <Image
      className="hidden cursor-pointer md:block"
      src="/images/logo.png"
      alt="Logo"
      height={100}
      width={100}
    />
  )
}
