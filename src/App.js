import './App.css';
import { AuthContext } from './auth/AuthContext';
import { AppRouter } from './routes/AppRouter';
import {useEffect, useReducer} from 'react'
import { AuthReducer } from './auth/AuthReducer';

const init = ()=>{
  return JSON.parse(sessionStorage.getItem('user')) || {
    logueado : false
  }
}

function App() {
  const [user, dispatch] = useReducer(AuthReducer, {}, init)
  
  useEffect(() => {
    
    sessionStorage.setItem('user', JSON.stringify(user, null, 3))

  }, [user]);
  return (
    <AuthContext.Provider value={
      {
        user,
        dispatch
      }
    } >
      <AppRouter/>
    </AuthContext.Provider>

   
  );
}

export default App;
