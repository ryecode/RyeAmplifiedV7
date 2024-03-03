import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "../../graphql/mutations";
import { listTodos } from "../../graphql/queries";

import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../amplifyconfiguration.json";
Amplify.configure(config);

const initialState = { name: "", description: "" };
const client = generateClient();

function HomePage({ signOut }) {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos,
      });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({
        query: createTodo,
        variables: {
          input: todo,
        },
      });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "0em",
          marginRight: "0em",
          background: "indigo",
          width: "100%",
        }}
      >
        <h1 style={{ marginLeft: "1em", color: "aliceblue" }}>
          Welcome to Rye Technologies
        </h1>
        <button
          onClick={signOut}
          style={{ height: "90%", marginRight: "2em", marginTop: "0.75em" }}
        >
          Sign out
        </button>
      </div>
      <Container>
        <Row className="px-4 my-5">
          <Col xs={4} sm={6}>
            <Image src="/RYELogoBLackSphere.png" fluid alt="Logo" />
          </Col>
          <Col sm={6}>
            <h1 className="font-weight-light">RYE Amplified™ Technologies</h1>
            <p>Amplifying the voices of the Rye community</p>
            <Button variant="primary">Learn More</Button>
            <Button variant="danger" href="/contacts" style={{marginLeft:'2em'}}>Contacts</Button>

        <div style={styles.container}>
          <h2>Amplify Todos</h2>
          <input
            onChange={(event) => setInput("name", event.target.value)}
            style={styles.input}
            value={formState.name}
            placeholder="Name"
          />
          <input
            onChange={(event) => setInput("description", event.target.value)}
            style={styles.input}
            value={formState.description}
            placeholder="Description"
          />
          <button style={styles.button} onClick={addTodo}>
            Create Todo
          </button>
          <div style={{ marginTop: "2em", marginBottom: "1.5em" }}>
            <h3 style={{ paddingLeft: "3em" }}>List of ToDo's</h3>
            {todos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} style={styles.todo}>
                <p style={styles.todoName}>Name: {todo.name}</p>
                <p style={styles.todoDescription}>
                  Description: {todo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </Col>
        </Row>
      </Container>
    </>
  );
}

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(HomePage);
