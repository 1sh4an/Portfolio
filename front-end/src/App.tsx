
import { ThemeProvider } from './components/theme-provider'
import Home from './Pages/home_page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Pages/projects';
import About from './Pages/about';
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/About" element={<About/>}/>
              </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
