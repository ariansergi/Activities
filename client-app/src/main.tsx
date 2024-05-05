import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-toastify/dist/ReactToastify.min.css"
import "react-datepicker/dist/react-datepicker.css"
import './app/layout/styles.css'
import "semantic-ui-css/semantic.min.css"
import "react-calendar/dist/Calendar.css"
import { StoreContext, store } from './app/stores/store'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/router/routes'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
    <RouterProvider router={Router}/>
    </StoreContext.Provider>
  </React.StrictMode>,

)
