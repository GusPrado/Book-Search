import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;

  input {
    width: 95%;
    border: 1px solid #222;
    padding: 10px 15px;
    font-size: 16px;
    color: #eee;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 1px solid #222;
  padding: 10px 40px;
  font-size: 16px;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderUp = styled.div`
  margin: 0 auto;
  padding: 0 20px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #222;
`;
export const HeaderDown = styled.div`
  margin: 10px auto;
  padding: 0 20px 10px 20px;
  display: flex;
  flex: 1;
  border-bottom: 1px solid #222;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SearchDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  h3 {
    margin-right: 20px;
  }

  span {
    margin: 0 15px;
    font-weight: bold;
    font-size: 16px;
  }
`;
export const ResultInfo = styled.div``;
