import useFilterNotes from "@/hooks/useFilterNotes"
import { Todo } from "@/types"
import { css } from "@emotion/react"
import { ChangeEvent, useState } from "react"

const searchBarCss = css({
  padding: '0.5rem',
  outline: 'none',
  margin: '2rem 0',
  width: 'auto',
  color: 'black',
  border: '1px solid black',
  borderRadius: '0.25rem'
})

type SearchBarProps = {
  todos: Todo[]
  setResults: (value: Todo[]) => void
}

export default function SearchBar({ todos, setResults }: SearchBarProps) {
  const [search, setSearch] = useState('')

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