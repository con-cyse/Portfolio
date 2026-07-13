const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C/C++', icon: 'code' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Java', icon: 'java' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Supabase', icon: 'supabase' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Codex', icon: 'codex' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: 'figma' },
    ],
  },
]

type SkillIconName =
  | 'react'
  | 'typescript'
  | 'tailwind'
  | 'htmlcss'
  | 'node'
  | 'api'
  | 'database'
  | 'git'
  | 'ui'
  | 'responsive'
  | 'prototype'
  | 'code'
  | 'javascript'
  | 'java'
  | 'nextjs'
  | 'mysql'
  | 'supabase'
  | 'figma'
  | 'github'
  | 'codex'

const SkillIcon = ({ icon }: { icon: SkillIconName }) => (
  <svg
    className="h-6 w-6 shrink-0"
    viewBox="0 0 32 32"
    role="img"
    aria-hidden="true"
  >
    {icon === 'react' && (
      <>
        <circle cx="16" cy="16" r="2.7" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.7" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.7" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.7" transform="rotate(120 16 16)" />
      </>
    )}
    {icon === 'typescript' && (
      <>
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#3178C6" />
        <text x="16" y="21" textAnchor="middle" className="fill-white text-[9px] font-bold">TS</text>
      </>
    )}
    {icon === 'javascript' && (
      <>
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#F7DF1E" />
        <text x="16" y="21" textAnchor="middle" className="fill-[#111827] text-[9px] font-bold">JS</text>
      </>
    )}
    {icon === 'java' && (
      <>
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#F97316" />
        <text x="16" y="21" textAnchor="middle" className="fill-white text-[9px] font-bold">JA</text>
      </>
    )}
    {icon === 'tailwind' && (
      <path fill="#38BDF8" d="M16 10c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.5 1.2 1 2.5 2.1 5.3 2.1 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.5-1.2-1-2.5-2.1-5.3-2.1ZM10.2 16.6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.5 1.2 1 2.5 2.1 5.3 2.1 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.5-1.2-1-2.5-2.1-5.3-2.1Z" />
    )}
    {icon === 'nextjs' && (
      <>
        <circle cx="16" cy="16" r="12" fill="#111827" />
        <text x="16" y="20" textAnchor="middle" className="fill-white text-[8px] font-bold">NEXT</text>
      </>
    )}
    {icon === 'htmlcss' && (
      <>
        <path fill="#E34F26" d="M5 4h10l-1 21-4 1.3L6 25 5 4Z" />
        <path fill="#1572B6" d="M17 4h10l-1 21-4 1.3-4-1.3L17 4Z" />
      </>
    )}
    {icon === 'node' && (
      <>
        <path fill="#68A063" d="M16 3 27 9.5v13L16 29 5 22.5v-13L16 3Z" />
        <text x="16" y="20" textAnchor="middle" className="fill-white text-[10px] font-bold">JS</text>
      </>
    )}
    {icon === 'api' && <path fill="none" stroke="#105670" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M12 9 6 16l6 7M20 9l6 7-6 7M18 7l-4 18" />}
    {icon === 'database' && (
      <path fill="none" stroke="#105670" strokeWidth="2.2" d="M7 9c0 2.2 4 4 9 4s9-1.8 9-4-4-4-9-4-9 1.8-9 4Zm0 0v14c0 2.2 4 4 9 4s9-1.8 9-4V9M7 16c0 2.2 4 4 9 4s9-1.8 9-4" />
    )}
    {icon === 'mysql' && (
      <>
        <path fill="#4479A1" d="M6 22c2.4-1.4 5.2-2.2 10-2.2S23.6 20.6 26 22c-2.3 1.8-5.7 3-10 3s-7.7-1.2-10-3Z" />
        <path fill="#4479A1" d="M6 14c2.4-1.4 5.2-2.2 10-2.2S23.6 12.6 26 14c-2.3 1.8-5.7 3-10 3s-7.7-1.2-10-3Z" />
        <path fill="#4479A1" d="M6 6c2.4-1.4 5.2-2.2 10-2.2S23.6 4.6 26 6c-2.3 1.8-5.7 3-10 3S8.3 7.8 6 6Z" />
      </>
    )}
    {icon === 'supabase' && (
      <>
        <path fill="#3ECF8E" d="M18.2 4 8 17h7.2L13.8 28 24 15h-7.2L18.2 4Z" />
      </>
    )}
    {icon === 'figma' && (
      <>
        <circle cx="12" cy="8" r="4" fill="#F24E1E" />
        <circle cx="20" cy="8" r="4" fill="#A259FF" />
        <circle cx="12" cy="16" r="4" fill="#0ACF83" />
        <circle cx="20" cy="16" r="4" fill="#1ABCFE" />
        <path d="M12 20a4 4 0 1 0 0 8" fill="#FF7262" />
      </>
    )}
    {icon === 'code' && <path fill="none" stroke="#105670" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="m12 10-4 6 4 6M20 10l4 6-4 6M18 8l-4 16" />}
    {icon === 'git' && <path fill="#F05032" d="M29 14.1 17.9 3a2.7 2.7 0 0 0-3.8 0L11.8 5.3l2.9 2.9a3.2 3.2 0 0 1 4.1 4.1l2.8 2.8a3.2 3.2 0 1 1-1.9 1.9l-2.6-2.6v6.8a3.2 3.2 0 1 1-2.6-.1v-6.9a3.2 3.2 0 0 1-1.5-4.3L10 7 3 14.1a2.7 2.7 0 0 0 0 3.8L14.1 29a2.7 2.7 0 0 0 3.8 0L29 17.9a2.7 2.7 0 0 0 0-3.8Z" />}
    {icon === 'github' && (
      <>
        <circle cx="16" cy="16" r="12" fill="#111827" />
        <path fill="#ffffff" d="M12 24c0 1 0 1.8 0 2.2 0 .4-.3.8-.7.8-.4 0-.6-.2-.6-.6 0-.5 0-1.4 0-2.5-2.6.5-3.2-1.2-3.2-1.2-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.3.8 1.3.8.7 1.2 2 1 2.5.8.1-.5.3-1 .6-1.3-2.1-.2-4.3-1-4.3-4.4 0-1 .4-1.9 1.1-2.6-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.6 0 3.4-2.2 4.2-4.3 4.4.3.3.6 1 .6 2v3c0 .4-.2.6-.6.6-.4 0-.7-.4-.7-.8 0-.4 0-1.2 0-2.2z" />
      </>
    )}
    {icon === 'codex' && (
      <>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#0F172A" />
        <path fill="none" stroke="#A5B4FC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 11 9 16l4 5M19 11l4 5-4 5M17 9l-2 14" />
      </>
    )}
  </svg>
)

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 bg-[var(--color-sea-white)] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-normal text-[var(--color-atlantic)]">
          Skills
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-bold text-[var(--color-deep-teal)] sm:text-3xl">
          Tools and technologies I use to build polished web experiences.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-[var(--color-sea-white)] bg-white p-4 shadow-sm"
            >
              <h3 className="text-base font-bold text-[var(--color-deep-teal)]">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex min-h-11 items-center gap-2 rounded-md border border-[var(--color-sea-white)] bg-white px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-atlantic)] hover:shadow-[0_10px_20px_rgba(16,86,112,0.12)] focus:-translate-y-0.5 focus:border-[var(--color-atlantic)]"
                    tabIndex={0}
                    aria-label={skill.name}
                  >
                    <SkillIcon icon={skill.icon as SkillIconName} />
                    <span className="text-xs font-semibold text-[var(--color-deep-teal)] sm:text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
