import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testes da tela de Feedback', () => {
  test('testa se elementos  Usuário estão no header de Feedback  ', () => {
    const testInitialState = {
      testPlayer: {
        nome: 'xpto',
        placar: 0,
        acertos: 0,
        emailDoGravatar: 'xpto@xptomail.com',
      },
    };
    const { history } = renderWithRouterAndRedux(<App />, testInitialState);
    history.push('feedback');

    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');

    const placar = screen.getByTestId('header-score');
    expect(placar).toBeInTheDocument();

    const gravatarTestPicture = screen.getByTestId('header-profile-picture');
    expect(gravatarTestPicture).toBeInTheDocument();

    expect(gravatarTestPicture.alt).toBe('profile');
  });

  test('testa se são renderizados os resultados do usuário na tela', () => {
    const testInitialState = {
      testPlayer: {
        nome: 'xpto',
        placar: 0,
        acertos: 0,
        emailDoGravatar: 'xpto@xptomail.com',
      },
    };

    const { history } = renderWithRouterAndRedux(<App />, testInitialState);
    history.push('/feedback');

    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');

    const resultadoPlacar = screen.getAllByText(/0/i);
    expect(resultadoPlacar[1]).toBeInTheDocument();

    const numeroDeAcertos = screen.getByTestId('feedback-total-question');
    expect(numeroDeAcertos).toBeInTheDocument();
  });

  test('testa se a mensagem de feedback exibida corretamente', () => {
    const testInitialState = {
      testPlayer: {
        nome: 'xpto',
        placar: 0,
        acertos: 0,
        emailDoGravatar: 'xpto@xptomail.com',
      },
    };

    const { history } = renderWithRouterAndRedux(<App />, testInitialState);
    history.push('/feedback');

    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');

    const testMsgFeedback = screen.getByRole(
      'heading', { level: 1, name: /could be better/i },
    );
    expect(testMsgFeedback).toBeInTheDocument();
  });

  test('Se ao clicar no botão "Play Again", redireciona para a tela de Login', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/feedback');

    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');

    const btnPlayAgain = screen.getByRole('button', { name: /play again/i });
    expect(btnPlayAgain).toBeInTheDocument();

    userEvent.click(btnPlayAgain);
  });

  test('Se ao clicar no botão "Ranking", redireciona para a tela de ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/feedback');

    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');

    const rankingBtn = screen.getByRole('button', { name: /ranking/i });
    expect(rankingBtn).toBeInTheDocument();
    userEvent.click(rankingBtn);
  });
});
