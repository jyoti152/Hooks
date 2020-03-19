import React,{ useContext } from 'react'
import {BookContext} from '../context/BookContext'
const NavBar = () => {
  
     const {books} = useContext(BookContext);
    console.log("books",books.id)
    return(
        <div className="navbar">
            <h1>Hello You have {books.length} Books to Read</h1>
        </div>
    )
}
export default NavBar