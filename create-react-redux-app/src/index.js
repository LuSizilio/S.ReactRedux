import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';

import {createStore} from 'redux';
const clickCounter = (state = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return state +1;
      case 'SUB':
        return state -1;
      default:
        return state;
    }
  };
  
const store1 = createStore(clickCounter);

const Count = ({
    Value,
    Adicionar,
    Subtrair
  }) => (
    <div>
      <h1>{Value}</h1>
      <button onClick={Adicionar}>+</button>
      <button onClick={Subtrair}>-</button>
    </div>
  );
const render = () =>{
    ReactDOM.render(
        <Count
              Value = {store1.getState()}
              Adicionar = { () =>
                store1.dispatch({
                  type: 'ADD'
                })
              }
              Subtrair = { () =>
                store1.dispatch({
                  type: 'SUB'
                })
              }
            />,
        document.getElementById('root2')
    );
};


ReactDOM.render(
<Provider store={Store}>
<App />
</Provider>
, document.getElementById('root'));
store1.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
