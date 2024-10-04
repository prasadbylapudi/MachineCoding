import { createContext, PropsWithChildren } from 'react';
import {
  useContext,
  useState,
} from 'react';import { User } from '../types/user';
import { login } from '../auth';
type AuthContext={
    authToken?: string | null;
    currentUser?: User | null;
    handleLogin:()=>Promise<void>;
    handleLogout:()=>Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

type authProviderProps = PropsWithChildren

export default function AuthProvider({ children }: authProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const handleLogin = async () => {
       try{
            const response = await login();
            const {authToken,user}=response[1];
            setAuthToken(authToken);
            setCurrentUser(user);
         }catch{
           setAuthToken(null);
           setCurrentUser(null);
            }
       }

       const handleLogout=async()=>{
           setAuthToken(null);
           setCurrentUser(null);
       }
    
        return <AuthContext.Provider value={{handleLogin,handleLogout,authToken,currentUser}}>
            {children}
        </AuthContext.Provider>
}
export function useAuth() {
  const context = useContext(AuthContext);
    
  if (context === undefined) {
    throw new Error('useAuth must be used inside of a AuthProvider');
  }

  return context;
}