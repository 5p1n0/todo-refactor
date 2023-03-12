export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type State = {
  todos: Todo[]
  setTodos: (value: Todo[]) => void
}