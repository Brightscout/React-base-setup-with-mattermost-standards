import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {teamsTheme, Provider as FluentProvider} from '@fluentui/react-northstar';

import App from './app';
import {store} from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider
        store={store}
    >
        <FluentProvider
            theme={teamsTheme}
        >
            <App/>
        </FluentProvider>
    </Provider>,
);
