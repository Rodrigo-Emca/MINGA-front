import './App.css';

import {router} from './pages/index'
import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';  //enchufa estados globales a la app, todos los estados globales estaran disponibles para todos los componentes de la app
import { store} from './store/store' // redux

function App() {
  return (
    
    // redux
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
    
  )
}

export default App;

/* 
    <div className="App">
      <RouterProvider router={router} />
    </div>
*/