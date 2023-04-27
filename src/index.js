import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from "./store";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  // <Suspense>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Suspense>
  // </Provider>

  <GoogleOAuthProvider clientId="836734724717-p1reoir6i9givcbcnjom4r78su1i288l.apps.googleusercontent.com">
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </GoogleOAuthProvider>
  
);
