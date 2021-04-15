import React, { Component } from 'react';

import { connect } from 'react-redux';

class Stats extends Component {
	calories() {
		let totalCalories = 0;
		this.props.foodBag.forEach(item => totalCalories += item.calories);
		return totalCalories;
	}
	weight() {
		let totalWeight = 0;
		this.props.foodBag.forEach(item => totalWeight += item.weight);
		return totalWeight;
	}
	render() {
		return (
			<div className="col-md-3 stats-bg">
				<h2 className="text-center">Stats Items</h2>
				<ul className="list-group">
					<li className="list-group-item">Weight - {this.weight()} g</li>
				  	<li className="list-group-item">Calories - {this.calories()} cal</li>
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		foodBag: state.foodBag
	}
}

export default connect(mapStateToProps, null)(Stats);