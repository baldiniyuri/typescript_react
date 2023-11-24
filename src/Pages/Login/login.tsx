import { useState } from "react"


const Login = () =>  {

    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [troll, setTroll] = useState<boolean>(false)


    const trollUser = () => {
           setTroll(!troll)
    }
    

    return (
        <div>
            <div>
            <p>Login</p>
            <input placeholder="Username" type="text" onChange={(e) => setUserName(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => trollUser()}>Send</button>
            </div>
            <div>
            {troll? <><span>We do not have a database you moron, and by the way {userName} is a shit name, and {password} is not very strong password.</span></> : null}
            </div>
        </div>
    )
}


export default Login