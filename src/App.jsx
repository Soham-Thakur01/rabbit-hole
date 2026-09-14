import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cinema from './pages/Cinema'
import Coding from './pages/Coding'
import Mind from './pages/Mind'
import RabbitHoles from './pages/RabbitHoles'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'

function App() {
  return (
  <div className="app" id="top">
    <ScrollToTop />
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cinema" element={<Cinema />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/mind" element={<Mind />} />
      <Route path="/rabbit-holes" element={<RabbitHoles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </div>
)
}

export default App