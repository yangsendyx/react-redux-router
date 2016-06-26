
import * as Types from './actionType';

// test_1 action
export function test1Show(isShow) {
	return {
		type: Types.test_1.show,
		isShow: isShow
	};
}

// test_2 action
export function test2Show(isShow) {
	return {
		type: Types.test_2.show,
		isShow: isShow
	};
}