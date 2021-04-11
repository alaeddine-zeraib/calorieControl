import React, { Component } from 'react';

import { connect } from 'react-redux';

import { removeFoodById, addCalorieById } from '../actions';

class ShoppingBag extends Component {

	displayShoppingBag() {
		if(this.props.shoppingBag.length > 0) {
			return (
				<ul className="list-group">
					{this.props.shoppingBag.map((item) => {
						return <li key={item.id} 
										className="list-group-item"
										onClick={()=>{
											this.props.removeFoodById(item.id);
											this.props.addCalorieById(item.id);
											}
										}
										>
							<b>{item.name}</b> - 
							<span className="label label-primary"> {item.weight} g</span> - 
							<span className="label label-warning"> {item.calories} cal</span>
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
				{this.displayShoppingBag()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		shoppingBag: state.shoppingBag
	}
}

export default connect(mapStateToProps, { removeFoodById, addCalorieById })(ShoppingBag);











