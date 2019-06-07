import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 2rem;
  font-size: 1.6rem;
  .LoginHeader {
    padding: 1rem;
    p {
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
    }
  }
  .Form {
    padding: 1rem;
    width: 100%;
    input {
      font-size: 1.6rem;
      outline: none;
      display: block;
      margin-bottom: 2rem;
      padding: 1rem 2rem;
      width: 100%;
      border-radius: 0.3rem;
      border: 0.07rem solid;
    }
    button {
      outline: none;
      padding: 1rem 3rem;
      border-radius: 0.3rem;
      border: 0.07rem solid;
      &:hover {
        background: rgba(0, 0, 0, 0.486);
      }
    }
  }

  .Error {
    color: rgb(219, 91, 91);
    font-size: 1.6rem;
    margin-bottom: 2rem;
    display: block;
    text-align: center;
  }
`;

