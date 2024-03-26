import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Login from '../Login';
import { renderWithProviders } from '../../testUtils/render.helper';

describe('Login page', () => {
  it('Should render login form', () => {
    renderWithProviders(<Login />);
    expect(screen.getByText('Login')).toBeDefined();
  });
});
