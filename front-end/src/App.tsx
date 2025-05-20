import './App.css'
import Navbar from './components/common/navbar'
import Header from './components/Home-Page/header'
import { ThemeProvider } from './components/theme-provider'
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Navbar/>
          <Header/>
        </div>
    </ThemeProvider>
    
   
  )
}

export default App
