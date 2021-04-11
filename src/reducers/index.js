import food from './FoodReducer';
import shoppingBag from './shoppingBag_reducer';
import calorie from './CalorieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	food,
	shoppingBag,
	calorie
});

export default rootReducer;