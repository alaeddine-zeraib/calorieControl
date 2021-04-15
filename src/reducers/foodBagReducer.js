import { ADD_FOOD, REMOVE_FOOD } from '../actions';
import { addToBag } from './helper';

export default function foodBag(state=[], action) {
	switch(action.type) {
		case ADD_FOOD: 
			let foodBag = [...state, addToBag(action.id)];
			return foodBag;
		case REMOVE_FOOD:
			foodBag = state.filter((item)=>item.id !== action.id);
			return foodBag;
		default: 
			return state;
	}
}