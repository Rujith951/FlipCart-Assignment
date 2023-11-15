import {
	COLOR_DATA_ERROR,
	COLOR_DATA_LOADING,
	COLOR_DATA_SUCCESS,
} from "./colorActions";

function colorDataLoading() {
	return { type: COLOR_DATA_LOADING };
}
function colorDataSuccess(data) {
	return { type: COLOR_DATA_SUCCESS, payload: data };
}
function colorDataError(err) {
	return { type: COLOR_DATA_ERROR, payload: err };
}

function getColorData() {
	return async dispatch => {
		dispatch(colorDataLoading());
		try {
			let response = await fetch(
				" https://random-flat-colors.vercel.app/api/random?count=5"
			);
			if (response.ok == false) {
				throw new Error("Error occurs");
			}
			let data = await response.json();
			dispatch(colorDataSuccess(data));
		} catch (err) {
			dispatch(colorDataError(err.message));
		}
	};
}
export { colorDataError, colorDataLoading, colorDataSuccess, getColorData };
