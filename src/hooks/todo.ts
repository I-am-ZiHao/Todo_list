import { useCallback, useEffect, useState } from "react";
// import { API_GET_DATA } from '../constants'

const API_HOST = "http://localhost:3000";
const API_GET_DATA = `${API_HOST}/posts/1`;

export type TodoItem = {
  id: string,
  title: string,
  status: TodoStatus
}

export type Todolist = TodoItem[];

// custom hook
export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todolist>([]);

  // original way to fetch data (localStorage)
  // const fetchTodoList = useCallback( () => {
  //   const data = localStorage.getItem('todoList');
  //   const parseData: Todolist = data ? JSON.parse(data) : []

  //   setTodoList(parseData);
  //   console.log(parseData);
  // }, [] )

  // my way to fetch data (json server)
  const fetchTodoList = useCallback( () => {

    const fetchData = async () => {
      const results = await fetch(API_GET_DATA);
      // , {
      //   headers : { 
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //    }
      // }
      
      const { data } = await results.json();
      setTodoList(data);
      console.log(data);
    };
    fetchData();
  }, [] )

  // my function (localStorage)
  // const putData = (name: string, data: TodoItem[]) => {
  //   localStorage.setItem(name, JSON.stringify(data));
  //   setTodoList(data);
  // }

  // my way to set data (json server)
  const putData = (name: string, data: TodoItem[]) => {
    const fetchSetData = async ()=> {
      await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {data} )
      })
      setTodoList(data);
      console.log(data);
    }
    fetchSetData();
  }

  const addTodoItem = useCallback( (title: string, status: TodoStatus) => {
    const newTodoItem = {
      id: Date.now().toString(),
      title, 
      status
    }

    const newTodoList = [...todoList, newTodoItem];

    // original way to put data (localStorage)
    // localStorage.setItem('todoList', JSON.stringify(newTodoList));
    // setTodoList(newTodoList);

    // my way to put data
    putData('todoList', newTodoList);
    console.log(newTodoList);
  }, [todoList] )

  const removeTodoItem = useCallback( (todoItemId: string) => {
    // original solution to remove item
    // const idx = todoList.findIndex(todoItem => todoItem.id === todoItemId)
    // const newTodoList = [...todoList.slice(0, idx), ...todoList.slice(idx + 1)]

    // my solution to remove item
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== todoItemId)

    // original way to put data
    // localStorage.setItem('todoList', JSON.stringify(newTodoList));
    // setTodoList(newTodoList);

    // my way to put data
    putData('todoList', newTodoList);
    console.log(newTodoList);
  }, [todoList] )

  useEffect( () => fetchTodoList(), [fetchTodoList] )  // fetchTodoList是userCallback, 所以每次userCallback回傳的fethTodoList都相同。所以當setTodoList被呼叫，畫面再次渲染時，fetchTodoList仍相同，useEffect就不會執行，避免陷入userEffect無限迴圈。

  return {
    todoList, fetchTodoList, addTodoItem, removeTodoItem
  };
}