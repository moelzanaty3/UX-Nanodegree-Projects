import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Book from './Book'


export default class BookShelf extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    state = {
        books: ''
    }
    render() {
        return (
            <div>
                  <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book) =>{
                         return (<li key={book.title}>
                              <Book shelfChanger={e => this.props.shelfChanger(book, e)} bookTitle={book.title} bookAuthor={book.authors} bookCover={book.imageLinks.thumbnail}/>
                          </li>)
                      })}
                    </ol>
                  </div>
                </div>
            </div>
        )
    }
}


                        {/* <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                            <ShelfChanger />
                          </div>
                          <div className="book-title">Ender's Game</div>
                          <div className="book-authors">Orson Scott Card</div>
                        </div> */}

                                              {/* <li>
                        <Book bookTitle={"To Kill a Mockingbird"} bookAuthor={"Harper Lee"} bookCover={"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"}/>
                      </li>
                      <li>
                        <Book bookTitle={"Ender's Game"} bookAuthor={"Orson Scott Card"} bookCover={"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"}/>
                      </li> */}