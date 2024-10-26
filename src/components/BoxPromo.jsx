function BoxPromo({capapromocao, nomepromocao, validadepromocao, linkpromocao}){
    return(
        <div className="boxPromoc">
            <img className="capaPromo" src={capapromocao} alt="capa promoção" />
            <div className="cardPromo">
                <h2 className="nomePromo">{nomepromocao}</h2>
                <div className="footerPromo">
                        <p className="validadePromo">{validadepromocao}</p>
                        <a className="btParticipe" href={linkpromocao} target="_blank">Participe</a>
                </div>
            </div>
        </div>
    )
}

export default BoxPromo;