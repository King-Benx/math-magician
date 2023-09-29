import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('The home page loads correctly', () => {
  render(<Home />);
  const sampleContent = screen.getByText('Welcome Math Magicians!');
  expect(sampleContent).toBeTruthy();
});
