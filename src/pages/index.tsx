import Header from "@/components/header"
import Note from "@/components/note"
import SearchBar from "@/components/search-bar"
import { TodoContext } from "@/components/todoContext"
import { Todo } from "@/types"
import { useContext, useState } from "react"

export default function HomePage() {
  const state = useContext(TodoContext)
  const [results, setResults] = useState<Todo[]>(state.todos)
  
  return (
    <>
      <Header />
      <SearchBar setResults={setResults} />
      {
        results && 
        results.map((r: Todo) => {
          return (
            <Note 
              key={r.id} 
              item={r} 
            />
          )
        })
      }
    </>
  )
}