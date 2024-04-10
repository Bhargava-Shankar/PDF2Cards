import './App.css'
import ContextProvider from './contexts/ContextProvider'
import FileForm from './components/FileForm'
import FlashCard from './components/FlashCard'
import FlashCardContainer from './components/FlashCardContainer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="content">
      <Hero /><FileForm />
      <FlashCardContainer />
    </div>
  )
}
function App(){
  return (
    <>
      <div className='App'>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cards" element={<FlashCardContainer/> }></Route>
            </Routes>
          </BrowserRouter>
        </ContextProvider>
    </div>
    </>
  )
}

export default App
