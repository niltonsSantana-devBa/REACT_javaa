
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AdicionarUsuario from './pages/AdicionarUsuario'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <h2>Bem-Vindo ao Sistema de Cadastro de Usuários</h2>
        <p>Este sistema permite que você adicione novos usuários e visualize a lista de usuários cadastrados.</p>
        <br />
        <AdicionarUsuario />

      </main>
      <Footer />
    </>
  )
}

export default App
