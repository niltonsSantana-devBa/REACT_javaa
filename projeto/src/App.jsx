
import './App.css'
import Cabecalho from './componets/cabecalho'
import UsuarioPage from './pages/UsuarioPage'
import CadastroPage from './pages/CadastroPage'
import Home from './pages/HomePage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Rodape from './componets/Rodape'

function App() {
  
  return (
    <>
     <BrowserRouter>
    <Cabecalho/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<CadastroPage />} />
        <Route path='/lista-usuarios' element={<UsuarioPage />} />
      </Routes>
    </main>
    <Rodape/>
    </BrowserRouter>
    
    </>
  )
}

export default App
