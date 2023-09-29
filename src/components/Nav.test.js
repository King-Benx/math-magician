import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

test('the navigation shows all 3 links', () => {
  render(<BrowserRouter><Nav /></BrowserRouter>);
  const homeLink = screen.getByText('Home');
  const calculatorLink = screen.getByText('Calculator');
  const quoteLink = screen.getByText('Quotes');
  expect(homeLink).toBeTruthy();
  expect(calculatorLink).toBeTruthy();
  expect(quoteLink).toBeTruthy();
});

test('the navigation renders completely', () => {
  const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
