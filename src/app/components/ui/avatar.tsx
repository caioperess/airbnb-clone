'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import Image from 'next/image'

export function Avatar() {
  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image
        className="h-[30px] w-[30px] rounded-full"
        src="/images/placeholder.png"
        alt=""
      />

      <AvatarPrimitive.Fallback asChild delayMs={600}>
        <Image
          className="rounded-full"
          src="/images/placeholder.png"
          alt=""
          height={30}
          width={30}
        />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
