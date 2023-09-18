import {useState} from 'react';
import {PiDog} from 'react-icons/pi';

export default function SearchBar({dogFind}) {

    const [dog, setDog] = useState('');

    const handleChange = (event) => {
        setDog(event.target.value);
    };

    const handleSearch = (dog) => {
        dogFind(dog);
        setDog('');
    };

    return(
        <div>
            <input name= 'inputSearch' value={dog} type='search' placeholder='Ingresa un nombre' onChange={handleChange}/>
            <button onClick={()=> {handleSearch(dog)}}><PiDog/></button>
        </div>
    )
};