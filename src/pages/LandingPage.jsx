import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from "react";
import "../styles/LandingPage.css";

export const LandingPage = () => {
    
    const navigate = useNavigate();
    const { on, state, signIn, signOut } = useAuthContext();

    const signUpURL = import.meta.env.VITE_REACT_APP_SIGN_UP_URL+import.meta.env.REACT_APP_CLIENT_ID+"sp="+import.meta.env.REACT_APP_APPLICATION_NAME+"&redirect_url="+import.meta.env.REACT_APP_CLIENT_BASE_URL;

    useEffect(() => {
        on("sign-in", () => {
            navigate("/home");
        });
    }, [ on ]);

    return (
        <div className='container-center login'>
            <div className="login-wrapper">
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            <h1>Animetrix</h1>
            <div className='button-container'>
                {
                    state?.isAuthenticated ? (
                        <button onClick={ () => signOut() }>Sign Out</button>
                    ) : (
                        <button onClick={ () => signIn() }>Sign In</button>
                    )
                }
                <br></br>
                <a  href={signUpURL} >Create Account</a>
            </div>
            </div>
        </div>
    );
};
