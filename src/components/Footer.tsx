const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/con-cyse', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/con-cyse', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:concolescyriljade@gmail.com', icon: 'email' },
]

const SocialIcon = ({ icon }: { icon: string }) => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    {icon === 'github' && (
      <path
        fill="currentColor"
        d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z"
      />
    )}
    {icon === 'linkedin' && (
      <path
        fill="currentColor"
        d="M5.4 8.8H2.7V21h2.7V8.8ZM4.1 3C3.2 3 2.5 3.7 2.5 4.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6S5 3 4.1 3Zm6.2 5.8H7.7V21h2.7v-6.4c0-1.8.9-3.1 2.4-3.1 1.4 0 2 1 2 2.8V21h2.7v-7.1c0-3.5-1.8-5.3-4.3-5.3-1.7 0-2.5.9-2.9 1.6V8.8Z"
      />
    )}
    {icon === 'email' && (
      <path
        fill="currentColor"
        d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm8 8.2L4.5 7.5V17h15V7.5L12 13.2Zm0-2.5L18.4 7H5.6L12 10.7Z"
      />
    )}
  </svg>
)

const Footer = () => {
  return (
    <footer className="border-t border-(--color-atlantic) bg-(--color-deep-teal) px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
        <p className="text-sm font-medium text-(--color-atlantic)">
          &copy; 2026 Cyril. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="icon-bounce inline-flex h-11 w-11 items-center justify-center rounded-md text-(--color-atlantic) transition hover:-translate-y-0.5 hover:bg-(--color-sea-white) hover:text-(--color-deep-teal)"
              aria-label={link.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
          <a
            href="#home"
            className="inline-flex min-h-11 items-center rounded-md border border-(--color-atlantic) px-3 py-2 text-sm font-semibold text-(--color-atlantic) transition hover:-translate-y-0.5 hover:border-(--color-seashell) hover:text-(--color-seashell)"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
