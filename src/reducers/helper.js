import groceryItemsList from '../data/foodItems.json';

export function addToBag(id) {
	let item = groceryItemsList.find((item)=> item.id === id);
	return item;
}