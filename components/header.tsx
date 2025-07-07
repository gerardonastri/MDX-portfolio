import { ThemeToggle } from "./theme-toggle"
import TransitionLink from "@/utils/TransitionLink"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 py-6 backdrop-blur-md border-b border-border/40">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <TransitionLink
            href="/"
            className="font-serif text-2xl font-bold hover:scale-105 transition-transform duration-200"
          >
            GN
          </TransitionLink>
        </div>

        <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground sm:gap-10">
          <li className="transition-all duration-200 hover:text-foreground hover:scale-105">
            <TransitionLink href="/posts">Posts</TransitionLink>
          </li>
          <li className="transition-all duration-200 hover:text-foreground hover:scale-105">
            <TransitionLink href="/projects">Projects</TransitionLink>
          </li>
          <li className="transition-all duration-200 hover:text-foreground hover:scale-105">
            <TransitionLink href="/contact">Contact</TransitionLink>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
