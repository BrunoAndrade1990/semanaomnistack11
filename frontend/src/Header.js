import React from 'react';

/*
    Caso queira passar apenas propriedades especificas, só colocar o valor direto no parametro da função
    Ex: Se quiser receber apenas a propriedade children colocar o valor entre {children} e no corpo do HTML usa só {children}
*/
function Header(props) { 
    return (
        <header>
            {/* <h1>Be The Hero</h1> */}
            {/* <h1>{props.title}</h1> */}
             <h1>{props.children}</h1> {/*--> Retorna todo o conteudo, seja ele, texto ou HTML; */}
        </header>
    )
}

export default Header;
