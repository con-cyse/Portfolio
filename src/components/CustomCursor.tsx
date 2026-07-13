import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setIsHovering(Boolean(target.closest('a, button, input, textarea')))
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', updateHoverState)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', updateHoverState)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isHovering ? 'is-hovering' : ''}`}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  )
}

export default CustomCursor
