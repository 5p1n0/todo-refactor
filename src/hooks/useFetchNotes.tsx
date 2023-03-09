import { Todo } from "@/types";
import { useEffect } from "react";

export default function useFetchNotes(
  setTodos: (value: Todo[]) => void,
  setResults?: (value: Todo[]) => void
  ) {  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (response.ok) 
          return response.json()
        else
          throw new Error(response.statusText);
      })
      .then((data: any) => {
        setTodos(data)
        if (setResults) setResults(data)
      })
      .catch(e => console.log(e))

  }, [])
}