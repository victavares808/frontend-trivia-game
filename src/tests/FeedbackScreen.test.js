import React from 'react';
import Feedback from '../pages/Feedback';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helperse;rAndRedux'

describe('Teste o componente <Feedback.js />', () => {

    it('tetesta se elementos de Nome, placar e Imagem do Usuário estão no header de Feedback ',() => {
       const testInitialState = {
            testPlayer = {
               nome:'xpto',
               placar: 0,
               acertos: 0,
               emailDoGravatar:'xpto@xptomail.com',
           }
       }

       const { history } = renderWithRouterAndRedux(<App/>, testInitialState<;
       history.push('feedback');

       const { pathname } = history.location;
       expect(pathname).toBe('/feedback');

       const score =  



    });

   it('testa se o número exibido é correto quando a pessoa usuária não acerta nenhuma pergunta', () => {
     
    }); 

    test('testa se o número exibido é correto quando a pessoa usuária acerta 2 perguntas', () => {
     
    }); 

    test('testa se o número exibido é correto quando a pessoa usuária acerta 4 perguntas', () => {
     
    }); 

    test('testa se ao acertar menos de 3 perguntas a mensagem de feedback é "Could be better..."
    ', () => {
     
    }); 

    test('testa se ao acertar 3 perguntas a mensagem de feedback é "Well Done!"
    ', () => {
     
    }); 

    test('testa se ao acertar mais de 3 perguntas a mensagem de feedback é "Well Done!"', () => {
     
    }); 
});
