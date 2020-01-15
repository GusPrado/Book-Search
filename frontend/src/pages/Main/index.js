import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  state = {
    books: [],
    pageInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = async (page = 1) => {
    const response = await api.get(`/?page=${page}`);

    const { books, ...pageInfo } = response.data;

    this.setState({ books, pageInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadBooks(pageNumber);
  };

  nextPage = () => {
    const { page, pageInfo } = this.state;

    if (page === pageInfo.pages) return;

    const pageNumber = page + 1;

    this.loadBooks(pageNumber);
  };

  render() {
    const { books, page, pageInfo } = this.state;

    return (
      <div className="book-table">
        <table>
          <tr>
            <th>Título/ISBN</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>

          {books.map(book => {
            return (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pubcompany}</td>
                <td>{book.year}</td>
                <td>
                  <a href="#">Detalhes</a>
                </td>
              </tr>
            );
          })}
        </table>
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === pageInfo.pages} onClick={this.nextPage}>
            Próximo
          </button>
        </div>
      </div>
    );
  }
}
