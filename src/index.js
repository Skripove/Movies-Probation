import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import axios from 'axios';
import './index.css';
import {Provider} from 'react-redux';
import {store} from './store/store';

axios.defaults.method = "get";
axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = {
  api_key: '87fbe9b6f9a82c88238c98fe85935d88',
  language: 'ru-RU'
};

// ========================================
  ReactDOM.render(
    <Provider store={store}>
      <Main/>
    </Provider>,
    document.getElementById('root')
  );
// ========================================