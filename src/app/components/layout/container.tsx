'use client'

interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  )
}
