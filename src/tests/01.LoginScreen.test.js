import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { history }from 'history';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';
import { fetchToken } from './helpers/mocks';

describe('Testa a página de Login', () => {
  it('Testa se a página renderiza os inputs de name e email.', () => {
    renderWithRouterAndRedux(<Login />)
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it(`Testa se o botão "Play" está desabilitado quando a 
  pessoa jogadora não preencher nenhum campo`, () => {
    renderWithRouterAndRedux(<Login />);
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
  });
  
  it(`Testa se o botão "Play" está desabilitado quando a 
  pessoa jogadora escrever apenas o nome`, () => {
    renderWithRouterAndRedux(<Login />);
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    expect(playBtn).toBeDisabled();
  });

  it(`Testa se o botão "Play" está desabilitado quando a 
  pessoa jogadora escrever apenas o email`, () => {
    renderWithRouterAndRedux(<Login />);
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    expect(playBtn).toBeDisabled();
  });

  it(`Testa se o botão "Play" está habilitado quando a pessoa jogadora preencher 
  os campos de nome e email`, () => {
    renderWithRouterAndRedux(<Login />);
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    expect(playBtn).not.toBeDisabled();
  });

  it('Testa se após clicar no botão "Play" redireciona para o página /game', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const playBtn = screen.getByRole('button', {  name: /play/i});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    userEvent.click(playBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/game');
  });

  it('Testa se após clicar no botão "Settings" redireciona para o página /settings', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const settingsBtn = screen.getByRole('button', {  name: /settings/i});
    expect(settingsBtn).toBeInTheDocument();
    userEvent.click(settingsBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/settings')
  });

  it('Testa se ao clicar no botão "Play" é feita a requisição na API', () => {
    renderWithRouterAndRedux(<Login />);
    const playBtn = screen.getByRole('button', {  name: /play/i});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    userEvent.click(playBtn);
    localStorage.setItem('token', fetchToken);
    const token = localStorage.getItem('token');
    expect(token).toBe(fetchToken);
  })
}); 