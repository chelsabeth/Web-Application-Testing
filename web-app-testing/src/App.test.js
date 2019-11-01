import React from 'react';
import { render } from "@testing-library/react";
import App, { sum, subtract}  from './App';


// Test the sum "unit" function 
 test("it returns the sum of two numbers", () => {
   expect(sum(2, 2)).toBe(4);
 })

 test("it returns the difference of two numbers", () => {
   expect(subtract(5, 3)).toBe(2);
 })

test('renders without crashing', () => {
  render(<App />);
});
