import React from 'react';

const SearchBar = ( { SearchUser, searchvalue, searchstate, enterkey } ) => {
	return(
		<div>
			<input
			className="pa2 ba b--green bg-lightest-blue br2 shadow-5"
			type="search"
			placeholder="Search Github user"
			onChange={SearchUser}
			/>

			<button 
			className="pa2 ml2 ba b--near-black bg-black-80 lightest-blue br2 shadow-5 grow" 
			onClick={searchstate}
			onKeyDown={enterkey}
			>Search</button>
		</div>
		)
}
export default SearchBar;