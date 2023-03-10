import Header from "@/components/header"
import Note from "@/components/note"
import SearchBar from "@/components/search-bar"
import { Todo } from "@/types"
import { useState } from "react"

type homePageProps = {
  todos: Todo[]
  setTodos: (value: Todo[]) => void
}

export default function HomePage({ todos, setTodos }: homePageProps) {
  const [results, setResults] = useState<Todo[]>(todos)
  return (
    <>
      <Header />
      <SearchBar todos={todos} setResults={setResults} />
      {
        results && 
        results.map((r: Todo) => {
          return (
            <Note 
              key={r.id} 
              item={r} 
              todos={todos} 
              setTodos={setTodos} 
            />
          )
        })
      }
    </>
  )
}