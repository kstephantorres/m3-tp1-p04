import './App.css'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import FormularioTarea from './components/FormularioTarea'


function App() {

  return ( 
    <>
      <Container className='py-4' id='main'>
        <h1 className='text-center text-white'>Lista de tareas </h1>
        <FormularioTarea></FormularioTarea>
      </Container>
      <Footer></Footer>
    </>     
  )
}

export default App
