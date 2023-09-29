import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

test('the quotes page renders correctly', () => {
  render(<Quote quote="sample text" author="John Doe" />);
  const quoteContent = screen.getByText('sample text');
  const authorContent = screen.getByText('John Doe');
  expect(quoteContent).toBeTruthy();
  expect(authorContent).toBeTruthy();
});

test('the quotes component fully renders', () => {
  const tree = renderer.create(<Quote quote="sample text" author="John Doe" />).toJSON();
  expect(tree).toMatchSnapshot();
});
