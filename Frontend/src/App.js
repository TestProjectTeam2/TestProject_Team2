import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";

import './App.css';

import { ProductCardPage } from './pages/ProductCardPage/ProductCardPage';
import { HomePage } from './pages/HomePage/HomePage'
import { AuthWindow } from './components/AuthWindow/AuthWindow';
import { rootReducer } from "./store/rootReducer";

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
	<ReduxProvider store={store}>
    <div className="App">
      <AuthWindow />
    </div>
	</ReduxProvider>
  );
}

export default App;
