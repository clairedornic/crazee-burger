
import { FormEvent, useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";

export const LoginForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [firstname, setFirstname] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formRef.current){
            formRef.current.reset();
        }
        navigate('/order', { 
            state: {
                userName: firstname 
            }
        });
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