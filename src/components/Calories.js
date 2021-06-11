import React from 'react';
import { connect } from 'react-redux';

const Calories = (props) => {
	return (
		<div className="sous-header">
        		<h2 style={{paddingTop: '25px'}}>
					You have 
					<span className="badge rounded-pill bg-success"><b>{props.calorie} calories</b></span> 
					 to consume Today in Food!
				</h2>
				<br/>
			</div>
	)
}

function mapStateToProps(state) {
	return {
		calorie: state.calorie
	}
}

export default connect(mapStateToProps, null)(Calories);