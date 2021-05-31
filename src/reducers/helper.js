import foodItemsList from '../data/foodItems.json';

export function addToBag(id) {
	let item = foodItemsList.find((item)=> item.id === id);
	return item;
}