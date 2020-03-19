import React, { Component } from 'react';
import BookContextProvider from './context/BookContext';
import NavBar from './component/NavBar'
import BookList from './component/BookList'
import BookFrom from './component/BookFrom'
import BookForm from './component/BookFrom';
class App extends Component {
  render() {
    return (
      <div className="app">
        <BookContextProvider>
          <NavBar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
