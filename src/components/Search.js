import React , {useState}from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import  history  from '../browser/history';
import '../styles/Search.css';

const Search = (props) => {
	const handleOnSearch = (string, results) => {
 
  }

  const handleOnSelect = (item) => {
    history.push( `/task/${ item._id}` )
  }

  const handleOnFocus = (e) => {
  }


	return (
		<div className="autosuggest-search">
			<ReactSearchAutocomplete
				key={ props.tasks._id }
	      items={props.tasks}
	      id={ props.tasks._id}
	      onSearch={handleOnSearch}
	      onSelect={handleOnSelect}
	      onFocus={handleOnFocus}
	      autoFocus
	      resultStringKeyName='name'
	      placeholder="Search by task name"
	      styling={
	      	{
	      	placeholder: "#ccc"
	      	}
	      }
	    />
	   </div>
	)
}

export default Search;