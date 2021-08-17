interface counterState {
	counter: number;
}

const initialState = {
	counter: 0,
};

export const counterReducer = (
	state: counterState = initialState,
	action: any
) => {
	switch (action.type) {
		case 'INCREMENT':
			console.log('INCREMENTED');
			return {
				...state,
				counter: state.counter + 1,
			};

		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1,
			};

		default:
			return state;
	}
};
