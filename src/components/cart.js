import React from 'react';
import PubSub from 'pubsub-js';

export default class Caer extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
            books: [],
            total: 0,
            currency: 'USD'
		}		
    }
    
    componentDidMount = () => {
        PubSub.subscribe('cart.added', this.addBook);
        PubSub.subscribe('cart.removed', this.removeBook);
    }

    addBook = (e, item) => {
        this.state.books.push(item);
        this.forceUpdate();
        this.countTotal();
    }
    
    removeBook = (e, bookId) => {
        let bookIndexInArray;
        this.state.books.some((book, index) => {
            if(book.id === bookId) {
                bookIndexInArray = index;
                return true;
            }
        });
        this.state.books.splice(bookIndexInArray, 1)
        this.forceUpdate();
        this.countTotal();
    }
    
    countTotal = () => {
        let total = 0;
        this.state.books.forEach((book, index)=> {
            total += book.price;
        });
        this.setState({total: total});
    }

    

	render () {      
        let books =  this.state.books.map((book) => {			
			return (
               
				<a  className="thumbnail" key={book.title} >					
					<span>Book title:</span><span className="title">{book.title}</span>										
					<div><span>Price:</span><span className="price">$ {book.price}</span></div>
				</a>			
            )
        })
        
        let body = (
        <ul>{books}</ul>
        )

        let empty = <div>The cart is empty</div>

        return (
            <div className="cs">
                <h3>Cart</h3>
                <div className="panel-body-te" >
                    {books.length > 0 ? body : empty}
                    <span> Total: </span><span>{this.state.total}</span>
                </div>
            </div>
        )
}
}



