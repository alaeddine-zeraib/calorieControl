import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFoodById, addCalorieById } from '../actions';

class FoodBag extends Component {

	displayFoodBag() {
		if(this.props.foodBag.length > 0) {
			return (
				<ul className="list-group">
					{this.props.foodBag.map((item) => {
						return <li key={item.id} 
										className="list-group-item"
										onClick={()=>{
											this.props.removeFoodById(item.id);
											this.props.addCalorieById(item.id);
											}
										}
										>
							<span className="badge bg-info text-dark"><b>{item.name}</b></span> - 
							<span className="badge bg-primary"> {item.weight} g</span> - 
							<span className="badge bg-warning text-dark"> {item.calories} cal</span>
						</li>
					})}
				</ul>
			)
		} else {
			return (
				<ul className="list-group">
					<li className="list-group-item">Please add some foods to the bag!</li>
				</ul>
			)
		}
	}

	render() {
		return (
			<div className="col-md-4 shopping-bag-bg">
				<h2 className="text-center">Food Bag</h2>
				{this.displayFoodBag()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		foodBag: state.foodBag
	}
}

export default connect(mapStateToProps, { removeFoodById, addCalorieById })(FoodBag);











