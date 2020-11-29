import React from "react";

const SelectBook = () => {
	return (
		<form>
			<div className="col-auto">
				<label htmlFor="exampleFormControlSelect1">Select Type</label>
				<select className="form-control" id="exampleFormControlSelect1">
					<option>Hardcover Fiction</option>
					<option>Hardcover Non-Fiction</option>
					<option>Hardcover Fiction</option>
					<option>Hardcover Fiction</option>
					<option>Hardcover Fiction</option>
				</select>
			</div>
		</form>
	);
};

export default SelectBook;
