import { Router } from '@/routes/Router'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

export default App
