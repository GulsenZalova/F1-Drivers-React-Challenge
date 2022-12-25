import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataProvider } from './contexts/DataContext'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>

)
