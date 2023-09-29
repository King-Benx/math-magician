import React from 'react';
import {render, screen} from "@testing-library/react";
import Quote from './Quote';

test('the quotes page renders correctly',()=>{
  render(<Quote quote={'sample text'} author={'John Doe'}/>);
  const quoteContent = screen.getByText('sample text');
  const authorContent = screen.getByText('John Doe');
  expect(quoteContent).toBeTruthy();
  expect(authorContent).toBeTruthy();
});
