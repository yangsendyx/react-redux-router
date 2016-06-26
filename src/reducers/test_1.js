
import * as Types from '../actions/actionType';
import * as Actions from '../actions/action';

const initialState = {
	show: false,
	data: ['a', 'b', 'c', 'd']
};

export default function test1Reducer(state=initialState, action) {
	switch(action.type){
		case Types.test_1.show:
		return Object.assign({}, state, {
			show: action.isShow
		});

		default:
		return state;
	}
}