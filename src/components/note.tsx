import { css } from "@emotion/react"
import { Todo } from "@/types"
import { useRouter } from 'next/router'
import { MouseEvent, useContext } from "react"
import { TodoContext } from "./todoContext"

const noteCss = {
  note: css({
    flexBasis: '10rem',
    width: '75%',
    padding: '0.75rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  paragraph: css({
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'Raleway, sans-serif',
    marginTop: '0.5rem',
    marginBottom: 'auto'
  }),
  check: css({
    margin: '0.5rem 0'
  }),
  button: css({
    marginBottom: '0.5rem',
    width: '4rem',
    height: '2.5rem',
    border: '1px solid #272727',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
    transition: 'background-color color 50ms ease',
    cursor: 'pointer',
    ":hover": {
      backgroundColor: '#272727',
      color: 'white'
    }
  }),
} 

export default function Note({ item }: { item: Todo }) {
  const { todos, setTodos } = useContext(TodoContext)
  const router = useRouter()

  const handleOnClickTodo = () => {
    router.push('/todo/' + item.id)
  }

  const handleOnClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setTodos(todos.filter(t => t.id !== item.id))
  }

  return (
    <div
      key={item.id}
      css={noteCss.note}
      onClick={() => handleOnClickTodo()}
    >
      <p css={noteCss.paragraph}>{item.title}</p>
      {item.completed ? <p>✅</p> : null}
      <button 
        css={noteCss.button}
        onClick={handleOnClickDelete}
      >
        Delete
      </button>
    </div>
  )
}