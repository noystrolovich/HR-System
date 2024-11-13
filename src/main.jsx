import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {legacy_createStore as createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Redux/rootReducer.js'
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer)
createRoot(document.getElementById('root')).render(
<BrowserRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
)
