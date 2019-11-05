
import * as actions from './actions';
import { store, reducer } from './reducer';
// import { bindActionCreators } from './hoc';
import { createStore, bindActionCreators } from 'redux';

const { dispatch, subscribe, getState } = store;

const elemInc = document.getElementById('inc');
const elemDec = document.getElementById('dec');
const elemRst = document.getElementById('rst');
const elemRnd = document.getElementById('rnd');

const { inc, dec, rnd, rst } = bindActionCreators(actions, dispatch);

elemInc.addEventListener('click', inc); elemDec.addEventListener('click', dec);
elemRnd.addEventListener('click', rnd);
elemRst.addEventListener('click', rst);

const update = () => {
	document
		.getElementById('counter')
		.innerHTML = getState();
};

subscribe(update);