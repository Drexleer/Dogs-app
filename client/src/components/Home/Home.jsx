import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card"
import { getAllDogs, getTemperaments, getDogName, orderByTemperament, orderByOrigin, orderByName, 
orderByWeight } from '../../redux/actions';
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

export default function Home() {
  //* Traemos el estado global

  const breedsFiltered = useSelector((state) => state.breedsFiltered);
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  //* Estado de filtros
  const [temperamentFilter, setTemperamentFilter] = useState("");

 //* Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  // para ir dividiendo los perros en paginas definimos los indices
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
// Guardamos los perros que se van a mostrar de indice en indice
  const currentDogs = breedsFiltered.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  //* Filtros de ordenamiento
  // reset de filtros
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getAllDogs());
  };

  //filtro por temperamentos
  const handleFilterTemperament = (e) => {
    e.preventDefault();
    const selectedTemperament = e.target.value;
    setTemperamentFilter(selectedTemperament);
    dispatch(orderByTemperament(e.target.value));
    setCurrentPage(1);
  };
  //filtro por origen
  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(orderByOrigin(e.target.value));
    setCurrentPage(1);
  };
  //filtro por nombre
  const handleFilterName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  };
  //filtro por peso
  const handleFilterWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
  };
//* SearchBar
const [searchTerm, setSearchTerm] = useState("");
const handleInputSearch = (e) => {
  setSearchTerm(e.target.value);
};

const handleSearchButtonClick = () => {
  // Iniciar la búsqueda cuando se hace clic en el botón
  dispatch(getDogName(searchTerm));
  setCurrentPage(1);
};

  return (
    <div className="home-page">
        <div>
            <Link to={"/home/newDog"}>NewDog</Link>
          <div>
            <nav>
              <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputSearch}
              />
              <button type="button" onClick={handleSearchButtonClick}>
                Search
              </button>
            </nav>
          </div>
            <div>
              <button onClick={(e) => handleReset(e)}>Reset</button>
              </div>
                  <div>
                    <select
                        defaultValue={'DEFAULT'}
                        onChange={(e) => {
                            handleFilterTemperament(e);
                        }}
                    >
                        <option disabled value="DEFAULT">
                            Temperaments
                        </option>
                        {temperaments &&
                            temperaments.map((option) => {
                                return (
                                    <option value={option.name} key={option.id}>
                                        {option.name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
              </div>
              <div>
                <select defaultValue={'DEFAULT'}
                onChange={(e) => {
                  handleFilterOrigin(e);
                }}
                >
                  <option disabled value="DEFAULT">
                    Origin
                  </option>
                    <option value="all">All</option>
                    <option value="db">DataBase</option>
                    <option value="api">API</option>
                </select>
              </div>
              <div>
                <select defaultValue={'DEFAULT'}
                onChange={(e) => {
                  handleFilterName(e);
                }}
                >
                  <option disabled value="DEFAULT">
                  Alphabetical Order
                  </option>
                  <option value="upward">[A-Z] Upward</option>
                  <option value="falling">[z-A] Falling</option>
                </select>
              </div>
              <div>
                <select defaultValue={'DEFAULT'}
                onChange={(e) => {
                  handleFilterWeight(e);
                }}
                >
                  <option disabled value="DEFAULT">
                    Weight
                  </option>
                  <option value="minor">Minor to Major</option>
                  <option value="major">Major to Minor</option>
                </select>
              </div>
        <div>
          {currentDogs.map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              name={dog.name}
              image={dog.image}
              temperaments={dog.temperaments}
              weight={dog.weight}
            />
          ))}
        </div>
        <Pagination
        currentPage={currentPage}
        dogsPerPage={dogsPerPage}
        totalDogs={breedsFiltered.length}
        onPageChange={paginate}
        currentDogs={currentDogs}
      />
    </div>
  );
}