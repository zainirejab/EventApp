import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-calendar/dist/Calendar.css'
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import ScrollToTop from './components/ScrollToTop';
import thunk from 'redux-thunk';
import { loadEvents } from './redux/eventActionsCreator';

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(loadEvents())

ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

