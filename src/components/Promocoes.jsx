import BoxPromo from "./BoxPromo"
import promodemais from "../assets/promodemais.jpg"
import cabelooubarba from "../assets/cabelooubarba.jpg"
import fakeouverdade from "../assets/fakeouverdade.jpg"

function Promocoes(){
    return(
        <section className="promos">
            <h1>Promoções</h1>
            <div className="ofertas">
                <BoxPromo capapromocao={promodemais} nomepromocao="Segunda - Butique de Carnes e Conveniência Terra América" validadepromocao="válido até 31/12/2024" linkpromocao="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/25d41e35-7d7d-485e-abd5-ff93dcc028f6/730326051"/>
                <BoxPromo capapromocao={cabelooubarba} nomepromocao="Sabadou - Barbearia Invicta" validadepromocao="válido até 31/12/2024" linkpromocao="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/4b26de37-9990-4e4f-86b3-ea7b82763ee5/741175192"/>
                <BoxPromo capapromocao={fakeouverdade} nomepromocao="Bom Dia Vox - É Fake ou Verdade?" validadepromocao="válido até 31/12/2024" linkpromocao="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/c6aa45ee-d6b2-4638-b85d-6c2a96711ce0/642628756" />
            </div>
            <div className="verTodasP">
                <a href="" target="_blank">Ver todas</a>
            </div>
        </section>
    )
}

export default Promocoes;