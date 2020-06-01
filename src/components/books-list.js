import React from 'react';
import data from '../assets/data.json';
import Book from './book.js';


export default class BooksList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
         
		}
		
    }
    
    componentDidMount = () => {
        console.log('=============', data.length);
        
    }

    renderBooks = () => {
        return data.map((book) => {
			
			return (
                <Book bookDetail={book}></Book>
            )
		})
    }

	render () {
      
		return (
        <span> <h3>Books</h3>{this.renderBooks()}</span>
            )
	}
}

BooksList.propTypes = {
    /** Props will go here */
}

