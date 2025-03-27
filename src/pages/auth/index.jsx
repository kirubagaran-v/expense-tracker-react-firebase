

import {auth , provider} from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserinfo } from "../../hooks/useGetUserinfo";
import "./styles.css"


export const Auth = () => {

    const navigate = useNavigate();
    const {isAuth} = useGetUserinfo()
const signInWithGoogle = async() =>{
    const results = await signInWithPopup(auth,provider)
    const authInfo = {
        userId: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
    }
localStorage.setItem("auth", JSON.stringify(authInfo));
navigate("/expense-tracker")

};
if(isAuth){
    return <Navigate to="/expense-tracker"/>
}


       return (
        <div className="login-page">
        <p> Sign in with Google to Continue </p>
        <button className="login-with-google-btn"
         onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
       )
}