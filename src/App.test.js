import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

test('User can navigate to Calculator Screen', () => {
  render(<App />);
  const calculatorLink = screen.getByText('Calculator');
  fireEvent.click(calculatorLink);
  const sampleContent = screen.getByText('Let\'s do some maths!');
  expect(sampleContent).toBeTruthy();
});

test('user can navigate to Quotes screen', () => {
  render(<App />);
  const quotesLink = screen.getByText('Quotes');
  fireEvent.click(quotesLink);
  const sampleContent = screen.getByText('--');
  expect(sampleContent).toBeTruthy();
});

test('user can navigate to Home screen', () => {
  render(<App />);
  const homeLink = screen.getByText('Home');
  fireEvent.click(homeLink);
  const sampleContent = screen.getByText('Welcome Math Magicians!');
  expect(sampleContent).toBeTruthy();
});

test('app renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
