import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext'
const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('')
    const [author, setauthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'Add_Book', book: {
                title, author
            }
        });
        setTitle('')
        setauthor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="author" value={author} onChange={(e) => setauthor(e.target.value)} required />
            <input type="submit" value="Add Book" />
        </form>

    )

}
export default BookForm