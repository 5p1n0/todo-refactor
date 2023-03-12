import Header from "@/components/header";
import Note from "@/components/note";
import { TodoContext } from "@/components/todoContext";
import { Todo } from "@/types"
import { useRouter } from "next/router";
import { useContext } from "react";

export default function NotePage() {
  const { todos } = useContext(TodoContext)
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