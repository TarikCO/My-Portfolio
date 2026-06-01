import { createContext, useCallback, useContext, useRef, useState } from "react"

export const SECTIONS = {
  hero:     { x:  0.0, y:  0.0 },
  about:    { x: -1.5, y:  0.3 },
  projects: { x:  1.4, y: -0.2 },
  skills:   { x: -1.0, y:  1.5 },
  contact:  { x:  0.5, y:  1.3 },
}

const ZOOM_SCALE = 0.12
const DURATION   = 2000

// Position easing: smooth S-curve, zero velocity at start and end
function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2
}

// Scale easing: smooth hill shape — 1 → ZOOM_SCALE at t=0.5 → 1
// sin(π*t) naturally peaks at t=0.5 with zero velocity at both ends
// No segments, no keyframe boundaries, no seams — pure math
function scaleAtT(t) {
  const hill = Math.sin(Math.PI * t)           // 0 → 1 → 0
  return 1 - (1 - ZOOM_SCALE) * hill          // 1 → ZOOM_SCALE → 1
}

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const canvasRef   = useRef(null)
  const rafRef      = useRef(null)
  const [current,   setCurrent]  = useState("hero")
  const [animating, setAnimating] = useState(false)

  const navigateTo = useCallback((target) => {
    if (!canvasRef.current || animating || target === current) return

    const canvas = canvasRef.current
    const VW = window.innerWidth
    const VH = window.innerHeight

    const fromX = SECTIONS[current].x * VW
    const fromY = SECTIONS[current].y * VH
    const toX   = SECTIONS[target].x  * VW
    const toY   = SECTIONS[target].y  * VH

    setAnimating(true)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const startTime = performance.now()

    function tick(now) {
      const rawT = Math.min((now - startTime) / DURATION, 1)

      // Position follows easeInOutSine — decelerates smoothly into destination
      const pt     = easeInOutSine(rawT)
      const currX  = fromX + (toX - fromX) * pt
      const currY  = fromY + (toY - fromY) * pt

      // Scale follows a sine hill — no segments, perfectly smooth arc
      const s = scaleAtT(rawT)

      canvas.style.transform = `scale(${s}) translate(${-currX}px, ${-currY}px)`

      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        // Snap to exact final state
        canvas.style.transform = `scale(1) translate(${-toX}px, ${-toY}px)`
        rafRef.current = null
        setCurrent(target)
        setAnimating(false)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [current, animating])

  return (
    <NavigationContext.Provider value={{ canvasRef, current, navigateTo, animating }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)