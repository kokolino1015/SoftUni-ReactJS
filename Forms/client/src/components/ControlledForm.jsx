import { useEffect, useRef, useState } from "react";

export default function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        email: '',
        bio: '',
        occupation: '',
        sex: '',
        sports: ''
    })

    useEffect(()=>{
        inputref.current.focus();
    })

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a')
            const profile = await response.json();
            setUsername(profile.username);
        })();
    }, [])
    const inputref = useRef();
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

    const changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.type ==='checked'
                ? e.target.checked
                : e.target.value,
        }))
    }


    return (
        <>
            <h1>Controlled form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        ref={inputref}
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="bio">bio</label>
                    <textarea
                        type="bio"
                        id="bio"
                        name="bio"
                        value={formValues.bio}
                        onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="occupation">occupation</label>
                    <select type="occupation" id="occupation" value={formValues.occupation} onChange={changeHandler}>
                        <option value="it">IT</option>
                        <option value="ba">BA</option>
                        <option value='ai'>AI</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sex-m">Male</label>
                    <input
                        type="radio"
                        id="sex-m"
                        name="sex"
                        value='m'
                        checked={formValues.sex === 'm'}
                        onChange={changeHandler}></input>
                    <label htmlFor="sex-f">Female</label>
                    <input
                        type="radio"
                        id="sex-f"
                        name="sex"
                        value='f'
                        checked={formValues.sex === 'f'}
                        onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="swimming">Swimming</label>
                    <input
                        type="checkbox"
                        id="swimming"
                        name="swimming"
                        value={formValues.swimming}
                        onChange={changeHandler} />
                    <label htmlFor="fitness">Fitness</label>
                    <input
                        type="checkbox"
                        id="fitness"
                        name="fitness"
                        value={formValues.fitness}
                        onChange={changeHandler} />
                    <label htmlFor="crossfit">Crossfit</label>
                    <input
                        type="checkbox"
                        id="crossfit"
                        name="crossfit"
                        value={formValues.crossfit}
                        onChange={changeHandler} />
                        
                </div>
                <div>
                    <input type="submit" value="Login" />
                    <button></button>
                </div>
            </form>

        </>
    );
}