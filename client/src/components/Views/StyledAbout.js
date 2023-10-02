import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  background-image: url("https://wallpapercave.com/wp/wp11842089.jpg"); 
`;


// Define estilos para cada div dentro del contenedor
export const DivSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivAbajo = styled.div`
    width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em;
  `;

export const DivArriba = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em;
`;

export const ImagePerfil = styled.img`
  width: 230px;
  margin: 1em;
`;

export const ImageMedia = styled.img`
  width: 300px;
  height: 300px;
  margin: 1em;
  `;

export const Card = styled.div`
max-width: 1000px;
min-height: 250px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
border: 1px solid rgba(255, 255, 255, 0.25);
border-radius: 20px;
background-color: rgba(255, 255, 255, 0.45);
box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(15px);
margin-top: 1em;
`;

export const CardFooter = styled.div`
font: 1.5em sans-serif;
color: #224;
display: flex;
align-items: center;
margin: 1em;
`;

export const CardHeader = styled.h1`
font: 2.5em sans-serif;
font-weight: 600;
margin-bottom: 1em;
color: #224;
`;

//* Aquí comienza el estilo para el formulario de contacto

// Contenedor principal
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

// Contenedor superior
export const UpContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

// Contenedor inferior
export const DownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

// Estilo de las tarjetas
export const Card1 = styled.button`
  width: 110px;
  height: 110px;
  outline: none;
  border: none;
  background: white;
  border-radius: 90px 5px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: .2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #cc39a4;
  }
`;

export const Instagram = styled.svg`
  margin-top: 1.5em;
  margin-left: 1.2em;
  fill: #cc39a4;

  ${Card1}:hover & {
    fill: white;
  }
`;

export const Card2 = styled.button`
  width: 110px;
  height: 110px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 90px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: .2s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03A9F4;
  }
`;

export const Twitter = styled.svg`
  margin-top: 1.5em;
  margin-left: -.9em;
  fill: #03A9F4;

  ${Card2}:hover & {
    fill: white;
  }
`;

export const Card3 = styled.button`
  width: 110px;
  height: 110px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 5px 90px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: .2s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
  }
`;

export const Github = styled.svg`
  margin-top: -.6em;
  margin-left: 1.2em;
  
  ${Card3}:hover & {
    fill: white;
  }
`;

export const Card4 = styled.button`
  width: 110px;
  height: 110px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 90px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: .2s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
  }
`;

export const Discord = styled.svg`
  margin-top: 1.8em;
  margin-left: 1.7em;
  fill: #8c9eff;

  ${Card4}:hover & {
    fill: white;
  }
`;

//* button random

export const ButtonRandom = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }
  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;