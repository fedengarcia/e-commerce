import { findByLabelText } from '@testing-library/dom';
import React from 'react';

const styleContainer={
    width: 150,
    height: 150,
    borderRadius: 15,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
}

const stlyleImg = {
    width:100,
    height:100,
    borderRadius:15,
}


const styleTitle = {
    fontSize: "1em",
    fontFamily: ""

}

const Card = ({foto , titulo}) => {
    return (
        <div style={styleContainer}>
            <h2 style={styleTitle}>{titulo}</h2>
            <img src={foto} alt="Imagen del producto a vender" style={stlyleImg}/>
        </div>
    );
}

export default Card;
