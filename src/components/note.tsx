import router from 'next/router'
import { styles } from '@/styles'
import type { Todo } from '@/types'
import { useTodo, useTodoSetState } from './todosContext'

export const Note = ({ userId, id, title, completed }: Todo) => {
  const todos = useTodo()
  const setTodos = useTodoSetState()
  
  const handleOnClickTodo = (id: number) => {
    router.push(`/todo/${id}`)
  }

  const handleOnClickDelete = (id: number) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <div
      key={id}
      style={styles.note}
      onClick={() => handleOnClickTodo(id)}
    >
    <p>{title}</p>
    {completed ? <p>✅</p> : null}
    <button onClick={() => handleOnClickDelete(id)}>Delete</button>
  </div>
  )
}