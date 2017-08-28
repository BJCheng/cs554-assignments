import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import AppContainer from './redux/components/app-container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Contents from './enums/contents';
import reduxThunk from 'redux-thunk';
injectTapEventPlugin();

let preloadedState = {
    content: Contents.StructureListing,
    structures: [],
    newStructure: {
        structureName: '', structureSlug: '', structureDescription: '', structurePageSize: '',
        fields: [{ label: '', type: '' }], structureCreated: false
    }, 
    entries: [], 
    toggleEntryDialog: false
};
const store = createStore(reducer, preloadedState, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);