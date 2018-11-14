/****************************************************
	The business List Component for yepl clone.
	The purpose of the <BusinessList /> component 
	is to simulate what a returned list of  
	businesses would look like in Ravenous.		
****************************************************/
import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'


class BusinessList extends React.Component{
	render(){
		let prooop = this.props.businesses;
		return (
			<div className="BusinessList">
			{
					this.props.businesses.map(abusiness=> {
					return	<Business businessProp={abusiness}/>
					})
			}
			</div>
		);
	}
}

export default BusinessList;