import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppBar from './AppBar';

describe('AppBar', () => {
  it('should show back button when not on home page', () => {
    render(
      <MemoryRouter initialEntries={['/catch']}>
        <AppBar />
      </MemoryRouter>
    );
    const result = screen.queryByTestId('back-arrow');
    expect(result).toBeTruthy();
  });
  it('should not show back button when on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppBar />
      </MemoryRouter>
    );
    const result = screen.queryByTestId('back-arrow');
    expect(result).toBeNull();
  });
});
