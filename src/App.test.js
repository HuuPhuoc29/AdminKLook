import React from 'react'
import { render, screen } from '@testing-library/react'
import { render } from './test-utils';
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
