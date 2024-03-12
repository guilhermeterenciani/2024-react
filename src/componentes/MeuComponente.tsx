// Faça um componente que faça um retângulo da largura da tela
// por 200px

//crie uma variavel com LET no js que contenha o valor "Meu Componente"

// Crie uma div no componente que dentro dela mostre um <p>
// Contendo o valor da variável.
import './MeuComponente.css'
function MeuComponente(){
    let variavel = "Meu Componente"
    return(
        <div className="minha-div">
            <p>{variavel}</p>
            </div>
    )
}
export default MeuComponente;