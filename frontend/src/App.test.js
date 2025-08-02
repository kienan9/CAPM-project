import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders project text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/EGL307 Project/i);
  expect(linkElement).toBeInTheDocument();
});
