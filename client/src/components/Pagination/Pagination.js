import React from "react";
import {ArrowButton, ButtonContainer} from "./styledPagination";

function Pagination({ currentPage, onPageChange, totalDogs, dogsPerPage, currentDogs }) {
// Calcula el número total de páginas necesarias para mostrar todos los perros
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  return (
    <ButtonContainer>
        {/* Botón para retroceder */}
          <ArrowButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1} // Deshabilitar el botón si estamos en la primera página
            className="btn-arrow btn-arrow-left"
          >
            Anterior
          </ArrowButton>
        
        {/* Botón para avanzar */}
          <ArrowButton
            onClick={() => onPageChange(currentPage + 1)}
            // se agrega la opción disabled para evitar que se muestre el botón de siguiente cuando no hay mas paginas
            disabled={currentPage === totalPages || currentDogs.length === 0}
            className="btn-arrow btn-arrow-right"
          >
            Siguiente
          </ArrowButton>
    </ButtonContainer>
  );
}

export default Pagination;