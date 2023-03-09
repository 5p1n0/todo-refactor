import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Layout>
  )
}