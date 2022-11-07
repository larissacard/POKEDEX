import { React, useContext, useEffect, useRef, useState } from "react";
import jwtDecode from "jwt-decode";
import { 
    Container, 
    Form,
    Content, 
    Input, 
    Logo, 
    Title, 
    Animation, 
    Clouds, 
    CloudsTwo, 
    CloudsThree, 
    CloudsFour, 
    CloudsFive, 
    CloudsSix 
} from "./styles";
import { Button } from "../../components/button";
import { api } from "../../api";
import AuthContext from "../../context/authProvider";

const LoginUrl = '/login'

export const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    

    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        try {
            const response = await api.post(LoginUrl, 
                JSON.stringify({email, password}), 
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))

            const token = response?.data?.token;
            setAuth({ email, password, token})
            setEmail('');
            setPassword('');
            setSuccess(true)
            localStorage.setItem('token', JSON.stringify(response.data.token))
            const myToken = localStorage.getItem("token")
            const decodeToken = jwtDecode(myToken)
    
            const id  = decodeToken.id; 
            setTimeout(() => window.location.href = `/home/${id}`, 500)
        }
        catch (err) {
            if(!err?.response){
                setErrMsg("No Server Response")
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Email or Password");
            } else if (err.response?.status === 401) {
                setErrMsg('Unautorized');
            } else {
                setErrMsg("Login Fail")
            }
        }
    }
    
    return (
        <Container>

            <Content>
                <Logo/>
                <Title>Comece a coletar pokémons!</Title>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>

                <Form onSubmit={handleSubmit}>
                    <Input 
                    type={"text"} 
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    />
                    <Input 
                    type={"password"} 
                    ref={userRef}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    />
                    <Button Text={"Entrar"}/>
                </Form>
            </Content>

            <Clouds/>
            <CloudsTwo/>
            <CloudsThree/>
            <CloudsThree/>
            <CloudsFour/>
            <CloudsFive/>
            <CloudsSix/>

            <Animation/>
        </Container>
    )
}

