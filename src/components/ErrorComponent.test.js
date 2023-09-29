import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ErrorComponent from './ErrorComponent';

test('The error component renders correctly', () => {
  render(<ErrorComponent error loading={false} />);
  const sampleContent = screen.getByText('Something went wrong and we failed to get the quote');
  expect(sampleContent).toBeTruthy();
  expect(sampleContent).toMatchSnapshot();
});

test('the error component renders fully', () => {
  const tree = renderer.create(<ErrorComponent error loading={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
