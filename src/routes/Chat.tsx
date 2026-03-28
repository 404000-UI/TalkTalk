import { useNavigate } from "react-router";
import useNameStore from "../states/name";
import useMessageStore from "../states/messages";
import { useEffect, useState } from "react";
import {
  AppBar,
  Body,
  BottomBar,
  Button,
  Container,
  Form,
  H2,
  Input,
  Message,
  Name,
} from "../components/Chat_components";

const client = new WebSocket("ws://127.0.0.1:8000/ws");

function Chat() {
  const { name } = useNameStore();
  const { messages, appendNewMessage } = useMessageStore();
  const [message, setMessage] = useState<string>("");
  const navigator = useNavigate();

  useEffect(() => {
    if (name == "") {
      navigator("/");
      alert("I need your nickname");
    }
  }, []);

  useEffect(() => {
    client.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const { author, message } = data;
      appendNewMessage({
        author: author,
        message: message,
      });
      return () => {
        client.close();
      };
    };
  }, []);

  return (
    <Container>
      <AppBar>
        <H2>Name: {name}</H2>
      </AppBar>
      <Body>
        {messages.map((message) =>
          message.author === name ? (
            <Message author="me">{message.message}</Message>
          ) : (
            <>
              <Name>{message.author}</Name>
              <Message author="other">{`${message.message}`}</Message>
            </>
          ),
        )}
      </Body>
      <BottomBar>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            client.send(
              JSON.stringify({
                author: name,
                message: message,
              }),
            );
            setMessage("");
          }}
        >
          <Input
            placeholder="Send a Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button>Send</Button>
        </Form>
      </BottomBar>
    </Container>
  );
}

export default Chat;
