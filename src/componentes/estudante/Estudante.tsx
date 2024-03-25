import './Estudante.css'
interface EstudanteProps{
    foto: string,
    nome:string,
    descricao:string,
    linkGit:string
}
export default function Estudante({foto,nome,descricao,linkGit}:EstudanteProps){
    return(
        <div className="estudante-box">
            <img className='estudante-foto' src={foto} alt=""/>
            <div className="informacoes">
                <h3 className="estudante_nome">{nome}</h3>
                <p className="estudante_descricao">{descricao}</p>
                <a className='link-git' href={linkGit}>GitHub</a>
            </div>
        </div>
    )
}