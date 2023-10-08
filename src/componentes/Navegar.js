import React from "react";
import {Menu} from "./styled/styled";

function Navegar(props){
    return(
        <div className="Navegar">
            <Menu onClick={props.onClickh} id="habilidade">Habilidades</Menu>
            <Menu onClick={props.onClicks} id="sobre">Sobre</Menu>
            <Menu onClick={props.onClickp} id="projetos">Projetos</Menu>
            <Menu onClick={props.onClickc} id="contatos">Contatos</Menu>
        </div>
    )
}

export default Navegar