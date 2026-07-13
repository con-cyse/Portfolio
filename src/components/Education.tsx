const Education = () => {
  return (
    <section id="education" className="h-full scroll-mt-24 bg-[var(--color-sea-white)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-normal text-[var(--color-atlantic)]">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[var(--color-deep-teal)] sm:text-4xl">
          Academic Background
        </h2>

        <article className="mt-8 rounded-lg border border-[var(--color-sea-white)] bg-[var(--color-seashell)] p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-deep-teal)]">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-2 text-base font-semibold text-[var(--color-atlantic)]">
                Visayas State University
              </p>
            </div>
            <p className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-[var(--color-deep-teal)]">
              2023 - Present
            </p>
          </div>

          <p className="mt-5 text-base leading-7 text-[var(--color-atlantic)]">
            Currently studying Computer Science, with a growing focus on software
            development, web technologies, problem solving, and building practical
            digital projects.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Education
