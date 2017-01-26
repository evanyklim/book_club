import React, { Component } from 'react'
import BookList, { books } from '../ReadingList/BookList'

class LandingPage extends Component {
	render() {
		return (<BookList books={ books } />);
	}
}

export default LandingPage