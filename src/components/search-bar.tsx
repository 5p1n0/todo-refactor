import useFilterNotes from "@/hooks/useFilterNotes"
import { Todo } from "@/types"
import { css } from "@emotion/react"
import { ChangeEvent, useContext, useState } from "react"
import { TodoContext } from "./todoContext"

const searchBarCss = css({
  padding: '0.5rem',
  outline: 'none',
  margin: '2rem 0',
  width: 'auto',
  color: 'black',
  border: '1px solid black',
  borderRadius: '0.25rem'
})

export default function SearchBar({ setResults }: { setResults: (value: Todo[]) => void }) {
  const [search, setSearch] = useState('')
  const { todos } = useContext(TodoContext)

  useFilterNotes(search, todos, setResults)

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <input
      css={searchBarCss}
      onChange={handleOnChangeInput}
      placeholder='Search todo...'
    />
  )
}