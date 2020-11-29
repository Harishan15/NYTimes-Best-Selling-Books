import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavList extends Component {
	state = {};
	render() {
		return (
			<div>
				<ul className="nav justify-content-center">
					<li className="nav-item">
						<NavLink to="/books/fiction" className="nav-link">
							Fiction
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/books/non-fiction" className="nav-link">
							Non-Fiction
						</NavLink>
					</li>
					{/* <li className="nav-item">
						<NavLink to="/books/children" className="nav-link">
							Children
						</NavLink>
					</li> */}
				</ul>
			</div>
		);
	}
}

export default NavList;
