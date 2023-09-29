import React from 'react';
import { render, screen } from '@testing-library/react';
import { Calculator } from './Calculator';

test('The calculator renders correctly', () => {
  render(<Calculator />);
  const sampleContent = screen.getByText('Let\'s do some maths!');
  expect(sampleContent).toBeTruthy();
});
