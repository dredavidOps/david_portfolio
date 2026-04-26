import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen grid-bg">
      <Header />
      <div className="flex pt-10">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-6 md:p-10 max-w-5xl">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App