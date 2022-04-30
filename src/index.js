import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import 'react-toastify/dist/ReactToastify.css';
import  App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </React.StrictMode>
    </PersistGate>
  </Provider>
);
