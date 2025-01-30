import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThemeDrop from '../components/Dropdown';

describe('ThemeDrop', () => {
  it('renders the dropdown component', () => {
    render(<ThemeDrop />);
    expect(screen.getByRole('button', { name: /Theme Picker ▼/i })).toBeInTheDocument();
  });

  it('toggles the dropdown menu when clicked', () => {
    render(<ThemeDrop />);
    const toggleButton = screen.getByRole('button', { name: /Theme Picker ▼/i });
    fireEvent.click(toggleButton);
    expect(screen.getByText('Theme 1')).toBeInTheDocument();
    expect(screen.getByText('Theme 2')).toBeInTheDocument();
    expect(screen.getByText('Theme 3')).toBeInTheDocument();
    expect(screen.getByText('None')).toBeInTheDocument();
  });

  it('closes the dropdown menu when an item is clicked', () => {
    render(<ThemeDrop />);
    const toggleButton = screen.getByRole('button', { name: /Theme Picker ▼/i });
    fireEvent.click(toggleButton);
    const themeItem = screen.getByText('Theme 1');
    fireEvent.click(themeItem);
    expect(screen.queryByText('Theme 1')).not.toBeInTheDocument();
  });
});