import LoginForm from "../components/login/loginForm"
import Header from "../components/header/header"
import CreateAccForm from "../components/login/createAccForm"


export default function Login({ isSignUp }) {
    return (
        <>
            <Header heading={"My Story Illustrator"} showSettings={false} showBackArrow={false} />
            {   isSignUp ?
                <CreateAccForm />
                :
                <LoginForm />

            }
            
            
        </>
    )
}