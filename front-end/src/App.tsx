
import { ThemeProvider } from './components/theme-provider'
import Home from './Pages/home_page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Pages/projects';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Projects" element={<Projects/>}/>
              </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
