import React from "react";

function Pagination({ currentPage, onPageChange, totalDogs, dogsPerPage, currentDogs }) {
// Calcula el número total de páginas necesarias para mostrar todos los perros
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  return (
    <nav>
      <ul className="pagination">
        {/* Botón para retroceder */}
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="page-link"
            disabled={currentPage === 1} // Deshabilitar el botón si estamos en la primera página
          >
            Anterior
          </button>
        </li>
        
        {/* Botón para avanzar */}
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="page-link"
            // se agrega la opción disabled para evitar que se muestre el botón de siguiente cuando no hay mas paginas
            disabled={currentPage === totalPages || currentDogs.length === 0}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;