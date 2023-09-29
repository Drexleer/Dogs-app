import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro semitransparente */
    z-index: 999;
  `;

// Estilos para el componente Card
export const CardContainer = styled.div`
  max-width: 320px;
  border-width: 1px;
  border-color: rgba(219, 234, 254, 1);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  position: fixed;
  width: 100%;
`;

// Estilos para el encabezado
export const Header = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  gap: 1rem;
`;

// Estilos para el icono
export const Icon = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: rgba(96, 165, 250, 1);
  padding: 0.5rem;
  color: rgba(255, 255, 255, 1);
`;

// Estilos para el ícono SVG
export const IconSVG = styled.svg`
  height: 1rem;
  width: 1rem;
`;

// Estilos para el mensaje de alerta
export const Alert = styled.p`
  font-weight: 600;
  color: rgba(107, 114, 128, 1);
`;

// Estilos para el mensaje
export const Message = styled.p`
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
`;

// Estilos para las acciones
export const Actions = styled.div`
  margin-top: 1.5rem;
`;

// Estilos para los enlaces "Take a Look" y "Mark as Read"
export const ActionLink = styled.a`
  text-decoration: none;
`;

// Estilos para el botón "Take a Look"
export const ReadButton = styled(ActionLink)`
  display: inline-block;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  background-color: rgba(59, 130, 246, 1);
  color: rgba(255, 255, 255, 1);
`;

// Estilos para el botón "Mark as Read"
export const MarkAsReadButton = styled(ActionLink)`
  background-color: rgba(249, 250, 251, 1);
  color: rgba(107, 114, 128, 1);
  transition: all 0.15s ease;

  &:hover {
    background-color: rgb(230, 231, 233);
  }
`;