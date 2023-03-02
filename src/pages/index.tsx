import { TodosList, TodosProvider } from "@/components"
import { styles } from "@/styles"

const App = () => {
  return (
    <TodosProvider>
      <div style={styles.container}>
        <TodosList />          
      </div>
    </TodosProvider>
  )
}

export default App