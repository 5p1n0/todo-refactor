import type { Todo } from '@/types'
import { useFetchTodos } from '@/hooks';
import { ReactNode, createContext, useContext, useState, SetStateAction } from "react";

const TodosContext = createContext<Todo[]>([])
const TodosSetStateContext = createContext<any>({})

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useFetchTodos(setTodos)

  return (
    <TodosContext.Provider value={todos}>
      <TodosSetStateContext.Provider value={setTodos}>
        {children}
      </TodosSetStateContext.Provider>
    </TodosContext.Provider>
  )
}

export const useTodo = () => {
  return useContext(TodosContext)
}

export const useTodoSetState = () => {
  return useContext(TodosSetStateContext)
}