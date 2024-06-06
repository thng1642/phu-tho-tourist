import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
