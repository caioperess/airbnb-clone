'use client'

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

interface MenuItemProps {
  onClick: () => void
  label: string
}

export function MenuItem({ label, onClick }: Readonly<MenuItemProps>) {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className="cursor-pointer rounded-xl px-4 py-2 font-semibold outline-none transition hover:bg-neutral-100"
    >
      {label}
    </DropdownMenuItem>
  )
}
