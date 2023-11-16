import { ADDCREATIVE, CLOSEDRAWER, SHOWDRAWER } from "./creativeActions";

const initialState = {
	visible: false,
	creatives: [],
};

function creativeReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SHOWDRAWER:
			return { ...state, visible: true };
		case CLOSEDRAWER:
			return { ...state, visible: false };
		case ADDCREATIVE:
			return { ...state, creatives: [...state.creatives, payload] };
		default:
			return state;
	}
}

export default creativeReducer;
