import { useNavigate } from "react-router";
import useNameStore from "../states/name";
import {
  Button,
  Container,
  Form,
  H1,
  H1Container,
  Input,
} from "../components/App_components";

function App() {
  const { name, setName } = useNameStore();
  const navigator = useNavigate();

  return (
    <Container>
      <H1Container>
        <H1>TalkTalk</H1>
      </H1Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (name) {
            navigator("/chat");
          } else {
            alert("Write your nickname");
            return;
          }
        }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Write your nickName"
        />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
