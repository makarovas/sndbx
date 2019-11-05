import { createStore } from 'redux';

export const reducer = (state = 0, action) => {
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

export const store = createStore(reducer);