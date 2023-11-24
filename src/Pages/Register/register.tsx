import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCepThunk } from "Store/ViaCep/thunk"
import { RootState } from "Store/store"
import { AppDispatch } from "Store/store"
import { CepDTO } from "DTO/cepDTO"
import "./register.scss"


const Register = () => {
    const [userName, setUserName] = useState<string>("")
    const [fullName, setFullName] = useState<string>("")
    const [nickName, setNickName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string[]>([])
    const [troll, setTroll] = useState<boolean>(false)
    const [idiotTimes, setIdiotTime] = useState<number>(0)
    const [cep, setCep] = useState<string>("")
    const [loadingCep, setLoadingCep] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const cepInfo = useSelector((state: RootState) => state.getCep);
    const dispatch = useDispatch<AppDispatch>();


    const trollUser = () => {
        setError(false)
        setTroll(!troll)
        getAddress()
    }


    const getAddress = () => {
        dispatch(getCepThunk(cep, setError, setLoadingCep));
    };

    const passMess = () => {
        const idiot = "You are an idiot "
        setIdiotTime(idiotTimes+1)
        setRepeatPassword([...repeatPassword,idiot])
    }


    return (
        <div className="register-container">
            <div className="register-form">
            <p>Register asshole</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="UserName"/>
            <input type="text" onChange={(e) => setFullName(e.target.value)} placeholder="Full Name (the way your mama call you)"/>
            <input type="text" onChange={(e) => setNickName(e.target.value)} placeholder="Nickname (the way your imaginary friends call you)"/>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email (i dare you to use your daily mail)"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password (yeah, we know you will forget anyway)"/>
            <input type="text" onChange={() => passMess()} placeholder="Repeat Password (just for you lose your time filling this shit again)"/>
            <input type="text" onChange={(e) => setCep(e.target.value)} placeholder="Cep, so we can find you."/>
            <button onClick={() => trollUser()}>Send</button>
            </div>
            {troll && !loadingCep? <>
                <div className="idiot-span">
                    <span>{userName} - another useless username that you will forget</span>
                    <span>{fullName} - so that is the name your Mama gave to you... pathetic</span>
                    <span>{nickName} - Ha!, i knew you had imaginary friends</span>
                    <span>{email} - ok, now we have your email, prepare for spanning</span>
                    <span>{password} - what a shit password, change it now!</span>
                    {cepInfo.map((cepItem: CepDTO, index: number) => (
                    <div key={index}>
                        <span>So this zip code...: {cepItem.cep}</span>
                        <br/>
                        <span>street of fuckers: {cepItem.logradouro}</span>
                        <br/>
                        <span>really?: {cepItem.complemento}</span>
                        <br/>
                        <span>neighborhood: {cepItem.bairro}</span>
                        <br/>
                        <span>county of losers: {cepItem.localidade}</span>
                        <br/>
                        <span>UF: {cepItem.uf}</span>
                    </div>
                ))}
                    <div>
                        <p>You were idiot {idiotTimes} times.</p>
                        <span>{repeatPassword}</span>
                    </div>
                    {error? <><span> Wrong cep moron</span></>:null}
                
                </div></>: null}
        </div>
    )

}


export default Register