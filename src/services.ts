import { API_HOST } from "./constants"

export const getTodos = async () => {
  const res = await fetch(`${API_HOST}/`)
  const data = await res.json()
  return data
}

export const getTodoById = async (id: number) => {
  const res = await fetch(`${API_HOST}/${id}`)
  const data = await res.json()
  return data
}

export const createTodo = async (title: string) => {
  const res = await fetch(`${API_HOST}/create/${title}`)
  const data = await res.json()
  return data
}

export const deleteTodoById = async (id: number) => {
  const res = await fetch(`${API_HOST}/delete/${id}`)
  const data = await res.json()
  return data
}