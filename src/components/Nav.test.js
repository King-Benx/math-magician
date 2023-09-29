import React from 'react';
import {render, screen} from "@testing-library/react";
import Nav from './Nav';
import {BrowserRouter} from "react-router-dom";

test('the navigation shows all 3 links',()=>{
  render(<BrowserRouter><Nav/></BrowserRouter>);
  const homeLink = screen.getByText('Home');
  const calculatorLink = screen.getByText('Calculator');
  const quoteLink = screen.getByText('Quotes')
  expect(homeLink).toBeTruthy();
  expect(calculatorLink).toBeTruthy();
  expect(quoteLink).toBeTruthy();
});
