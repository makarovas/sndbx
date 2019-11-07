import React from 'react';
import { connect } from 'react-redux';


const Counter = ({ counter, inc, dec, rnd, rst }) => {
	return (
		<div className="jubmotron">
			<h2 >{counter}</h2>
			<button className='btn btn-primary btn-lg' onClick={inc}>INC</button>
			<button className='btn btn-primary btn-lg' onClick={dec}>DEC</button>
			<button className='btn btn-primary btn-lg' onClick={rnd}>RND</button>
			<button className='btn btn-primary btn-lg' onClick={rst}>RESET</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		inc: () => dispatch({ type: 'INC' }),
		dec: () => dispatch({ type: 'DEC' }),
		rnd: () => dispatch({ type: 'RND' }),
		rst: () => dispatch({ type: 'RST' }),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter); 