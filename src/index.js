
import { inc, dec, rnd, rst } from './actions';
import { store, reducer } from './reducer';
// import { bindActionCreators } from './hoc';
import { createStore, bindActionCreators } from 'redux';

const { dispatch, subscribe, getState } = store;


const elemInc = document.getElementById('inc');
const elemDec = document.getElementById('dec');
const elemRst = document.getElementById('rst');
const elemRnd = document.getElementById('rnd');

const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);
const rstDispatch = bindActionCreators(rst, dispatch);

if (elemInc)
{
	elemDec.addEventListener('click', incDispatch)
}


if (elemDec)
{
	elemDec.addEventListener('click', decDispatch)
}


if (elemRnd)
{
	elemRnd.addEventListener('click', rndDispatch)
}

if (elemRst)
{
	elemRst.addEventListener('click', rstDispatch)
}

const update = () => {
	document
		.getElementById('counter')
		.innerHTML = getState();
};

subscribe(update);