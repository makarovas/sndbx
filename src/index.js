import { createStore } from 'redux';


const reducer = (state = 0, action) => {

	switch (action.type)
	{
		case 'INC':
			return state + 1;

		case 'DEC':
			return state - 1;
		case 'RND':
			return state + action.payload;
		case 'RST':
			return 0
		default:
			return state;
	}
};

const store = createStore(reducer);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = () => {
	const payload = Math.floor(Math.random() * 10);
	return { type: 'RND', payload }
};
const rst = () => ({ type: 'RST' });

const elemInc = document.getElementById('inc');
if (elemInc)
{
	elemInc.addEventListener('click', () => {
		store.dispatch(inc());
	});
}

const elemDec = document.getElementById('dec');
if (elemDec)
{
	elemDec.addEventListener('click', () => {
		store.dispatch(dec());
	});
}

const elemRnd = document.getElementById('rnd');
if (elemRnd)
{

	elemRnd.addEventListener('click', () => {
		store.dispatch(rnd());
	});
}

const elemRst = document.getElementById('rst');
if (elemRst)
{
	elemRst.addEventListener('click', () => {
		store.dispatch(rst());
	})
}

const update = () => {
	document
		.getElementById('counter')
		.innerHTML = store.getState();
};

store.subscribe(update);