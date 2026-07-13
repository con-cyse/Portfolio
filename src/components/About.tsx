const About = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-[var(--color-sea-white)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-normal text-[var(--color-atlantic)]">
          About Me
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[var(--color-deep-teal)] sm:text-4xl">
          Building thoughtful digital experiences with purpose.
        </h2>

        <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-deep-teal)] sm:text-lg">
          <p>
            Hi, I&apos;m Cyril Jade M. Concoles, a full-stack developer and designer
            who enjoys turning ideas into clean, useful, and accessible web
            experiences. I like working across both the visual and technical sides
            of a project, from shaping the interface to building the logic that
            makes it work.
          </p>

          <p>
            My background is rooted in continuous learning, hands-on practice, and
            a curiosity for how good software comes together. I focus on writing
            organized code, designing clear user flows, and creating interfaces
            that feel simple, polished, and dependable.
          </p>

          <p>
            What drives me is the chance to solve real problems through technology.
            I&apos;m motivated by projects that challenge me to grow, collaborate, and
            build work that people can actually use with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
