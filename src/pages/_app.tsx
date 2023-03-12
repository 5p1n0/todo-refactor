import type { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from '@/components/layout'
import useFetchNotes from '@/hooks/useFetchNotes'
import { Todo } from '@/types'
import { TodoContext } from '@/components/todoContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([])

  useFetchNotes(setTodos)

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      <Layout>
        <Component 
          {...pageProps} 
        />
      </Layout>
    </TodoContext.Provider>
  )
}
