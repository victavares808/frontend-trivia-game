import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouterAndRedux';
import App from '../App'


describe('Testa a página de Ranking', () => {

  it('Verifica se o botão leva para a página inicial', () => {
    const { history }=  renderWithRouter(<App />)
    const playBtn = screen.getByRole('button', {  name: /play/i});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    userEvent.click(playBtn);
    history.push('/game')
    expect(history.location.pathname).toBe('/game')

    history.push('/feedback')
    expect(history.location.pathname).toBe('/feedback')
    
    const btnRanking = screen.getByRole('button', {  name: /ranking/i})
    expect(btnRanking).toBeDefined()
    userEvent.click(btnRanking)
    const { location: { pathname } } = history;
    expect(pathname).toBe('/ranking')

    const btnHome = screen.getByRole('button', {  name: /go home/i})
    expect(btnHome).toBeDefined()
    userEvent.click(btnHome)
    expect(history.location.pathname).toBe('/')
  })

  it('Verifica se tem uma pessoa na tela de ranking', () => {
    const { history }=  renderWithRouter(<App />)
    const playBtn = screen.getByRole('button', {  name: /play/i});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    userEvent.click(playBtn);
    history.push('/game')
    expect(history.location.pathname).toBe('/game')

    history.push('/feedback')
    expect(history.location.pathname).toBe('/feedback')
    
    const btnRanking = screen.getByRole('button', {  name: /ranking/i})
    expect(btnRanking).toBeDefined()
    userEvent.click(btnRanking)
    const { location: { pathname } } = history;
    expect(pathname).toBe('/ranking')

    const score = screen.getByTestId('player-score-1')
    expect(score).toBeDefined()
  })
})