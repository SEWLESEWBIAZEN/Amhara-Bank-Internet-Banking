import { useState } from 'react';
import './login.css'
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';


function LoginForm()
{
    const [inputs, setInputs] = useState({});

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <div className='form'>
            <Container>
                <h2 className='loginLabel'> Login</h2>
                <form className="loginForm" onSubmit={handleSubmit}>

                    <input
                        className='inputField'
                        type="text"
                        name="id"
                        value={inputs.id || ""}
                        onChange={handleChange}
                        placeholder="      ABaIB Id"
                    />

                    <input
                        className='inputField'
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                        placeholder="      Password"
                    />
                    <button type="submit" className='loginBtn' >Login</button>
                    <Link to='/new-user' className='newUser'><p>New User? Click here</p></Link>
                </form>

            </Container>

        </div>




    )
}
export default LoginForm