import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import AppContainer from './redux/components/app-container';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>, 
    document.getElementById('root')
);