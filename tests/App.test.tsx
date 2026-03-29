import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../src/App'

describe('App', () => {
  it('renders the major portfolio sections', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /paul christian labor/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^web developer$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /core skills/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /featured projects/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('toggles the mobile navigation menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', {
      name: /mobile navigation/i,
    })

    await user.click(
      within(mobileNav).getByRole('link', { name: /^projects$/i }),
    )

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('does not render contact or services sections', () => {
    render(<App />)

    expect(
      screen.queryByRole('heading', { name: /contact/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /services/i }),
    ).not.toBeInTheDocument()
  })

  it('uses safe attributes on external project links', () => {
    render(<App />)

    const demoLink = screen.getAllByRole('link', { name: /live demo/i })[0]

    expect(demoLink).toHaveAttribute('target', '_blank')
    expect(demoLink).toHaveAttribute('rel', expect.stringContaining('noopener'))
    expect(demoLink).toHaveAttribute(
      'rel',
      expect.stringContaining('noreferrer'),
    )
  })
})
