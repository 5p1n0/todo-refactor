import { ReactNode } from "react"
import { css } from "@emotion/react"

const layoutCss = {
  container: css({
    padding: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
  }),
  
  main: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
    alignItems: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1rem',
    color: '#272727',
  })
}

export default function Layout({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <div css={layoutCss.container}>
      <main css={layoutCss.main}>
        {children}
      </main>
    </div>
  )
}