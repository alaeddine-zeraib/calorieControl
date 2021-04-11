import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFoodById, removeCalorieById } from '../actions';

class Food extends Component {
	render() {
		return (
			<div className="col-md-4 grocery-bg">
				<h2 className="text-center">Food Items</h2>
				<ul className="list-group">
					{this.props.food.map((item) => {
						return <li key={item.id} 
										className="list-group-item"
										onClick={()=>{
											this.props.addFoodById(item.id);
											this.props.removeCalorieById(item.id);
											}
										}
										>
							<b>{item.name}</b> - 
							<span className="label label-primary"> {item.weight} g</span> - 
							<span className="label label-warning"> {item.calories} cal</span>
							
						</li>
					})}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		food: state.food
	}
}

export default connect(mapStateToProps, { addFoodById, removeCalorieById })(Food);