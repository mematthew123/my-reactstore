import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ChakraProvider } from "@chakra-ui/react"

import ShopProvider from './context/shopContext'

ReactDOM.render(
  <ChakraProvider>
    <ShopProvider>
      <App />
    </ShopProvider>
  </ChakraProvider>,
  document.getElementById('root')

);


