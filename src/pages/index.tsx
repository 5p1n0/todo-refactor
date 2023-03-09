import { useRef, useState } from "react"
import { Todo } from "@/types"
import Layout from "@/components/layout"
import SearchBar from "@/components/search-bar"
import Note from "@/components/note"
import useFetchNotes from "@/hooks/useFetchNotes"
import useFilterNotes from "@/hooks/useFilterNotes"
import Header from "@/components/header"

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [results, setResults] = useState<Todo[]>([])

  useFetchNotes(setTodos, setResults)

  return (
    <Layout>
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
    </Layout>
  )
}
