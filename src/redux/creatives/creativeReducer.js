import {
	ADDCREATIVE,
	CLOSEDRAWER,
	REMOVECREATIVE,
	SHOWDRAWER,
} from "./creativeActions";

const lcCreatives = localStorage.getItem("creatives");

const initialState = {
	visible: false,
	creatives: lcCreatives !== null ? JSON.parse(lcCreatives) : [],
};

function creativeReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SHOWDRAWER:
			return { ...state, visible: true };
		case CLOSEDRAWER:
			return { ...state, visible: false };
		case ADDCREATIVE:
			const data = [...state.creatives, payload];
			localStorage.setItem("creatives", JSON.stringify(data));
			return { ...state, creatives: data };
		case REMOVECREATIVE:
			localStorage.setItem("creatives", JSON.stringify(payload));
			return { ...state, creatives: payload };
		default:
			return state;
	}
}

export default creativeReducer;
