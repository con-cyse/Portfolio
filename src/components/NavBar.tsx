import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', ...navLinks.map((link) => link.id)]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition duration-300 ${
        isScrolled
          ? 'border-[var(--color-sea-white)] bg-white/92 shadow-sm backdrop-blur'
          : 'border-transparent bg-[var(--color-deep-teal)]/95 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className={`text-lg font-bold transition-colors ${
            isScrolled ? 'text-[var(--color-deep-teal)]' : 'text-[var(--color-sea-white)]'
          }`}
          aria-label="Go to home section"
          onClick={() => setIsOpen(false)}
        >
          CJ
        </a>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition md:hidden ${
            isScrolled
              ? 'border-[var(--color-sea-white)] text-[var(--color-deep-teal)]'
              : 'border-white/25 text-white'
          }`}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? isScrolled
                    ? 'text-[var(--color-deep-teal)]'
                    : 'text-white'
                  : isScrolled
                    ? 'text-[var(--color-atlantic)] hover:text-[var(--color-deep-teal)]'
                    : 'text-[var(--color-sea-white)] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-t border-[var(--color-sea-white)] bg-white transition-[max-height,opacity] duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-3 text-sm font-semibold transition ${
                activeSection === link.id
                  ? 'bg-[var(--color-sea-white)] text-[var(--color-deep-teal)]'
                  : 'text-[var(--color-atlantic)] hover:bg-[var(--color-sea-white)] hover:text-[var(--color-deep-teal)]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar
