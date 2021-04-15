import food from './FoodReducer';
import foodBag from './foodBagReducer';
import calorie from './CalorieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	food,
	foodBag,
	calorie
});

export default rootReducer;