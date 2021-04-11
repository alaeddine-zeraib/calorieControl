import { ADD_FOOD, REMOVE_FOOD } from '../actions';
import { addToBag } from './helper';

export default function shoppingBag(state=[], action) {
	switch(action.type) {
		case ADD_FOOD: 
			let shoppingBag = [...state, addToBag(action.id)];
			return shoppingBag;
		case REMOVE_FOOD:
			shoppingBag = state.filter((item)=>item.id !== action.id);
			return shoppingBag;
		default: 
			return state;
	}
}