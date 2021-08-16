import React, { Component } from 'react'
import BookShelves from './bookshelves';
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    render() {
        // pass data from parent file as props
        const { books, shelves, onChangeBook } = this.props
        console.log(shelves, books);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {/* displaying bookshelves categories in shelves */}
                        {shelves.map((shelf) => (
                            <BookShelves
                                key={shelf.id} 
                                shelf={shelf}
                                books={books}
                                onChangeBook={onChangeBook}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button> Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;