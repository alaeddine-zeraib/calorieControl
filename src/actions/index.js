export const ADD_FOOD = "ADD_FOOD";
export const REMOVE_FOOD = "REMOVE_FOOD";
export const ADD_CALORIE = "ADD_CALORIE";
export const REMOVE_CALORIE = "REMOVE_CALORIE";

export function addFoodById(id) {
	const action = {
		type: ADD_FOOD,
		id
	}
	return action;
}

export function removeFoodById(id) {
	const action = {
		type: REMOVE_FOOD,
		id
	}
	return action;
}

export function addCalorieById(id) {
	const action = {
		type: ADD_CALORIE,
		id
	}
	return action;
}

export function removeCalorieById(id) {
	const action = {
		type: REMOVE_CALORIE,
		id
	}
	return action;
}