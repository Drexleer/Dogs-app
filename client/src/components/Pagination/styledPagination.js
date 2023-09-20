import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    margin: 0; /* Centramos horizontalmente el contenedor */
    justify-content: center; /* Centramos horizontalmente el contenido */
    padding: 0;

`;

export const ArrowButton = styled.button`
  color: transparent;
  display: block;
  margin-top: 2em;
  margin-bottom: 0;
  margin-left: 7em;
  position: relative;
  width: 4rem;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 150ms ease-out;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #E5E5E5;
    transition: all 150ms ease-out;
  }

  &::before {
    width: 75%;
    height: 25%;
  }

  &::after {
    width: 25%;
    height: 75%;
  }

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.3);

    &::before,
    &::after {
      background-color: #BDBDBD;
    }
  }

  &.btn-arrow-left,
  &.btn-arrow-right {
    &::before,
    &::after {
      top: 12.5%;
      left: 12.5%;
    }
  }

  &.btn-arrow-left {
    transform: rotate(-45deg);
  }

  &.btn-arrow-right {
    transform: rotate(135deg);
  }
`;