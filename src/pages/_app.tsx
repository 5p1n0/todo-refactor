import type { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from '@/components/layout'
import useFetchNotes from '@/hooks/useFetchNotes'
import { Todo } from '@/types'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([])

  useFetchNotes(setTodos)

  return (
    <Layout>
      <Component 
        {...pageProps} 
        todos={todos}
        setTodos={setTodos}
      />
    </Layout>
  )
}
