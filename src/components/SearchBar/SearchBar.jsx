import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="Search By First Name, Last Name or Email"
          type="text"
          className="form-control"
          placeholder="Search By First Name, Last Name or Email"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchBar;