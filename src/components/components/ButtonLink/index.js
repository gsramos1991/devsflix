import React from 'react';

function ButtonLink(props){
    //props => {className "Valor da classe que será recebido", href: "Valor do link que será recebido"}
    //isso gera um botão dinamico, mantendo as propriedades do botão

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}
export default ButtonLink;