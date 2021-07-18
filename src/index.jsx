import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import bootstrap from './bootstrap';
import Reducers from './redux/Reducers';
import './sass/app.scss';

const J2KB = bootstrap();
const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <J2KB.App instance={J2KB} />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
