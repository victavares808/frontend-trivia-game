import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { history }from 'history';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';
import App from '../App';
import { fetchToken } from './helpers/mocks';

describe('Testa a página de Login', () => {

  const tokenResponse = {
    response_code: 0,
    response_message: "Token Generated Successfully!",
    token: "main-group-13-meu-paceiro",
  };

  const questionsResponse = [
    {
      category: 'comida',
      type: 'multiple choice',
      difficulty: 'fácil',
      question: 'Qual é fruta ?',
      correct_answer: 'uva',
      incorrect_answers: ['costela', 'biscoito', 'jiló', 'arroz'],
    },
    {
      category: 'carro',
      type: 'multiple choice',
      difficulty: 'fácil',
      question: 'Qual é alemão',
      correct_answer: 'Audi',
      incorrect_answers: ['Toyota', 'Kia', 'Nissan', 'Ford'],
    },
    {
      category: 'Filme',
      type: 'multiple choice',
      difficulty: 'fácil',
      question: 'Qual é de terror ?',
      correct_answer: 'sexta-feira 13',
      incorrect_answers: ['Vingadores', 'Peppa Pig', 'As branquelas', 'Kung Fu Panda'],
    },
    {
      category: 'Bebida',
      type: 'multiple choice',
      difficulty: 'fácil',
      question: 'Qual tem mais de 35% de álcool ?',
      correct_answer: 'Whisky',
      incorrect_answers: ['Cerveja', 'Vinho', 'Sakê', 'Tubaina'],
    },
    {
      category: 'Roupa',
      type: 'multiple choice',
      difficulty: 'fácil',
      question: 'O que se usa na praia ? ',
      correct_answer: 'Biquini',
      incorrect_answers: ['Calça Jeans', 'Moletom', 'Polo', 'Terno'],
    },
  ]

  it('Testa se a página renderiza os inputs de name e email.', () => {
    const { history } = renderWithRouterAndRedux(<App />, {});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it(`Testa se o botão "Play" está desabilitado quando a 
  pessoa jogadora não preencher nenhum campo`, () => {
    const { history } = renderWithRouterAndRedux(<App />, {});
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
  });
  
  it(`Testa se o botão "Play" está desabilitado quando a 
  pessoa jogadora escrever apenas o nome`, () => {
    const { history } = renderWithRouterAndRedux(<App />, {});
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    expect(playBtn).toBeDisabled();
  });

  it(`Testa se o botão "Play" está desabilitado quando a 
  pessoa jogadora escrever apenas o email`, () => {
    const { history } = renderWithRouterAndRedux(<App />, {});
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    expect(playBtn).toBeDisabled();
  });

  it(`Testa se o botão "Play" está habilitado quando a pessoa jogadora preencher 
  os campos de nome e email`, () => {
    const { history } = renderWithRouterAndRedux(<App />, {});
    const playBtn = screen.getByRole('button', {  name: /play/i});
    expect(playBtn).toBeInTheDocument();
    expect(playBtn).toBeDisabled();
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    expect(playBtn).not.toBeDisabled();
  });

  it('Testa se após clicar no botão "Play" redireciona para o página /game', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(tokenResponse) }))
    .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(questionsResponse) }));
    const playBtn = screen.getByRole('button', {  name: /play/i});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    expect(playBtn).toBeInTheDocument();
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    userEvent.click(playBtn);
    const { location: { pathname } } = history;
    expect(fetchMock).toBeCalledTimes(1);
    await waitForElementToBeRemoved(playBtn);
    expect(fetchMock).toBeCalledTimes(2);
  });

  it('Testa se após clicar no botão "Settings" redireciona para o página /settings', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const settingsBtn = screen.getByRole('button', {  name: /settings/i});
    expect(settingsBtn).toBeInTheDocument();
    userEvent.click(settingsBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/settings');
  });

  it('Testa se ao clicar no botão "Play" é feita a requisição na API', () => {
    const { history } = renderWithRouterAndRedux(<App />);
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

  it('Testa se ao clicar no botão "Play" são salvos imagem, email, nome e token.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(tokenResponse) }))
    .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(questionsResponse) }));
    const playBtn = screen.getByRole('button', {  name: /play/i});
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(nameInput, 'Nome da pessoa');
    userEvent.type(emailInput, 'emailDaPessoa@pessoa.com');
    userEvent.click(playBtn);
    const { location: { pathname } } = history;
    expect(fetchMock).toBeCalledTimes(4);
    await waitForElementToBeRemoved(playBtn);
    expect(fetchMock).toBeCalledTimes(5);

    expect(localStorage.getItem('token')).toBe(tokenResponse.token);
  });
}); 