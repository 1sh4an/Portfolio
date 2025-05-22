import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import Header from '../components/Home-Page/header'
import Experience from '../components/Home-Page/experience'
import Skills from '../components/Home-Page/skills'
import { TracingBeam } from '../components/ui/tracing-beam'

function Home() {
  return (
   <div>
      <TracingBeam>
        <Navbar/>
        <Header/>  
        <Skills/>
        <Experience/>
      </TracingBeam>
      <Footer/>
   </div>
  )
}

export default Home
