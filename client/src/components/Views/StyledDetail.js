import styled from "styled-components";


// Estilo para el contenedor temporal de almacenamiento
export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilo para la imagen
export const Img = styled.img`
    border-radius: 10px;
    margin: 1.5em;
`;


// Estilo para el componente de tarjeta
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 900px;
  //* Background
  background: radial-gradient(circle at top left,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #E7D8C9 10% ,#E7D8C9 15% , transparent 16%),radial-gradient(circle, transparent 25%, #ffffff  26%),linear-gradient(45deg, transparent 46%, #E7D8C9 47%, #E7D8C9 52%, transparent 53%), linear-gradient(135deg, transparent 46%, #E7D8C9 47%, #E7D8C9 52%, transparent 53%);
        background-size: 2em 2em;
        background-color: #ffffff;
        opacity: 1;
//* fin del background
  gap: 10px;
  padding: 1em;
  border-radius: 1em;
  margin: 3em;
  border: 1em solid #E7D8C9; /* Borde beige */

  &:hover {
    outline: 5px solid #e8e8e8;
    color: black;
    transform: scale(1.02);
  }
  &:active {
    box-shadow: none;
  }
`;
export const TextH1 = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 40px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra de texto */
`;
export const TextH2 = styled.h2`
  margin: 0; /* Centrar el texto horizontalmente */
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.5em;
`;
export const TextH3 = styled.h3`
  margin: 0; /* Centrar el texto horizontalmente */
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 1em;
`;

export const Ul = styled.ul`
display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// Estilos para los enlaces que se comportan como botones
export const ButtonTemperament = styled.a`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #E7D8C9;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  &:hover {
    outline: 2px solid #e8e8e8;
    background: white;
    color: black;
    transform: scale(1.05);
  }
  &:active {
    box-shadow: none;
  }
`;

export const CustomButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
`;

export const LearnMoreButton = styled(CustomButton)`
  position: absolute; /* Colocar el botón en posición absoluta */
  bottom: 3em; /* Ajustar la distancia desde la parte inferior */
  right: 1em; /* Ajustar la distancia desde la parte derecha */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #FFF6ED;
  border: 2px solid #F0D2B6;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #F0D2B6;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    background: #F9EEE3;
    transform: translate(0, 0.25em);
  }

  &:hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }

  &:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
  }

  &:active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;