import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app contains navigation', () => {
  render(<App />);
  const homeLink = screen.getByText('Home');
  const calculatorLink = screen.getByText('Calculator');
  const quoteLink = screen.getByText('Quotes');
  expect(homeLink).toBeTruthy();
  expect(calculatorLink).toBeTruthy();
  expect(quoteLink).toBeTruthy();
});
