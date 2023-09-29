import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('The home page loads correctly', () => {
  render(<Home />);
  const sampleContent = screen.getByText('Welcome Math Magicians!');
  expect(sampleContent).toBeTruthy();
});

test('the home page renders fully', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
