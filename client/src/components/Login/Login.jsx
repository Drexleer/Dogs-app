import {useState} from 'react';
import validation from './validations';

export default function Login({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;

        setErrors(validation({...userData, [property]: value}));
        setUserData({...userData, [property]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div>
                <input type='text' name='email' placeholder='Email' onChange={handleChange} value={userData.email}/>
            </div>
            {errors.email && (<p>{errors.email}</p>)}
            <div>
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password}/>
            </div>
            {errors.password && (<p>{errors.password}</p>)}
            <div>
                <button>SUBMIT</button>
            </div>
            </form>
        </div>
)};