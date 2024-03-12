import './App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "Guilherme"
  let sobrenome = "Terenciani"
  return (
    <>
      <MeuComponente/>
      <h1 className="meu-nome">Olá eu sou o {nome} {sobrenome}!</h1>
      <h1>Olá eu sou o {nome} {sobrenome}!</h1>
    </>
  ) //JSX - Javascript XML
}
export default App
