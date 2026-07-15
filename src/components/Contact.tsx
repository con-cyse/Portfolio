const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/con-cyse' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/con-cyse' },
  { label: 'Email', href: 'mailto:concolescyriljade@gmail.com' },
]

const Contact = () => {
  return (
    <section id="contact" className="h-full scroll-mt-24 bg-[var(--color-sea-white)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-[var(--color-atlantic)]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-deep-teal)] sm:text-4xl">
            Let&apos;s build something clear, useful, and memorable.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-atlantic)]">
            Have a project idea, collaboration, or opportunity in mind? Send a
            message and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[var(--color-deep-teal)]">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a className="text-[var(--color-atlantic)] hover:underline" href="mailto:concolescyriljade@gmail.com">
                concolescyriljade@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> City of Baybay, Leyte, Philippines
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-md border border-[var(--color-atlantic)] px-4 py-2 text-sm font-semibold text-[var(--color-atlantic)] transition hover:-translate-y-0.5 hover:bg-[var(--color-atlantic)] hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
