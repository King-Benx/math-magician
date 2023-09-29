import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Calculator } from './Calculator';

test('The calculator renders correctly', () => {
  render(<Calculator />);
  const sampleContent = screen.getByText('Let\'s do some maths!');
  expect(sampleContent).toBeTruthy();
});

test('calculator is operational', () => {
  render(<Calculator />);
  const sampleContent = screen.getByText('2');
  const sampleContent2 = screen.getByText('x');
  const sampleContent3 = screen.getByText('5');
  const sampleContent4 = screen.getByText('=');

  fireEvent.click(sampleContent);
  fireEvent.click(sampleContent2);
  fireEvent.click(sampleContent3);
  fireEvent.click(sampleContent4);

  expect(screen.queryAllByText('10')).toBeTruthy();
});

test('The calculator renders fully', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
