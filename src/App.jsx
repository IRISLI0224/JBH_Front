import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import { commonRoutes, authRoutes } from './routes/allRoutes';
import RouteMiddleware from './routes/RouteMiddleware';
import Roboto from './assets/fonts/Roboto/Roboto-Regular.ttf';
import Raleway from './assets/fonts/Raleway/Raleway-VariableFont_wght.ttf';
import Baloo from './assets/fonts/Baloo/Baloo2-Bold.ttf';
import Poppins from './assets/fonts/Poppins/Poppins-Regular.ttf';
import PoppinsBold from './assets/fonts/Poppins/Poppins-Bold.ttf';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway}) format('truetype');
  }

  @font-face {
    font-family: 'Baloo';
    src: url(${Baloo}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
  }

  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsBold}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #cacaca;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
        <Switch>
          {commonRoutes.map((route) => (
            <RouteMiddleware
              path={route.path}
              component={route.component}
              key={route.path}
              isAuthProtected={false}
              exact
            />
          ))}
          {authRoutes.map((route) => (
            <RouteMiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={route.path}
              isAuthProtected
              exact
            />
          ))}
        </Switch>
  </BrowserRouter>
);

export default App;
