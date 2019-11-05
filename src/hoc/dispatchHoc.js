// import { bindActionCreators } from "redux";
import { store, reducer } from '../reducer';



export const dispatchHoc = (dispatch, actionFunc) => {
	return dispatch(actionFunc());
};

export const bindActionCreators = (actionCreator, dispatch) => (...args) => {
	dispatch(actionCreator(...args));
}