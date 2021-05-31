import { ADD_FOOD, REMOVE_FOOD } from '../actions/FoodTypes';
import foodItemsList from '../data/foodItems.json';
import { addToBag } from './helper';

export default function food(state = foodItemsList, action) {
	switch(action.type) {
		case ADD_FOOD: 
			let food = state.filter(item=>item.id !== action.id);
			return food;
		case REMOVE_FOOD:
			food = [...state, addToBag(action.id)];
			return food;
		default: 
			return state;
	}
}