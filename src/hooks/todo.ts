import { useCallback, useEffect, useState } from "react";

const API_HOST = "http://localhost:3000";
const API_GET_DATA = `${API_HOST}/posts/1`;

export type TodoItem = {
  id: string;
  title: string;
  status: TodoStatus;
};

export type Todolist = TodoItem[];

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todolist>([]);

  const fetchTodoList = useCallback(async () => {
    const results = await fetch(API_GET_DATA);
    const { data } = await results.json();
    setTodoList(data);
  }, []);

  const putData = async (name: string, data: TodoItem[]) => {
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    setTodoList(data);
  };

  const addTodoItem = useCallback(
    (title: string, status: TodoStatus) => {
      const newTodoItem = {
        id: Date.now().toString(),
        title,
        status,
      };
      const newTodoList = [...todoList, newTodoItem];
      putData("todoList", newTodoList);
    },
    [todoList]
  );

  const removeTodoItem = useCallback(
    (todoItemId: string) => {
      const newTodoList = todoList.filter(
        (todoItem) => todoItem.id !== todoItemId
      );
      putData("todoList", newTodoList);
    },
    [todoList]
  );

  useEffect(() => {
    (async () => fetchTodoList())();
  }, [fetchTodoList]);

  return {
    todoList,
    fetchTodoList,
    addTodoItem,
    removeTodoItem,
  };
};
