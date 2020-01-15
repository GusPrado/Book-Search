import React from 'react';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';

import {
  Container,
  Form,
  SubmitButton,
  HeaderUp,
  HeaderDown,
  SearchDetails,
  ResultInfo,
} from './styles';

export default function Main() {
  return (
    <Container>
      <HeaderUp>
        <h1>Biblioteca SUPERO</h1>
        <Form onSubmit={() => {}}>
          <FaSearch size={32} />
          <input
            type="text"
            placeholder="Busque livros pelo título, autor ou ISBN"
          />
        </Form>
        <SubmitButton>
          <strong>Buscar</strong>
        </SubmitButton>
      </HeaderUp>
      <HeaderDown>
        <SearchDetails>
          <h3>Filtrar ano de publicação:</h3>
          <Form onSubmit={() => {}}>
            <input type="number" placeholder="Ano" />
            <FaCalendarAlt size={32} />
          </Form>
          <span>até</span>
          <Form onSubmit={() => {}}>
            <input type="number" placeholder="Ano" />
            <FaCalendarAlt size={32} />
          </Form>
        </SearchDetails>
        <ResultInfo>
          <h3>888 resultados encontrados</h3>
        </ResultInfo>
      </HeaderDown>
    </Container>
  );
}
