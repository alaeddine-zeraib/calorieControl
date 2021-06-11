import React from 'react';
import { connect } from 'react-redux';
import { addFoodById, removeCalorieById } from '../actions';

const Food = (props) => {
	return (
		<div className="col-md-4 food-bg">
			<h2 className="text-center">Food Items</h2>
			<ul className="list-group">
				{props.food.map((item) => {
					return <li key={item.id} 
									className="list-group-item"
									onClick={()=>{
										props.addFoodById(item.id);
										props.removeCalorieById(item.id);
										}
									}
									>
						<span className="badge bg-info text-dark"><b>{item.name}</b></span> - 
						<span className="badge bg-primary"> {item.weight} g</span> - 
						<span className="badge bg-warning text-dark"> {item.calories} cal</span>
						
					</li>
				})}
			</ul>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		food: state.food
	}
}

export default connect(mapStateToProps, { addFoodById, removeCalorieById })(Food);