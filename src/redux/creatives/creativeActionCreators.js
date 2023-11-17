import {
	ADDCREATIVE,
	CLOSEDRAWER,
	REMOVECREATIVE,
	SHOWDRAWER,
} from "./creativeActions";

function showDrawer(data) {
	return { type: SHOWDRAWER, payload: data };
}

function closeDrawer(data) {
	return { type: CLOSEDRAWER, payload: data };
}

function addCreative(item) {
	return { type: ADDCREATIVE, payload: item };
}

function removeCreatives(item) {
	return { type: REMOVECREATIVE, payload: item };
}

export { showDrawer, closeDrawer, addCreative, removeCreatives };
