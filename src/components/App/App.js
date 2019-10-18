import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import store from '../../store/store'
import Router from './Router/Router'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', 'sans-serif';
    margin: 0;
  }
`

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
}

export default App
