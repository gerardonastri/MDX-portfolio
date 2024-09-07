import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import TransitionLink from '@/utils/TransitionLink'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <TransitionLink href='/' className='font-serif text-2xl font-bold'>
            GN
          </TransitionLink>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <TransitionLink href='/posts'>Posts</TransitionLink>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <TransitionLink href='/projects'>Projects</TransitionLink>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <TransitionLink href='/contact'>Contact</TransitionLink>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}