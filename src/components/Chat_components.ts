import styled from "styled-components";

interface MessageProps {
  author: "me" | "other";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 90vh;
  background-color: #2f1e28;
  border-radius: 3rem;
`;

export const Form = styled.form``;

export const AppBar = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3rem 3rem 0rem 0rem;
`;

export const H2 = styled.h2`
  color: white;
`;

export const Body = styled.div`
  flex: 20;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const Message = styled.div<MessageProps>`
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  align-self: ${({ author }) => (author === "me" ? "flex-end" : "flex-start")};
  min-width: 1vw;
  max-width: 17vw;
  height: auto;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-bottom: 1vw;
  border-radius: ${({ author }) =>
    author === "me" ? "2rem 0rem 2rem 2rem" : "0rem 2rem 2rem 2rem"};
  background-color: ${({ author }) => (author === "me" ? "indigo" : "gray")};
`;

export const Name = styled.span`
  color: white;
  margin-bottom: 0.1vw;
`;

export const BottomRef = styled.div``;

export const BottomBar = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0rem 0rem 3rem 3rem;
`;

export const Input = styled.input`
  font-size: large;
  color: black;
  border: none;
  border-radius: 5rem;
  padding-left: 2vh;
  padding-right: 2vh;
  margin-right: 2vw;
  width: 50vw;
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
  width: 7vw;
  height: 5vh;
`;
