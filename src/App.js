import 'bootstrap/dist/css/bootstrap.min.css';
import poke from './img/450_1000.jpg';
import './App.css';

import CantHook from './components/CantHook.jsx';
import CompHook from './components/CompHook.jsx';

import store from './redux/store.js'
import {Provider} from 'react-redux';
function App() {
    
  return (
    <Provider store={store}>
      <div className="App container">
      <div className="row">
        <div className="col-12">

          <div className="card mt-6" style={{maxWidth: '700px'}}>
            <div className="row no-gutters">
              <div className="col-4 pt-1 pb-1">
                <img src={poke} alt="pokemon" className="card-img" />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantHook/>
                  </div>
                    <CompHook/>

                </div>


              </div>

            </div>

          </div>
        </div>
      </div>
      
    </div>
    </Provider>

  );
}

export default App;
