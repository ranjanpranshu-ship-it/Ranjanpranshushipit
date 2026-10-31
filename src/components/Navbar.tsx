/**
 * Primary navigation: desktop sidebar (>=1300px) and a full-screen mobile menu.
 */
import { useState } from 'react'
import { NAV_ITEMS } from '../constants/navigation.ts'
import type { Page } from '../types/navigation.ts'
import {
  navButtonsStyle,
  navButtonStyle,
  navBarStyle,
  navContentStyle,
  titleStyle,
  titletextStyle,
  titleimageStyle,
  bottomContainerStyle,
  bottomIconStyle,
  bottomIconText,
  navButtonActiveStyle,
} from '../styles/nav.tsx'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (page: Page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <>
      {/* Hamburger (small/mid screens only) */}
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-40 mid:hidden inline-flex items-center justify-center p-2 rounded-lg bg-gray-800/80 text-white shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Desktop sidebar (mid+ only) */}
      <aside className={`${navContentStyle} hidden mid:flex`} aria-label="Primary navigation">
        <div className={titleStyle}>
          <img src="/api/backend.svg" className={titleimageStyle} alt="Pranshu logo" />
          <span className={titletextStyle}>Pranshu</span>
        </div>
        <div className={navBarStyle}>
          <nav className={navButtonStyle}>
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item
              return (
                <button
                  key={item}
                  type="button"
                  className={`${navButtonsStyle} ${isActive ? navButtonActiveStyle : ''}`}
                  onClick={() => handleNavigate(item)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </button>
              )
            })}
          </nav>
        </div>
        <div className={bottomContainerStyle}>
          <div className={bottomIconStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
        </div>
        <span className={bottomIconText}>ranjanpranshu029@gmail.com</span>
      </aside>

      {/* Full-screen overlay menu (small/mid only) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 mid:hidden bg-gray-800/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-6">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item
              return (
                <button
                  key={item}
                  type="button"
                  className={`w-full text-center text-xl font-bold py-3 rounded-full transition-colors ${isActive ? 'bg-[#019455] text-gray-900' : 'text-white hover:text-[#019455]/80'}`}
                  onClick={() => handleNavigate(item)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </button>
              )
            })}
          </div>
          <span className="text-[#019455] text-md mt-4">ranjanpranshu029@gmail.com</span>
        </div>
      )}
    </>
  )
}
