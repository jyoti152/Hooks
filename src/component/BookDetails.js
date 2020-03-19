import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
 const BookDetails=({ book })=>{
     const {dispatch}=useContext(BookContext)
     return(
         <div>
             <li onClick={()=>dispatch({type:'Remove_book',id:book.id})}>
               <div>  {book.title}</div>
                <div> {book.author} </div>
             </li>
         </div>
     )

 }
 export default BookDetails