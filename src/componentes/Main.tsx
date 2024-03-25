import './Main.css'
import Estudante from './estudante/Estudante'
import { useEffect, useState } from 'react'

type Estudante = {
    nome: string,
    descricao: string,
    linkGit: string,
    foto: string

}

function Main(){
    const [estudantes, setEstudantes] = useState<Estudante []>([])
    useEffect(() => {
        fetch('http://localhost:3000/estudantes')
            .then((response) => response.json())
            .then((data) => setEstudantes(data))
    }, [])
    return(
        <main>
            {
                estudantes.map((estudante) => {
                    return <Estudante nome={estudante.nome}
                        descricao={estudante.descricao}
                        linkGit={estudante.linkGit}
                        foto={estudante.foto}
                    />
                })
            }
        </main>
    )
}

export default Main