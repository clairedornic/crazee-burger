
import { FormEvent, useRef, useState } from "react";

export const LoginForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [firstname, setFirstname] = useState('');

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Bonjour ${firstname}`)
        if(formRef.current){
            formRef.current.reset();
        }
    };

    return (
        <form ref={formRef} action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous</h1>
            <h2>Connectez-vous</h2>
            <input 
                type="text" 
                name="firstname" 
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                placeholder="Entrez votre prénom"
                required
            />
            <button type="submit">
                <label>Accéder à votre espace</label>
            </button>
        </form>
    )
}