import { useCallback, useReducer, useRef } from "react";
import "./App.css";

interface ITodo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {
  function reducer(state: ITodo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);

  const todoRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = useCallback(() => {
    if (todoRef.current) {
      dispatch({
        type: "ADD",
        text: todoRef.current.value,
      });
      todoRef.current.value = "";
    }
  }, []);

  return (
    <div className="App">
      {/* <Contacts /> */}
      <div className="form">
        <input type="text" ref={todoRef} />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div className="card">
        {todos.map((todo) => (
          <>
            <div key={todo.id}>{todo.text}</div>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              REMOVE
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
