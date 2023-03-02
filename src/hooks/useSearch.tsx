import { useTodo } from "@/components"
import { Todo } from "@/types"
import { useEffect, useState } from "react"

export const useSearch = (search: string) => {
  const [results, setResults] = useState<Todo[]>([])

  const todos = useTodo()

  useEffect(() => {
    const results = todos.filter(item => item.title.includes(search))
    setResults(results)
  }, [search, todos])
  
  return results
}