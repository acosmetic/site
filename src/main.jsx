import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { HashRouter } from 'react-router-dom'
import App from './App'
=======
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <HashRouter>
      <App />
    </HashRouter>
=======
    <BrowserRouter basename="/a-cosmetic">
      <App />
    </BrowserRouter>
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
  </React.StrictMode>,
)