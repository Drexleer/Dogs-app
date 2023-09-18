import styled from 'styled-components';


export const CardGrid = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const CardContainer = styled.div`
  //border: 1px solid #ccc;
  //border-radius: 2px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  //padding: 5px;
  text-align: center;
  flex: 0 0 calc(33.33% - 15px); /* Distribuye el espacio disponible en igual proporción entre las tarjetas */
`;

export const CardImage = styled.img`
  max-width: 50%;
  height: auto;
`;