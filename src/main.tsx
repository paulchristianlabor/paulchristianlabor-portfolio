import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Wait for both the page to fully load AND the typewriter animation to finish
const ANIMATION_MS = 2200

const pageLoaded = new Promise<void>((resolve) => {
  if (document.readyState === 'complete') {
    resolve()
  } else {
    window.addEventListener('load', () => resolve(), { once: true })
  }
})

const animationDone = new Promise<void>((resolve) => {
  setTimeout(resolve, ANIMATION_MS)
})

Promise.all([pageLoaded, animationDone]).then(() => {
  const preloader = document.getElementById('preloader')
  const rootEl = document.getElementById('root')
  if (preloader) {
    preloader.classList.add('fade-out')
    preloader.addEventListener(
      'transitionend',
      () => {
        preloader.remove()
        if (rootEl) rootEl.style.opacity = '1'
      },
      { once: true },
    )
  }
})
