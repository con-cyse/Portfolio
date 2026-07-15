import { useState } from 'react'

type Project = {
  title: string
  description: string
  category: 'Web' | 'App' | 'Full Stack'
  stack: string[]
  liveUrl: string
  sourceUrl: string
  thumbnailUrl: string
}

const projects: Project[] = [
  {
    title: 'Personalized Course Matcher',
    description: 'A smart course recommendation engine that matches learners to the perfect courses based on their strengths, interests, and work preferences.',
    category: 'Web',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://obsidiankey.vercel.app/',
    sourceUrl: 'https://github.com/con-cyse/obsidiankey',
    thumbnailUrl: 'thumbnails/project-1-thumbnail.png',
  },
  // {
  //   title: ,
  //   description: ,
  //   category: 'App',
  //   stack: ,
  //   liveUrl: ,
  //   sourceUrl: ,
  //   thumbnailUrl: ,
  // },
  // {
  //   title: ,
  //   description: ,
  //   category: 'Full Stack',
  //   stack: ,
  //   liveUrl: ,
  //   sourceUrl: ,
  //   thumbnailUrl: ,
  // },
]

const filters = ['All', 'Web', 'App', 'Full Stack'] as const

const ProjectThumbnail = ({ title, category, thumbnailUrl }: Pick<Project, 'title' | 'category' | 'thumbnailUrl'>) => (
  <div className="relative h-44 overflow-hidden bg-[var(--color-sea-white)]">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,86,112,0.18),rgba(9,44,56,0.08))]" />
    <div className="absolute left-5 right-5 top-5 bottom-5 rounded-md border border-white/80 p-3 shadow-sm transition duration-500 group-hover:scale-105">
      <img
        alt={`${title} screenshot`}
        className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 rounded-md border border-white/80"
        src={thumbnailUrl}
      />
    </div>
    <div className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-2 text-xs font-semibold text-[var(--color-deep-teal)] shadow-sm">
      {category}
    </div>
    <span className="sr-only">{title} project thumbnail</span>
  </div>
)

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group overflow-hidden rounded-lg border border-[var(--color-sea-white)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(16,86,112,0.16)]">
    <div className="relative overflow-hidden">
      <ProjectThumbnail title={project.title} category={project.category} thumbnailUrl={project.thumbnailUrl} />
      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[var(--color-deep-teal)]/0 opacity-0 transition duration-300 group-hover:bg-[var(--color-deep-teal)]/70 group-hover:opacity-100">
        <a
          href={project.liveUrl}
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[var(--color-deep-teal)] hover:bg-[var(--color-deep-teal)] hover:text-white"
          rel="noopener noreferrer"
          target="_blank"
        >
          Live Demo
        </a>
        <a
          href={project.sourceUrl}
          className="rounded-md border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[var(--color-deep-teal)]"
          rel="noopener noreferrer"
          target="_blank"
        >
          Source Code
        </a>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold text-[var(--color-deep-teal)]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-atlantic)]">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-[var(--color-sea-white)] px-2.5 py-1 text-xs font-semibold text-[var(--color-deep-teal)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
)

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="scroll-mt-24 bg-[var(--color-sea-white)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[var(--color-atlantic)]">
              Projects
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-deep-teal)] sm:text-4xl">
              Selected work that shows how I approach design and development.
            </h2>
          </div>
          <a
            href="https://github.com/con-cyse?tab=repositories"
            className="rounded-md border border-[var(--color-deep-teal)] px-4 py-2 text-sm font-semibold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:bg-[var(--color-deep-teal)] hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            View All
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'bg-[var(--color-deep-teal)] text-white'
                  : 'bg-[var(--color-sea-white)] text-[var(--color-deep-teal)] hover:bg-[var(--color-atlantic)] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
