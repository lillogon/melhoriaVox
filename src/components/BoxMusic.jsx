function BoxMusic({capa, nome, musica, link}){
    return(
        <div className="boxMusica">
            <img className= "imgBoxMusic" src={capa} alt="box music" />
            <p className="nomeCantor">{nome}</p>
            <p className="nomeMusica">{musica}</p>
            <a className= "btyoutube" href={link} target="_blank">Ouça no youtube</a>
        </div>
    )
}

export default BoxMusic;