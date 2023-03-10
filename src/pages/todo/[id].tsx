import Header from "@/components/header";
import Note from "@/components/note";
import { Todo } from "@/types"
import { useRouter } from "next/router";

type notePageProps = {
  todos: Todo[]
  setTodos: (value: Todo[]) => void
}

export default function NotePage({ todos, setTodos }: notePageProps) {
  const router = useRouter()
  const { id } = router.query

  const todo = todos.filter(t => t.id === Number(id))[0]

  return (
    <>
      <Header />
      {
        todo &&
        <Note 
          key={todo.id} 
          item={todo} 
          todos={todos} 
          setTodos={setTodos} 
        />
      }
      {
        !todo &&
        <div>
          deleted
        </div>
      }
    </>
  )
}