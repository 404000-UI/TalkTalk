import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vh;
  height: 40vh;
  background-color: #2f1e28;
  border-radius: 1rem;
`;

export const H1Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vh;
  height: 13vh;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 70vh;
  height: 17vh;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  font-size: large;
  color: black;
  border: none;
  border-radius: 5rem;
  padding-left: 2vh;
  margin-right: 2vh;
  width: 40vw;
  height: 5vh;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #5e2843;
  border: none;
  border-radius: 5rem;
  font-size: large;
  color: white;
  width: 15vw;
  height: 5vh;
`;

export const H1 = styled.h1`
  color: white;
  margin-top: 5vh;
`;
