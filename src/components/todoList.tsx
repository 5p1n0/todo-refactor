import { useSearch } from "@/hooks/useSearch"
import { styles } from "@/styles"
import type { Todo } from "@/types"
import { useState } from "react"
import { Note } from "./note"

export const TodosList = () => {
  const [search, setSearch] = useState('')

  const results = useSearch(search)

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Todo App</h1>
      
      <input
        style={styles.search}
        value={search}
        onChange={handleOnChangeInput}
        placeholder='Search todo...'
      />
      
      {results.map(({ userId, id, title, completed }: Todo) => (
        <Note userId={userId} id={id} title={title} completed={completed} />
      ))}
    </main>
  )
}