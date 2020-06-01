import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

export default class Book extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
            addedToCart: false  
		}		
    }

    addToCart = () => {
		if(!this.state.addedToCart) {
            PubSub.publish('cart.added', this.props.bookDetail);

        } else {
            PubSub.publish('cart.removed', this.props.bookDetail.id);

        }
        this.setState({addedToCart: !this.state.addedToCart});
	}

    renderBook = (book) => { 
			return (
            <div className="col-md-2" key={book.title}>								
					<div className="title">{book.title}</div>
					<div className="author">{book.author_name}</div>					
					<div className="price">$ {book.price}</div>
					<button className={ (this.state.addedToCart ? 'btn btn-danger add-to-cart' : 'btn btn-primary add-to-cart')} type="button" onClick={() => this.addToCart()}>
					    <i className="fa fa-shopping-cart" aria-hidden="true"></i> 
                        {this.state.addedToCart ? 'Remove' : 'Add to Cart' }
                    </button>
				
            </div>
            )
	
    }

	render () {
		return (
        <ul>{this.renderBook(this.props.bookDetail )}</ul>
            )
	}
}

Book.propTypes = {
    bookDetail: PropTypes.object
}

