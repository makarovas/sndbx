import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { createStore } from 'redux';
import { reducer } from './reducer'



// const { inc, dec, rnd, rst } = bindActionCreators(actions, dispatch);

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));


