import React,{useState,useContext,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {auth}from '../firebase';

const AuthContext = React.createContext();

export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider =({children})=>{
const [loading, setLoading] = useState(true);
const [user, setUser] = useState({});
const history =useNavigate();

useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        setUser(user);
        
        setLoading(false);
        history.push('/chats');
    })
}, [user, history]);

const value = {user};
return(
    <AuthContext.Provider value ={value}>
        {!loading && children}
    </AuthContext.Provider>
);
}

