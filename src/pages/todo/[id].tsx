import { Note } from "@/components"
import { useFetchTodos } from "@/hooks"
import type { Todo } from '@/types'
import { useRouter } from "next/router"
import { useState } from "react"

const Todo = () => {
  const router = useRouter()
  const { id } = router.query
  const [todos, setTodos] = useState<Todo[]>([])

  useFetchTodos(setTodos)

  const note = todos.find((t) => t.id === Number({id}))?? todos[0]

  return (
    <Note {...note} />
  )
}

export default Todo