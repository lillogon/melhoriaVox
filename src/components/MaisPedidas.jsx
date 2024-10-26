import BoxMusic from "./BoxMusic"
import deumoral from "../assets/deumoral.jpg"
import haverasinais from "../assets/haverasinais.jpg"
import eusousentimento from "../assets/eusousentimento.jpg"
import relacaoerrada from "../assets/relacaoerrada.jpg"
import doistristes from "../assets/doistristes.jpg"
import minhaheranca from "../assets/minhaheranca.jpg"
import bemmaisqueeu from "../assets/bemmaisqueeu.jpg"
import chorosa from "../assets/chorosa.jpg"
import nossoprimeirobeijo from "../assets/nossoprimeirobeijo.jpg"
import gostaderua from "../assets/gostaderua.jpg"

function MaisPedidas(){
    return(
        <section className="maisPedidas">
            <h1>As mais pedidas</h1>
            <div className="musicas">
                <BoxMusic capa={deumoral} nome="ZÉ NETO & CRISTIANO" musica="DEU MORAL" link="https://www.youtube.com/watch?v=CH8-4BbYSf4"/>
                <BoxMusic capa={haverasinais} nome="JORGE & MATEUS & LAUANA PRADO" musica= "HAVERÁ SINAIS" link="https://www.youtube.com/watch?v=Muo3F10dAcw"/>
                <BoxMusic capa={eusousentimento} nome="LUAN SANTANA & LUAN PEREIRA" musica= "EU SOU SENTIMENTO" link="https://www.youtube.com/watch?v=Ad1s0Xn2VDo"/>
                <BoxMusic capa={relacaoerrada} nome="GUSTTAVO LIMA & BRUNO & MARRONE" musica= "RELAÇÃO ERRADA" link="https://www.youtube.com/watch?v=y4IIym6BmX0"/>
                <BoxMusic capa={doistristes} nome="SIMONE MENDES" musica="DOIS TRISTES" link="https://www.youtube.com/watch?v=KPQkb2AuXSw"/>
                <BoxMusic capa={minhaheranca} nome="ANA CASTELA" musica="MINHA HERANÇA" link="https://www.youtube.com/watch?v=OrIlirfhorI"/>
                <BoxMusic capa={bemmaisqueeu} nome="DIEGO & VICTOR HUGO" musica="BEM MAIS QUE EU" link="https://www.youtube.com/watch?v=5OFR4soB5xw"/>
                <BoxMusic capa={chorosa} nome="GUILHERME & BENUTO" musica="CHOROSA" link="https://www.youtube.com/watch?v=qMH3ZGDG1VQ"/>
                <BoxMusic capa={nossoprimeirobeijo} nome="GLORIA GROOVE" musica="NOSSO PRIMEIRO BEIJO" link="https://www.youtube.com/watch?v=mBvcHrwuAjs"/>
                <BoxMusic capa={gostaderua} nome="FELIPE E RODRIGO" musica="GOSTA DE RUA" link="https://www.youtube.com/watch?v=ZsN_0_6yEXk"/>
            </div>
        </section>
    )
}

export default MaisPedidas;