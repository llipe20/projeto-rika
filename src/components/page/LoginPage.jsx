import React from "react"
import { useNavigate } from 'react-router-dom';
import Input from "../Input"

const LoginPage = ({ setIsLogin, setUser }) => {
    const navigate = useNavigate()

    // Valida e confirma o acesso de login do usuário
    const Chekin = async () => {
        const setor = document.getElementById("username").value
        const pass = document.getElementById("password").value

        // Verifica se as vars vinheram vazias
        if (setor === '' || pass === '') {
            console.log("Preencher os campos")
        } else {
            // consulta SQL no banco de dados de login ...
            const user = await getLogin(setor)
            if (user && user.login === setor) {
                if (user.senha === pass) {
                    setUser(user.login)
                    setIsLogin(true)
                    navigate('/home')
                    console.log("LOGIN COM SUCESSO")
                } else {
                    console.log("Senha errada")
                }
            } else {
                console.log("Usuário errado")
            }
        }
    }

    // Requisição improvisada SQL
    const getLogin = async (setor) => {
        const req = await fetch('http://localhost:3000/users')
        const res = await req.json()
        const user = res.find(use => use.login === setor)
        return user
    };

    // JSX HTML FRONT END
    return (
        <div>
            <form>
                <Input 
                    label={"Usuário:"}
                    type={"text"}   
                    id={"username"} 
                />

                <Input 
                    label={"Senha:"}
                    type={"password"}
                    id={"password"}
                />

                <button type="button" onClick={Chekin}>Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage;
