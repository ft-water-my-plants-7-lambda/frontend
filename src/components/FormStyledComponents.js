// FormStyledComponents.js
import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: start;
  margin-bottom: 5%;
`;

export const Form = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2% auto;
  padding: 5% 5%;
  text-align: center;

  @media (min-width: 1050px) {
    width: 20vw;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 3% 0;
  text-align: start;

  ${(props) =>
    props.photoLabel &&
    `
    flex-direction: row; 
    align-items:center;
  `}
`;

export const Input = styled.input`
  margin: 3% 0;
  padding: 2% 2%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);

  ${(props) =>
    props.login &&
    `
  margin: 1% 0;
  // padding: 2% 2%;
  width:100%;
  // height:100%;
  border: none;
  outline: none;
     
  `}
`;

export const Div = styled.div`
  margin: 3% 0;
  height: 1.8rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
`;

export const Button = styled.button`
  padding: 4% 0;
  margin: 4% 0;
  width: 100%;
  align-self: center;
  border: 2px solid white;
  border-radius: 5rem;
  background-color: #01bf71;
  color: white;
  font-size: 1.1rem;

  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: ease-in 0.2s;
  }

  :disabled {
    color: rgba(230, 230, 230, 1);
    background-color: #a6a6a6;
    border: 2px solid white;
    cursor: not-allowed;
  }
  ${(props) =>
    props.photoButton &&
    `
    width:6rem;
    height: 2rem;
    padding:1% 0;
    margin:0% 5%;
    border: 1px solid #b6b6b6;
    border-radius:0.1rem;
    background-color: #e7e7e7;
    color: #2f2f2f;
    font-size: 0.8rem;

    :hover {
      border: 1px solid #b6b6b6;
      background-color: #e7e7e7;
      color: #2f2f2f;
    }
  `}
`;

export const A = styled.a`
  font-size: 0.8rem;
  margin-bottom: 4%;
`;

export const P = styled.p`
  font-size: 0.7rem;
  align-self: center;
  color: red;
`;
