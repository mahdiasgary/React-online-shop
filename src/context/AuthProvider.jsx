import React from "react";
import { useContext ,useState} from "react";


export const AuthProviderContext=React.createContext();
export const AuthProviderContextDispather=React.createContext();


const AuthProvider = ({children}) => {
    const [Auth , setAuth]= useState(false)
    return (
        <AuthProviderContext.Provider value={Auth}>
            <AuthProviderContextDispather.Provider value={setAuth} >
                {children}
            </AuthProviderContextDispather.Provider>
        </AuthProviderContext.Provider>
      );
}
 
export default AuthProvider;
export const useAush=()=>useContext(AuthProviderContext);
export const useAushDispather=()=>useContext(AuthProviderContextDispather);

