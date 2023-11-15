import {
	COLOR_DATA_ERROR,
	COLOR_DATA_LOADING,
	COLOR_DATA_SUCCESS,
} from "./colorActions";

const initialState = {
	loading: false,
	data: [],
	error: "",
};

function colorReducer(state = initialState, { type, payload }) {
	switch (type) {
		case COLOR_DATA_LOADING:
			return { ...state, loading: true };
		case COLOR_DATA_SUCCESS:
			return { ...state, data: payload, error: "", loading: false };
		case COLOR_DATA_ERROR:
			return { ...state, error: payload, loading: false, data: [] };
		default:
			return state;
	}
}

export default colorReducer;
