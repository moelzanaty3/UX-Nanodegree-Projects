import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


export class SearchBooks extends Component {
  state = {
    query: '',
    // books: []
  }
  // componentDidMount() {
  //   BooksAPI.getAll()
  //   .then(books => {
  //     this.setState(() => ({
  //       books
  //     }))
  //   })
  // }
  handleChange = (e) => {
    this.setState({
      query: e.trim() ,
      books: []
    })
    console.log(this.props.allBooks)
  }
componentDidMount() {
    BooksAPI.search()
    .then(books => {
      console.log(books)
      this.setState(() => ({
        books
      }))
    })
  }

    render() {


        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={e => this.handleChange(e.target.value)} value={this.state.query}/>
                <strong>{this.state.query}</strong>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.props.allBooks.map((book) =>{
                         return (<li key={book.title}>
                              <Book shelfChanger={e => this.props.shelfChanger(book, e)} bookTitle={book.title} bookAuthor={book.authors} bookCover={book.imageLinks.thumbnail}/>
                          </li>)
                      })}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks

                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            //     <div className="search-books">
            //     <div className="search-books-bar">
            //       <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
            //       <div className="search-books-input-wrapper">
            //         <input type="text" placeholder="Search by title or author"/>
    
            //       </div>
            //     </div>
            //     <div className="search-books-results">
            //       <ol className="books-grid"></ol>
            //     </div>
            //   </div>
