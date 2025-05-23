import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import Header from "../components/Home-Page/header";
import Experience from "../components/Home-Page/experience";
import Skills from "../components/Home-Page/skills";
import { TracingBeam } from "../components/ui/tracing-beam";
import { motion } from "framer-motion";
function Home() {
  return (
    <div>
      <TracingBeam>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <Skills />
          <Experience />
        </motion.div>
      </TracingBeam>
      <Footer />
    </div>
  );
}

export default Home;
