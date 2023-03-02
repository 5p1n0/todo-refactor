import { Todo } from "@/types";
import { useEffect, Dispatch, SetStateAction } from "react";

const check = (response: Response) => {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

export const useFetchTodos = (setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => check(response))
      .then(setTodos)
      .catch(error => console.log(error))
  }, [])

}