import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import App from './App';
import './style/App.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


