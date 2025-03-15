import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import store from "/src/store.js"
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
      <Provider store={store} >
        <App/>
      </Provider>
    // </StrictMode>
)
