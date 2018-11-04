/******************************************************
	The search bar will communicate with the Yelp API
******************************************************/
import React from 'react';
import './SearchBar.css'


let sortByOptions = {
	'Best Match' : 'best_match',  // default
	'Highest Rated' : 'rating',
	'Most Reviewed' : 'review_count ',
	'Min Distance' : 'distance'
}

class SearchBar extends React.Component {

	/*The method should iterate through the 
	  keys and values of the sortByOptions 
	  object and return a list item. The 
	  list item elements should use the 
	  keys as an attribute, and the values 
	  as content. Let's start building it out.*/
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption =>{
			let sortByOptionValue = sortByOptions[sortByOption]
			return <li key={sortByOptionValue}>{sortByOption}</li>
		});
	}

	render(){
		return (
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
		);
	}	
}

export default SearchBar;