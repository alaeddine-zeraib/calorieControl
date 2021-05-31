import { ADD_FOOD, REMOVE_FOOD } from '../actions/FoodTypes';
import groceryItemsList from '../data/foodItems.json';
import { addToBag } from './helper';

export default function food(state = groceryItemsList, action) {
	switch(action.type) {
		case ADD_FOOD: 
			let grocery = state.filter(item=>item.id !== action.id);
			return grocery;
		case REMOVE_FOOD:
			grocery = [...state, addToBag(action.id)];
			return grocery;
		default: 
			return state;
	}
}