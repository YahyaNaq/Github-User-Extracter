import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Extracter from './Extracter';

class Window extends Component {
	constructor() {
		super()
		this.state = {
			User: {},
			searchvalue: 'github'
		}
	}

	async componentDidMount() {
			const user = await fetch(`https://api.github.com/users/${this.state.searchvalue}`)
			const converted = await user.json()
			this.setState({ User: converted })
			}

	Onsearchchange = (event) => {
		this.setState({ searchvalue: event.target.value });
	}

	OnBtnClk = (event) => {
		if (this.state.searchvalue) {
		fetch(`https://api.github.com/users/${this.state.searchvalue}`)
		.then(user => user.json())
  		.then(converted => this.setState({ User: converted }))
  		}
	}

	onKeyPressed = (event) => {
		if (event.key===13) {
			if (this.state.searchvalue) {
			fetch(`https://api.github.com/users/${this.state.searchvalue}`)
			.then(user => user.json())
  			.then(converted => this.setState({ User: converted }))
  		}
		}
    }

	render() {
		const display = this.state.User
		const cond = Object.keys(this.state.User).length
		return(
			<div  className="tc">
				<h1
				className="f1 lightest-blue"
				> GitHub User Extracter 
				</h1>
				<Extracter
				page={display}
				condition={cond}
				/>
				<SearchBar
				SearchUser={this.Onsearchchange}
				searchstate={this.OnBtnClk}
				enterkey={this.onKeyPressed}
				/>
			</div>
			)
	}
}

export default Window;