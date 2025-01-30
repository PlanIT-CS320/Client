import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import React from 'react';
import ThemeDrop from '../components/Dropdown';

import { getItemById } from './helpers';

describe('ThemeDrop', () => {
  it('renders the dropdown component', 
    getItemById(<ThemeDrop />, 'dropdown')
  );

//   it('toggles the dropdown menu when clicked', () => {
//     render(<ThemeDrop />);
    
//   });

//   it('closes the dropdown menu when an item is clicked', () => {
//     render(<ThemeDrop />);
    
//   });
});