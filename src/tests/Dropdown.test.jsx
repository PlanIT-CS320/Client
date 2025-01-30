import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import React from 'react';
import ThemeDrop from '../components/Dropdown';

describe('ThemeDrop', () => {
  it('renders the dropdown component', () => {
    render(<ThemeDrop />);
    expect(true).toBeTruthy();
  });

//   it('toggles the dropdown menu when clicked', () => {
//     render(<ThemeDrop />);
    
//   });

//   it('closes the dropdown menu when an item is clicked', () => {
//     render(<ThemeDrop />);
    
//   });
});