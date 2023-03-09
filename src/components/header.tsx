import { css } from "@emotion/react"
import { useRouter } from "next/router"

const headerCss = {
  title: css({
    fontSize: '2rem',
  })
}

export default function Header() {
  const router = useRouter()

  const handleOnClickTodo = () => {
    router.push('/')
  }

  return (
    <h1
      css={headerCss.title}
      onClick={() => handleOnClickTodo()}
    >
      Todo App
    </h1>
  )
}