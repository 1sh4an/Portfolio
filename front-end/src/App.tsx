
import Navbar from './components/common/navbar'
import Header from './components/Home-Page/header'
import { ThemeProvider } from './components/theme-provider'
import Experience from './components/Home-Page/experience'
import Skills from './components/Home-Page/skills'
import { TracingBeam } from './components/ui/tracing-beam'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TracingBeam>
        <Navbar/>
        <Header/>  
        <Skills/>
        <Experience/>
      </TracingBeam>
   
    </ThemeProvider>
  )
}

export default App
