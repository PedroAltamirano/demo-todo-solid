import { Component, createEffect, createSignal, For } from 'solid-js';

import styles from './App.module.css';
import { createTodo, deleteTodoById, getTodos } from './services';

const App: Component = () => {
  const [newTodo, setNewTodo] = createSignal<string>();
  const [todos, setTodos] = createSignal([])

  const fetchTodos = async () => {
    const res = await getTodos()
    setTodos(res);
  }

  fetchTodos();

  const addTodo = async (event: HtmlEvent) => {
    event.preventDefault();
    // setTodos("items", [...todos.items, {id: todos.items.length + 1, title: newTodo(), done: false }])
    const res = await createTodo(newTodo() || '')
    setTodos(res)
    setNewTodo('')
  }

  const doneTodo = (id: number) => {
    // setTodos(
    //   "items",
    //   (i) => i.id === id,
    //   "done",
    //   (c) => !c
    // );
  }

  const deleteTodo = async (id: number) => {
    // setTodos("items", [...todos.items.filter((t) => t.id !== id)])
    const res = await deleteTodoById(id)
    setTodos(res)
  }

  return (
    <div class={styles.App}>
      <form class={styles.form}>
        <input type="text" value={newTodo()} placeholder='Nuevo to-do' onInput={e => setNewTodo(e.currentTarget.value)} class={styles.input} />
        <button class={styles.todoElem} onClick={addTodo}>Agregar</button>
      </form>

        <For each={todos()}>
          {(todo, index) => (
            <div class={styles.todo}>
              {/* <input class={styles.todoElem} type="checkbox" checked={todo.done} onChange={() => doneTodo(todo.id)} /> */}
              <h3 class={styles.input} classList={{[styles.done]: (!!todo.done)}}>{todo.title}</h3>
              <button class={styles.todoElem} onClick={() => deleteTodo(todo.id)}>trash</button>
            </div>
          )}
        </For>
    </div>
  );
};

export default App;
