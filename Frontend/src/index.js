import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from './store/rootReducer';

const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
	const state = store.getState();
	console.log("State updated:", state);
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ReduxProvider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
