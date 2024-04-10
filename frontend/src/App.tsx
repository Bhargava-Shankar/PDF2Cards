import './App.css'
import ContextProvider from './contexts/ContextProvider'
import FileForm from './components/FileForm'
import FlashCard from './components/FlashCard'
import FlashCardContainer from './components/FlashCardContainer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App(){
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <ContextProvider>
            <Hero></Hero>
            {/* <FlashCardContainer></FlashCardContainer> */}
            <FileForm></FileForm>
          </ContextProvider>
        </div>
      </div>
      
    </>
  )
}

export default App
