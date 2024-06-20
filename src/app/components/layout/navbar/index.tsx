'use client'

import { Container } from '../container'
import { Logo } from './logo'
import { Search } from './search'
import { UserMenu } from './user-menu'

export function Navbar() {
  return (
    <nav className="fixed z-10 w-full border-b-[1px] bg-white py-4 shadow-sm">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-4">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </nav>
  )
}
