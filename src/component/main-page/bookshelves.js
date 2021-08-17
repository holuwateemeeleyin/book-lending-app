import React from 'react'
import BookshelfBooks from './bookshelfBooks';

const BookShelves = (props) => {
    const { shelf, books, onChangeBook } = props
    return (
        <div className="bookshelf">
            {/* display Each Shelf category heading */}
            <h2 className="bookshelf-title"> {shelf.category}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {/* Comparing the book.shelf(in our API) and shelf.id(that was stored in array of objects as shelves in app.js files),
                        if it matches, then display Books on their categeory
                    */}
                    {books.filter(book => (
                        book.shelf === shelf.id         // comaparing book.shelf in our API and shelf.id in shelves
                    )).map((book) => (       //if it matches, then display the books declaratively
                        <BookshelfBooks
                            key={book.id}
                            book={book}
                            shelf={shelf.id}
                            onChangeBook={onChangeBook}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default BookShelves;