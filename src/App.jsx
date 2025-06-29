import { Box, Button } from '@chakra-ui/react'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
  <Todo />
</Provider>

  )
}

export default App
