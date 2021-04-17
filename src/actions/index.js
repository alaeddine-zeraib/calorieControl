import { ADD_FOOD, REMOVE_FOOD } from "./FoodTypes";
import { ADD_CALORIE, REMOVE_CALORIE } from "./CalorieTypes";

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