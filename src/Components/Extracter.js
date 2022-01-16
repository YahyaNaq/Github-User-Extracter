import React from 'react';

const Extracter = ({ page, condition }) => {
	if (condition) {
		return(
			<div>
				<a
				href={`https://github.com/${page.login}`}
				target="_blank"
				rel="noreferrer"
				title="Open profile">
					<img
					src={page.avatar_url}
					alt="User"
					width="300" 
					height="300"
					className="br-100 ba b--lightest-blue bw2 shadow-5 pointer"
					/>
				</a>
				<h2 className="f2 pa1 pb2 ma2 white ttc-ns">{ page.login }</h2>
				<h3 className="pb3 ma2 white fw2">{ page.bio }</h3>
			</div>
		)
	} else {
		return <h1 className="pa5 ma6 white">Loading...</h1>
	}
}

export default Extracter;