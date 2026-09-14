import { useEffect } from 'react'
import { useLocation } from 'react-router'

const pageTitles = {
  '/': 'Rabbit Hole',
  '/about': 'About Me | Rabbit Hole',
  '/cinema': 'Cinema | Rabbit Hole',
  '/coding': 'Coding | Rabbit Hole',
  '/mind': 'What’s on My Mind | Rabbit Hole',
  '/rabbit-holes': 'Rabbit Holes | Rabbit Hole',
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitles[pathname] || 'Lost | Rabbit Hole'
  }, [pathname])

  return null
}

export default ScrollToTop