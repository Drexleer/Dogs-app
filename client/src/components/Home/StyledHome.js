import styled from "styled-components";
import { blue, cobaltBlue, outerSpace, raisinBlack } from "../Utils/Colors";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px; /* Cambiamos la altura a 45px */
  padding-top: 1em;
`;

export const Input = styled.input`
  max-width: 250px; /* Aumentamos el ancho máximo */
  height: 100%;
  outline: none;
  font-size: 20px; /* Aumentamos el tamaño de fuente */
  font-weight: 500;
  background-color: #DFDFDF;
  caret-color: ${cobaltBlue};
  color: #FFFFFF;
  padding: 10px 15px; /* Aumentamos el padding para hacerlo más grande */
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid ${cobaltBlue};
  }

  &:focus {
    border: 2px solid ${cobaltBlue};
    background-color: ${raisinBlack};
  }
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${blue};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 48px;
  height: 50px;


  &:hover {
    background-color: ${outerSpace};
  }
`;

export const ResetButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${blue};
  border-radius: 7px;
  height: 100%;
  width: 35px;
  height: 35px;


  &:hover {
    background-color: ${outerSpace};
  }
`;

export const SelectBox = styled.div`
  width: fit-content;
`;

export const SelectElement = styled.select`
  outline: none;
  font-family: 'Montserrat', sans-serif;
  border: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.13);
  font-size: 1.1rem;
  width: 100%;
  padding: 0.5rem 1.5rem;
  appearance: none;
  border-radius: 0.5rem;
  background-color: white;

  &:hover {
    transform: scale(1.05);
  }
`;