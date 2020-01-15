import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = async () => {
    const response = await api.get('/');

    this.setState({ books: response.data.books });
  };

  prevPage = () => {};

  nextPage = () => {};

  render() {
    const { books } = this.state;

    return (
      <div className="book-list">
        {books.map(book => (
          <article key={book.id}>
            <span>{book.title}</span>
            <span>{book.isbn}</span>
            <span>{book.author}</span>
            <span>{book.pubcompany}</span>
            <span>{book.year}</span>
            <a href="#">Detalhes</a>
          </article>
        ))}
        <div className="actions">
          <button onClick={this.prevPage}>Anterior</button>
          <button onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
