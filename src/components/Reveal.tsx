import { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  variant?: 'fade' | 'float-in' | 'scale'
}

const Reveal = ({ children, variant = 'float-in' }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  )
}

export default Reveal
