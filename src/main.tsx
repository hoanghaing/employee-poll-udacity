import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import store from './store'
import { Provider } from 'react-redux'
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter as Router } from 'react-router-dom';


const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
)