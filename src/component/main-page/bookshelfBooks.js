import React from 'react'
import BookShelfChanger from './bookshelfChanger';

const BookshelfBooks = ({ book, shelf, onChangeBook }) => (
    <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                            book.imageLinks ? book.imageLinks.smallThumbnail
                            : 'icons/book-placeholder.svg'
                        })`
                    }}>
                </div>
                <BookShelfChanger shelf={shelf} book={book} onChangeBook={onChangeBook} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    </li>


)

export default BookshelfBooks;