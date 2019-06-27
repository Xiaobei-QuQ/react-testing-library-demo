// __tests__/fetch.js
import React from 'react'
import {
  render
} from '@testing-library/react'
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import App from './App';




it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to React')).toBeInTheDocument();
});