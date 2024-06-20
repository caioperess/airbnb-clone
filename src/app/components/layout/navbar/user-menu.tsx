'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AiOutlineMenu } from 'react-icons/ai'
import { CiGlobe } from 'react-icons/ci'

import { Avatar } from '../../ui/avatar'
import { MenuItem } from './menu-item'

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <button
            className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
            onClick={() => {}}
          >
            Airbnb your home
          </button>

          <button className="cursor-pointer rounded-full px-3 py-3 hover:bg-neutral-100">
            <CiGlobe size={20} />
          </button>

          <DropdownMenu.Trigger asChild>
            <button className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition md:px-2 md:py-1">
              <AiOutlineMenu />
              <div className="hidden md:block">
                <Avatar />
              </div>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="z-50 mt-2 min-w-[8rem] overflow-hidden rounded-xl border bg-white p-1 text-sm shadow-md">
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign out" onClick={() => {}} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </div>
      </div>
    </DropdownMenu.Root>
  )
}
