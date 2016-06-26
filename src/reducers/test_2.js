
import * as Types from '../actions/actionType';
import * as Actions from '../actions/action';

const initialState = {
	show: false,
	data: [1, 2, 3, 4, 5]
};

export default function test2Reducer(state=initialState, action) {
	switch(action.type){
		case Types.test_2.show:
		return Object.assign({}, state, {
			show: action.isShow
		});

		default:
		return state;
	}
}