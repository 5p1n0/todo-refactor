import { Todo } from "@/types"
import { useEffect } from "react"

export default function useFilterNotes(
  search: string, 
  todos: Todo[] = [], 
  setResults: (value: Todo[]) => void
  ) {
  useEffect(() => {
    const results = todos.filter(item => item.title.includes(search))
    setResults(results)
  }, [search, todos])
}