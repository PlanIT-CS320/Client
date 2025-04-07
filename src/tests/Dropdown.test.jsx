import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { BrowserRouter } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import React from 'react';
import ThemeDrop from '../components/Dropdown';

import { getItemById } from './helpers';

describe('Theme Dropdown', () => {
  it('renders the dropdown component', () => {
    render(
      <BrowserRouter>
        <Dropdown />
      </BrowserRouter>
    );
    expect(document.getElementById("dropdown-basic") !== null).toBeTruthy();
  });

//   it('toggles the dropdown menu when clicked', () => {
//     render(<ThemeDrop />);
    
//   });

//   it('closes the dropdown menu when an item is clicked', () => {
//     render(<ThemeDrop />);
    
//   });
});