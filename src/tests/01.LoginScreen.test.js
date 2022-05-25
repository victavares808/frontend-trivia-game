import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';
import { toBeInTheDocument } from '@testing-library/jest-dom';

describe('Testa a página de Login', () => {
  it('Testa se a página renderiza o banner e os inputs de name e email.', () => {
    renderWithRouterAndRedux(<Login />)
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});