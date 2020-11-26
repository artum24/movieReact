import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import store from './redux/store';

import {BrowserRouter} from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/index.scss';

const domain = 'dev-fpwqxom5.eu.auth0.com';
const clientId = 'kiBl1GDLtGygTqt0mRiLTWSIr7yVz1wQ';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
                <App/>
            </Auth0Provider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

