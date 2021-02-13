import React from 'react';
import styled from 'styled-components/macro';

const SearchForm = ({
  valueInput,
  handleInput,
  handleSubmitInput,
  isErrMsg,
}) => {
  const handleChange = (e) => {
    handleInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitInput();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="search images"
          value={valueInput}
          onChange={handleChange}
        ></Input>
        <Button type="submit" aria-label="search photos">
          search
        </Button>
      </Form>
      {isErrMsg && <ErrorMessage>you must enter a search query</ErrorMessage>}
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.div``;
const Form = styled.form`
  position: relative;
  border: 1px solid #000000;
  border-radius: 10px;
  max-width: 745px;
  display: flex;
  box-sizing: border-box;
  padding: 4px;
`;

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  border-radius: 10px;
  height: 52px;
  padding: 10px;
  width: 75%;
  font-size: 34px;
  line-height: 43px;
  color: #000000;

  ::placeholder {
    font-size: 34px;
    text-align: center;
    color: #000000;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;

    ::placeholder {
      font-size: 20px;
    }
  }
`;

const Button = styled.button`
  color: #ffffff;
  background: #000000;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  border: none;
  padding: 4px 8px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: auto;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;
