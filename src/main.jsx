import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import './styles/main.css'
import './styles/header.css'
import './styles/footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
)