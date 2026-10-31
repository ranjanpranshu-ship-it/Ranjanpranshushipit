/**
 * Root application component.
 * Manages the active page and renders the matching section.
 */
import { useState } from 'react'
import Navbar from './components/Navbar.tsx'
import Intro from './pages/Intro.tsx'
import Skills from './pages/Skills.tsx'
import Projects from './pages/Projects.tsx'
import Social from './pages/Social.tsx'
import About from './pages/About.tsx'
import { appContainerStyle, backgroundblurStyle } from './styles/appContent.tsx'
import { bodyPageStyle } from './styles/nav.tsx'
import type { Page } from './types/navigation.ts'

function renderPage(page: Page, onNavigate: (page: Page) => void) {
  switch (page) {
    case 'Skills':
      return <Skills />
    case 'Projects':
      return <Projects />
    case 'Social':
      return <Social />
    case 'About':
      return <About />
    default:
      return <Intro onNavigate={onNavigate} />
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Intro')
  return (
    <div className={appContainerStyle}>
      <div className={backgroundblurStyle} aria-hidden="true" />
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main id="PageContent" className={bodyPageStyle}>
        {renderPage(currentPage, setCurrentPage)}
      </main>
    </div>
  )
}

export default App
