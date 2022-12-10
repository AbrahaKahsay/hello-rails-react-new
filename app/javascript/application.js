
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider} from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  configureStore from './redux/configureStore';
import { getGreetings } from './redux/greetings/greetingsSlice';
configureStore.dispatch(getGreetings());

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={configureStore}>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </Router>
    </Provider>
);