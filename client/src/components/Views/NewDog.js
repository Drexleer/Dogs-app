import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { postDog, getTemperaments } from '../../redux/actions'
import { Container, RightContainer, LeftContainer, Temperaments, BackButton, CreateButton, Text, Icon, IconContainer, WarningSpan} from './StyledDog'

export default function NewDog() {

    //traemos el temperaments del estado global
    const temperaments = useSelector(state => state.temperaments);
    const dogs = useSelector(state => state.breeds);
    const dispatch = useDispatch();

    //Si no hay temperaments en el estado global, los traemos del back
    if(!temperaments.length) dispatch(getTemperaments());

    const [form, setForm] = useState({
        name: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        min_life: '',
        max_life: '',
        temperaments: [],
    });
    

    //* ESTADOS PARA VALIDAR EL FORMULARIO
    const [errors, setErrors] = useState('');
    const [nameError, setNameError] = useState('');

    function validateForm(input) {
        //console.log(input);
        let errors = {};
        // Validamos el name.
        if (input.name === '') errors.name = 'Coloca un nombre!';
        else if (!/^[A-Za-z ]+$/.test(input.name))
            errors.name = 'Sin caracteres especiales o números!';
        // Validamos los height.
        if (input.min_height === '')
            errors.min_height = 'Coloca una altura correcta!';
        else if (input.min_height < 15)
            errors.min_height = 'Tiene que medir 15cm o mas!';
        if (input.max_height === '')
            errors.max_height = 'Coloca una altura correcta!';
        else if (input.max_height > 110)
            errors.max_height = 'Tiene que medir 110cm o menos';
        if (parseInt(input.min_height) > parseInt(input.max_height))
            errors.min_height = 'El mínimo no puede superar al mayor';
        // Validamos los weight.
        if (input.min_weight === '')
            errors.min_weight = 'Coloca un peso correcto!';
        else if (parseInt(input.min_weight) < 1)
            errors.min_weight = 'Tiene que pesar 1Kg o mas';
        if (input.max_weight === '')
            errors.max_weight = 'Coloca un peso correcto!';
        else if (parseInt(input.max_weight) > 90)
            errors.max_weight = 'Tiene que pesar 90Kg o menos';
        if (parseInt(input.min_weight) > parseInt(input.max_weight))
            errors.min_weight = 'El mínimo no puede ser menor al mayor';
        // Validamos el life span.
        if (input.min_life === '') errors.min_life = 'Coloca un año correcto!';
        else if (input.min_life < 1)
            errors.min_life = 'Tiene que ser mayor a 1 ';
        if (input.max_life === '') errors.max_life = 'Coloca un año correcto!';
        else if (input.max_life > 90)
            errors.max_life = 'Tiene que vivir 20 o menos';
        if (parseInt(input.min_life) > parseInt(input.max_life))
            errors.min_life = 'El máximo no puede ser menor al mayor';
        return errors;
    }
    function verifyImage (url) {
        new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(setForm({ ...form, image: url }));
            img.onerror = () => resolve(delete form.image);
        });
    };
    function handleInputChange(name, value) {

        // Comprobamos si el valor ingresado no es un número, y si es así, lo asignamos al estado como una cadena.
        if (isNaN(parseInt(value))) {
            setForm({ ...form, [name]: value }); // Actualiza el estado form con el nuevo valor
        } else {
            // Si el valor es un número, lo convierte a entero y lo asigna al estado.
            setForm({ ...form, [name]: parseInt(value) }); 
        }
        // Llamamos a una función para validar el formulario y actualizamos el estado de errores con los resultados de la validación.
        setErrors(
            validateForm({
                ...form,
                [name]: [value], // Actualizamos la parte correspondiente del formulario para validarla
            })
        );
    }
    function handleSelectTemperament(option) {
        setForm({
            ...form,
            temperaments: form.temperaments.includes(option)
                ? form.temperaments
                : [...form.temperaments, option],
        });
    }
    function handleDeleteTemperament(option) {
        setForm({
            ...form,
            temperaments: form.temperaments.filter((value) => value !== option),
        });
    }
    function createBreed(e) {
        e.preventDefault();
        // Verificar si el nombre ya existe en la lista de perros
        const nameExists = dogs.some((dog) => dog.name === form.name);
        if (nameExists) {
            setNameError('El Perro ya existe. Elija otro nombre.');
            window.alert('El Perro ya existe. Elija otro nombre.');
        } else {
            setNameError('');
            dispatch(postDog(form))
                .then(() => {
                    window.alert('Perro creado');
                    setForm({
                        name: '',
                        min_height: '',
                        max_height: '',
                        min_weight: '',
                        max_weight: '',
                        min_life: '',
                        max_life: '',
                        image: '',
                        temperaments: []
                    })
                })
                .catch((error) => {
                    window.alert(`Error: ${error.message}`);
                });
        }
    }

    return (
        <Container>
            <LeftContainer>
                <img src="https://freepngimg.com/thumb/dog/83-dog-png-image.png" alt="dog" />
            <Link to="/home">
                <BackButton>Go Back</BackButton>
            </Link>
            </LeftContainer>
            <RightContainer>
                <h1>Create a new dog with the characteristics you want♥️</h1>
                <div>
                    <label>Name:</label>
                    <input style={{display: "flex"}}
                    placeholder='Name'
                    onChange={(e) => {
                        handleInputChange(e.target.name, e.target.value);
                    }}
                    type='text'
                    name='name'
                    value={form.name}
                    />
                    {errors.name ? (
                        <WarningSpan>{errors.name}</WarningSpan>
                    ) : null}
                </div>
                <div>
                    <label>Height:</label>
                    <input
                    placeholder='Min height'
                    onChange={(e) => {
                        handleInputChange(e.target.name, e.target.value);}}
                    type='text'
                    name='min_height'
                    value={form.min_height}
                    />
                    <input
                    placeholder='Max height'
                    onChange={(e) => { handleInputChange(e.target.name, e.target.value);}}
                    type='text'
                    name='max_height'
                    value={form.max_height}
                    />
                    <WarningSpan>
                        {errors.min_height && !errors.max_height
                            ? errors.min_height
                            : errors.max_height && !errors.min_height
                            ? errors.max_height
                            : errors.min_height && errors.max_height
                            ? 'Por favor ingresa valores válidos'
                            : null}
                    </WarningSpan>
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                    placeholder='Min weight'
                    onChange={(e) => { handleInputChange(e.target.name, e.target.value);}}
                    type='text'
                    name='min_weight'
                    value={form.min_weight}
                    />
                    <input
                    placeholder='Max weight'
                    onChange={(e) => { handleInputChange(e.target.name, e.target.value);}}
                    type='text'
                    name='max_weight'
                    value={form.max_weight}
                    />
                    <WarningSpan>
                        {errors.min_weight && !errors.max_weight 
                        ? errors.min_weight
                        : errors.max_weight && !errors.min_weight
                        ? errors.max_weight
                        : errors.min_weight && errors.max_weight
                        ? 'Por favor ingresa valores válidos'
                        : null}
                    </WarningSpan>
                </div>
                <div>
                    <label>Life:</label>
                    <input
                    placeholder='Min life'
                    onChange={(e) => { handleInputChange(e.target.name, e.target.value);}}
                    type='text'
                    name='min_life'
                    value={form.min_life}
                    />
                    <input
                    placeholder='Max life'
                    onChange={(e) => { handleInputChange(e.target.name, e.target.value);}}
                    type='text'
                    name='max_life'
                    value={form.max_life}
                    />
                    <WarningSpan>
                        {errors.min_life && !errors.max_life
                        ? errors.min_life
                        : errors.max_life && !errors.min_life
                        ? errors.max_life
                        : errors.min_life && errors.max_life
                        ? 'Por favor ingresa valores válidos'
                        : null}
                    </WarningSpan>
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        placeholder="https://url.com/image.jpg"
                        onChange={(e) => {
                            verifyImage(e.target.value);
                        }}
                        type="text"
                        value={form.image}
                    />
                </div>
                <div>
                    <label>Temperaments:</label>
                    <select
                        defaultValue={'DEFAULT'}
                        onChange={(e) => {
                            handleSelectTemperament(e.target.value);
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
                <div>
                    <ul>
                        {form.temperaments &&
                            form.temperaments.map((option, index) => (
                            <div>
                                <Temperaments key={index} onClick={() => handleDeleteTemperament(option)}>
                                    <span className="option-text">{option}</span>
                                </Temperaments>
                            </div>
                        ))}
                    </ul>
                </div>
                <div>
                <CreateButton
                    className="button"
                    type='submit'
                    onClick={(e) => {
                        createBreed(e);
                    }}
                >
                    <Text>CreateDog</Text>
                    <IconContainer>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" className="svg">
                        <line y2="19" y1="5" x2="12" x1="12"></line>
                        <line y2="12" y1="12" x2="19" x1="5"></line>
                    </Icon>
                    </IconContainer>
                </CreateButton>
                {nameError && <div className="error">{nameError}</div>}
                </div>
            </RightContainer>
        </Container>
    )
}


/*
<div>
                                    <button
                                        className="listButtonTemp"
                                        onClick={() =>
                                            handleDeleteTemperament(option)
                                        }
                                    >
                                        <Temperaments key={index}>
                                            {option}
                                        </Temperaments>
                                        <span className="close-icon">x</span>
                                    </button>
                                </div>
*/