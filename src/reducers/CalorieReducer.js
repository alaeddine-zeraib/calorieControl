import { ADD_CALORIE, REMOVE_CALORIE } from '../actions/CalorieTypes';
import { addToBag } from './helper';

export default function calorie(state = 1400, action) {
	switch (action.type) {
		case ADD_CALORIE:
			let item = addToBag(action.id);
			let calorie = state + item.calories;
			return calorie;
		case REMOVE_CALORIE:
			item = addToBag(action.id);
			calorie = state - item.calories;
			return calorie;
		default:
			return state;
	}

}